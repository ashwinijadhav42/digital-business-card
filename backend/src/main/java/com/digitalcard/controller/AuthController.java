package com.digitalcard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.digitalcard.dto.ChangePasswordRequest;
import com.digitalcard.dto.LoginRequest;
import com.digitalcard.entity.Admin;
import com.digitalcard.repository.AdminRepository;

import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private com.digitalcard.service.EmailService emailService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        Optional<Admin> adminOpt = adminRepository.findByEmail(request.getEmail());

        if (adminOpt.isPresent()) {
            Admin admin = adminOpt.get();

            if (admin.getPassword().equals(request.getPassword())) {

                // ✅ Validate email before sending OTP
                if (admin.getEmail() == null || 
                    !admin.getEmail().matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
                    return ResponseEntity.badRequest().body("Invalid email format in database");
                }

                // 🔐 Generate OTP
                String otp = String.valueOf(100000 + new java.util.Random().nextInt(900000));

                admin.setOtp(otp);
                admin.setOtpExpiry(java.time.LocalDateTime.now().plusMinutes(5));
                adminRepository.save(admin);

                try {
                    // 📧 Send OTP
                    emailService.sendOtp(admin.getEmail().trim(), otp);
                } catch (Exception e) {
                    e.printStackTrace();
                    return ResponseEntity.status(500).body("Failed to send OTP. Check email configuration.");
                }

                return ResponseEntity.ok("OTP sent to email");
            }
        }

        return ResponseEntity.status(401).body("Invalid Email or Password");
    }
    
    
    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody com.digitalcard.dto.OtpRequest request) {

        Optional<Admin> adminOpt = adminRepository.findByEmail(request.getEmail());

        if (adminOpt.isPresent()) {
            Admin admin = adminOpt.get();

            if (admin.getOtp() == null || !admin.getOtp().equals(request.getOtp())) {
                return ResponseEntity.badRequest().body("Invalid OTP");
            }

            if (admin.getOtpExpiry().isBefore(java.time.LocalDateTime.now())) {
                return ResponseEntity.badRequest().body("OTP expired");
            }

            // Clear OTP
            admin.setOtp(null);
            admin.setOtpExpiry(null);
            adminRepository.save(admin);

            // Return user data
            Map<String, Object> response = new HashMap<>();
            response.put("id", admin.getId());
            response.put("name", admin.getName());
            response.put("email", admin.getEmail());
            response.put("phone", admin.getPhone());
            response.put("role", admin.getRole());

            return ResponseEntity.ok(response);
        }

        return ResponseEntity.status(404).body("User not found");
    }

    // ✅ CHANGE PASSWORD FIXED
    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request) {

        Optional<Admin> adminOpt = adminRepository.findByEmail(request.getEmail());

        if (adminOpt.isPresent()) {
            Admin admin = adminOpt.get();

            if (admin.getPassword().equals(request.getOldPassword())) {

                admin.setPassword(request.getNewPassword());
                adminRepository.save(admin);

                return ResponseEntity.ok("Password changed successfully");
            } else {
                return ResponseEntity.status(400).body("Old password is incorrect");
            }
        }

        return ResponseEntity.status(404).body("User not found");
    }
}
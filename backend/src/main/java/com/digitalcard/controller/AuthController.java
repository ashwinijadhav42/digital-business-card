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

    // ✅ LOGIN FIXED
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        Optional<Admin> adminOpt = adminRepository.findByEmail(request.getEmail());

        if (adminOpt.isPresent()) {
            Admin admin = adminOpt.get();

            if (admin.getPassword().equals(request.getPassword())) {

                Map<String, Object> response = new HashMap<>();
                response.put("id", admin.getId());
                response.put("name", admin.getName());
                response.put("email", admin.getEmail());
                response.put("phone", admin.getPhone());
                response.put("role", admin.getRole());

                return ResponseEntity.ok(response);
            }
        }

        return ResponseEntity.status(401).body("Invalid Email or Password");
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
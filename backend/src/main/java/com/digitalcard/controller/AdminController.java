package com.digitalcard.controller;

import com.digitalcard.entity.Admin;
import com.digitalcard.entity.AdminRole;
import com.digitalcard.repository.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    private final String uploadDir = System.getProperty("user.dir") + "/uploads/";

    // ✅ Get All Admins
    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    // ✅ Get Admin By Id
    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        return adminRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Create Admin
    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<?> createAdmin(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String mobile,
            @RequestParam String role,
            @RequestParam(value = "profileImage", required = false) MultipartFile file
    ) throws IOException {

        Admin admin = new Admin();

        admin.setName(name);
        admin.setEmail(email);
        admin.setPassword(password);
        admin.setPhone(mobile);

        // 🔥 Convert String → Enum properly
        admin.setRole(AdminRole.valueOf(role.toUpperCase()));

        if (file != null && !file.isEmpty()) {

            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            String filePath = uploadDir + fileName;

            file.transferTo(new File(filePath));
            admin.setProfileImage(fileName);
        }

        return ResponseEntity.ok(adminRepository.save(admin));
    }

    // ✅ Update Admin
    @PutMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<?> updateAdmin(
            @PathVariable Long id,
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String mobile,
            @RequestParam String role,
            @RequestParam(value = "profileImage", required = false) MultipartFile file
    ) throws IOException {

        return adminRepository.findById(id)
                .map(admin -> {

                    admin.setName(name);
                    admin.setEmail(email);
                    admin.setPassword(password);
                    admin.setPhone(mobile);

                    // 🔥 Convert String → Enum properly
                    admin.setRole(AdminRole.valueOf(role.toUpperCase()));

                    if (file != null && !file.isEmpty()) {

                        File directory = new File(uploadDir);
                        if (!directory.exists()) {
                            directory.mkdirs();
                        }

                        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
                        String filePath = uploadDir + fileName;

                        try {
                            file.transferTo(new File(filePath));
                            admin.setProfileImage(fileName);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }

                    return ResponseEntity.ok(adminRepository.save(admin));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Delete Admin
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAdmin(@PathVariable Long id) {

        if (!adminRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        adminRepository.deleteById(id);
        return ResponseEntity.ok("Deleted successfully");
    }
}
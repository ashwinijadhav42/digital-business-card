package com.digitalcard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.digitalcard.entity.Admin;
import com.digitalcard.repository.AdminRepository;

import java.io.File;
import java.io.IOException;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    private final String uploadDir = "uploads/";

    public Admin createAdmin(Admin admin, MultipartFile file) throws IOException {

        if (adminRepository.existsByEmail(admin.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        String uploadDir = System.getProperty("user.dir") + "/uploads/";

        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        String filePath = uploadDir + file.getOriginalFilename();
        file.transferTo(new File(filePath));

        admin.setProfileImage(file.getOriginalFilename());
		return admin;
    }

	public Admin createAdmin1(Admin admin, MultipartFile file) {
		// TODO Auto-generated method stub
		return null;
	}
}
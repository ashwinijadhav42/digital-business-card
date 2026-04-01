package com.digitalcard.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
@RestController
@RequestMapping("/api/upload")
@CrossOrigin("*")
public class FileUploadController {

    private final String uploadDir =
    		"E:/digital-business-card-main/backend/uploads/gallery/";

    private final String serviceUploadDir = 
    	    "E:/digital-business-card-main/backend/uploads/services/";
    
    private final String productUploadDir =
    	    "E:/digital-business-card-main/backend/uploads/products/";
    
    private final String blogDir = 
    		"E:/digital-business-card-main/backend/uploads/blogs/";

    
    
    @PostMapping("/gallery")
    public String uploadGallery(@RequestParam("file") MultipartFile file) {

        try {
            String originalName = file.getOriginalFilename().replaceAll("\\s+", "_");
            String fileName = System.currentTimeMillis() + "_" + originalName;

            Path uploadPath = Paths.get(uploadDir);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(fileName);

            System.out.println("Saving to: " + filePath.toAbsolutePath());

            Files.write(filePath, file.getBytes());

            return "http://localhost:8080/gallery/" + fileName;

        }catch (Exception e) {
            e.printStackTrace();
            return "ERROR: " + e.getMessage();
        }
    }
    
    
    @PostMapping("/services")
    public String uploadService(@RequestParam("file") MultipartFile file) {

        try {
            String originalName = file.getOriginalFilename().replaceAll("\\s+", "_");
            String fileName = System.currentTimeMillis() + "_" + originalName;

            Path uploadPath = Paths.get(serviceUploadDir);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(fileName);

            Files.write(filePath, file.getBytes());

            return "http://localhost:8080/services/" + fileName;

        } catch (Exception e) {
            e.printStackTrace();
            return "ERROR: " + e.getMessage();
        }
    }
    
    @PostMapping("/products")
    public String uploadProduct(@RequestParam("file") MultipartFile file) {

        try {
            String originalName = file.getOriginalFilename().replaceAll("\\s+", "_");
            String fileName = System.currentTimeMillis() + "_" + originalName;

            Path uploadPath = Paths.get(productUploadDir);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(fileName);

            Files.write(filePath, file.getBytes());

            return "http://localhost:8080/products/" + fileName;

        } catch (Exception e) {
            e.printStackTrace();
            return "ERROR: " + e.getMessage();
        }
    }
    
    @PostMapping("/blogs")
    public String uploadBlog(@RequestParam("file") MultipartFile file) {

        try {
            String originalName = file.getOriginalFilename().replaceAll("\\s+", "_");
            String fileName = System.currentTimeMillis() + "_" + originalName;

            Path uploadPath = Paths.get(blogDir);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(fileName);
            Files.write(filePath, file.getBytes());

            return "http://localhost:8080/blogs/" + fileName;

        } catch (Exception e) {
            e.printStackTrace();
            return "ERROR: " + e.getMessage();
        }
    }

}
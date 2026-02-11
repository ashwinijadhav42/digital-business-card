package com.digitalcard.controller;

import java.io.File;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.digitalcard.entity.Blog;
import com.digitalcard.repository.BlogRepository;

@RestController
@RequestMapping("/api/blogs")
@CrossOrigin(origins = "http://localhost:5173")
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;
    
    // ✅ GET ALL BLOGS
    @GetMapping("/all")
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }
    
    @GetMapping("/allBlog")
    public List<Blog> getBlogs() {
        return blogRepository.findByStatusTrueOrderByPublishDateDesc();
    }
    
    @PostMapping(value = "/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> saveBlog(
            @RequestParam String title,
            @RequestParam String description,
            @RequestParam Boolean status,
            @RequestParam String publishDate,
            @RequestParam("image") MultipartFile image
    ){
        try {
            System.out.println("SAVE BLOG API HIT");

            if (image == null || image.isEmpty()) {
                return ResponseEntity.badRequest().body("Image is required");
            }

            String uploadDir = System.getProperty("user.dir") + File.separator + "uploads" + File.separator + "blogs";
            System.out.println("UPLOAD DIR: " + uploadDir);

            File dir = new File(uploadDir);
            if (!dir.exists()) {
                boolean created = dir.mkdirs();
                System.out.println("DIR CREATED: " + created);
            }

            String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);

            Files.write(filePath, image.getBytes());
            System.out.println("FILE SAVED AT: " + filePath.toAbsolutePath());

            Blog blog = new Blog();
            blog.setTitle(title);
            blog.setDescription(description);
            blog.setStatus(status);
            blog.setPublishDate(LocalDate.parse(publishDate));
            blog.setImageUrl(fileName);

            blogRepository.save(blog);

            return ResponseEntity.ok("Blog saved successfully");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to save blog");
        }
    }
//Update Blog
    @PostMapping(value = "/update", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> updateBlog(
            @RequestParam Long id,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) Boolean status,
            @RequestParam(required = false) String publishDate,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) {
        try {

            Blog blog = blogRepository.findById(id).orElse(null);

            if (blog == null) {
                return ResponseEntity.badRequest().body("Blog not found");
            }

            // Update only if values provided
            if (title != null) blog.setTitle(title);
            if (description != null) blog.setDescription(description);
            if (status != null) blog.setStatus(status);
            if (publishDate != null) blog.setPublishDate(LocalDate.parse(publishDate));

            // If new image uploaded
            if (image != null && !image.isEmpty()) {

                String uploadDir = System.getProperty("user.dir")
                        + File.separator + "uploads"
                        + File.separator + "blogs";

                String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
                Path filePath = Paths.get(uploadDir, fileName);

                Files.write(filePath, image.getBytes());

                blog.setImageUrl(fileName);
            }

            blogRepository.save(blog);

            return ResponseEntity.ok("Blog updated successfully");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to update blog");
        }
    }
    
 // Delete Blog
    @PostMapping("/delete")
    public ResponseEntity<?> deleteBlog(@RequestParam Long id) {
        try {

            Blog blog = blogRepository.findById(id).orElse(null);

            if (blog == null) {
                return ResponseEntity.badRequest().body("Blog not found");
            }

            // Delete image file
            String uploadDir = System.getProperty("user.dir")
                    + File.separator + "uploads"
                    + File.separator + "blogs";

            Path imagePath = Paths.get(uploadDir, blog.getImageUrl());

            Files.deleteIfExists(imagePath);

            blogRepository.deleteById(id);

            return ResponseEntity.ok("Blog deleted successfully");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to delete blog");
        }
    }

  
}

    



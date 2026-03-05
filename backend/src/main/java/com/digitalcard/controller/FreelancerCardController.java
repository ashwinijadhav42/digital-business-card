package com.digitalcard.controller;

import java.io.File;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.digitalcard.entity.FreelancerCard;
import com.digitalcard.repository.FreelancerCardRepository;
import com.digitalcard.service.FreelancerCardService;

@RestController
@RequestMapping("/api/freelancer-cards")
@CrossOrigin(origins = "http://localhost:3000")
public class FreelancerCardController {

    @Autowired
    private FreelancerCardService service;
    
    @Autowired
    private FreelancerCardRepository freelancerCardRepository;

    // ===== CREATE CARD =====
    
    @PostMapping("/create")
    public ResponseEntity<?> createCard(
            @ModelAttribute FreelancerCard freelancerCard,
            @RequestParam(value = "logoFile", required = false) MultipartFile logoFile
    ) throws IOException {

        FreelancerCard saved = service.saveCard(freelancerCard, logoFile);

        return ResponseEntity.ok(saved);
    }
    // ===== GET PUBLIC CARD BY SLUG =====
    @GetMapping("/{slug}")
    public ResponseEntity<?> getCard(
            @PathVariable String slug) {

        return ResponseEntity.ok(
                service.getPublicCard(slug)
        );
    }
}
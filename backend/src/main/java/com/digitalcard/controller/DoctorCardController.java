package com.digitalcard.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.digitalcard.entity.DoctorCard;
import com.digitalcard.repository.DoctorCardRepository;

@RestController
@RequestMapping("/api/doctor-cards")
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorCardController {

    @Autowired
    private DoctorCardRepository repository;

    // CREATE CARD
    @PostMapping
    public ResponseEntity<DoctorCard> createCard(@RequestBody DoctorCard card) {

        // Generate slug
        String formattedName = card.getName()
                .toLowerCase()
                .replaceAll("[^a-z0-9 ]", "")
                .replaceAll(" ", "_");

        String slug = "dr_" + formattedName;

        // If slug already exists, add timestamp
        Optional<DoctorCard> existing = repository.findBySlug(slug);
        if (existing.isPresent()) {
            slug = slug + "_" + System.currentTimeMillis();
        }

        card.setSlug(slug);

        DoctorCard saved = repository.save(card);
        return ResponseEntity.ok(saved);
    }

    // GET BY SLUG (Public View)
    @GetMapping("/public/{slug}")
    public ResponseEntity<DoctorCard> getBySlug(@PathVariable String slug) {

        return repository.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}


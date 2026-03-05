package com.digitalcard.controller;

import com.digitalcard.entity.RealEstateCard;
import com.digitalcard.service.RealEstateCardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/realestate-cards")

@CrossOrigin(origins = "http://localhost:3000")
public class RealEstateCardController {

    private final RealEstateCardService service;

    public RealEstateCardController(RealEstateCardService service) {
        this.service = service;
    }

    // SAVE
    @PostMapping
    public ResponseEntity<RealEstateCard> saveCard(
            @RequestBody RealEstateCard card) {

        RealEstateCard saved = service.saveCard(card);
        return ResponseEntity.ok(saved);
    }

    // PUBLIC VIEW
    @GetMapping("/public/{slug}")
    public ResponseEntity<?> getPublicCard(
            @PathVariable String slug) {

        return service.getBySlug(slug)
                .filter(RealEstateCard::isPublic)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
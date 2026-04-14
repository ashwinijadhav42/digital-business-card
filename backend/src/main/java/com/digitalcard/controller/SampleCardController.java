package com.digitalcard.controller;

import com.digitalcard.entity.SampleCard;
import com.digitalcard.service.SampleCardService;


import java.util.Map;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sample-cards")
@CrossOrigin("*")
public class SampleCardController {

    private final SampleCardService service;

    public SampleCardController(SampleCardService service) {
        this.service = service;
    }

    // ✅ CREATE CARD
    @PostMapping
    public SampleCard createCard(@RequestBody SampleCard card) {
        return service.saveCard(card);
    }

    // ✅ GET USER CARDS
    @GetMapping("/user/{userId}")
    public long getUserCards(@PathVariable Long userId) {
        return service.getCardsByUser(userId);
    }

    // ✅ DASHBOARD COUNT
    @GetMapping("/dashboard/{userId}")
    public Map<String, Object> getDashboard(@PathVariable Long userId) {
        return service.getDashboard(userId);
    }

    // ✅ PUBLIC CARD
    @GetMapping("/public/{slug}")
    public SampleCard getPublicCard(@PathVariable String slug) {
        return service.getCardBySlug(slug);
    }
    
}
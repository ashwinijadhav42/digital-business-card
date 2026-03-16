package com.digitalcard.controller;

import com.digitalcard.entity.SampleCard;
import com.digitalcard.service.SampleCardService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sample-cards")
@CrossOrigin("*")
public class SampleCardController {

    private final SampleCardService service;

    public SampleCardController(SampleCardService service) {
        this.service = service;
    }

    @PostMapping
    public SampleCard createCard(@RequestBody SampleCard card) {
        return service.saveCard(card);
    }

    @GetMapping("/public/{slug}")
    public SampleCard getPublicCard(@PathVariable String slug) {
        return service.getCardBySlug(slug);
    }
}
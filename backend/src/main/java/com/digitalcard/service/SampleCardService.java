package com.digitalcard.service;

import com.digitalcard.entity.SampleCard;
import com.digitalcard.repository.SampleCardRepository;
import org.springframework.stereotype.Service;

@Service
public class SampleCardService {

    private final SampleCardRepository repo;

    public SampleCardService(SampleCardRepository repo) {
        this.repo = repo;
    }

    public SampleCard saveCard(SampleCard card) {

        // base slug from business name
        String baseSlug = card.getBusinessName()
                .toLowerCase()
                .replaceAll("[^a-z0-9\\s]", "")
                .replaceAll("\\s+", "-");

        String slug = baseSlug;
        int count = 1;

        // check if slug already exists
        while (repo.existsBySlug(slug)) {
            slug = baseSlug + "-" + count;
            count++;
        }

        card.setSlug(slug);

        return repo.save(card);
    }

    public SampleCard getCardBySlug(String slug) {
        return repo.findBySlug(slug).orElseThrow();
    }
}
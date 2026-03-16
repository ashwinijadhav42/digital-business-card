package com.digitalcard.service;

import com.digitalcard.entity.RealEstateCard;
import com.digitalcard.repository.RealEstateCardRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RealEstateCardService {

    private final RealEstateCardRepository repository;

    public RealEstateCardService(RealEstateCardRepository repository) {
        this.repository = repository;
    }

    public RealEstateCard saveCard(RealEstateCard card) {

        String baseSlug = card.getAgencyName()
                .toLowerCase()
                .replaceAll("[^a-z0-9]", "-")
                .replaceAll("-+", "-");

        String slug = baseSlug;
        int count = 1;

        while (repository.findBySlug(slug).isPresent()) {
            slug = baseSlug + "-" + count;
            count++;
        }

        card.setSlug(slug);

        return repository.save(card);
    }

    public Optional<RealEstateCard> getBySlug(String slug) {
        return repository.findBySlug(slug);
    }
}
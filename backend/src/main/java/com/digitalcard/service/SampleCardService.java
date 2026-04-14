package com.digitalcard.service;

import com.digitalcard.entity.SampleCard;
import com.digitalcard.repository.SampleCardRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class SampleCardService {

    private final SampleCardRepository repo;

    public SampleCardService(SampleCardRepository repo) {
        this.repo = repo;
    }

    public SampleCard saveCard(SampleCard card) {

        // ✅ SLUG LOGIC
        String baseSlug = card.getBusinessName()
                .toLowerCase()
                .replaceAll("[^a-z0-9\\s]", "")
                .replaceAll("\\s+", "-");

        String slug = baseSlug;
        int count = 1;

        while (repo.existsBySlug(slug)) {
            slug = baseSlug + "-" + count++;
        }

        card.setSlug(slug);

        // ✅ LINK CHILD DATA (already good)
        if (card.getGallery() != null) {
            card.getGallery().forEach(g -> g.setSampleCard(card));
        }

        if (card.getServices() != null) {
            card.getServices().forEach(s -> s.setSampleCard(card));
        }

        if (card.getBusinessHours() != null) {
            card.getBusinessHours().forEach(b -> b.setSampleCard(card));
        }

        if (card.getProducts() != null) {
            card.getProducts().forEach(p -> p.setSampleCard(card));
        }

        if (card.getBlogs() != null) {
            card.getBlogs().forEach(b -> b.setSampleCard(card));
        }

        if (card.getTestimonials() != null) {
            card.getTestimonials().forEach(t -> t.setSampleCard(card));
        }

        if (card.getPayment() != null) {
            card.getPayment().setSampleCard(card);
        }

        return repo.save(card);
    }

	public long getCardsByUser(Long userId) {
		// TODO Auto-generated method stub
		return repo.countByUserId(userId);
	}
	
	public Map<String, Object> getDashboard(Long userId) {

	    long cardCount = repo.countByUserId(userId);
	    SampleCardRepository inquiryRepo = null;
		long inquiryCount = inquiryRepo.countByUserId(userId);

	    Map<String, Object> map = new HashMap<>();
	    map.put("cards", cardCount);
	    map.put("inquiries", inquiryCount);

	    return map;
	}

	public SampleCard getCardBySlug(String slug) {
		// TODO Auto-generated method stub
		return null;
	}
}
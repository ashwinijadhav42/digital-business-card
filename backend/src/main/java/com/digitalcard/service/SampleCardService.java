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

        // ================= SLUG LOGIC =================
        String baseSlug = card.getBusinessName()
                .toLowerCase()
                .replaceAll("[^a-z0-9\\s]", "")
                .replaceAll("\\s+", "-");

        String slug = baseSlug;
        int count = 1;

        while (repo.existsBySlug(slug)) {
            slug = baseSlug + "-" + count;
            count++;
        }

        card.setSlug(slug);

        // ================= GALLERY LINK FIX =================
        if (card.getGallery() != null) {
            for (var g : card.getGallery()) {
                g.setSampleCard(card);  // VERY IMPORTANT
            }
        }
        

        // ================= SERVICES (ADD THIS) =================
        if (card.getServices() != null) {
            for (var s : card.getServices()) {
                s.setSampleCard(card);   //  IMPORTANT
            }
        }
        // =================BUSINESS HOURS =================
        if (card.getBusinessHours() != null) {
            for (var b : card.getBusinessHours()) {
                b.setSampleCard(card);   // IMPORTANT
            }
        }
        // =================PRODUCTS =================
        
        if (card.getProducts() != null) {
            for (var p : card.getProducts()) {
                p.setSampleCard(card);   // IMPORTANT
            }
        }
        
     // ================= BLOG LINK FIX =================
        if (card.getBlogs() != null) {
            for (var b : card.getBlogs()) {
                b.setSampleCard(card);
            }
        }
        
     // ================= TESTIMONIAL =================
        if (card.getTestimonials() != null) {
            for (var t : card.getTestimonials()) {
                t.setSampleCard(card);   
            }
        }
        
     // ================= PAYMENT =================
        if (card.getPayment() != null) {
            card.getPayment().setSampleCard(card);
        }

        // ================= SAVE =================
        return repo.save(card);
    }

    public SampleCard getCardBySlug(String slug) {
        return repo.findBySlug(slug).orElseThrow();
    }
}
package com.digitalcard.service;

import java.io.IOException;
import java.nio.file.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.digitalcard.entity.FreelancerCard;
import com.digitalcard.repository.FreelancerCardRepository;

@Service
public class FreelancerCardService {

    @Autowired
    private FreelancerCardRepository repository;
    
    private final String uploadDir = System.getProperty("user.dir") + "/uploads/freelancer/";
    
    public FreelancerCard saveCard(
            FreelancerCard card,
            MultipartFile file) throws IOException {

        // ===== SLUG GENERATION =====
        String baseSlug = card.getName()
                .toLowerCase()
                .replaceAll("[^a-z0-9\\s]", "")
                .replaceAll("\\s+", "-");

        String slug = baseSlug;
        int count = 1;

        while (repository.findBySlug(slug).isPresent()) {
            slug = baseSlug + "-" + count++;
        }

        card.setSlug(slug);

        // ===== IMAGE SAVE =====
        if (file != null && !file.isEmpty()) {

            Files.createDirectories(Paths.get(uploadDir));

            String fileName =
                    System.currentTimeMillis()
                            + "_" + file.getOriginalFilename();

            Path path = Paths.get(uploadDir + fileName);
            Files.write(path, file.getBytes());

            card.setLogo("freelancer/" + fileName);
                   }

        return repository.save(card);
    }

    public FreelancerCard getPublicCard(String slug) {

        FreelancerCard card = repository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Card not found"));

        if (!card.isPublic()) {
            throw new RuntimeException("Private");
        }

        return card;
    }
}
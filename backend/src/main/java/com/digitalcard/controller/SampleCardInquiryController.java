package com.digitalcard.controller;

import com.digitalcard.entity.SampleCard;
import com.digitalcard.entity.SampleCardInquiry;
import com.digitalcard.repository.SampleCardInquiryRepository;
import com.digitalcard.repository.SampleCardRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inquiries")
@CrossOrigin
public class SampleCardInquiryController {

    private final SampleCardInquiryRepository inquiryRepo;
    private final SampleCardRepository cardRepo;

    public SampleCardInquiryController(SampleCardInquiryRepository inquiryRepo,
                             SampleCardRepository cardRepo) {
        this.inquiryRepo = inquiryRepo;
        this.cardRepo = cardRepo;
    }

    // SAVE INQUIRY USING SLUG
    @PostMapping("/slug/{slug}")
    public SampleCardInquiry saveInquiry(
            @PathVariable String slug,
            @RequestBody SampleCardInquiry inquiry) {

        SampleCard card = cardRepo.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Card not found"));

        inquiry.setSampleCard(card);

        return inquiryRepo.save(inquiry);
    }

    //  GET ALL (ADMIN)
    @GetMapping
    public List<SampleCardInquiry> getAll() {
        return inquiryRepo.findAll();
    }

    //  GET BY CARD
    @GetMapping("/card/{cardId}")
    public List<SampleCardInquiry> getByCard(@PathVariable Long cardId) {
        return inquiryRepo.findBySampleCardId(cardId);
    }
    
 //  UPDATE STATUS
    @PutMapping("/{id}/status")
    public SampleCardInquiry updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        SampleCardInquiry inquiry = inquiryRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Not found"));

        inquiry.setStatus(status);

        return inquiryRepo.save(inquiry);
    }
    //Add Note Update
    @PutMapping("/{id}/note")
    public SampleCardInquiry updateNote(
            @PathVariable Long id,
            @RequestParam String note) {

        SampleCardInquiry inquiry = inquiryRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Not found"));

        inquiry.setAdminNote(note);

        return inquiryRepo.save(inquiry);
    }

    //  DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        inquiryRepo.deleteById(id);
    }
}

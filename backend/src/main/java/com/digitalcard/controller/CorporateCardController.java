package com.digitalcard.controller;

import com.digitalcard.entity.CorporateCard;
import com.digitalcard.repository.CorporateCardRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/corporate-cards")
@CrossOrigin(origins = "http://localhost:3000")
public class CorporateCardController {

    @Autowired
    private CorporateCardRepository repository;

    // ✅ SAVE CARD
    @PostMapping(consumes = "multipart/form-data")
    public CorporateCard createCard(
            @RequestParam("fullName") String fullName,
            @RequestParam("designation") String designation,
            @RequestParam("companyName") String companyName,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("description") String description,
            @RequestParam("website") String website,
            @RequestParam("address") String address,
            @RequestParam("linkedin") String linkedin,
            @RequestParam("github") String github,
            @RequestParam("profileImage") MultipartFile file,
            @RequestParam(value = "templateType", required = false) String templateType
    ) throws Exception {

        // ✅ SAVE FILE
        String uploadDir = "C:/digital-business-card/backend/uploads/corporate_card/";
        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        Files.copy(file.getInputStream(),
        Paths.get(uploadDir + fileName),
        java.nio.file.StandardCopyOption.REPLACE_EXISTING);

        // ✅ SAVE DATA
        CorporateCard card = new CorporateCard();
        card.setFullName(fullName);
        card.setDesignation(designation);
        card.setCompanyName(companyName);
        card.setEmail(email);
        card.setPhone(phone);
        card.setDescription(description);
        card.setWebsite(website);
        card.setAddress(address);
        card.setLinkedin(linkedin);
        card.setGithub(github);
        card.setProfileImage(fileName);

        System.out.println("TEMPLATE RECEIVED: " + templateType);
        if (templateType == null || templateType.isEmpty()) {
    templateType = "template1"; // default template
}
card.setTemplateType(templateType);
        
        card.setIsPublic(true);

        String slug = fullName.toLowerCase().replace(" ", "-") + "-" + System.currentTimeMillis();
        card.setSlug(slug);

        return repository.save(card); // ✅ VERY IMPORTANT
    }

    // ✅ GET CARD
   @GetMapping("/public/{slug}")
public CorporateCard getPublicCard(@PathVariable String slug) {

    CorporateCard card = repository.findBySlug(slug)
            .orElseThrow(() -> new RuntimeException("Card not found"));

    if (card.getIsPublic() != null && !card.getIsPublic()) {
        throw new RuntimeException("This card is private");
    }

    return card;
}


}
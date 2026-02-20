


package com.digitalcard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.digitalcard.entity.Feature;
import com.digitalcard.repository.FeatureRepository;

@RestController
@RequestMapping("/api/features")
@CrossOrigin(origins = "http://localhost:3000")
public class FeatureController {

    @Autowired
    private FeatureRepository featureRepository;

    // ✅ Get All Features
    @GetMapping
    public List<Feature> getAllFeatures() {
        return featureRepository.findAll();   
    }
    
	// ✅ Get Active Features
    @GetMapping("/active")
    public List<Feature> getActiveFeatures() {
        return featureRepository.findByActiveTrue();
    }

    // ✅ Create Feature
    @PostMapping
    public ResponseEntity<?> createFeature(@RequestBody Feature feature) {
        featureRepository.save(feature);
        return ResponseEntity.ok("Feature Created");
    }

    // ✅ Update Feature   IMPORTANT
    @PutMapping("/{id}")
    public ResponseEntity<?> updateFeature(
            @PathVariable Long id,
            @RequestBody Feature feature) {

        Feature existing = featureRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Feature not found"));

        existing.setName(feature.getName());
        existing.setActive(feature.isActive());

        featureRepository.save(existing);

        return ResponseEntity.ok("Feature Updated");
    }

    // ✅ Delete Feature
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFeature(@PathVariable Long id) {
        featureRepository.deleteById(id);
        return ResponseEntity.ok("Feature Deleted");
    }
}

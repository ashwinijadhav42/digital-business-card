package com.digitalcard.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digitalcard.dto.PricingPlanRequest;
import com.digitalcard.entity.Feature;
import com.digitalcard.entity.PlanStatus;
import com.digitalcard.entity.PricingPlan;
import com.digitalcard.repository.FeatureRepository;
import com.digitalcard.repository.PricingPlanRepository;

import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/pricing")
@CrossOrigin(origins = "http://localhost:3000")
public class PricingController {

    @Autowired
    private PricingPlanRepository pricingPlanRepository;

    @Autowired
    private FeatureRepository featureRepository;

    @GetMapping("/allPlans")
    public List<PricingPlan> getAllPlans() {
        return pricingPlanRepository.findAll();
    }

    @GetMapping("/activePlans")
    public List<PricingPlan> getActivePlans() {
        return pricingPlanRepository.findByStatus(PlanStatus.ACTIVE);
    }

    @GetMapping("/{id}")
    public PricingPlan getPlanById(@PathVariable Long id) {
        return pricingPlanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plan not found"));
    }

    @PostMapping("/createNewPlan")
    public ResponseEntity<?> createPlan(@RequestBody PricingPlanRequest request) {

        PricingPlan plan = new PricingPlan();
        plan.setTitle(request.getTitle());
        plan.setPrice(request.getPrice());
        plan.setDuration(request.getDuration());
        plan.setStatus(request.getStatus());

        Set<Feature> features = new HashSet<>();

        if (request.getFeatureIds() != null && !request.getFeatureIds().isEmpty()) {
            features = new HashSet<>(
                    featureRepository.findAllById(request.getFeatureIds()));
        }

        plan.setFeatures(features);

        pricingPlanRepository.save(plan);

        return ResponseEntity.ok("Plan Created Successfully");
    }


    @PutMapping("/updatePlan/{id}")
    public ResponseEntity<?> updatePlan(
            @PathVariable Long id,
            @RequestBody PricingPlanRequest request) {

        PricingPlan plan = pricingPlanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plan not found"));

        plan.setTitle(request.getTitle());
        plan.setPrice(request.getPrice());
        plan.setDuration(request.getDuration());
        plan.setStatus(request.getStatus());

        Set<Feature> features = new HashSet<>();

        if (request.getFeatureIds() != null) {
            features = new HashSet<>(
                    featureRepository.findAllById(request.getFeatureIds()));
        }

        plan.setFeatures(features);


        pricingPlanRepository.save(plan);

        return ResponseEntity.ok("Plan Updated Successfully");
    }

    @DeleteMapping("/deletePlan/{id}")
    public ResponseEntity<?> deletePlan(@PathVariable Long id) {
        pricingPlanRepository.deleteById(id);
        return ResponseEntity.ok("Plan Deleted Successfully");
    }
}

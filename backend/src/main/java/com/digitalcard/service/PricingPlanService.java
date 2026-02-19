package com.digitalcard.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitalcard.dto.PricingPlanRequest;
import com.digitalcard.entity.Feature;
import com.digitalcard.entity.PlanStatus;
import com.digitalcard.entity.PricingPlan;
import com.digitalcard.repository.FeatureRepository;
import com.digitalcard.repository.PricingPlanRepository;

@Service
public class PricingPlanService {

    @Autowired
    private PricingPlanRepository PricingPlanRepository;

    @Autowired
    private FeatureRepository featureRepository;


    // ADMIN - Get All Plans
    public List<PricingPlan> getAllPlans() {
        return PricingPlanRepository.findAll();
    }

    // USER - Get ACTIVE Plans
    public List<PricingPlan> getActivePlans() {
        return PricingPlanRepository.findByStatus(PlanStatus.ACTIVE);
    }

    public PricingPlan getPlanById(Long id) {
        return PricingPlanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plan not found"));
    }


    // CREATE PLAN
    public PricingPlan createPlan(PricingPlanRequest request) {

        PricingPlan plan = new PricingPlan();
        plan.setTitle(request.getTitle());
        plan.setPrice(request.getPrice());
        plan.setDuration(request.getDuration());
        plan.setStatus(request.getStatus());

        if (request.getFeatureIds() != null) {
            Set<Feature> features =
                    new HashSet<>(featureRepository.findAllById(request.getFeatureIds()));
            plan.setFeatures(features);
        }

        return PricingPlanRepository.save(plan);
    }


    // UPDATE PLAN
    public PricingPlan updatePlan(Long id, PricingPlanRequest request) {

        PricingPlan existing = PricingPlanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plan not found"));

        existing.setTitle(request.getTitle());
        existing.setPrice(request.getPrice());
        existing.setDuration(request.getDuration());
        existing.setStatus(request.getStatus());

        if (request.getFeatureIds() != null) {
            Set<Feature> features =
                    new HashSet<>(featureRepository.findAllById(request.getFeatureIds()));
            existing.setFeatures(features);
        }

        return PricingPlanRepository.save(existing);
    }


    public void deletePlan(Long id) {
        PricingPlanRepository.deleteById(id);
    }
}

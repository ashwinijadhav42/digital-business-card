
package com.digitalcard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitalcard.dto.PricingFeatureRequest;
import com.digitalcard.dto.PricingPlanRequest;
import com.digitalcard.entity.PlanStatus;
import com.digitalcard.entity.PricingFeature;
import com.digitalcard.entity.PricingPlan;
import com.digitalcard.repository.PricingPlanRepository;

@Service
public class PricingPlanService {

    @Autowired
    private PricingPlanRepository pricingPlanRepository;

    // ADMIN - Get All
    public List<PricingPlan> getAllPlans() {
        return pricingPlanRepository.findAll();
    }

    // USER - Get Only ACTIVE
    public List<PricingPlan> getActivePlans() {
        return pricingPlanRepository.findByStatus(PlanStatus.ACTIVE);
    }

    public PricingPlan getPlanById(Long id) {
        return pricingPlanRepository.findById(id).orElseThrow();
    }

    public PricingPlan createPlan(PricingPlanRequest request) {

        PricingPlan plan = new PricingPlan();
        plan.setTitle(request.getTitle());
        plan.setPrice(request.getPrice());
        plan.setDuration(request.getDuration());
        plan.setStatus(request.getStatus());

        if (request.getFeatures() != null) {
            for (PricingFeatureRequest f : request.getFeatures()) {
                PricingFeature feature = new PricingFeature();
                feature.setFeature(f.getFeature());
                feature.setPricingPlan(plan);
                plan.getFeatures().add(feature);
            }
        }

        return pricingPlanRepository.save(plan);
    }

    
    public PricingPlan savePlan(PricingPlan plan) {

        if (plan.getFeatures() != null) {
            for (PricingFeature feature : plan.getFeatures()) {
                feature.setPricingPlan(plan);
            }
        }

        return pricingPlanRepository.save(plan);
    }


    public PricingPlan updatePlan(Long id, PricingPlan updatedPlan) {

        PricingPlan existing = pricingPlanRepository.findById(id).orElseThrow();

        existing.setTitle(updatedPlan.getTitle());
        existing.setPrice(updatedPlan.getPrice());
        existing.setDuration(updatedPlan.getDuration());
        existing.setStatus(updatedPlan.getStatus());

        existing.getFeatures().clear();

        for (PricingFeature f : updatedPlan.getFeatures()) {
            f.setPricingPlan(existing);
            existing.getFeatures().add(f);
        }

        return pricingPlanRepository.save(existing);
    }

    public void deletePlan(Long id) {
        pricingPlanRepository.deleteById(id);
    }
}

package com.digitalcard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digitalcard.entity.PricingPlan;
import com.digitalcard.repository.PricingPlanRepository;

@RestController
@RequestMapping("/api/pricing")
@CrossOrigin(origins = "http://localhost:5173")
public class PricingController {

    @Autowired
    private PricingPlanRepository pricingPlanRepository;

    @GetMapping
    public List<PricingPlan> getPricingPlans() {
        return pricingPlanRepository.findByStatusTrue();
    }

    @GetMapping("/all")
    public List<PricingPlan> getAllPricingPlans() {
        return pricingPlanRepository.findAllPlans();
    }

}

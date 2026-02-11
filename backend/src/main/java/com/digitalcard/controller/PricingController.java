package com.digitalcard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digitalcard.dto.PricingPlanRequest;
import com.digitalcard.entity.PricingPlan;
import com.digitalcard.repository.BlogRepository;
import com.digitalcard.repository.PricingPlanRepository;
import com.digitalcard.service.PricingPlanService;

@RestController
@RequestMapping("/api/pricing")
@CrossOrigin(origins = "http://localhost:5173")
public class PricingController {

    @Autowired
    private PricingPlanRepository pricingPlanRepository;
    
    @Autowired
    private BlogRepository blogRepository;
    @Autowired
    private PricingPlanService pricingPlanService;
    
    @GetMapping("/byStatusTrue")
    public List<PricingPlan> getPricingPlans() {
        return pricingPlanRepository.findByStatusTrue();
    }
    
 // ADMIN
    @GetMapping("allPlans")
    public List<PricingPlan> getAllPlans() {
        return pricingPlanService.getAllPlans();
    }

    // USER
    @GetMapping("/activePlans")
    public List<PricingPlan> getActivePlans() {
        return pricingPlanService.getActivePlans();
    }

    @PostMapping("/createNewPlan")
    public ResponseEntity<PricingPlan> createPlan(
            @RequestBody PricingPlanRequest request) {

        return ResponseEntity.ok(pricingPlanService.createPlan(request));
    }

   
    @PutMapping("/updatePlan/{id}")
    public ResponseEntity<PricingPlan> updatePlan(
            @PathVariable Long id,
            @RequestBody PricingPlan pricingPlan) {

        PricingPlan updatedPlan = pricingPlanService.updatePlan(id, pricingPlan);
        return ResponseEntity.ok(updatedPlan);
    }

    
    
    
    
    @DeleteMapping("/deletePlan/{id}")
    public String deletePlan(@PathVariable Long id) {
        pricingPlanService.deletePlan(id);
        return "Plan deleted successfully";
    }
}

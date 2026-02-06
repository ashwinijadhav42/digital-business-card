package com.digitalcard.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.digitalcard.entity.PricingPlan;

public interface PricingPlanRepository extends JpaRepository<PricingPlan, Long> {
    List<PricingPlan> findByStatusTrue();
    
    @Query("SELECT p FROM PricingPlan p")
    List<PricingPlan> findAllPlans();

}


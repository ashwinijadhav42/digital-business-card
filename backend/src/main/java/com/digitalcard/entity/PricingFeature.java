package com.digitalcard.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "pricing_features")
public class PricingFeature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String feature;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "pricing_plan_id")
    private PricingPlan pricingPlan;

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the feature
	 */
	public String getFeature() {
		return feature;
	}

	/**
	 * @param feature the feature to set
	 */
	public void setFeature(String feature) {
		this.feature = feature;
	}

	/**
	 * @return the pricingPlan
	 */
	public PricingPlan getPricingPlan() {
		return pricingPlan;
	}

	/**
	 * @param pricingPlan the pricingPlan to set
	 */
	public void setPricingPlan(PricingPlan pricingPlan) {
		this.pricingPlan = pricingPlan;
	}
	
   
}

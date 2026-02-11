
package com.digitalcard.dto;

import java.util.List;

import com.digitalcard.entity.PlanStatus;

public class PricingPlanRequest {

    private String title;
    private double price;
    private String duration;
    private PlanStatus status;
    private List<PricingFeatureRequest> features;
	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}
	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}
	/**
	 * @return the price
	 */
	public double getPrice() {
		return price;
	}
	/**
	 * @param price the price to set
	 */
	public void setPrice(double price) {
		this.price = price;
	}
	/**
	 * @return the duration
	 */
	public String getDuration() {
		return duration;
	}
	/**
	 * @param duration the duration to set
	 */
	public void setDuration(String duration) {
		this.duration = duration;
	}
	/**
	 * @return the status
	 */
	public PlanStatus getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(PlanStatus status) {
		this.status = status;
	}
	/**
	 * @return the features
	 */
	public List<PricingFeatureRequest> getFeatures() {
		return features;
	}
	/**
	 * @param features the features to set
	 */
	public void setFeatures(List<PricingFeatureRequest> features) {
		this.features = features;
	}

   
    
    
}

package com.digitalcard.dto;

import java.util.List;

import com.digitalcard.entity.PlanStatus;

public class PricingPlanRequest {

    private String title;
    private Double price;
    private String duration;
    private PlanStatus status;

    private List<Long> featureIds;   //

    // getters and setters

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public PlanStatus getStatus() { return status; }
    public void setStatus(PlanStatus status) { this.status = status; }

    public List<Long> getFeatureIds() { return featureIds; }
    public void setFeatureIds(List<Long> featureIds) {
        this.featureIds = featureIds;
    }
}


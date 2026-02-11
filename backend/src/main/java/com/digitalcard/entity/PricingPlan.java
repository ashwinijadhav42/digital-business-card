package com.digitalcard.entity;

import java.util.ArrayList;
import java.util.List;

//import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "pricing_plans")
public class PricingPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private Double price;
    private String duration;

    @Enumerated(EnumType.STRING)
    private PlanStatus status;

    @OneToMany(mappedBy = "pricingPlan",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
 //@JsonManagedReference
 private List<PricingFeature> features = new ArrayList<>();


    // Getters & Setters

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public Double getPrice() { return price; }

    public void setPrice(Double price) { this.price = price; }

    public String getDuration() { return duration; }

    public void setDuration(String duration) { this.duration = duration; }

    public PlanStatus getStatus() { return status; }

    public void setStatus(PlanStatus status) { this.status = status; }

    public List<PricingFeature> getFeatures() { return features; }

    public void setFeatures(List<PricingFeature> features) {
        this.features = features;
    }
}

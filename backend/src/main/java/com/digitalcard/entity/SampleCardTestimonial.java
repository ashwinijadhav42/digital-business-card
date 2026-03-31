package com.digitalcard.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "sample_card_testimonials")
public class SampleCardTestimonial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String message;

    //  Relation with SampleCard
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "card_id")
    private SampleCard sampleCard;

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
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * @return the sampleCard
	 */
	public SampleCard getSampleCard() {
		return sampleCard;
	}

	/**
	 * @param sampleCard the sampleCard to set
	 */
	public void setSampleCard(SampleCard sampleCard) {
		this.sampleCard = sampleCard;
	}

    // Getters & Setters
    
}

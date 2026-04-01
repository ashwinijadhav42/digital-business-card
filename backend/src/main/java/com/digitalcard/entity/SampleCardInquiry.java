package com.digitalcard.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDateTime;

@Entity
public class SampleCardInquiry {


	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String name;
	    private String email;
	    private String phone;

	    @Column(length = 1000)
	    private String message;

	    // NEW FIELDS
	    private String status = "NEW"; // NEW, ANSWERED, CLOSED

	    @Column(length = 1000)
	    private String adminNote;

	    private LocalDateTime createdAt = LocalDateTime.now();

	    // RELATION
	    @ManyToOne
	    @JoinColumn(name = "sample_card_id", nullable = false)
	    @JsonIgnore
	    private SampleCard sampleCard;

    // Getters & Setters
    public Long getId() { return id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    
    

    /**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the adminNote
	 */
	public String getAdminNote() {
		return adminNote;
	}

	/**
	 * @param adminNote the adminNote to set
	 */
	public void setAdminNote(String adminNote) {
		this.adminNote = adminNote;
	}

	/**
	 * @return the createdAt
	 */
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	/**
	 * @param createdAt the createdAt to set
	 */
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	public SampleCard getSampleCard() { return sampleCard; }
    public void setSampleCard(SampleCard sampleCard) { this.sampleCard = sampleCard; }
    
    
}

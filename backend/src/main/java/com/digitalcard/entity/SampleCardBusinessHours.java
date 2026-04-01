
package com.digitalcard.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class SampleCardBusinessHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String day;
    private boolean open;
    private String start;
    private String end;

    @ManyToOne
    @JoinColumn(name = "card_id")
    @JsonIgnore
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
	 * @return the day
	 */
	public String getDay() {
		return day;
	}

	/**
	 * @param day the day to set
	 */
	public void setDay(String day) {
		this.day = day;
	}

	/**
	 * @return the open
	 */
	public boolean isOpen() {
		return open;
	}

	/**
	 * @param open the open to set
	 */
	public void setOpen(boolean open) {
		this.open = open;
	}

	/**
	 * @return the start
	 */
	public String getStart() {
		return start;
	}

	/**
	 * @param start the start to set
	 */
	public void setStart(String start) {
		this.start = start;
	}

	/**
	 * @return the end
	 */
	public String getEnd() {
		return end;
	}

	/**
	 * @param end the end to set
	 */
	public void setEnd(String end) {
		this.end = end;
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

    // getters setters
    
    
}


package com.digitalcard.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class SampleCardPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String upiId;
    private String accountName;
    private String bankName;
    private String accountNumber;
    private String ifsc;
    private String paymentNote;

    @OneToOne
    @JoinColumn(name = "sample_card_id")
    @JsonIgnore
    private SampleCard sampleCard;

    // getters & setters

    public SampleCard getSampleCard() {
        return sampleCard;
    }

    public void setSampleCard(SampleCard sampleCard) {
        this.sampleCard = sampleCard;
    }

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
	 * @return the upiId
	 */
	public String getUpiId() {
		return upiId;
	}

	/**
	 * @param upiId the upiId to set
	 */
	public void setUpiId(String upiId) {
		this.upiId = upiId;
	}

	/**
	 * @return the accountName
	 */
	public String getAccountName() {
		return accountName;
	}

	/**
	 * @param accountName the accountName to set
	 */
	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	/**
	 * @return the bankName
	 */
	public String getBankName() {
		return bankName;
	}

	/**
	 * @param bankName the bankName to set
	 */
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	/**
	 * @return the accountNumber
	 */
	public String getAccountNumber() {
		return accountNumber;
	}

	/**
	 * @param accountNumber the accountNumber to set
	 */
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	/**
	 * @return the ifsc
	 */
	public String getIfsc() {
		return ifsc;
	}

	/**
	 * @param ifsc the ifsc to set
	 */
	public void setIfsc(String ifsc) {
		this.ifsc = ifsc;
	}

	/**
	 * @return the paymentNote
	 */
	public String getPaymentNote() {
		return paymentNote;
	}

	/**
	 * @param paymentNote the paymentNote to set
	 */
	public void setPaymentNote(String paymentNote) {
		this.paymentNote = paymentNote;
	}

    // other getters setters...
}

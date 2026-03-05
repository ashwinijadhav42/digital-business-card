package com.digitalcard.entity;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "realestate_cards")
public class RealEstateCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String slug;

    private String profilePhoto;
    private String agencyName;
    private String reraNumber;
    private String description;

    private String phone;
    private String whatsapp;
    private String email;
    private String officeAddress;
    private String website;

    private String propertyType;
    private String transactionType;
    private String budgetRange;
    private String preferredLocations;

    private String facebook;
    private String instagram;
    private String youtube;
    private String linkedin;
    private String twitter;

    private String templateType;

    private boolean isPublic = true;

    
 // getters and setters

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
	 * @return the slug
	 */
	public String getSlug() {
		return slug;
	}

	/**
	 * @param slug the slug to set
	 */
	public void setSlug(String slug) {
		this.slug = slug;
	}

	/**
	 * @return the profilePhoto
	 */
	public String getProfilePhoto() {
		return profilePhoto;
	}

	/**
	 * @param profilePhoto the profilePhoto to set
	 */
	public void setProfilePhoto(String profilePhoto) {
		this.profilePhoto = profilePhoto;
	}

	/**
	 * @return the agencyName
	 */
	public String getAgencyName() {
		return agencyName;
	}

	/**
	 * @param agencyName the agencyName to set
	 */
	public void setAgencyName(String agencyName) {
		this.agencyName = agencyName;
	}

	/**
	 * @return the reraNumber
	 */
	public String getReraNumber() {
		return reraNumber;
	}

	/**
	 * @param reraNumber the reraNumber to set
	 */
	public void setReraNumber(String reraNumber) {
		this.reraNumber = reraNumber;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}

	/**
	 * @param phone the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * @return the whatsapp
	 */
	public String getWhatsapp() {
		return whatsapp;
	}

	/**
	 * @param whatsapp the whatsapp to set
	 */
	public void setWhatsapp(String whatsapp) {
		this.whatsapp = whatsapp;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the officeAddress
	 */
	public String getOfficeAddress() {
		return officeAddress;
	}

	/**
	 * @param officeAddress the officeAddress to set
	 */
	public void setOfficeAddress(String officeAddress) {
		this.officeAddress = officeAddress;
	}

	/**
	 * @return the website
	 */
	public String getWebsite() {
		return website;
	}

	/**
	 * @param website the website to set
	 */
	public void setWebsite(String website) {
		this.website = website;
	}

	/**
	 * @return the propertyType
	 */
	public String getPropertyType() {
		return propertyType;
	}

	/**
	 * @param propertyType the propertyType to set
	 */
	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}

	/**
	 * @return the transactionType
	 */
	public String getTransactionType() {
		return transactionType;
	}

	/**
	 * @param transactionType the transactionType to set
	 */
	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	/**
	 * @return the budgetRange
	 */
	public String getBudgetRange() {
		return budgetRange;
	}

	/**
	 * @param budgetRange the budgetRange to set
	 */
	public void setBudgetRange(String budgetRange) {
		this.budgetRange = budgetRange;
	}

	/**
	 * @return the preferredLocations
	 */
	public String getPreferredLocations() {
		return preferredLocations;
	}

	/**
	 * @param preferredLocations the preferredLocations to set
	 */
	public void setPreferredLocations(String preferredLocations) {
		this.preferredLocations = preferredLocations;
	}

	/**
	 * @return the facebook
	 */
	public String getFacebook() {
		return facebook;
	}

	/**
	 * @param facebook the facebook to set
	 */
	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}

	/**
	 * @return the instagram
	 */
	public String getInstagram() {
		return instagram;
	}

	/**
	 * @param instagram the instagram to set
	 */
	public void setInstagram(String instagram) {
		this.instagram = instagram;
	}

	/**
	 * @return the youtube
	 */
	public String getYoutube() {
		return youtube;
	}

	/**
	 * @param youtube the youtube to set
	 */
	public void setYoutube(String youtube) {
		this.youtube = youtube;
	}

	/**
	 * @return the linkedin
	 */
	public String getLinkedin() {
		return linkedin;
	}

	/**
	 * @param linkedin the linkedin to set
	 */
	public void setLinkedin(String linkedin) {
		this.linkedin = linkedin;
	}

	/**
	 * @return the twitter
	 */
	public String getTwitter() {
		return twitter;
	}

	/**
	 * @param twitter the twitter to set
	 */
	public void setTwitter(String twitter) {
		this.twitter = twitter;
	}

	/**
	 * @return the templateType
	 */
	public String getTemplateType() {
		return templateType;
	}

	/**
	 * @param templateType the templateType to set
	 */
	public void setTemplateType(String templateType) {
		this.templateType = templateType;
	}

	/**
	 * @return the isPublic
	 */
	public boolean isPublic() {
		return isPublic;
	}

	/**
	 * @param isPublic the isPublic to set
	 */
	public void setPublic(boolean isPublic) {
		this.isPublic = isPublic;
	}

    
    
}
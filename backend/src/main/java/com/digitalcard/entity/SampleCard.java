package com.digitalcard.entity;

import java.time.LocalDate;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class SampleCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String logo;
    private String businessName;
    private String tagline;
    private String description;

    private String phone;
    private String whatsapp;
    private String email;
    private String website;
    private String address;

    private String facebook;
    private String instagram;
    private String youtube;
    private String linkedin;
    private String twitter;
    private String telegram;

    @Column(unique = true)
    private String slug;
    
    @Column(name = "user_id")
    private Long userId;
    
    @Column(name = "status")
    private String status; // ACTIVE / INACTIVE
    
    private Boolean appointmentEnabled;

    private LocalDate appointmentDate;
    
    @OneToMany(mappedBy = "sampleCard", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SampleCardGallery> gallery;
    

    @OneToMany(mappedBy = "sampleCard", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<SampleCardServices> services;
    
    @OneToMany(mappedBy = "sampleCard", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SampleCardBusinessHours> businessHours;
    
    @OneToMany(mappedBy = "sampleCard", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SampleCardProduct> products;
    
    @OneToMany(mappedBy = "sampleCard", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SampleCardBlog> blogs;
    
    @OneToMany(mappedBy = "sampleCard", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SampleCardTestimonial> testimonials;
   
    @OneToOne(mappedBy = "sampleCard", cascade = CascadeType.ALL)
    private SampleCardPayment payment;

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
	 * @return the logo
	 */
	public String getLogo() {
		return logo;
	}

	/**
	 * @param logo the logo to set
	 */
	public void setLogo(String logo) {
		this.logo = logo;
	}

	/**
	 * @return the businessName
	 */
	public String getBusinessName() {
		return businessName;
	}

	/**
	 * @param businessName the businessName to set
	 */
	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}

	/**
	 * @return the tagline
	 */
	public String getTagline() {
		return tagline;
	}

	/**
	 * @param tagline the tagline to set
	 */
	public void setTagline(String tagline) {
		this.tagline = tagline;
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
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
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
	 * @return the telegram
	 */
	public String getTelegram() {
		return telegram;
	}

	/**
	 * @param telegram the telegram to set
	 */
	public void setTelegram(String telegram) {
		this.telegram = telegram;
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
	 * @return the appointmentEnabled
	 */
	public Boolean getAppointmentEnabled() {
		return appointmentEnabled;
	}

	/**
	 * @param appointmentEnabled the appointmentEnabled to set
	 */
	public void setAppointmentEnabled(Boolean appointmentEnabled) {
		this.appointmentEnabled = appointmentEnabled;
	}

	

	/**
	 * @return the appointmentDate
	 */
	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	/**
	 * @param appointmentDate the appointmentDate to set
	 */
	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	/**
	 * @return the gallery
	 */
	public List<SampleCardGallery> getGallery() {
		return gallery;
	}

	/**
	 * @param gallery the gallery to set
	 */
	public void setGallery(List<SampleCardGallery> gallery) {
		this.gallery = gallery;
		
		 if (gallery != null) {
		        for (SampleCardGallery g : gallery) {
		            g.setSampleCard(this); //  link child to parent
		        }
		 }
	}

	/**
	 * @return the services
	 */
	public List<SampleCardServices> getServices() {
		return services;
	}

	/**
	 * @param services the services to set
	 */
	public void setServices(List<SampleCardServices> services) {
	    this.services = services;

	    if (services != null) {
	        for (SampleCardServices s : services) {
	            s.setSampleCard(this);   // IMPORTANT
	        }
	    }
	    
	}

	/**
	 * @return the businessHours
	 */
	public List<SampleCardBusinessHours> getBusinessHours() {
		return businessHours;
	}

	/**
	 * @param businessHours the businessHours to set
	 */
	public void setBusinessHours(List<SampleCardBusinessHours> businessHours) {
	    this.businessHours = businessHours;

	    if (businessHours != null) {
	        for (SampleCardBusinessHours b : businessHours) {
	            b.setSampleCard(this);  //  MUST
	        }
	    }
	}

	/**
	 * @return the products
	 */
	public List<SampleCardProduct> getProducts() {
		return products;
	}

	/**
	 * @param products the products to set
	 */
	public void setProducts(List<SampleCardProduct> products) {
	    this.products = products;

	    if (products != null) {
	        for (SampleCardProduct p : products) {
	            p.setSampleCard(this);   //  MUST
	        }
	    }
	}
	
	/** blog**/
	public List<SampleCardBlog> getBlogs() {
	    return blogs;
	}

	public void setBlogs(List<SampleCardBlog> blogs) {
	    this.blogs = blogs;

	    if (blogs != null) {
	        for (SampleCardBlog b : blogs) {
	            b.setSampleCard(this); // IMPORTANT
	        }
	    }
	}

	/**
	 * @return the testimonials
	 */
	public List<SampleCardTestimonial> getTestimonials() {
		return testimonials;
	}

	/**
	 * @param testimonials the testimonials to set
	 */
	public void setTestimonials(List<SampleCardTestimonial> testimonials) {
	    this.testimonials = testimonials;

	    if (testimonials != null) {
	        for (SampleCardTestimonial t : testimonials) {
	            t.setSampleCard(this);  // 🔥 VERY IMPORTANT
	        }
	    }
	    
	}

	/**
	 * @return the payment
	 */
	public SampleCardPayment getPayment() {
		return payment;
	}

	/**
	 * @param payment the payment to set
	 */
	public void setPayment(SampleCardPayment payment) {
	    this.payment = payment;

	    if (payment != null) {
	        payment.setSampleCard(this); // VERY IMPORTANT
	    }
	}

    // getters setters
	
	public String getStatus() {
	    return status;
	}

	public void setStatus(String status) {
	    this.status = status;
	}
    
    

    
    
}
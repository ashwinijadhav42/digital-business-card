import React from "react";

function BasicDetailsForm({
  formData,
  setFormData,
  errors,
  handleChange,
  handlePhoneChange,
  handleWhatsappChange,
  handleImageChange
}) {
  return (
    <>
      <h6 className="text-center mb-4">
        Enter details to preview your card
      </h6>

      {/* Logo */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-4">
          <label className="form-label">Logo</label>
        </div>
        <div className="col-md-8">
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>
      </div>

      {/* Business Name */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-4">
          <label className="form-label">
            Business Name <span className="text-danger">*</span>
          </label>
        </div>
        <div className="col-md-8">
          <input
            type="text"
            name="businessName"
            className="form-control"
            value={formData.businessName}
            onChange={handleChange}
          />
          {errors.businessName && (
            <small className="text-danger">{errors.businessName}</small>
          )}
        </div>
      </div>

      {/* Tagline */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-4">
          <label className="form-label">Tagline</label>
        </div>
        <div className="col-md-8">
          <input
            type="text"
            name="tagline"
            className="form-control"
            value={formData.tagline}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Description */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-4">
          <label className="form-label">Description</label>
        </div>
        <div className="col-md-8">
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Phone */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-4">
          <label className="form-label">
            Phone <span className="text-danger">*</span>
          </label>
        </div>
        <div className="col-md-8">
          <input
            type="text"
            maxLength="10"
            className="form-control"
            value={formData.phone}
            onChange={handlePhoneChange}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone}</small>
          )}
        </div>
      </div>

      {/* WhatsApp same as phone */}
      <div className="row mb-2">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={formData.sameAsPhone}
              onChange={handleChange}
            />
            <label className="form-check-label">
              WhatsApp same as phone
            </label>
          </div>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-4">
          <label className="form-label">WhatsApp</label>
        </div>
        <div className="col-md-8">
          <input
            type="text"
            maxLength="10"
            disabled={formData.sameAsPhone}
            className="form-control"
            value={formData.whatsapp}
            onChange={handleWhatsappChange}
          />
        </div>
      </div>

      {/* Email */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-4">
          <label className="form-label">
            Email <span className="text-danger">*</span>
          </label>
        </div>
        <div className="col-md-8">
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>
      </div>

      {/* Website */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-4">
          <label className="form-label">Website</label>
        </div>
        <div className="col-md-8">
          <input
            name="website"
            className="form-control"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Address */}
      <div className="row mb-3 align-items-center">
        <div className="col-md-4">
          <label className="form-label">Address</label>
        </div>
        <div className="col-md-8">
          <input
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Social Media */}
      <h5 className="mt-4 mb-3 text-center">Social Media</h5>

      <div className="row">
        {[
          "facebook",
          "instagram",
          "linkedin",
          "youtube",
          "twitter",
          "telegram"
        ].map((field, i) => (
          <div className="col-md-6 mb-3" key={i}>
            <input
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="form-control"
              value={formData[field]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default BasicDetailsForm;
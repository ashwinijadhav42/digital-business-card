import { useState } from "react";
import SampleCard from "./SampleCard";

import {
  defaultGallery,
  defaultServices,
  defaultProducts,
  defaultTestimonials,
  defaultBusinessHours,
  defaultBlogs
} from "./DefaultData";

function CreateSampleCard() {

  const initialFormData = {
    logo: "",
    businessName: "",
    tagline: "",
    description: "",

    phone: "",
    whatsapp: "",
    sameAsPhone: false,
    email: "",
    website: "",
    address: "",

    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: "",
    telegram: "",

    gallery: [],
    services: [],
    products: defaultProducts,
    testimonials: defaultTestimonials,
    businessHours: defaultBusinessHours,
    blogs: defaultBlogs
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        sameAsPhone: checked,
        whatsapp: checked ? prev.phone : ""
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === "phone" && prev.sameAsPhone
          ? { whatsapp: value }
          : {})
      }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ================= PHONE =================
  const handlePhoneChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");

    setFormData((prev) => ({
      ...prev,
      phone: onlyNumbers,
      ...(prev.sameAsPhone ? { whatsapp: onlyNumbers } : {})
    }));
  };

  const handleWhatsappChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");

    setFormData((prev) => ({
      ...prev,
      whatsapp: onlyNumbers
    }));
  };

  // ================= LOGO UPLOAD =================
  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        logo: imageUrl
      }));
    }
  };

  // ================= VALIDATION =================
  const validateForm = () => {

    let newErrors = {};

    if (!formData.businessName.trim())
      newErrors.businessName = "Business name required";

    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.email)
      newErrors.email = "Email required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================= SAVE =================
  const handleSave = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    try {

      const response = await fetch(
        "http://localhost:8080/api/sample-cards",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create card");
      }

      const savedCard = await response.json();

      alert("Card Created Successfully!");

      // open card in new tab using slug
      window.open(
        `/view-sample-card/${savedCard.slug}`,
        "_blank"
      );

    } catch (error) {
      console.error(error);
      alert("Error creating card");
    }
  }; const handleReset = () => {

    const confirmReset = window.confirm("Reset form?");

    if (confirmReset) {
      setFormData(initialFormData);
      setErrors({});
    }
  };

  /* ================= DYNAMIC LIST UPDATE ================= */

  const updateList = (section, index, field, value) => {

    const updated = [...formData[section]];

    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      [section]: updated
    }));
  };

  /* ================= ADD ITEM ================= */

  const addItem = (section, template) => {

    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], template]
    }));
  };

  /* ================= REMOVE ITEM ================= */

  const removeItem = (section, index) => {

    const updated = [...formData[section]];

    updated.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      [section]: updated
    }));
  };

  return (


    // ================= JSX =================

    <div className="container-fluid py-4">

      <h3 className="text-center mb-4">
        Create Sample Digital Card
      </h3>

      <div className="row align-items-start">

        {/* ================= FORM ================= */}
        <div className="col-md-6 border rounded p-4 ms-5">

          <form onSubmit={handleSave}>

            <h6 className="text-center mb-4">
              Enter details to preview your card
            </h6>

            {/* Logo */}
            <div className="row mb-3 align-items-center">

              <div className="col-md-4">
                <label className="form-label">
                  Logo
                </label>
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
                  Business Name
                  <span className="text-danger">*</span>
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

                {errors.businessName &&
                  <small className="text-danger">
                    {errors.businessName}
                  </small>
                }

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

                {errors.phone &&
                  <small className="text-danger">
                    {errors.phone}
                  </small>
                }

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
                <label className="form-label">
                  WhatsApp
                </label>
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

                {errors.email &&
                  <small className="text-danger">
                    {errors.email}
                  </small>
                }

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

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="facebook"
                  placeholder="Facebook"
                  className="form-control"
                  value={formData.facebook}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="instagram"
                  placeholder="Instagram"
                  className="form-control"
                  value={formData.instagram}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="linkedin"
                  placeholder="LinkedIn"
                  className="form-control"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="youtube"
                  placeholder="YouTube"
                  className="form-control"
                  value={formData.youtube}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="twitter"
                  placeholder="Twitter"
                  className="form-control"
                  value={formData.twitter}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="telegram"
                  placeholder="Telegram"
                  className="form-control"
                  value={formData.telegram}
                  onChange={handleChange}
                />
              </div>


              {/* ================= GALLERY ================= */}

              <h5 className="mt-4 text-center">Gallery</h5>

              <div className="row">

                {formData.gallery.map((img, index) => (

                  <div key={index} className="col-6 mb-3">

                    <div className="sc-gallery-upload-card">

                      <input
                        type="file"
                        className="form-control mb-2"
                        accept="image/*"
                        onChange={(e) => {

                          const file = e.target.files[0];
                          if (!file) return;

                          const imageUrl = URL.createObjectURL(file);

                          setFormData((prev) => {

                            const updatedGallery = [...prev.gallery];

                            updatedGallery[index] = {
                              url: imageUrl,
                              name: file.name
                            };

                            return {
                              ...prev,
                              gallery: updatedGallery
                            };
                          });

                        }}
                      />
                      {img?.url && (

                        <div className="sc-gallery-preview">

                          <img
                            src={img.url}
                            alt="preview"
                            className="sc-gallery-preview-img"
                          />

                          <small className="d-block text-center mt-1">
                            {img.name}
                          </small>

                          <button
                            type="button"
                            className="btn btn-sm btn-danger sc-gallery-remove"
                            onClick={() => removeItem("gallery", index)}
                          >
                            ✕
                          </button>

                        </div>
                      )}

                    </div>

                  </div>

                ))}

              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="btn btn-success btn-sm w-50 mb-3"
                  onClick={() =>
                    addItem("gallery", { url: "", name: "" })
                  }
                >
                  <i className="bi bi-image me-1"></i>
                  Add Image
                </button>
              </div>
              {/* ================= SERVICES ================= */}
              <h5 className="mt-4 text-center">Services</h5>


              {formData.services.map((service, index) => (

                <div key={index} className="border p-2 mb-2">

                  <input
                    placeholder="Title"
                    className="form-control mb-2"
                    value={service.title}
                    onChange={(e) =>
                      updateList(
                        "services",
                        index,
                        "title",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="file"
                    className="form-control mb-2"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (!file) return;

                      const imageUrl = URL.createObjectURL(file);

                      updateList("services", index, "image", imageUrl);
                    }}
                  />

                  <textarea
                    placeholder="Description"
                    className="form-control"
                    value={service.description}
                    onChange={(e) =>
                      updateList(
                        "services",
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />

                  <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() =>
                      removeItem("services", index)
                    }
                  >
                    Remove
                  </button>

                </div>

              ))}
             <div className="text-center">
  <button
    type="button"
    className="btn btn-success btn-sm w-50 mt-3"
    onClick={() =>
      addItem("services", {
        image: "",
        title: "",
        description: ""
      })
    }
  >
    + Add Service
  </button>
</div>
            </div>
            {/* Buttons */}

            <button className="btn btn-primary w-50 m-1">
              Create Card
            </button>

            <button
              type="button"
              className="btn btn-danger w-40"
              onClick={handleReset}
            >
              Reset
            </button>

          </form>

        </div>



        {/* ================= PREVIEW ================= */}

        <div className="col-md-4 ms-4">

          <SampleCard
            data={formData}
            showAllIcons={true}
            slug="preview"
            publicUrl="preview"
          />

        </div>

      </div>

    </div>

  );
}

export default CreateSampleCard;
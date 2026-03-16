import { useState } from "react";
import SampleCard from "./SampleCard";

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
    telegram: ""
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
};  const handleReset = () => {

    const confirmReset = window.confirm("Reset form?");

    if (confirmReset) {
      setFormData(initialFormData);
      setErrors({});
    }
  };

  // ================= JSX =================
  return (

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
            <h5 className="mt-4 mb-3">Social Media</h5>

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

            </div>

            {/* Buttons */}
            <button className="btn btn-primary w-50">
              Create Card
            </button>

            <button
              type="button"
              className="btn btn-danger w-50"
              onClick={handleReset}
            >
              Reset
            </button>

          </form>

        </div>

        {/* ================= PREVIEW ================= */}

        <div className="col-md-4 ms-5">

          <SampleCard
            data={formData}
            showAllIcons={true}
          />

        </div>

      </div>

    </div>
  );
}

export default CreateSampleCard;
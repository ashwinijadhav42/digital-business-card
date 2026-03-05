import { useState, } from "react";
import { useParams } from "react-router-dom";
import RealEstate from "./RealEstate";
import UnityRealEstate from "./UnityRealEstate";

function CreateRealEstateCard() {

  const { templateType } = useParams();

  const [selectedTemplate, setSelectedTemplate] = useState(
    templateType || "template1");

  const initialFormData = {
    profilePhoto: "",
    agencyName: "",
    reraNumber: "",
    description: "",

    phone: "",
    whatsapp: "",
    sameAsPhone: false,
    email: "",
    officeAddress: "",
    website: "",

    propertyType: "",
    transactionType: "",
    budgetRange: "",
    preferredLocations: "",

    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: ""
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

  // Phone numbers only
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

  // Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        profilePhoto: imageUrl
      }));
    }
  };

  // ================= VALIDATION =================
  const validateForm = () => {
    let newErrors = {};

    if (!formData.agencyName.trim())
      newErrors.agencyName = "Agency name is required";

    
    if (!formData.reraNumber.trim())
      newErrors.reraNumber = "RERA number is required";

    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (formData.whatsapp &&
      !/^[0-9]{10}$/.test(formData.whatsapp))
      newErrors.whatsapp = "WhatsApp must be 10 digits";

    if (!formData.budgetRange.trim())
      newErrors.budgetRange = "Budget range is required";

    if (!formData.email)
      newErrors.email = "Email is required";

    if (!formData.officeAddress.trim())
      newErrors.officeAddress = "Office address required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SAVE =================
  const handleSave = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch(
        "http://localhost:8080/api/realestate-cards",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            templateType: selectedTemplate
          })
        }
      );

      const data = await response.json();
      window.open(`/view-realestate-card/${data.slug}`, "_blank");

    } catch (error) {
      console.error("Error saving card:", error);
    }
  };

  const handleReset = () => {
    const confirmReset = window.confirm("Are you sure you want to reset?");
    if (confirmReset) {
      setFormData(initialFormData);
      setErrors({});
      setSelectedTemplate("template1");
    }
  };

  // ================= JSX =================
  return (
    <div className="container-fluid py-4">

      <h3 className="mb-4 text-center">
        Create Real Estate Digital Card
      </h3>

      <div className="row align-items-start">

        {/* RIGHT FORM */}
        <div className="col-md-6 p-4 ms-5 border rounded">

          <form onSubmit={handleSave}>
            <h6 className="mb-3 text-center ">
              Please enter details to preview your digital card
            </h6>
            {/* Template Category */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Template Category</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  value="Real Estate"
                  disabled
                />
              </div>
            </div>

            {/* Template Select */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Select Template</label>
              </div>
              <div className="col-md-8">
                <select
                  className="form-select"
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                >
                  <option value="template1">Template 1</option>
                  <option value="template2">Template 2</option>
                </select>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Profile Photo</label>
              </div>
              <div className="col-md-8">
                <input
                  type="file"
                  className="form-control"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {/* Agency Name */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Agency Name <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="agencyName"
                  className="form-control"
                  value={formData.agencyName}
                  onChange={handleChange}
                />
                {errors.agencyName && (
                  <small className="text-danger">{errors.agencyName}</small>
                )}
              </div>
            </div>


            {/* RERA Number */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  RERA Number <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="reraNumber"
                  className="form-control "
                  value={formData.reraNumber}
                  onChange={handleChange}
                />
                {errors.reraNumber && (
                  <small className="text-danger">{errors.reraNumber}</small>
                )}
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
                  placeholder="Real Estate Tagline or  Description"
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

            {/* WhatsApp Same As Phone */}
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
                {errors.whatsapp && (
                  <small className="text-danger">{errors.whatsapp}</small>
                )}
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
            {/* Budget Range */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Budget Range <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="budgetRange"
                  className="form-control"
                  value={formData.budgetRange}
                  onChange={handleChange}
                />
                {errors.budgetRange && (
                  <small className="text-danger">{errors.budgetRange}</small>
                )}
              </div>
            </div>

            {/* Office Address */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Office Address <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  name="officeAddress"
                  className="form-control"
                  value={formData.officeAddress}
                  onChange={handleChange}
                />
                {errors.officeAddress && (
                  <small className="text-danger">{errors.officeAddress}</small>
                )}
              </div>
            </div>
            {/* Website Address */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Website
                </label>
              </div>
              <div className="col-md-8">
                <input
                  name="website"
                  className="form-control"
                  value={formData.website}
                  onChange={handleChange}
                />
                {errors.website && (
                  <small className="text-danger">{errors.website}</small>
                )}
              </div>
            </div>

            {/* Property Type */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Property Type</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="propertyType"
                  className="form-control"
                  value={formData.propertyType}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Transaction Type */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Transaction Type</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="transactionType"
                  className="form-control"
                  value={formData.transactionType}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Preferred Locations */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Preferred Locations</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="preferredLocations"
                  className="form-control"
                  value={formData.preferredLocations}
                  onChange={handleChange}
                />
              </div>
              {/* Social Media Section */}
              <h5 className="mb-3 mt-4">Social Media Links</h5>
              {/* Row 1 */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="instagram"
                    placeholder="Instagram URL"
                    className="form-control"
                    value={formData.instagram}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn URL"
                    className="form-control"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="youtube"
                    placeholder="YouTube URL"
                    className="form-control"
                    value={formData.youtube}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="twitter"
                    placeholder="Twitter URL"
                    className="form-control"
                    value={formData.twitter}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 3*/}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="facebook"
                    placeholder="Facebook URL"
                    className="form-control"
                    value={formData.facebook}
                    onChange={handleChange}
                  />
                </div>

              </div>
            </div>


            <button className="btn btn-primary w-50">
              Create Card
            </button>

            <button type="button"
              className="btn btn-danger w-50"
              onClick={handleReset}
            >
              Reset
            </button>

          </form>
        </div>

        {/* LEFT PREVIEW */}
        <div className="col-md-4  ms-5">
          {selectedTemplate === "template1" &&
            <RealEstate data={formData} showAllIcons={true} />}
          {selectedTemplate === "template2" &&
            <UnityRealEstate data={formData} showAllIcons={true} />
          }
        </div>

      </div>
    </div>
  );
}

export default CreateRealEstateCard;
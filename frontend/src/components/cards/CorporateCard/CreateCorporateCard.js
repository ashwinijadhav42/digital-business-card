
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FiUser, FiMail, FiPhone, FiBriefcase, FiMapPin, FiLinkedin } from "react-icons/fi";
import SoftwareEngineer from "./SoftwareEngineer";
import BusinessAnalystCard from "./BusinessAnalyst";

function CreateCorporateCard() {
  const { templateType } = useParams();

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    designation: "",
    companyName: "",
    email: "",
    phone: "",
    description: "",
    FiMapPin: "",
    linkedin: "",
  });

  // Select Template
  const getTemplate = () => {
    switch (templateType) {
      case "1":
        return BusinessAnalystCard;
      case "2":
        return SoftwareEngineer;
      default:
        return BusinessAnalystCard;
    }
  };

  const SelectedTemplate = getTemplate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Image Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: imageURL,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Corporate Card Created Successfully!");
  };

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">
        Create Corporate Card - Template {templateType}
      </h3>

      <div className="row">
        {/* LEFT SIDE FORM */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input
                type="text"
                name="designation"
                className="form-control"
                value={formData.designation}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                name="companyName"
                className="form-control"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                
              />
            </div>

              <div className="mb-3">
  <label className="form-label">Address</label>
  <div className="input-icon">
    <FiMapPin className="form-icon" />
    <textarea
      name="address"
      className="form-control"
      value={formData.address}
      onChange={handleChange}
      rows="2"
    />
  </div>
</div>

<div className="mb-3">
  <label className="form-label">LinkedIn</label>
  <div className="input-icon">
    <FiLinkedin className="form-icon" />
    <input
      type="text"
      name="linkedin"
      placeholder="https://linkedin.com/in/username"
      className="form-control"
      value={formData.linkedin}
      onChange={handleChange}
    />
  </div>
</div>

            <div className="mb-3">
              <label className="form-label">Upload Profile Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Save Corporate Card
            </button>
          </form>
        </div>

        {/* RIGHT SIDE LIVE PREVIEW */}
        <div className="col-md-6">
          <SelectedTemplate data={formData} />
        </div>
      </div>
    </div>
  );
}

export default CreateCorporateCard;
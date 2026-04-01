import { useState } from "react";
import { FiUser, FiMail, FiPhone, FiBriefcase, FiMapPin, FiLinkedin } from "react-icons/fi";
import SoftwareEngineer from "./SoftwareEngineer";
import BusinessAnalyst from "./BusinessAnalyst";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function CreateCorporateCard() {

  // ✅ Template state (NEW)
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    companyName: "",
    email: "",
    phone: "",
    description: "",
    website: "",
    address: "",
    linkedin: "",
    github: "",
    profileImage: null,
    imagePreview: "",
  });

  // ✅ Template Selector Function (UPDATED)
  const getTemplate = () => {
    switch (selectedTemplate) {
      case "template1":
        return BusinessAnalyst;
      case "template2":
        return SoftwareEngineer;
      default:
        return BusinessAnalyst;
    }
  };

  const SelectedTemplate = getTemplate();
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Image Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // ✅ CREATE FORMDATA
    const formDataToSend = new FormData();

    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("designation", formData.designation);
    formDataToSend.append("companyName", formData.companyName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("website", formData.website);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("linkedin", formData.linkedin);
    formDataToSend.append("github", formData.github);

    // ✅ IMAGE FILE
    formDataToSend.append("profileImage", formData.profileImage);

    // ✅ VERY IMPORTANT (THIS WAS MISSING)
    formDataToSend.append("templateType", selectedTemplate);

    console.log("Selected Template:", selectedTemplate);

    const res = await fetch("http://localhost:8080/api/corporate-cards", {
      method: "POST",
      body: formDataToSend, // ❌ NO headers here
    });

    const savedCard = await res.json();

    console.log("Saved Card:", savedCard);

    // ✅ REDIRECT USING SLUG
    navigate(`/view-corporate-card/${savedCard.slug}`);

  } catch (err) {
    console.error("Save error:", err);
  }
};

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">
        Create Corporate Card
      </h3>

      <div className="row">
        {/* LEFT SIDE FORM */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>

            {/* ✅ TEMPLATE DROPDOWN */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Select Template Design</label>
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

            {/* FORM FIELDS */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                value={formData.fullName}
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
              <label className="form-label">Website</label>
              <input
                type="text"
                name="website"
                className="form-control"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                className="form-control"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Github</label>
              <input
                type="text"
                name="github"
                className="form-control"
                value={formData.github}
                onChange={handleChange}
              />
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
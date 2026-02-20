import { useState } from "react";
import { useParams } from "react-router-dom";
import SoftwareEngineer from "./SoftwareEngineer";
import BusinessAnalystCard from "./BusinessAnalyst";

function CreateCorporateCard() {
  const { templateType } = useParams();

  const [formData, setFormData] = useState({
    logo: "",
    name: "",
    designation: "",
    companyName: "",
    email: "",
    phone: "",
    linkedin: "",
    address: "",
  });

  // 🔥 Select template dynamically
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Corporate Card Data:", formData);
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
                required
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
                maxLength="10"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Save Corporate Card
            </button>

          </form>
        </div>

        {/* RIGHT SIDE PREVIEW */}
        <div className="col-md-6">
        
          <SelectedTemplate data={formData} />
        </div>

      </div>
    </div>
  );
}

export default CreateCorporateCard;

import { useState } from "react";
import { useParams } from "react-router-dom";
import FreelancerTemplate1 from "./FreelanceSoftwareEngineer";
import FreelancerTemplate2 from "./Freelancer";

function CreateFreelancerCard() {
  const { templateType } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    skills: "",
    email: "",
    phone: "",
    portfolio: "",
    bio: "",
  });

  // 🔥 Select template dynamically
  const templateMap = {
    1: FreelancerTemplate1,
    2: FreelancerTemplate2,
  };

  const SelectedTemplate = templateMap[templateType] || FreelancerTemplate1;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Freelancer Card Data:", formData);
    alert("Freelancer Card Created Successfully!");
  };

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">
        Create Freelancer Card - Template {templateType}
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
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Profession</label>
              <input
                type="text"
                name="profession"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Skills</label>
              <input
                type="text"
                name="skills"
                className="form-control"
                onChange={handleChange}
                placeholder="React, UI/UX, Java..."
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
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
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Portfolio Link</label>
              <input
                type="text"
                name="portfolio"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Short Bio</label>
              <textarea
                name="bio"
                className="form-control"
                rows="3"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Save Freelancer Card
            </button>
          </form>
        </div>

        {/* RIGHT SIDE PREVIEW */}
        <div className="col-md-6">
          <SelectedTemplate formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default CreateFreelancerCard;

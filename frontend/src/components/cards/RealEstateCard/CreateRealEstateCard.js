import { useState } from "react";
import { useParams } from "react-router-dom";
import RealEstate from "./RealEstate";
import UnityRealEstate from "./UnityRealEstate";

function CreateRealEstateCard() {
  const { templateType } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    agencyName: "",
    designation: "",
    phone: "",
    email: "",
    officeAddress: "",
    experience: "",
    about: "",
    CompanyName: "",
    agencyName:"",
    description:"",
    officeAddress:"",
    website:"",
    experience:"",
  });

  //  Template Selector
  const templateMap = {
    1: RealEstate,
    2: UnityRealEstate,
  };

  const SelectedTemplate = templateMap[templateType] || RealEstate;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Real Estate Card Data:", formData);
    alert("Real Estate Card Created Successfully!");
  };

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">
        Create Real Estate Card - Template {templateType}
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
              <label className="form-label">Agency Name</label>
              <input
                type="text"
                name="agencyName"
                className="form-control"
                value={formData.agencyName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input
                type="text"
                name="designation"
                className="form-control"
                onChange={handleChange}
                value={formData.designation}
                placeholder="Property Consultant"
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
              <label className="form-label">Office Address</label>
              <input
                type="text"
                name="officeAddress"
                className="form-control"
                value={formData.officeAddress}
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
              <label className="form-label">Years of Experience</label>
              <input
                type="text"
                name="experience"
                className="form-control"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">About</label>
              <textarea
                name="about"
                rows="3"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-warning w-100">
              Save Real Estate Card
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

export default CreateRealEstateCard;
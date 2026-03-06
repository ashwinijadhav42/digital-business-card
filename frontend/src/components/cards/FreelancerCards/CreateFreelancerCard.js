import { useState ,useRef} from "react";

import { useParams } from "react-router-dom";
import FreelancerTemplate1 from "./Freelancer";
import FreelancerTemplate2 from "./FreelanceSoftwareEngineer";
import { FaBedPulse } from "react-icons/fa6";

function CreateFreelancerCard({ data, showAllIcons = true }) {
  const { templateType } = useParams();

  const [selectedTemplate, setSelectedTemplate] = useState(
    templateType || "template1"
  );

  const initialFormData = {
    logo: "",
    name: "",
    profession: "",
    skills: "",
    description: "",
    phone: "",
    sameAsPhone: false,
    email: "",
    address: "",
    website: "",
    whatsapp: "",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    telegram: "",
    youtube:"",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});


const fileInputRef = useRef(null);
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
    setFormData((prev) => ({
      ...prev,
      logo: file
    }));
  }
};

  // ================= VALIDATION =================
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Full name is required";

    if (!formData.profession.trim())
      newErrors.profession = "Profession is required";

    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.email)
      newErrors.email = "Email is required";

    if (!formData.skills.trim())
      newErrors.skills = "Skills required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SAVE =================
  const handleSave = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const formDataToSend = new FormData();

Object.keys(formData).forEach((key) => {
  if (key === "logo") {
    formDataToSend.append("logoFile", formData.logo);
  } else {
    formDataToSend.append(key, formData[key]);
  }
});
  formDataToSend.append("templateType", selectedTemplate);

  const response = await fetch(
    "http://localhost:8080/api/freelancer-cards/create",
    {
      method: "POST",
      body: formDataToSend
    }
  );

  const data = await response.json();

  window.open(`/view-freelancer-card/${data.slug}`, "_blank");
};

  const handleReset = () => {
  const confirmReset = window.confirm("Are you sure you want to reset?");
  if (confirmReset) {
    setFormData(initialFormData);
    setErrors({});

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  };


  // ================= JSX =================
  return (
    <div className="container-fluid py-4">

      <h3 className="mb-4 text-center">
        Create Freelancer Digital Card
      </h3>

      <div className="row align-items-start">

        {/* RIGHT FORM */}
        <div className="col-md-6 p-4 ms-5 border rounded">

          <form onSubmit={handleSave}>

            <h6 className="mb-3 text-center">
              Please enter details to preview your Freelancer digital card
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
                  value="Freelancer"
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
                   ref={fileInputRef}
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {/* Full Name */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Full Name <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
            </div>

            {/* Profession */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Profession <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="profession"
                  className="form-control"
                  value={formData.profession}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Description</label>
              </div>
              <div className="col-md-8">
                <input
                  name="description"
                  className="form-control"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Skills */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Skills <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="skills"
                  className="form-control"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="React, Node, MongoDB"
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
              </div>
            </div>

            {/* Address */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Address</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Website */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Website/Portfolio</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="website"
                  className="form-control"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Freelancer Social Media Section */}
            <div className="freelancer-social-section">

              <h5 className="freelancer-social-title mb-3 mt-4">
                Social Media Links
              </h5>

              {/* Row 1 */}
<div className="row freelancer-social-row">
  <div className="col-md-6 mb-3">
    <input
      type="text"
      name="github"
      placeholder="GitHub URL"
      className="form-control freelancer-input"
      value={formData.github}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6 mb-3">
    <input
      type="text"
      name="linkedin"
      placeholder="LinkedIn URL"
      className="form-control freelancer-input"
      value={formData.linkedin}
      onChange={handleChange}
    />
  </div>
</div>

{/* Row 2 */}
<div className="row freelancer-social-row">
  <div className="col-md-6 mb-3">
    <input
      type="text"
      name="telegram"
      placeholder="Telegram URL"
      className="form-control freelancer-input"
      value={formData.telegram}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6 mb-3">
    <input
      type="text"
      name="youtube"
      placeholder="YouTube URL"
      className="form-control freelancer-input"
      value={formData.youtube}
      onChange={handleChange}
    />
  </div>
</div>

{/* Row 3 */}
<div className="row freelancer-social-row">
  <div className="col-md-6 mb-3">
    <input
      type="text"
      name="twitter"
      placeholder="Twitter URL"
      className="form-control freelancer-input"
      value={formData.twitter}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6 mb-3">
    <input
      type="text"
      name="instagram"
      placeholder="Instagram URL"
      className="form-control freelancer-input"
      value={formData.instagram}
      onChange={handleChange}
    />
  </div>
</div>


</div>
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

        {/* LEFT PREVIEW */}
                <div className="col-md-4  ms-5">
                  {selectedTemplate === "template1" &&
                    <FreelancerTemplate1 data={formData} showAllIcons={false} />}
                  {selectedTemplate === "template2" &&
                    <FreelancerTemplate2 data={formData} showAllIcons={false} />
                  }
                </div>

      </div>
    </div>
  );
}

export default CreateFreelancerCard;
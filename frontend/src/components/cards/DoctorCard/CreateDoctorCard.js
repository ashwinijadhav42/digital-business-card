import { useState } from "react";
import { useParams } from "react-router-dom";
import DoctorCard1 from "./DoctorCard1";
import DoctorCard2 from "./DoctorCard2";

function CreateDoctorCard() {
  const [templates, ,category,setTemplates] = useState([]);

  const { templateType } = useParams();

  const [formData, setFormData] = useState({
    logo: "",
    name: "",
    degree: "",
    description: "",
    hospitalName: "",
    phone: "",
    whatsapp: "",
    sameAsPhone: false,
    email: "",
    address: "",
    time: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    youtube: ""
  });


  const formatFacebookUrl = (value) => {
    if (!value) return "#";
    if (value.startsWith("http")) return value;

    return `https://facebook.com/${value.replace("@", "")}`;
  };

  const formatLinkedinUrl = (value) => {
    if (!value) return "#";
    if (value.startsWith("http")) return value;

    return `https://linkedin.com/in/${value.replace("@", "")}`;
  };

  const formatYoutubeUrl = (value) => {
    if (!value) return "#";
    if (value.startsWith("http")) return value;

    return `https://youtube.com/${value.replace("@", "")}`;
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        sameAsPhone: checked,
        whatsapp: checked ? prev.phone : ""
      }));

      // clear checkbox error if any
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));

    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === "phone" && prev.sameAsPhone
          ? { whatsapp: value }
          : {})
      }));

      // remove error while typing
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };


  // Handle phone (numbers only)
  const handlePhoneChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setFormData({
      ...formData,
      phone: onlyNumbers
    });

    setErrors({
      ...errors,
      phone: ""
    });
  };

  const handleWhatsappChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");

    setFormData((prev) => ({
      ...prev,
      whatsapp: onlyNumbers
    }));

    setErrors((prev) => ({
      ...prev,
      whatsapp: ""
    }));
  };


  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({
        ...formData,
        logo: imageUrl
      });
    }
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Doctor name is required";
    }

    if (!formData.degree.trim()) {
      newErrors.degree = "Degree is required";
    }

    if (!formData.hospitalName.trim()) {
      newErrors.hospitalName = "Hospital name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.whatsapp)
      if (!/^[0-9]{10}$/.test(formData.whatsapp)) {
        newErrors.whatsapp = "WhatsApp number must be 10 digits";
      }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.time.trim()) {
      newErrors.time = "Available time is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Save Card
  const handleSaveeee = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Card Saved Successfully!");
      console.log("Form Data:", formData);
    }
  };

  const handleSave = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch("http://localhost:8080/api/doctor-cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        templateType: templateType
      })
    });

    const data = await response.json();

    // Open new tab using slug
    window.open(`/view-doctor-card/${data.slug}`, "_blank");

  } catch (error) {
    console.error("Error saving card:", error);
  }
};


  // Render Template
  const renderSelectedTemplate = () => {
    switch (templateType) {
      case "DOCTOR_CARD_1":
        return <DoctorCard1 data={formData} />;
      case "DOCTOR_CARD_2":
        return <DoctorCard2 data={formData} />;
      default:
        return <h5>No Template Selected</h5>;
    }
  };

  return (
    <div className="container-fluid py-4 ">


      <h3 className="mb-4 text-center">Create Doctor Digital Card</h3>

      <div className="row align-items-start">

        {/* LEFT PREVIEW */}
        <div className="col-md-6 py-2">
          {renderSelectedTemplate()}
        </div>

        {/* RIGHT FORM */}
        <div className="col-md-6 p-4 border rounded ">
          <form onSubmit={handleSave}>
            <h6 className="mb-3 text-center ">
              Please enter details to preview your digital card
            </h6>

            {/* Template Category */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Template Category
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  value="Doctor"
                  //value={formData.category}
                  disabled
                />
              </div>
            </div>

            {/* Template Design */}
<div className="row mb-3 align-items-center">
  <div className="col-md-4">
    <label className="form-label">
      Select template design
    </label>
  </div>
  <div className="col-md-8">
    <select
      className="form-control"
      value={templateType}
      onChange={(e) =>
        window.location.href = `/create-doctor-card/${e.target.value}`
      }
    >
      <option value="DOCTOR_CARD_1">Doctor Card 1</option>
      <option value="DOCTOR_CARD_2">Doctor Card 2</option>
    </select>
  </div>
</div>


            {/* Logo */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">Logo</label>
              </div>
              <div className="col-md-8">
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {/* Doctor Name */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Doctor Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
            </div>

            {/* Degree */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Degree <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree / Specialization"
                  className="form-control"
                  value={formData.degree}
                  onChange={handleChange}
                />
                {errors.degree && <small className="text-danger">{errors.degree}</small>}
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
                  placeholder="Doctor Description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Hospital Name */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Hospital Name <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="hospitalName"
                  placeholder="Hospital Name"
                  className="form-control"
                  value={formData.hospitalName}
                  onChange={handleChange}
                />
                {errors.hospitalName && (
                  <small className="text-danger">{errors.hospitalName}</small>
                )}
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
                  name="phone"
                  placeholder="Enter 10 Digit Phone"
                  className="form-control"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>
            </div>


            {/* Same as Phone Checkbox */}
            <div className="row mb-3 ">
               <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="sameAsPhone"
                    className="form-check-input"
                    checked={formData.sameAsPhone}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    WhatsApp number same as phone number
                  </label>
                </div>
              </div>
            </div>

            {/* WhatsApp Number */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label mb-0">
                  WhatsApp Number
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Enter WhatsApp number"
                  className="form-control"
                  value={formData.whatsapp}
                  maxLength="10"
                  onChange={handleWhatsappChange}
                  disabled={formData.sameAsPhone}   // disable when checked
                />
                {errors.whatsapp && <small className="text-danger">{errors.whatsapp}</small>}

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
                  placeholder="Enter Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
            </div>

            {/* Address */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Address <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="address"
                  placeholder="Hospital Address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <small className="text-danger">{errors.address}</small>}
              </div>
            </div>

            {/* Available Time */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-4">
                <label className="form-label">
                  Available Time <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="time"
                  placeholder="Available Time"
                  className="form-control"
                  value={formData.time}
                  onChange={handleChange}
                />
                {errors.time && <small className="text-danger">{errors.time}</small>}
              </div>
            </div>



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
                  name="youtube"
                  placeholder="YouTube URL"
                  className="form-control"
                  value={formData.youtube}
                  onChange={handleChange}
                />
              </div>

            </div>

            <button
              className="btn btn-primary w-100"
              onClick={handleSave}
            >
              Create Card
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateDoctorCard;

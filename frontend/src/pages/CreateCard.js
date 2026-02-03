import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaRedo } from "react-icons/fa";

function CreateCard() {
    const navigate = useNavigate();
    const fileRef = useRef(null);

    const initialFormData = {
        profileImage: null,
        fullName: "",
        designation: "",
        company: "",
        about: "",
        phone: "",
        whatsapp: "",
        email: "",
        website: "",
        address: "",
        linkedin: "",
        instagram: "",
        facebook: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    /* RESET  */
    const handleReset = () => {
        const confirmReset = window.confirm(
            "Are you sure you want to reset the form? All data will be lost."
        );

        if (confirmReset) {
            setFormData(initialFormData);
            if (fileRef.current) fileRef.current.value = "";
            
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    /*  HANDLERS */
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        const error = validateField(name, value);

        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };


    const handleImageChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            profileImage: e.target.files[0] || null,
        }));
    };

    /*  VALIDATION */
    const isFormFilled = () => {
        return (
            formData.fullName.trim() !== "" &&
            formData.designation.trim() !== "" &&
            formData.phone.trim() !== "" &&
            formData.email.trim() !== ""
        );
    };

    const validateForm = () => {
        const newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (["profileImage", "linkedin", "instagram", "facebook"].includes(key)) return;

            const error = validateField(key, formData[key] || "");
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /*ERRORS */

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "fullName":
                if (!value.trim()) error = "Full name is required";
                break;

            case "phone":
                if (!/^[0-9]{10}$/.test(value)) {
                    error = "Phone number must be exactly 10 digits";
                }
                break;

            case "email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Enter a valid email address";
                }
                break;
case "designation":
    if (!value.trim()) {
        error = "Designation is required";
    }
    break;

            case "website":
                if (value && !/^https?:\/\/.+/.test(value)) {
                    error = "Website must start with http:// or https://";
                }
                break;

            default:
                break;
        }

        return error;
    };


    return (
        <>
            {/* PAGE HEADER */}
            <section className="pt-5 pb-2 text-center">
                <div className="container">
                    <h1 className="fw-bold">Create Your Digital Business Card</h1>
                    <p className="text-muted">
                        Fill in your details and preview your digital card
                    </p>
                </div>
            </section>

            {/* FORM */}
            <section className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-8">
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-4">

                                <h4 className="mb-3 text-center">Enter Card Details</h4>

                                <form>
                                    <div className="row">

                                        {/* Full Name */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Full Name *</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                                                value={formData.fullName}
                                                onChange={handleChange}
                                            />
                                            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}

                                        </div>

                                        {/* Designation */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Designation *</label>

                                            <input
                                                type="text"
                                                name="designation"
                                                className={`form-control ${errors.designation ? "is-invalid" : ""}`}
                                                value={formData.designation}
                                                onChange={handleChange}
                                            />

                                            {errors.designation && (
                                                <div className="invalid-feedback">
                                                    {errors.designation}
                                                </div>
                                            )}
                                        </div>


                                        {/* Company */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="form-control"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Phone *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}

                                        </div>

                                        {/* WhatsApp */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">WhatsApp</label>
                                            <input
                                                type="tel"
                                                name="whatsapp"
                                                className="form-control"
                                                value={formData.whatsapp}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                                        </div>

                                        {/* Website */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Website</label>
                                            <input
                                                type="text"
                                                name="website"
                                                className="form-control"
                                                value={formData.website}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="form-control"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {/* Profile Image */}
                                        <div className="col-12 mb-3">
                                            <label className="form-label">Profile Photo / Logo</label>
                                            <input
                                                ref={fileRef}
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                        {/* About */}
                                        <div className="col-12 mb-3">
                                            <label className="form-label">About</label>
                                            <textarea
                                                name="about"
                                                className="form-control"
                                                rows="3"
                                                value={formData.about}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* LinkedIn */}
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                name="linkedin"
                                                className="form-control"
                                                placeholder="LinkedIn URL"
                                                value={formData.linkedin}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* Instagram */}
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Instagram</label>
                                            <div className="input-group">
                                                <span
                                                    className="input-group-text"
                                                    style={{ cursor: formData.instagram ? "pointer" : "default" }}
                                                    onClick={() =>
                                                        formData.instagram &&
                                                        window.open(formData.instagram, "_blank")
                                                    }
                                                >
                                                    <FaInstagram color="#E4405F" />
                                                </span>
                                                <input
                                                    type="text"
                                                    name="instagram"
                                                    className="form-control"
                                                    placeholder="Instagram profile link"
                                                    value={formData.instagram}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        {/* Facebook */}
                                        <div className="col-md-4 mb-3">
                                            <input
                                                type="text"
                                                name="facebook"
                                                className="form-control"
                                                placeholder="Facebook URL"
                                                value={formData.facebook}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">

                                        <button
                                            type="button"
                                            className="btn btn-outline-primary"
                                            onClick={() => {
                                                if (validateForm()) {
                                                    navigate("/preview-card", { state: formData });
                                                }
                                            }}
                                        >
                                            Preview Card
                                        </button>


                                        <button
                                            type="submit"
                                            className="btn btn-outline-primary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (validateForm()) {
                                                    alert("Form submitted successfully");
                                                }
                                            }}
                                        >
                                            Create My Card
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                            onClick={handleReset}
                                        >
                                            <FaRedo className="me-2" />
                                            Reset
                                        </button>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CreateCard;

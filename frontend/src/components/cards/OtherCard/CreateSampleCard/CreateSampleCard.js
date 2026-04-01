
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import { useState } from "react";

import SampleCard from "../SampleCard";

import BasicDetailsForm from "./BasicDetailsForm";
import GalleryForm from "./GalleryForm";
import ServicesForm from "./ServicesForm";
import AppointmentForm from "./AppointmentForm";
import BusinessHoursForm from "./BusinessHoursForm";
import ProductForm from "./ProductForm";
import BlogForm from "./BlogForm";
import TestimonialForm from "./TestimonialForm";
import PaymentForm from "./PaymentForm";
import InquiryForm from "./InquiryForm";


import {
  defaultGallery,
  defaultServices,
  defaultProducts,
  defaultTestimonials,
  defaultBusinessHours,
  defaultBlogs
} from "../DefaultData";

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
    telegram: "",

    gallery: [],
    services: [],
    products: [],
   // businessHours: defaultBusinessHours,
      businessHours: defaultBusinessHours.map((item) => ({ ...item })),
    blogs:[],
testimonials:[],


appointmentEnabled: false,
appointmentDate: null,

showGallery: true,
showServices: true,
showAppointment: true,
  showProducts: true,
  showBlogs: true,
  showTestimonials: true,
  showBusinessHours: true,
  showPayment: true,
showInquiry: true,
payment: {},
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
const datePickerRef = useRef(null);
const [blogs, setBlogs] = useState([
  {
    image: "",
    title: "",
    description: ""
  }
]);

const toggleAllSections = (checked) => {
  setFormData((prev) => ({
    ...prev,
    showGallery: checked,
    showServices: checked,
    showAppointment: checked,
    showProducts: checked,
    showBlogs: checked,
    showTestimonials: checked,
    showBusinessHours: checked,
    showPayment: checked,
    showInquiry: checked
  }));
};
const allSelected =
  formData.showGallery &&
  formData.showServices &&
  formData.showAppointment &&
  formData.showProducts &&
  formData.showBlogs &&
  formData.showTestimonials &&
  formData.showBusinessHours &&
  formData.showPayment &&
  formData.showInquiry;
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
  }; 

  {/*Handle Reset*/}
  const handleReset = () => {
  const confirmReset = window.confirm("Reset form?");

  if (confirmReset) {
    setFormData({
      ...initialFormData,
      businessHours: defaultBusinessHours.map((item) => ({ ...item }))
    });
    setErrors({});
  }
};

  /* ================= DYNAMIC LIST UPDATE ================= */

  const updateList = (section, index, field, value) => {
  setFormData((prev) => {
    const updated = prev[section].map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );

    return {
      ...prev,
      [section]: updated
    };
  });
};

  /* ================= ADD ITEM ================= */

  const addItem = (section, template) => {

    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], template]
    }));
  };

  /* ================= REMOVE ITEM ================= */

  const removeItem = (section, index) => {

    const updated = [...formData[section]];

    updated.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      [section]: updated
    }));
  };

  return (


    // ================= JSX =================

    <div className="container-fluid py-4">

      <h3 className="text-center mb-4">
        Create Sample Digital Card
      </h3>

      <div className="row align-items-start">

        {/* ================= FORM ================= */}
        <div className="col-md-6 border rounded p-4 ms-5">

          <form onSubmit={handleSave}>
             {/* ================= BASIC DETAILS FORM ================= */}
<BasicDetailsForm
  formData={formData}
  setFormData={setFormData}
  errors={errors}
  handleChange={handleChange}
  handlePhoneChange={handlePhoneChange}
  handleWhatsappChange={handleWhatsappChange}
  handleImageChange={handleImageChange}
/>
            {/* ================CUSTOMIZE SECTIONS========== */}
<div className="border p-3 mb-4 rounded">
  <h5 className="text-center mb-3">Customize Sections</h5>
  <div className="d-flex justify-content-end mb-3">

  <div className="form-check form-switch d-flex align-items-center">
    <input
      type="checkbox"
      className="form-check-input"
      checked={allSelected}
      onChange={(e) => toggleAllSections(e.target.checked)}
    />
    <label className="form-check-label ms-2">
      {allSelected ? "Deselect All" : "Select All"}
    </label>
  </div>

</div>
<div className="row text-center">
{/* Gallery */}
<div className="col-md-3">
  <label>Gallery</label>
  <div className="form-check form-switch d-flex justify-content-center">
    <input
      type="checkbox"
      className="form-check-input"
      checked={formData.showGallery}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          showGallery: e.target.checked
        }))
      }
    />
  </div>
</div>

{/* Services */}
<div className="col-md-3">
  <label>Services</label>
  <div className="form-check form-switch d-flex justify-content-center">
    <input
      type="checkbox"
      className="form-check-input"
      checked={formData.showServices}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          showServices: e.target.checked
        }))
      }
    />
  </div>
</div>

{/* Appointment */}
<div className="col-md-3">
  <label>Appointment</label>
  <div className="form-check form-switch d-flex justify-content-center">
    <input
      type="checkbox"
      className="form-check-input"
      checked={formData.showAppointment}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          showAppointment: e.target.checked
        }))
      }
    />
  </div>
</div>

    {/* Products */}
    <div className="col-md-3">
      <label>Products</label>
      <div className="form-check form-switch d-flex justify-content-center">
        <input
          type="checkbox"
          className="form-check-input"
          checked={formData.showProducts}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              showProducts: e.target.checked
            }))
          }
        />
      </div>
    </div>

</div>
  <div className="row text-center">

    {/* Blogs */}
    <div className="col-md-3">
      <label>Blogs</label>
      <div className="form-check form-switch d-flex justify-content-center">
        <input
          type="checkbox"
          className="form-check-input"
          checked={formData.showBlogs}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              showBlogs: e.target.checked
            }))
          }
        />
      </div>
    </div>

    {/* Testimonials */}
    <div className="col-md-3">
      <label>Testimonials</label>
      <div className="form-check form-switch d-flex justify-content-center">
        <input
          type="checkbox"
          className="form-check-input"
          checked={formData.showTestimonials}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              showTestimonials: e.target.checked
            }))
          }
        />
      </div>
    </div>

    {/* Business Hours */}
    <div className="col-md-3">
      <label>Business Hours</label>
      <div className="form-check form-switch d-flex justify-content-center">
        <input
          type="checkbox"
          className="form-check-input"
          checked={formData.showBusinessHours}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              showBusinessHours: e.target.checked
            }))
          }
        />
      </div>
    </div>

{/* Payment */}
<div className="col-md-3">
  <label>Payment</label>
  <div className="form-check form-switch d-flex justify-content-center">
    <input
      type="checkbox"
      className="form-check-input"
      checked={formData.showPayment}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          showPayment: e.target.checked
        }))
      }
    />
  </div>
</div>

{/* Inquiry */}
<div className="col-md-3">
  <label>Inquiry</label>
  <div className="form-check form-switch d-flex justify-content-center">
    <input
      type="checkbox"
      className="form-check-input"
      checked={formData.showInquiry}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          showInquiry: e.target.checked
        }))
      }
    />
  </div>
</div>

  </div>
</div>


{/*========== FORM DATA */}
{/* Gallery */}
{formData.showGallery && (
  <GalleryForm
    gallery={formData.gallery}
    setFormData={setFormData}
    addItem={addItem}
    removeItem={removeItem}
  />
)}

{/* Services */}
{formData.showServices && (
  <ServicesForm
    services={formData.services}
    updateList={updateList}
    addItem={addItem}
    removeItem={removeItem}
  />
)}

{/* Appointment */}
{formData.showAppointment && (
  <AppointmentForm
    formData={formData}
    setFormData={setFormData}
    datePickerRef={datePickerRef}
  />
)}

{/* ================= BUSINESS HOURS =================  */}
{formData.showBusinessHours && (
  <BusinessHoursForm
    formData={formData}
    setFormData={setFormData}
  />
)}

{/* ================= PRODUCTS =================  */}
{formData.showProducts && (
  
<ProductForm
  products={formData.products}
  updateList={updateList}
  addItem={addItem}
  removeItem={removeItem}
/>

)}


{/* =================  BLOG =================  */}
{formData.showBlogs && (
  <BlogForm
    blogs={formData.blogs}
    updateList={updateList}
    addItem={addItem}
    removeItem={removeItem}
  />
)}

{/* =================  TESTIMONIALS =================  */}
{formData.showTestimonials && (
  <TestimonialForm
    testimonials={formData.testimonials}
    updateList={updateList}
    addItem={addItem}
    removeItem={removeItem}
  />
)}


{/* =================  PAYMENT =================  */}
{formData.showPayment && (
  <PaymentForm
    formData={formData}
    setFormData={setFormData}
  />
)}
 {/* Buttons */}

            <button className="btn btn-primary w-50 ">
              Create Card
            </button>

            <button
              type="button"
              className="btn btn-danger w-50"
              onClick={handleReset}
            >
              Reset Card
            </button>


           
          </form>

        </div>



        {/* ================= PREVIEW ================= */}

        <div className="col-md-4 ms-4">

          <SampleCard
            data={formData}
           formData={formData}
            showAllIcons={true}
            
            slug={null}
            publicUrl="preview"
            
          />

        </div>

      </div>

    </div>

  );
}

export default CreateSampleCard;
import React from "react";
import "./SampleCard.css";
import { QRCodeCanvas } from "qrcode.react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useState,useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

import CardActions from "../../CardActions";
import defaultProfile from "../../../assets/images/digital-demo-card.png";

import {
  defaultGallery,
  defaultServices,
  defaultProducts,
  defaultTestimonials,
  defaultBusinessHours,
  defaultBlogs,
  defaultPayment,
  defaultCardData
} from "./DefaultData";


import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane
} from "react-icons/fa";

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

const formatInstagramUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://instagram.com/${value.replace("@", "")}`;
};

const formatTwitterUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://twitter.com/${value.replace("@", "")}`;
};

export default function SampleCard({
  data = {},
  formData ={},
  showAllIcons = false,
  publicUrl,
  onDownload,
  slug
}) {
 
 const gallery = data.gallery?.length ? data.gallery : defaultGallery;

const services = data.services?.length ? data.services : defaultServices;

const products = data.products?.length ? data.products : defaultProducts;

const productsToShow =
  data?.products && data.products.length > 0
    ? data.products
    : defaultProducts;

const testimonials = data.testimonials?.length
  ? data.testimonials
  : defaultTestimonials;

const businessHours = data.businessHours?.length
  ? data.businessHours
  : defaultBusinessHours;

const blogs = data.blogs?.length ? data.blogs : defaultBlogs;

const payment = data?.payment && Object.keys(data.payment).length > 0
  ? data.payment
  : defaultPayment;

const galleryToShow =
  data.gallery && data.gallery.length > 0
    ? data.gallery
    : defaultGallery;

    const [inquiry, setInquiry] = useState({
  name: "",
  phone: "",
  email: "",
  message: ""
});
const isDisabled = !slug || slug === "preview";

const handleInquiryChange = (e) => {
  setInquiry({
    ...inquiry,
    [e.target.name]: e.target.value
  });
};

const handleInquirySubmit = async () => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/inquiries/slug/${slug}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inquiry)
      }
    );

    if (!res.ok) throw new Error();

    alert("Inquiry submitted successfully ✅");

    setInquiry({
      name: "",
      phone: "",
      email: "",
      message: ""
    });

  } catch {
    alert("Error submitting inquiry ❌");
  }
};
    const formatTime = (time) => {
  if (!time) return "";

  const [hour, minute] = time.split(":");
  const h = parseInt(hour);
  const suffix = h >= 12 ? "PM" : "AM";
  const formattedHour = h % 12 || 12;

  return `${formattedHour}:${minute} ${suffix}`;
};
const [selectedDate, setSelectedDate] = useState(null);
const datePickerRef = useRef(null);


  return (
    <div className="sc-card text-center">

      {/* Header */}
      <div className="sc-header">
<div className="sc-logo-box">
  <img
    src={data.logo || defaultProfile}
    alt="logo"
  />
</div>

        <h4 className="mt-4">
          {data.businessName || "Your Business Name"}
        </h4>

      </div>

      {/* Description */}
      <div className="px-4 mt-3">

        <h6 className="sc-tagline">
          {data.tagline || " platform for digital business"}
        </h6>

        <p>
          {data.description ||
            "Brief description of your business comes here."}
        </p>

      </div>

  {/* Contact Section */}
<div className="sc-contact-section px-4 mt-4">

  <div className="sc-contact-item">
    <div className="sc-icon-box phone">
      <FaPhoneAlt />
    </div>
    <span>{data.phone || "9518311798"}</span>
  </div>

  <div className="sc-contact-item">
    <div className="sc-icon-box email">
      <FaEnvelope />
    </div>
    <span>{data.email || "email@yoursite.com"}</span>
  </div>

  <div className="sc-contact-item">
    <div className="sc-icon-box website">
      <FaGlobe />
    </div>
    <span>{data.website || "www.yoursite.com"}</span>
  </div>

  <div className="sc-contact-item">
    <div className="sc-icon-box location">
      <FaMapMarkerAlt />
    </div>
    <span>{data.address || "12/34 Area, City - 456789"}</span>
  </div>

</div>
      {/* Social Icons */}
     <div className="sc-social-icons text-center mt-4 mb-3">

  {(!showAllIcons || data?.facebook) && (
    <a
      href={formatFacebookUrl(data?.facebook)}
      target="_blank"
      rel="noopener noreferrer"
      className="sc-social facebook"
    >
      <FaFacebookF />
    </a>
  )}

  {(!showAllIcons || data?.whatsapp) && (
    <a
      href={`https://wa.me/${data?.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="sc-social whatsapp"
    >
      <FaWhatsapp />
    </a>
  )}

  {(!showAllIcons || data?.linkedin) && (
    <a
      href={formatLinkedinUrl(data?.linkedin)}
      target="_blank"
      rel="noopener noreferrer"
      className="sc-social linkedin"
    >
      <FaLinkedinIn />
    </a>
  )}

  {(!showAllIcons || data?.youtube) && (
    <a
      href={formatYoutubeUrl(data?.youtube)}
      target="_blank"
      rel="noopener noreferrer"
      className="sc-social youtube"
    >
      <FaYoutube />
    </a>
  )}


  {(!showAllIcons || data?.twitter) && (
    <a
      href={formatTwitterUrl(data?.twitter)}
      target="_blank"
      rel="noopener noreferrer"
      className="sc-social twitter"
    >
      <FaTwitter />
    </a>
  )}

  {(!showAllIcons || data?.instagram) && (
    <a
      href={formatInstagramUrl(data?.instagram)}
      target="_blank"
      rel="noopener noreferrer"
      className="sc-social instagram"
    >
      <FaInstagram />
    </a>
  )}
  {(!showAllIcons || data?.telegram) && (
    <a
      href={data?.telegram}
      target="_blank"
      rel="noopener noreferrer"
      className="sc-social telegram"
    >
      <FaTelegramPlane />
    </a>
  )}

</div>
{/* Gallery */}
{(
  slug !== "preview" ||
  (slug === "preview" && formData?.showGallery)
) && (
  <div className="sc-section">
    <h5>Gallery</h5>

    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      className="sc-gallery-slider"
    >
      {galleryToShow.map((img, index) => (
        <SwiperSlide key={index}>
          <img
  src={
    img.preview
      ? img.preview // preview (instant UI)
      : img.image
       ? img.image   //  DIRECT USE // from backend
      : img.url // default
  }
  className="sc-gallery-img"
  alt={img.name || "gallery"}
/>

        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)}
{/* Our Services */}
{(
  (slug === "preview" && formData?.showServices) ||
(slug !== "preview")
) && ( 
  <div className="sc-section">
  <h5>Our Services</h5>

  <div className="row">
    {services.map((service, index) => (
      <div className="col-6 mb-3" key={index}>
        <div className="sc-service-card">
          <img src={service.image} alt="service" />
          <h6>{service.title}</h6>
          <p>{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
)}

{/* Make Appointment */}
{(
  slug !== "preview" ||
  (slug === "preview" && formData?.showAppointment)
) && (
  <div className="sc-section">
  <h5>Make an Appointment</h5>

  {/* ALWAYS visible button */}
  <button className="btn btn-warning w-100">
    Book Appointment
  </button>

  {/* Show date ONLY if selected */}
  {data.appointmentDate && (
    <small className="d-block mt-2 text-center">
      Selected: {new Date(data.appointmentDate).toLocaleDateString()}
    </small>
  )}
</div>
)}
{/* Business Hours */}
{(
  slug !== "preview" ||
  (slug === "preview" && formData?.showBusinessHours)
) && (
  <div className="sc-section">
    <h5>Business Hours</h5>

    {(data?.businessHours?.length
      ? data.businessHours
      : defaultBusinessHours
    ).map((hour, index) => (
      <div key={index} className="sc-hours d-flex justify-content-between">
        <span>{hour.day}</span>

        <span>
          {hour.open
            ? `${formatTime(hour.start)} - ${formatTime(hour.end)}`
            : "Closed"}
        </span>
      </div>
    ))}
  </div>
)}

{/* Products */}
{(
  slug !== "preview" ||
  (slug === "preview" && formData?.showProducts)
) && (
  <div className="sc-section">
    <h5>Products</h5>

    <div className="row">
      {(data?.products?.length
        ? data.products
        : defaultProducts
      ).map((product, index) => (
        <div className="col-6 mb-3" key={index}>
          <div className="sc-product-card">

            <img src={product.image} alt="product" />

            <h6>{product.name}</h6>

            <span>₹{product.price}</span>

          </div>
        </div>
      ))}
    </div>
  </div>
)}

{/* Blog */}
{(
  slug !== "preview" ||
  (slug === "preview" && formData?.showBlogs)
) && (
  <div className="sc-section">
    <h5>Blog</h5>

    {(data?.blogs?.length
      ? data.blogs
      : defaultBlogs
    ).map((blog, index) => (
      <div key={index} className="sc-blog">
        <div className="sc-blog-img-box">
 <img
  src={
    blog.image
      ? blog.image
      : "https://via.placeholder.com/300x150?text=Default+Blog"
  }
  alt="blog"
/>
</div>
        <h6>{blog.title || "Blog Title"}</h6>
        <p>{blog.description || "Blog description..."}</p>
      </div>
    ))}
  </div>
)}

{/* Testimonials */}{(
  //  ALWAYS SHOW on PUBLIC page
  slug !== "preview" ||

  //  In preview → show only if enabled
  (slug === "preview" && formData?.showTestimonials)
) && (
  <div className="sc-section">
    <h5>Testimonials</h5>

    {(data?.testimonials?.length
      ? data.testimonials
      : defaultTestimonials
    ).map((item, index) => (
      <div key={index} className="sc-testimonial">
        <p>"{item.message}"</p>
        <strong>{item.name}</strong>
      </div>
    ))}
  </div>
)}
{/*  QR Code
<div className="sc-section text-center">
  <h5>QR Code</h5>

  <QRCodeCanvas value={publicUrl} size={120} />
  <p className="mt-2">Scan to save contact details</p>
</div>  */}

{/* Payment Details */}{(
  slug !== "preview" ||
  (slug === "preview" && formData?.showPayment)
) && (
  <div className="sc-section">
    <h5>Payment Details</h5>

    <div className="sc-payment-card">
      <div className="sc-payment-row">
        <strong>UPI ID:</strong>
        <span>{payment.upiId}</span>
      </div>

      <div className="sc-payment-row">
        <strong>Account Name:</strong>
        <span>{payment.accountName}</span>
      </div>

      <div className="sc-payment-row">
        <strong>Bank Name:</strong>
        <span>{payment.bankName}</span>
      </div>

      <div className="sc-payment-row">
        <strong>Account No:</strong>
        <span>{payment.accountNumber}</span>
      </div>

      <div className="sc-payment-row">
        <strong>IFSC:</strong>
        <span>{payment.ifsc}</span>
      </div>

      <p className="sc-payment-note">
        {payment.paymentNote}
      </p>
    </div>
  </div>
)}
{/* Inquiry Form */}
{(
  slug !== "preview" ||
  (slug === "preview" && formData?.showInquiry)
) && (
 <div className="sc-section">
  <h5>Inquiries</h5>

  <fieldset disabled={isDisabled}>

    <input
      name="name"
      className="form-control mb-2"
      placeholder="Your Name"
      value={isDisabled ? "" : inquiry.name}
      onChange={handleInquiryChange}
    />

    <input
      name="phone"
      className="form-control mb-2"
      placeholder="Phone Number"
      value={isDisabled ? "" : inquiry.phone}
      onChange={handleInquiryChange}
    />

    <input
      name="email"
      className="form-control mb-2"
      placeholder="Email Address"
      value={isDisabled ? "" : inquiry.email}
      onChange={handleInquiryChange}
    />

    <textarea
      name="message"
      className="form-control mb-2"
      placeholder="Type your message"
      value={isDisabled ? "" : inquiry.message}
      onChange={handleInquiryChange}
    />

    <button
      className="btn btn-warning w-100"
      onClick={handleInquirySubmit}
      disabled={isDisabled}
      title={isDisabled ? "Not available in preview" : ""}
    >
      Send Message
    </button>

  </fieldset>

</div>
)}
 {/* Card Actions */}
      <CardActions
  slug={slug}
  publicUrl={publicUrl}
  onDownload={onDownload}
   variant="dark"
/>
    </div>
  );
}
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
  showAllIcons = false,
  publicUrl,
  onDownload,
  slug
}) {
 
 const gallery = data.gallery?.length ? data.gallery : defaultGallery;

const services = data.services?.length ? data.services : defaultServices;

const products = data.products?.length ? data.products : defaultProducts;

const testimonials = data.testimonials?.length
  ? data.testimonials
  : defaultTestimonials;

const businessHours = data.businessHours?.length
  ? data.businessHours
  : defaultBusinessHours;

const blogs = data.blogs?.length ? data.blogs : defaultBlogs;

const payment = data.payment || defaultPayment;

const galleryToShow =
  data.gallery && data.gallery.length > 0
    ? data.gallery
    : defaultGallery;

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
{/* Gallery */}{/* Gallery */}
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
          src={img.url}
          className="sc-gallery-img"
          alt={img.name || "gallery"}
        />

      </SwiperSlide>
    ))}

  </Swiper>

</div>
{/* Our Services */}
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

{/* Make Appointment */}
{/* Make Appointment */}
<div className="sc-section">
  <h5>Make an Appointment</h5>

  <div className="sc-appointment-box">

    <DatePicker
      ref={datePickerRef}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      minDate={new Date()}
      dateFormat="dd/MM/yyyy"
      className="d-none"
    />

    <button
      className="btn btn-warning w-100 sc-appointment-btn"
      onClick={() => datePickerRef.current.setOpen(true)}
    >
      
      Book Appointment
      <FaCalendarAlt className="me-2" />
    </button>

  </div>
</div>
{/* Business Hours */}
<div className="sc-section">
  <h5>Business Hours</h5>

  {businessHours.map((hour, index) => (
    <div key={index} className="sc-hours">
      <span>{hour.day}</span>
      <span>{hour.time}</span>
    </div>
  ))}
</div>



{/* Products */}
<div className="sc-section">
  <h5>Products</h5>

  <div className="row">
    {products.map((product, index) => (
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


{/* Blog */}
<div className="sc-section">
  <h5>Blog</h5>

  {blogs.map((blog, index) => (
    <div key={index} className="sc-blog">
      <img src={blog.image} alt="blog" />
      <h6>{blog.title}</h6>
      <p>{blog.description}</p>
    </div>
  ))}
</div>


{/* Testimonials */}
<div className="sc-section">
  <h5>Testimonials</h5>

  {testimonials.map((item, index) => (
    <div key={index} className="sc-testimonial">
      <p>"{item.message}"</p>
      <strong>{item.name}</strong>
    </div>
  ))}
</div>


{/*  QR Code
<div className="sc-section text-center">
  <h5>QR Code</h5>

  <QRCodeCanvas value={publicUrl} size={120} />
  <p className="mt-2">Scan to save contact details</p>
</div>  */}

{/* Payment Details */}
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

{/* Inquiry Form */}
<div className="sc-section">
  <h5>Inquiries</h5>

  <input className="form-control mb-2" placeholder="Your Name" />
  <input className="form-control mb-2" placeholder="Phone Number" />
  <input className="form-control mb-2" placeholder="Email Address" />
  <textarea
    className="form-control mb-2"
    placeholder="Type your message"
  />

  <button className="btn btn-warning w-100">
    Send Message
  </button>
</div>
 {/* Card Actions */}
      <CardActions
        slug={slug}
        publicUrl={publicUrl}
        onDownload={onDownload}
      />
    </div>
  );
}
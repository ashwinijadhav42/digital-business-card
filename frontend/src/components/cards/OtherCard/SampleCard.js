import React from "react";
import "./SampleCard.css";
import { QRCodeCanvas } from "qrcode.react";
import CardActions from "../../CardActions";
import defaultProfile from "../../../assets/images/card-logo.jpg";

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

  return (
    <div className="sc-card text-center">

      {/* Header */}
      <div className="sc-header">

        <div className="sc-logo-box">
  {data.logo ? (
    <img src={data.logo} alt="logo" />
  ) : (
    <span>YOUR LOGO</span>
  )}
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

      {/* Card Actions */}
      <CardActions
        slug={slug}
        publicUrl={publicUrl}
        onDownload={onDownload}
      />

    </div>
  );
}
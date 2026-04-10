import React from "react";
import "./DoctorCard4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QRCodeCanvas } from "qrcode.react";
import { FaGlobe, FaTwitter, FaInstagram, FaTumblr, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function DoctorCard4() {
  return (
    <div className="dc4-main-bg  ">
      <div className=" py-3 dc3-card-container  ">

        {/* Cover Image */}
        
      <div className="dc4-section-wrapper">
          <div className="mb-3">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            className="img-fluid rounded-4"
            alt="cover"
          />
        </div>
</div>

 {/* Social Icons */}
  <div className="dc4-section-wrapper">
  <div className="dc3-social-wrapper dc3-inner-white">
    <div className="dc3-social-icons dc3-inner-alt">

      <a href="https://infyom.com/" target="_blank" rel="noreferrer">
        <FaGlobe />
      </a>

      <a href="https://x.com/" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>

      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>

      <a href="https://tumblr.com/" target="_blank" rel="noreferrer">
        <FaTumblr />
      </a>

      <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>

      <a href="https://whatsapp.com/" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>

    </div>
  </div>
</div>

 {/* Contact */}
     <div className="dc3-contact-wrapper position-relative">
  <div className="dc3-vector-bg">
    <img
      src="https://vcards.infyom.com/assets/img/vcard13/vector-img2.png"
      alt="vector"
    />
  </div>

  <div className="dc4-section-wrapper">
  <h4 className="text-center fw-bold m-4 ">Contact</h4>


  {/* FIXED STRUCTURE */}
  <div className="dc3-inner-white">
    <div className="row g-3 m-0"> 
      {[
        { icon: "email.svg", text: "info@cityhospital.in", link: "mailto:info@cityhospital.in" },
        { icon: "email.svg", text: "contact@cityhospital.org", link: "mailto:contact@cityhospital.org" },
        { icon: "phone.svg", text: "+91 9810245678", link: "tel:+919810245678" },
        { icon: "phone.svg", text: "+91 9899011223", link: "tel:+919899011223" },
        { icon: "dob-icon.svg", text: "12th June, 1885" },
        { icon: "location.svg", text: "New Delhi, India" }
      ].map((item, i) => (
        <div className="col-6" key={i}>
          <div className="dc3-inner-alt">
            <div className="dc3-contact-box">
              <img
                src={`https://vcards.infyom.com/assets/img/vcard13/${item.icon}`}
                alt=""
                width="30"
              />
              <div className="mt-2">
                {item.link ? (
                  <a href={item.link} className="text-dark small">
                    {item.text}
                  </a>
                ) : (
                  <span className="small text-dark">{item.text}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
        {/* Profile */}
      <div className="dc4-section-wrapper" >
        <div className="card m-3 dc3-profile-card ">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="dc3-profile-img d-block mx-auto "
            alt="profile"
          />
          <h3 className="mt-2 mb-0">Dr. Rishi Verma</h3>
          <small className="text-muted">Cardiologist</small>
          <p className="dc3-profile-desc">
            A dedicated healthcare professional providing advanced cardiac care.
          </p>
        </div>
</div>
       
       
        {/* QR */}
       <div className="dc3-section-wrapper position-relative">
  
  <h4 className="text-center fw-bold m-4 ">QR Code</h4>

  <div className="dc3-inner-white text-center">
    <QRCodeCanvas value="https://yourcard.com" size={120} />
  </div>
</div>

       {/* Services */}
<div className="dc3-section-wrapper position-relative">
  <h4 className="text-center fw-bold m-4">Our Services</h4>

  <div className="dc3-inner-white">
    <div className="row g-3">

      {[
        {
          title: "Emergency Services (ER)",
          img: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/services/21251/24-hours.jpg",
          desc: "24/7 urgent care for trauma, heart attacks, strokes, and other critical conditions."
        },
        {
          title: "Surgical Services",
          img: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/services/21252/surgeon.jpg",
          desc: "General and specialized surgeries such as orthopedic, cardiac, neurological, and minimally invasive procedures."
        },
        
        {
          title: "Pharmacy Services",
          img: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/services/21253/pharmacist.jpg",
          desc: "On-site pharmacy offering prescription medications and medical supplies."
        },
        {
          title: "Laboratory Services",
          img: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/services/21254/Lab.jpg",
          desc: "Blood tests, biopsies, and other diagnostic tests for disease detection and monitoring."
        },
        {
          title: "Radiology & Imaging",
          img: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/services/21255/radiology.jpg",
          desc: "Diagnostic imaging services such as X-ray, MRI, CT scan, ultrasound, and mammography."
        },{
          title: "ICU (ER)",
          img: "https://infyvcards-demo.nyc3.digitaloceanspaces.com/vcards/services/21251/24-hours.jpg",
          desc: "24/7 urgent care for trauma, heart attacks, strokes, and other critical conditions."
        }
      ].map((service, i) => (
        <div className="col-12 col-sm-6" key={i}>
          <div className="dc3-inner-alt h-100">
            <div className="dc3-service-box h-100">

              {/* Image */}
              <img
                src={service.img}
                className="img-fluid rounded-3 mb-2"
                alt={service.title}
              />

              {/* Title */}
              <h6 className="fw-bold text-center">
                {service.title}
              </h6>

              {/* Description */}
              <p className="small text-muted text-center mb-0">
                {service.desc}
              </p>

            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</div>

        {/* Gallery */}
        <div className="dc3-section-wrapper position-relative">
  <h4 className="text-center fw-bold m-4 ">Gallery</h4>

  <div className="dc3-inner-white">
    <img
      src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
      className="img-fluid rounded-4"
      alt=""
    />
  </div>
</div>

        {/* Products */}
        <div className="dc3-section-wrapper position-relative">
  <h4 className="text-center fw-bold m-4 ">Products</h4>

  <div className="row g-3 dc3-inner-white">
    {[1,2].map(i => (
      <div className="col-6 dc3-inner-alt" key={i}>
        <div className="dc3-product-box text-center">
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
            className="img-fluid rounded-3"
            alt=""
          />
          <div className="mt-2 text-center ">
            <small>Health Package</small>
            <div className="fw-bold">₹1500</div>
            <button className="btn btn-success btn-sm mt-1 rounded-pill">View</button>
          </div>
          
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Testimonials */}
       <div className="dc3-section-wrapper position-relative">
  <h4 className="text-center fw-bold m-4 ">Testimonials</h4>

  <div className="dc3-inner-white text-center">
    <p className="small text-muted">
      "Excellent treatment and care provided!"
    </p>
  </div>
</div>
        {/* Blog */}
        <div className="dc3-section-wrapper position-relative">
  <h4 className="text-center fw-bold m-4 ">Blog</h4>

  <div className="dc3-inner-white">
    <img
      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
      className="img-fluid rounded-4"
      alt=""
    />
    <p className="mt-2 small text-center">
      The Role of Smart Hospitals
    </p>
  </div>
</div>

        {/* Business Hours */}
        <div className="dc3-section-wrapper position-relative">
  <h4 className="text-center fw-bold m-4 ">Business Hours</h4>

  <div className="dc3-inner-white text-center">
    <div className="small text-muted">
      Mon - Sat: 10 AM - 6 PM
    </div>
  </div>
</div>

        {/* Appointment */}
        <div className="dc3-section-wrapper position-relative">
  <h4 className="text-center fw-bold m-4 ">Make an Appointment</h4>

  <div className="dc3-inner-white">
    <input className="form-control rounded-pill mb-2" placeholder="Your Name" />
    <button className="btn btn-primary w-100 rounded-pill">Submit</button>
  </div>
</div>

        {/* Payment */}
        <div className="dc3-section-wrapper position-relative">
 <h4 className="text-center fw-bold m-4 ">Payment Links</h4>

  <div className="dc3-inner-white text-center">
    <button className="btn btn-success rounded-pill">Pay Now</button>
  </div>
</div>
        {/* Inquiry */}
        <div className="dc3-section-wrapper position-relative">
  <h4 className="text-center fw-bold m-4 ">Inquiry</h4>

  <div className="dc3-inner-white">
    <input className="form-control mb-2 rounded-pill dc3-inner-alt" placeholder="Name" />
    <input className="form-control mb-2 rounded-pill dc3-inner-alt" placeholder="Email" />
    <textarea className="form-control mb-2 rounded-4 dc3-inner-alt" placeholder="Message" />
    <button className="btn btn-primary w-100 rounded-pill">Send Message</button>
  </div>
</div>

      </div>
    </div>
  );
}
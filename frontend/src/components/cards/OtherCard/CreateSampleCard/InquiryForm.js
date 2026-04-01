import React, { useState } from "react";

function InquiryForm({ formData, setFormData }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      inquiry: {
        ...prev.inquiry,
        [field]: value
      }
    }));
  };

  return (
    <>
      <h5 className="mt-4 text-center">Inquiry</h5>

      <div className="text-center mb-3">
        <button
          type="button"
          className="btn btn-success w-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close Inquiry" : "+ Add Inquiry"}
        </button>
      </div>

      {isOpen && (
        <div className="border p-3 rounded">

          <input
            className="form-control mb-2"
            placeholder="Your Name"
            value={formData.inquiry?.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <input
            className="form-control mb-2"
            placeholder="Phone Number"
            value={formData.inquiry?.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <input
            className="form-control mb-2"
            placeholder="Email Address"
            value={formData.inquiry?.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <textarea
            className="form-control mb-2"
            placeholder="Type your message"
            value={formData.inquiry?.message || ""}
            onChange={(e) => handleChange("message", e.target.value)}
          />

          <button className="btn btn-warning w-100">
            Send Message
          </button>

        </div>
      )}
    </>
  );
}

export default InquiryForm;
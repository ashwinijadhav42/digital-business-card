import React, { useState } from "react";

function PaymentForm({ formData, setFormData }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      payment: {
        ...prev.payment,
        [field]: value
      }
    }));
  };

  return (
    <>
      {/* Button */}
      <h5 className="mt-4 text-center">Payment</h5>

      <div className="text-center mb-3">
        <button
          type="button"
          className="btn btn-success w-50 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close Payment" : "+ Add Payment"}
        </button>
      </div>

      {/* Form */}
      {isOpen && (
        <div className="border p-3 rounded">

          <input
            className="form-control mb-2"
            placeholder="UPI ID"
            value={formData.payment?.upiId || ""}
            onChange={(e) => handleChange("upiId", e.target.value)}
          />

          <input
            className="form-control mb-2"
            placeholder="Account Name"
            value={formData.payment?.accountName || ""}
            onChange={(e) => { 
              const value = e.target.value;
              const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "");
              handleChange("accountName", onlyLetters);
              }
            }
          />

          <input
            className="form-control mb-2"
            placeholder="Bank Name"
            value={formData.payment?.bankName || ""}
            onChange={(e) => handleChange("bankName", e.target.value)}
          />

          <input
            className="form-control mb-2"
            placeholder="Account Number"
            value={formData.payment?.accountNumber || ""}
            onChange={(e) =>  { 
               const value = e.target.value;
               if (/^\d*$/.test(value)) {
                handleChange("accountNumber", value);
                }
               }
            }
          />

          <input
            className="form-control mb-2"
            placeholder="IFSC Code"
            value={formData.payment?.ifsc || ""}
            maxLength={11}
            onChange={(e) => {
              const value = e.target.value.toUpperCase();
              if(/^[A-Z0-9]*$/.test(value)) {
                handleChange("ifsc",value);
              }
              }
            }
          />

          <textarea
            className="form-control"
            placeholder="Payment Note"
            value={formData.payment?.paymentNote || "You can pay using UPI or bank transfer"}
            onChange={(e) => handleChange("paymentNote", e.target.value)}
          />

        </div>
      )}
    </>
  );
}

export default PaymentForm;
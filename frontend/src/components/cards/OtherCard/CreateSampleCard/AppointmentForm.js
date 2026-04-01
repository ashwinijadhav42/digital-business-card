import React from "react";
import DatePicker from "react-datepicker";

function AppointmentForm({ formData, setFormData, datePickerRef }) {

  return (
    <>
      <h5 className="mt-4 text-center">Appointment</h5>

      <div className="d-flex justify-content-center mt-3">

        {/* Enable Toggle */}
        <div className="btn btn-success w-50 form-check d-flex align-items-center justify-content-center">
          <input
            type="checkbox"
            className="form-check-input m-1"
            checked={formData.appointmentEnabled}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                appointmentEnabled: e.target.checked
              }))
            }
          />
          <label className="form-check-label mb-0">
            Enable Appointment Booking
          </label>
        </div>

        {/* Date Picker */}
        {formData.appointmentEnabled && (
          <DatePicker
            ref={datePickerRef}
            selected={formData.appointmentDate}
            onChange={(date) =>
              setFormData((prev) => ({
                ...prev,
                appointmentDate: date
              }))
            }
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="form-control m-2"
            placeholderText="Select Appointment Date"
          />
        )}

      </div>
    </>
  );
}

export default AppointmentForm;
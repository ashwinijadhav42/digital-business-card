import React, { useState } from "react";

function BusinessHoursForm({ formData, setFormData }) {

  const [showHours, setShowHours] = useState(false); // default hidden

  const updateList = (index, field, value) => {
    const updated = [...formData.businessHours];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      businessHours: updated
    }));
  };

  // Toggle all days
  const toggleAllDays = (checked) => {
    const updated = formData.businessHours.map((day) => ({
      ...day,
      open: checked
    }));

    setFormData((prev) => ({
      ...prev,
      businessHours: updated
    }));
  };

  const allOpen = formData.businessHours.every((d) => d.open);

  return (
    <>
      {/* Center Heading */}
      <h5 className="mt-4 text-center">Business Hours</h5>

      {/*  Show Button */}
      <div className="text-center mt-2">
        <button
          type="button"
          className="btn btn-success w-50 "
          onClick={() => setShowHours(!showHours)}
        >
         {showHours ? "▲ Close Business Hours" : "▼ Set Business Hours"}
        </button>
      </div>

      {/* Show content only when clicked */}
      {showHours && (
        <>
          {/* Open All Toggle */}
          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                checked={allOpen}
                onChange={(e) => toggleAllDays(e.target.checked)}
              />
              <label className="form-check-label ms-2">
                {allOpen ? "Close All Days" : "Open All Days"}
              </label>
            </div>
          </div>

          {/* Days List */}
          {formData.businessHours.map((hour, index) => (
            <div key={index} className="border rounded p-2 mb-2">

              <div className="d-flex justify-content-between align-items-center">
                <strong>{hour.day}</strong>

                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={hour.open}
                    onChange={(e) =>
                      updateList(index, "open", e.target.checked)
                    }
                  />
                </div>
              </div>

              {hour.open ? (
                <div className="d-flex gap-2 mt-2">
                  <input
                    type="time"
                    className="form-control"
                    value={hour.start}
                    onChange={(e) =>
                      updateList(index, "start", e.target.value)
                    }
                  />

                  <input
                    type="time"
                    className="form-control"
                    value={hour.end}
                    onChange={(e) =>
                      updateList(index, "end", e.target.value)
                    }
                  />
                </div>
              ) : (
                <small className="text-muted d-block mt-2">
                  Closed
                </small>
              )}

            </div>
          ))}
        </>
      )}
    </>
  );
}

export default BusinessHoursForm;
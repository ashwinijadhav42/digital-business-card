import React from "react";

function TestimonialForm({ testimonials, updateList, addItem, removeItem }) {
  return (
    <>
      <h5 className="mt-4 text-center">Testimonials</h5>

      <div className="row">
        {testimonials.map((item, index) => (

          <div key={index} className="col-md-6 mb-3">
            <div className="border p-2 h-100">

              {/* Message */}
              <textarea
                placeholder="Testimonial Message"
                className="form-control mb-2"
                value={item.message}
                onChange={(e) =>
                  updateList("testimonials", index, "message", e.target.value)
                }
              />

              {/* Name */}
              <input
                type="text"
                placeholder="Customer Name"
                className="form-control mb-2"
                value={item.name}
                onChange={(e) =>
                  updateList("testimonials", index, "name", e.target.value)
                }
              />

              {/* Remove */}
              <button
                type="button"
                className="btn btn-danger btn-sm w-100 mt-2"
                onClick={() => removeItem("testimonials", index)}
              >
                Remove
              </button>

            </div>
          </div>

        ))}
      </div>

      {/* Add Button */}
      <div className="text-center">
        <button
          type="button"
          className="btn btn-success w-50 mt-3"
          onClick={() =>
            addItem("testimonials", {
              message: "",
              name: ""
            })
          }
        >
          + Add Testimonial
        </button>
      </div>
    </>
  );
}

export default TestimonialForm;
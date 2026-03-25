import React from "react";

function ServicesForm({ services, updateList, addItem, removeItem }) {
  return (
    <>
      <h5 className="mt-4 text-center">Services</h5>

      {services.map((service, index) => (
        <div key={index} className="border p-2 mb-2">

          <input
            placeholder="Title"
            className="form-control mb-2"
            value={service.title}
            onChange={(e) =>
              updateList("services", index, "title", e.target.value)
            }
          />

          <input
            type="file"
            className="form-control mb-2"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;

              const imageUrl = URL.createObjectURL(file);
              updateList("services", index, "image", imageUrl);
            }}
          />

          <textarea
            placeholder="Description"
            className="form-control"
            value={service.description}
            onChange={(e) =>
              updateList("services", index, "description", e.target.value)
            }
          />

          <button
            className="btn btn-danger btn-sm mt-2"
            onClick={() => removeItem("services", index)}
          >
            Remove
          </button>

        </div>
      ))}

      <div className="text-center">
        <button
          type="button"
          className="btn btn-success w-50 mt-3"
          onClick={() =>
            addItem("services", {
              image: "",
              title: "",
              description: ""
            })
          }
        >
          + Add Service
        </button>
      </div>
    </>
  );
}

export default ServicesForm;
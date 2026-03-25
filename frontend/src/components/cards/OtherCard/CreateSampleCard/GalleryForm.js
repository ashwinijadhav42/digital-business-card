import React from "react";

function GalleryForm({ gallery, addItem, removeItem, setFormData }) {
  return (
    <>
      <h5 className="mt-4 text-center">Gallery</h5>

      <div className="row">
        {gallery.map((img, index) => (
          <div key={index} className="col-6 mb-3">
            <div className="border p-2">

              <input
                type="file"
                className="form-control mb-2"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  const imageUrl = URL.createObjectURL(file);

                  setFormData((prev) => {
                    const updated = [...prev.gallery];
                    updated[index] = {
                      url: imageUrl,
                      name: file.name
                    };
                    return { ...prev, gallery: updated };
                  });
                }}
              />

              {img?.url && (
                <div>
                  
                  <button
                    className="btn btn-danger btn-sm w-100 mt-2"
                    onClick={() => removeItem("gallery", index)}
                  >
                    Remove
                  </button>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-success w-50"
          onClick={() => addItem("gallery", { url: "", name: "" })}
        >
          + Add Image
        </button>
      </div>
    </>
  );
}

export default GalleryForm;
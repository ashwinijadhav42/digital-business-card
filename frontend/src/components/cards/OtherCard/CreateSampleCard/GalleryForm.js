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
                onChange={async (e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  // ✅ preview
                  const previewUrl = URL.createObjectURL(file);

                  // upload
                  const formData = new FormData();
                  formData.append("file", file);

                  const res = await fetch("http://localhost:8080/api/upload/gallery", {
                    method: "POST",
                    body: formData
                  });

                  const fileName = await res.text();


// STOP if upload failed
if (fileName === "error") {
  alert("Image upload failed");
  return;
}

                  // update state
                  setFormData((prev) => {
                    const updated = [...prev.gallery];
                    updated[index] = {
                      image: fileName,
                      name: file.name,
                      preview: previewUrl
                    };
                    return { ...prev, gallery: updated };
                  });
                }}
              />

              {/*  OUTSIDE onChange (correct place) */}
              {img?.image && (
                <button
                  type="button"
                  className="btn btn-danger btn-sm w-100"
                  onClick={() => removeItem("gallery", index)}
                >
                  Remove
                </button>
              )}

            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-success w-50"
          onClick={() =>
            addItem("gallery", { image: "", name: "", preview: "" })
          }
        >
          + Add Image
        </button>
      </div>
    </>
  );
}

export default GalleryForm;
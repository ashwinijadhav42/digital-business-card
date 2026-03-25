import React from "react";

function BlogForm({ blogs, updateList, addItem, removeItem }) {
  return (
    <>
      <h5 className="mt-4 text-center">Blog</h5>

      <div className="row">
        {blogs.map((blog, index) => (

          <div key={index} className="col-md-6 mb-3">
            <div className="border p-2 h-100">

              {/* Preview 
              <img
                src={
                  blog.image ||
                  "https://via.placeholder.com/300x150?text=Default+Blog"
                }
                alt="blog"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "10px"
                }}
              />
*/}
              {/* Image Upload */}
              <input
                type="file"
                className="form-control mb-2"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  const imageUrl = URL.createObjectURL(file);
                  updateList("blogs", index, "image", imageUrl);
                }}
              />

              {/* Title */}
              <input
                type="text"
                placeholder="Blog Title"
                className="form-control mb-2"
                value={blog.title}
                onChange={(e) =>
                  updateList("blogs", index, "title", e.target.value)
                }
              />

              {/* Description */}
              <textarea
                placeholder="Description"
                className="form-control mb-2"
                value={blog.description}
                onChange={(e) =>
                  updateList("blogs", index, "description", e.target.value)
                }
              />

              {/* Remove */}
              <button
                type="button"
                className="btn btn-danger btn-sm w-100 mt-2"
                onClick={() => removeItem("blogs", index)}
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
          className="btn btn-success  w-50 mt-3"
          onClick={() =>
            addItem("blogs", {
              image: "",
              title: "",
              description: ""
            })
          }
        >
          + Add Blog Add blog
        </button>
      </div>
    </>
  );
}

export default BlogForm;

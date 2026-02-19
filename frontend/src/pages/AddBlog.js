import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "true",
    publishDate: "",
    imageFile: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, imageFile: file });
      setPreview(URL.createObjectURL(file));
      return;
    }

    setFormData({ ...formData, [name]: value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("status", formData.status);
    data.append("publishDate", formData.publishDate);
    data.append("image", formData.imageFile);

    // Debug: log FormData
    for (let pair of data.entries()) {
      console.log(pair[0] + ": ", pair[1]);
    }

    await axios.post("http://localhost:8080/api/blogs/save", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Blog added successfully!");
    navigate("/blogs");
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    alert("Error saving blog");
  }
};


  return (
    <div className="container mt-4">
      <h3>Add Blog</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Blog Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          className="form-control mb-2"
          name="publishDate"
          value={formData.publishDate}
          onChange={handleChange}
          required
        />
        <div className="form-check mb-3">
          <input
  type="checkbox"
  className="form-check-input"
  name="status"
  checked={formData.status}
  onChange={(e) =>
    setFormData({ ...formData, status: e.target.checked })
  }
/>
<label className="form-check-label">Active</label>
</div>

        

        <input
          type="file"
          className="form-control mb-2"
          accept="image/*"
          onChange={handleChange}
          required
        />

        {/* 🔥 IMAGE PREVIEW */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="img-thumbnail mb-2"
            style={{ height: "150px" }}
          />
        )}

        <button className="btn btn-primary">Save Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;

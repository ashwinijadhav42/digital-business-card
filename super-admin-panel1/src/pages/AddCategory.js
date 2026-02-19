import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

const AddCategory = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    status: true,
    imageFile: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
  const { name, value, type, checked, files } = e.target;

  if (type === "file") {
    if (!files || files.length === 0) {
      return; // user cancelled file selection
    }

    const file = files[0];

    if (!(file instanceof File)) {
      return; // extra safety
    }

    setFormData((prev) => ({
      ...prev,
      imageFile: file,
    }));

    setPreview(URL.createObjectURL(file));
    return;
  }

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("link", formData.link);
      data.append("status", formData.status);
      data.append("image", formData.imageFile);

      await axios.post(
        "http://localhost:8080/api/templates/saveTemplateCategory",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Template Category saved successfully!");

      // reset
      setFormData({
        title: "",
        description: "",
        link: "",
        status: true,
        imageFile: null,
      });
      setPreview(null);

    } catch (error) {
      console.error(error);
      alert("Error saving data");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="page-header">
          <h3 className="form-title">Add Category</h3>
          <button className="btn-back" 
            onClick={() => navigate("/categories")}
          >

            ← Back
          </button>
        </div>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        
        <input
          className="form-control mb-2"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Link"
        />
          

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

        

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            name="status"
            checked={formData.status}
            onChange={handleChange}
          />
          <label className="form-check-label">Active</label>
        </div>

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
  );
};

export default AddCategory;

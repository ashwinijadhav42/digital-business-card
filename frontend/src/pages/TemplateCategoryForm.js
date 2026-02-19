import { useState } from "react";
import axios from "axios";

const TemplateCategoryForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    status: true,
    imageFile: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, imageFile: file });
      setPreview(URL.createObjectURL(file));
      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);
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
        
        category:"",
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
    <div className="container mt-4">
      <h3>Add Template Category</h3>

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
        />
        <textarea
          className="form-control mb-2"
          name="category"
          placeholder="Catgeory"
          value={formData.category}
          onChange={handleChange}
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
  );
};

export default TemplateCategoryForm;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: true,
    publishDate: "",
    imageFile: null,
  });

  const [preview, setPreview] = useState(null);

  // 🔹 Load blog data
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/blogs/all`)
      .then((res) => {
        const blog = res.data.find((b) => b.id === parseInt(id));

        if (blog) {
          setFormData({
            title: blog.title,
            description: blog.description,
            status: blog.status,
            publishDate: blog.publishDate,
            imageFile: null,
          });

          if (blog.imageUrl) {
            setPreview(
              `http://localhost:8080/uploads/blogs/${blog.imageUrl}`
            );
          }
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      if (!files || files.length === 0) return;

      const file = files[0];

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

  // 🔹 Update blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("id", id);
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("status", formData.status);
      data.append("publishDate", formData.publishDate);

      if (formData.imageFile) {
        data.append("image", formData.imageFile);
      }

      await axios.post(
        "http://localhost:8080/api/blogs/update",
        data
      );

      alert("Blog updated successfully!");
      navigate("/blogs");

    } catch (error) {
      console.error(error);
      alert("Error updating blog");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="page-header">
          <h3>Edit Blog</h3>
          <button
            className="btn-back"
            onClick={() => navigate("/blogs")}
          >
            ← Back
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />

          <textarea
            className="form-control mb-2"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
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

          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              name="status"
              checked={formData.status}
              onChange={handleChange}
            />
            <label className="form-check-label">
              Active
            </label>
          </div>

          <input
            type="file"
            className="form-control mb-2"
            accept="image/*"
            onChange={handleChange}
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="img-thumbnail mb-2"
              style={{ height: "150px" }}
            />
          )}

          <button className="btn btn-primary">
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const EditBlog = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: true,
    publishDate: "",
    imageFile: null
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Load blog data
  useEffect(() => {

    const fetchBlog = async () => {

      try {

        const res = await axios.get(`http://localhost:8080/api/blogs/${id}`);
        const blog = res.data;

        setFormData({
          title: blog.title || "",
          description: blog.description || "",
          status: blog.status ?? true,
          publishDate: blog.publishDate
            ? blog.publishDate.split("T")[0]
            : "",
          imageFile: null
        });

        if (blog.imageUrl) {
          setPreview(`http://localhost:8080/uploads/blogs/${blog.imageUrl}`);
        }

        setLoading(false);

      } catch (error) {
        console.error(error);
      }

    };

    fetchBlog();

  }, [id]);



  // 🔹 Handle change
  const handleChange = (e) => {

    const { name, value, type, checked, files } = e.target;

    if (type === "file") {

      const file = files[0];

      if (!file) return;

      setFormData(prev => ({
        ...prev,
        imageFile: file
      }));

      setPreview(URL.createObjectURL(file));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

  };


  // 🔹 Submit update
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

      await axios.post("http://localhost:8080/api/blogs/update", data);

      alert("Blog updated successfully");

      navigate("/blogs");

    } catch (error) {

      console.error(error);
      alert("Update failed");

    }

  };


  if (loading) return <h4 className="text-center mt-5">Loading...</h4>;


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
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <div className="form-control mb-2">

            <label className="form-label">Blog Content</label>

            <ReactQuill
              theme="snow"
              value={formData.description}
              onChange={(value) =>
                setFormData({ ...formData, description: value })
              }
              style={{ height: "250px", marginBottom: "40px", whiteSpace: "pre-line" }}
            />

          </div>

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
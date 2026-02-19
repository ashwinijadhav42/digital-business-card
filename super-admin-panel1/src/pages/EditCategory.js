import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryById, updateCategory } from "../api/api";

export default function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    status: true,
    image: null,
    imageUrl: "",   // to store existing image name
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    getCategoryById(id)
      .then((res) => {
        setFormData({
          ...res.data,
          image: null,
          imageUrl: res.data.imageUrl,
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, image: file });

      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("link", formData.link);
    formDataToSend.append("status", formData.status);

    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    updateCategory(id, formDataToSend)
      .then(() => {
        alert("Updated Successfully");
        navigate("/categories");
      })
      .catch(console.error);
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="page-header">
          <h3 className="form-title">Edit Category</h3>
          <button
            className="btn-back"
            onClick={() => navigate("/categories")}
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
              required
              placeholder="Title"
            />
          

          
            <textarea
              className="form-control mb-2"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
            />
          

          
            <input
              className="form-control mb-2"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="Link"
            />
          

          {/* IMAGE PREVIEW */}
          <div className="form-control">
            <label>Current / New Image</label>
            <br />

            {preview ? (
              <img src={preview} width="120" alt="preview" />
            ) : formData.imageUrl ? (
              <img
                src={`http://localhost:8080/uploads/${formData.imageUrl}`}
                width="120"
                alt="current"
              />
            ) : null}

            <br />
            <input
              type="file"
              name="image"
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label>
              <input
                type="checkbox"
                name="status"
                checked={formData.status}
                onChange={handleChange}
              />
              Active
            </label>
          </div>
          <div className="form-actions"> <button type="submit" className="btn-save">
            Update
          </button></div>
         
        </form>
      </div>
    </div>
  );
}

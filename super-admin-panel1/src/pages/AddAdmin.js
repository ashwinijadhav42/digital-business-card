import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddAdmin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "SUPER_ADMIN",
    password: "",
    confirmPassword: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Password validation
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("mobile", form.phone); // backend expects mobile
      formData.append("password", form.password);
      formData.append("role", form.role);

      if (selectedFile) {
        formData.append("profileImage", selectedFile);
      }

      await axios.post("http://localhost:8080/api/admins", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Admin added successfully!");
      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError("Failed to add admin");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="page-header">
          <h3 className="form-title">Add Admin</h3>
          <button
            type="button"
            className="btn-back"
            onClick={() => navigate("/admin")}
          >
            ← Back
          </button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-control mb-2">
            <input
              className="form-control mb-2"
              name="name"
              placeholder="Admin Name *"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              className="form-control mb-2"
              name="email"
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              className="form-control mb-2"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <select
              className="form-control mb-2"
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option value="SUPER_ADMIN">SUPER ADMIN</option>
              <option value="SUB_ADMIN">SUB ADMIN</option>
            </select>

            <input
              className="form-control mb-2"
              name="password"
              type="password"
              placeholder="Password *"
              value={form.password}
              onChange={handleChange}
              required
            />

            <input
              className="form-control mb-2"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password *"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <div className="file-upload">
              <label>Profile Image</label>
              <input type="file" onChange={handleFileChange} />
              <small>png, jpg, jpeg</small>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-save">
              Save
            </button>
            <button
              type="button"
              className="btn-discard"
              onClick={() => navigate("/admin")}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { getAdminById, updateAdmin } from "../services/adminService";
import { useNavigate, useParams } from "react-router-dom";

function EditAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    role: "SUPER_ADMIN",
    password: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getAdminById(id)
      .then((res) => {
        setAdmin({
          name: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          role: res.data.role || "SUPER_ADMIN",
          password: res.data.password || "",
          profileImage: res.data.profileImage || "",
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", admin.name);
      formData.append("email", admin.email);
      formData.append("mobile", admin.phone);
      formData.append("role", admin.role);

      // Only update password if entered
      if (admin.password) {
        formData.append("password", admin.password);
      }

      if (selectedFile) {
        formData.append("profileImage", selectedFile);
      }

      await updateAdmin(id, formData);

      alert("Admin updated successfully!");
      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError("Failed to update admin");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="page-header">
          <h3>Edit Admin</h3>
          <button
            className="btn-back"
            onClick={() => navigate("/admin")}
          >
            ← Back
          </button>
        </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={admin.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={admin.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={admin.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <select
            name="role"
            className="form-control"
            value={admin.role}
            onChange={handleChange}
          >
            <option value="SUPER_ADMIN">SUPER ADMIN</option>
            <option value="SUB_ADMIN">SUB ADMIN</option>
          </select>
        </div>

        <div className="mb-3">
          <label>New Password (optional)</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={admin.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Profile Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          />
          {admin.profileImage && (
            <img
              src={`http://localhost:8080/uploads/${admin.profileImage}`}
              width="100"
              alt="profile"
            />
          )}
        </div>

        <button className="btn btn-success">Update</button>
      </form>
    </div>
    </div>
  );
}

export default EditAdmin;
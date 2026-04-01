import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!form.fullName || !form.email || !form.mobile || !form.password) {
      setError("Please fill all required fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setError("Enter valid 10 digit mobile number");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Invalid email format");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/user/signup", {
        fullName: form.fullName,
        email: form.email,
        mobile: form.mobile,
        password: form.password,
      });

      alert("User added successfully ✅");
      navigate("/users"); // change route if needed

    } catch (err) {
      console.error(err);
      setError(err.response?.data || "Failed to add user");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">

        {/* Header */}
        <div className="page-header">
          <h3 className="form-title">Add User</h3>
          <button
            type="button"
            className="btn-back"
            onClick={() => navigate("/users")}
          >
            ← Back
          </button>
        </div>

        {/* Error */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-2">

            <input
              className="form-control mb-2"
              name="fullName"
              placeholder="Full Name *"
              value={form.fullName}
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
              name="mobile"
              placeholder="Mobile Number *"
              value={form.mobile}
              onChange={handleChange}
              required
            />

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

          </div>

          {/* Buttons */}
          <div className="form-actions">
            <button type="submit" className="btn-save">
              Save
            </button>

            <button
              type="button"
              className="btn-discard"
              onClick={() => navigate("/users")}
            >
              Discard
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
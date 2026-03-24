import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch User by ID
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/user/${id}`);
        setForm({
          fullName: res.data.fullName,
          email: res.data.email,
          mobile: res.data.mobile,
          password: "",
          confirmPassword: "",
        });
      } catch (err) {
        console.error(err);
        setError("Failed to load user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!form.fullName || !form.email || !form.mobile) {
      setError("Please fill required fields");
      return;
    }

    if (form.password && form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.put(`http://localhost:8080/api/user/${id}`, {
        fullName: form.fullName,
        email: form.email,
        mobile: form.mobile,
        password: form.password,
      });

      alert("User updated successfully ✅");
      navigate("/users");

    } catch (err) {
      console.error(err);
      setError(err.response?.data || "Update failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="form-wrapper">
      <div className="form-card">

        {/* Header */}
        <div className="page-header">
          <h3 className="form-title">Edit User</h3>
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
              placeholder="New Password (optional)"
              value={form.password}
              onChange={handleChange}
            />

            <input
              className="form-control mb-2"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />

          </div>

          {/* Buttons */}
          <div className="form-actions">
            <button type="submit" className="btn-save">
              Update
            </button>

            <button
              type="button"
              className="btn-discard"
              onClick={() => navigate("/users")}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
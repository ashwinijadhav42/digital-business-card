import { useEffect, useState } from "react";
import {
  createPlan,
  updatePlan,
  getPlanById,
  getAllFeatures,
} from "../services/pricingService";
import { useNavigate, useParams } from "react-router-dom";

function AddPricing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [features, setFeatures] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    duration: "",
    status: "ACTIVE",
    featureIds: [],
  });

  // ===============================
  // Load All Features
  // ===============================
  useEffect(() => {
    getAllFeatures()
      .then((res) => setFeatures(res.data))
      .catch((err) => console.error(err));
  }, []);

  // ===============================
  // Edit Mode – Load Plan
  // ===============================
  useEffect(() => {
    if (id) {
      getPlanById(id).then((res) => {
        const plan = res.data;

        setForm({
          title: plan.title || "",
          price: plan.price || "",
          duration: plan.duration || "",
          status: plan.status || "ACTIVE",
          featureIds: plan.features?.map((f) => f.id) || [],
        });
      });
    }
  }, [id]);

  // ===============================
  // Input Change
  // ===============================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ===============================
  // Checkbox Change
  // ===============================
  const handleCheckboxChange = (featureId) => {
    if (form.featureIds.includes(featureId)) {
      setForm({
        ...form,
        featureIds: form.featureIds.filter((id) => id !== featureId),
      });
    } else {
      setForm({
        ...form,
        featureIds: [...form.featureIds, featureId],
      });
    }
  };

  // ===============================
  // Select All
  // ===============================
  const handleSelectAll = () => {
    if (form.featureIds.length === features.length) {
      setForm({ ...form, featureIds: [] });
    } else {
      setForm({
        ...form,
        featureIds: features.map((f) => f.id),
      });
    }
  };

  // ===============================
  // Submit
  // ===============================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updatePlan(id, form).then(() => navigate("/pricinglist"));
    } else {
      createPlan(form).then(() => navigate("/pricinglist"));
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="page-header">
          <h3>{id ? "Edit Pricing Plan" : "Add Pricing Plan"}</h3>
          <button
            type="button"
            className="btn-back"
            onClick={() => navigate("/pricinglist")}
          >
            ← Back
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-2"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            name="duration"
            placeholder="Duration"
            value={form.duration}
            onChange={handleChange}
            required
          />

          <select
            className="form-control mb-3"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>

          {/* ================= Features Section ================= */}
          <h5>Select Features</h5>

          {/* Select All */}
          <div className="select-all">
            <input
              type="checkbox"
              checked={
                features.length > 0 &&
                form.featureIds.length === features.length
              }
              onChange={handleSelectAll}
            />
            <label>Select All</label>
          </div>

          {/* Grid Layout */}
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <input
                  type="checkbox"
                  checked={form.featureIds.includes(feature.id)}
                  onChange={() => handleCheckboxChange(feature.id)}
                />
                <label>{feature.name}</label>
              </div>
            ))}
          </div>

          <br />

          <button className="btn btn-primary">
            {id ? "Update Plan" : "Save Plan"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPricing;

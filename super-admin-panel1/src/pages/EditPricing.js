import { useEffect, useState } from "react";
import {
  updatePlan,
  getPlanById,
  getAllFeatures,
} from "../services/pricingService";
import { useNavigate, useParams } from "react-router-dom";

function EditPricing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    price: "",
    duration: "",
    status: "ACTIVE",
    featureIds: [],
  });

  // Load all features
  useEffect(() => {
    getAllFeatures()
      .then((res) => setFeatures(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Load plan data
  useEffect(() => {
    if (id) {
      getPlanById(id)
        .then((res) => {
          const plan = res.data;

          setForm({
            title: plan.title,
            price: plan.price,
            duration: plan.duration,
            status: plan.status,
            featureIds: plan.features?.map((f) => f.id) || [],
          });

          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  // Select All
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

  const handleSubmit = (e) => {
    e.preventDefault();

    updatePlan(id, form)
      .then(() => navigate("/pricinglist"))
      .catch((err) => console.error(err));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="page-header">
          <h3>Edit Pricing Plan</h3>
          <button
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
            value={form.title}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-2"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            name="duration"
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

          <h5>Select Features</h5>

          <div className="feature-box">
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                checked={form.featureIds.length === features.length}
                onChange={handleSelectAll}
              />
              <label className="form-check-label fw-bold">
                Select All
              </label>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <div key={feature.id} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={form.featureIds.includes(feature.id)}
                    onChange={() =>
                      handleCheckboxChange(feature.id)
                    }
                  />
                  <label className="form-check-label">
                    {feature.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <br />

          <button className="btn btn-primary">
            Update Plan
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPricing;

import { useEffect, useState } from "react";
import { createPlan, updatePlan, getAllPlans } from "../services/pricingService";
import { useNavigate, useParams } from "react-router-dom";

function AddPricing() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    duration: "",
    status: "ACTIVE",
    features: [{ feature: "" }],
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getAllPlans().then((res) => {
        const plan = res.data.find((p) => p.id === parseInt(id));
        if (plan) setForm(plan);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (index, value) => {
    const updated = [...form.features];
    updated[index].feature = value;
    setForm({ ...form, features: updated });
  };

  const addFeature = () => {
    setForm({ ...form, features: [...form.features, { feature: "" }] });
  };

  const removeFeature = (index) => {
    const updated = form.features.filter((_, i) => i !== index);
    setForm({ ...form, features: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updatePlan(id, form).then(() => navigate("/pricing"));
    } else {
      createPlan(form).then(() => navigate("/pricing"));
    }
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Plan" : "Add Plan"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="duration"
          placeholder="Duration"
          value={form.duration}
          onChange={handleChange}
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

        <h5>Features</h5>

        {form.features.map((f, index) => (
          <div key={index} className="d-flex mb-2">
            <input
              className="form-control me-2"
              value={f.feature}
              onChange={(e) =>
                handleFeatureChange(index, e.target.value)
              }
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeFeature(index)}
            >
              X
            </button>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={addFeature}
        >
          Add Feature
        </button>

        <br />

        <button className="btn btn-success">
          {id ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}

export default AddPricing;

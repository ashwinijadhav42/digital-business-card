import { useEffect, useState } from "react";
import {
  getAllFeatures,
  createFeature,
  updateFeature,
  deleteFeature,
} from "../services/featureService";

function FeatureMaster() {
  const [features, setFeatures] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    active: true,
  });

  const loadFeatures = () => {
    getAllFeatures()
      .then((res) => setFeatures(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadFeatures();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (editId) {
    updateFeature(editId, form).then(() => {
      setEditId(null);
      setForm({ name: "", active: true });
      loadFeatures();
    });
  } else {
    createFeature(form).then(() => {
      setForm({ name: "", active: true });
      loadFeatures();
    });
  }
};

  const handleEdit = (feature) => {
    setEditId(feature.id);
    setForm({
      name: feature.name,
      active: feature.active,
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteFeature(id).then(() => loadFeatures());
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h3>Feature Master</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            name="name"
            placeholder="Feature Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />
            <label className="form-check-label">
              Active
            </label>
          </div>

          <button className="btn btn-primary">
            {editId ? "Update Feature" : "Save Feature"}
          </button>
        </form>

        <hr />

        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Sr.No</th>
              <th>Feature Name</th>
              <th>Status</th>
              <th width="180">Action</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={feature.id}>
                <td>{index + 1}</td>
                <td>{feature.name}</td>
                <td>
                  {feature.active ? (
                    <span className="badge bg-success">
                      Active
                    </span>
                  ) : (
                    <span className="badge bg-danger">
                      Inactive
                    </span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(feature)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(feature.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeatureMaster;

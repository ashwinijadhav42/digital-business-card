import { useEffect, useState } from "react";
import { getAllPlans, deletePlan } from "../services/pricingService";
import { useNavigate } from "react-router-dom";

function PricingList() {
  const [plans, setPlans] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = () => {
    setLoading(true);
    getAllPlans()
      .then((res) => setPlans(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      deletePlan(id)
        .then(() => fetchPlans())
        .catch((err) => console.error(err));
    }
  };

  // 🔍 Filter by Title
  const filteredPlans = plans.filter((plan) =>
    plan.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <div className="page-header d-flex justify-content-between align-items-center mb-3">
        <h3 className="page-title">Pricing List</h3>
        <button
          className="page-action-btn"
          onClick={() => navigate("/pricing/add")}
        >
          + Add Pricing
        </button>
      </div>

      {/* 🔍 Search Box */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by plan title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary"></div>
          </div>
        ) : (
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Price (₹)</th>
                <th>Duration (Days)</th>
                <th>Status</th>
                <th>Features</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredPlans.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No pricing plans found
                  </td>
                </tr>
              ) : (
                filteredPlans.map((plan) => (
                  <tr key={plan.id}>
                    <td>{plan.title}</td>
                    <td>₹ {plan.price}</td>
                    <td>{plan.duration}</td>

                    <td>
                      <span
                        className={
                          plan.status === "ACTIVE"
                            ? "badge bg-success"
                            : "badge bg-secondary"
                        }
                      >
                        {plan.status}
                      </span>
                    </td>

                    <td>
                      {plan.features?.length > 0 ? (
                        <div
                          style={
                            plan.features.length > 7
                          ? {
                            maxHeight: "160px",
                            overflowY: "auto",
                            paddingRight: "5px",
                          }
                        : {}
                        }
                        >
                        {plan.features.map((f) => (
                          <div key={f.id}>• {f.name}</div>
                        ))}
                        </div>
                      ) : (
                        <span className="text-muted">No Features</span>
                      )}
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          navigate(`/pricinglist/edit/${plan.id}`)
                        }
                        className="btn btn-sm btn-warning me-2"
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(plan.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default PricingList;
import { useEffect, useState } from "react";
import { getAllPlans, deletePlan } from "../services/pricingService";
import { useNavigate } from "react-router-dom";

function PricingList() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = () => {
    getAllPlans()
      .then((res) => setPlans(res.data))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      deletePlan(id).then(() => fetchPlans());
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h3 className="page-title">Pricing List</h3>
        <button
          className="page-action-btn"
          onClick={() => navigate("/pricing/add")}
        >
          + Add Pricing
        </button>
      </div>

      <div className="table-container">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Price (in ₹)</th>
              <th>Duration(in Days)</th>
              <th>Status</th>
              <th>Features</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan) => (
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

                {/* ✅ Correct Feature Display */}
                <td>
                  {plan.features?.length > 0 ? (
                    plan.features.map((f) => (
                      <div key={f.id}>• {f.name}</div>
                    ))
                  ) : (
                    <span className="text-muted">No Features</span>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => navigate(`/editpricing/${plan.id}`)}
                    className="btn btn-sm btn-warning"
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PricingList;

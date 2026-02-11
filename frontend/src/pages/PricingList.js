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
    <div className="container mt-4">
      <h2>Pricing Plans</h2>

      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/add-pricing")}
      >
        Add Plan
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Status</th>
            <th>Features</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>{plan.price}</td>
              <td>{plan.duration}</td>
              <td>{plan.status}</td>
              <td>
                {plan.features?.map((f, i) => (
                  <div key={i}>{f.feature}</div>
                ))}
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => navigate(`/edit-pricing/${plan.id}`)}
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
  );
}

export default PricingList;

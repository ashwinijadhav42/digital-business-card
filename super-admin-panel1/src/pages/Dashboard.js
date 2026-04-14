import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [counts, setCounts] = useState({
    activeUsers: 0,
    totalVCards: 0,
    deactiveUsers: 0,
    deactiveVCards: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/dashboard/counts");

    console.log("API RESPONSE 👉", res.data); // ✅ ADD THIS

    setCounts(res.data);
  } catch (error) {
    console.error("Error fetching dashboard:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container-fluid">
      <h4 className="page-title mb-4">Dashboard</h4>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row g-3">
          {/* Active Users */}
          <div className="col-md-3">
            <div className="card custom-card primary">
              <div className="card-body">
                <h6>Total Active Users</h6>
                <h2>{counts.activeUsers}</h2>
              </div>
            </div>
          </div>

          {/* Active vCards */}
          <div className="col-md-3">
            <div className="card custom-card warning">
              <div className="card-body">
                <h6>Total Active vCards</h6>
                <h2>{counts.totalVCards}</h2>
              </div>
            </div>
          </div>

          {/* Deactive Users */}
          <div className="col-md-3">
            <div className="card custom-card success">
              <div className="card-body">
                <h6>Total DeActive Users</h6>
                <h2>{counts.deactiveUsers}</h2>
              </div>
            </div>
          </div>

          {/* Deactive vCards */}
          <div className="col-md-3">
            <div className="card custom-card danger">
              <div className="card-body">
                <h6>Total Deactivated vCards</h6>
                <h2>{counts.deactiveVCards}</h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inline CSS */}
      <style>{`
        .custom-card {
          border-radius: 15px;
          padding: 10px;
          transition: 0.3s;
        }

        .custom-card:hover {
          transform: translateY(-5px);
        }

        .custom-card h6 {
          font-size: 14px;
          color: #666;
        }

        .custom-card h2 {
          font-weight: bold;
        }

        .primary {
          border: 2px solid #4e73df;
        }

        .warning {
          border: 2px solid #f6c23e;
        }

        .success {
          border: 2px solid #1cc88a;
        }

        .danger {
          border: 2px solid #e74a3b;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
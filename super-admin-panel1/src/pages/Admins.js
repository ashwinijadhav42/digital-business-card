import React, { useEffect, useState } from "react";
import { getAllAdmins, deleteAdmin } from "../services/adminService";
import { useNavigate } from "react-router-dom";

function Admins() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = () => {
    setLoading(true);
    getAllAdmins()
      .then((res) => setAdmins(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      deleteAdmin(id)
        .then(() => fetchAdmins())
        .catch((err) => console.error(err));
    }
  };

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(search.toLowerCase()) ||
      admin.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <div className="page-header d-flex justify-content-between align-items-center mb-3">
        <h3 className="page-title">Admin List</h3>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/admin/add")}
        >
          + Add Admin
        </button>
      </div>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary"></div>
          </div>
        ) : filteredAdmins.length === 0 ? (
          <div className="text-center py-5 text-muted">
            No admins found.
          </div>
        ) : (
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>SrNo</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th width="200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.map((admin, index) => (
                <tr key={admin.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={
                        admin.profileImage
                          ? `http://localhost:8080/uploads/${admin.profileImage}`
                          : "https://via.placeholder.com/50"
                      }
                      width="50"
                      height="50"
                      className="rounded-circle"
                      style={{ objectFit: "cover" }}
                      alt="profile"
                    />
                  </td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.phone}</td>
                  <td>
                    <span className="badge bg-info text-dark">
                      {admin.role}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => navigate(`/admin/edit/${admin.id}`)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(admin.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Admins;
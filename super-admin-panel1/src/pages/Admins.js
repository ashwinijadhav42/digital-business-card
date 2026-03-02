import React, { useEffect, useState } from "react";
import { getAllAdmins, deleteAdmin } from "../services/adminService";
import { useNavigate } from "react-router-dom";

function Admins() {
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = () => {
    getAllAdmins()
      .then((res) => setAdmins(res.data))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteAdmin(id)
        .then(() => fetchAdmins())
        .catch((err) => console.error(err));
    }
  };

  return (
     <div className="page-wrapper">
      <div className="page-header">
        <h3 className="page-title">Admin List</h3>
        <button
          className="page-action-btn"
          onClick={() => navigate("/admin/add")}
        >
          + Add Admin
        </button>
      </div>

      <div className="table-container">
      <table className="table table-bordered table-striped">
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
          {admins.map((admin, index) => (
            <tr key={admin.id}>
              <td>{index + 1}</td>
              <td>
                {admin.profileImage ? (
                  <img 
                    src={`http://localhost:8080/uploads/${admin.profileImage}`}
                    width="50"
                    alt="profile"
                  />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.phone}</td>
              <td>{admin.role}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => navigate(`/edit-admin/${admin.id}`)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(admin.id)}
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

export default Admins;
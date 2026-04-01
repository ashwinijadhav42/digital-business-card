import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete User
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:8080/api/user/${id}`);
      fetchUsers(); // refresh
    } catch (err) {
      console.error(err);
      alert("Failed to delete user");
    }
  };

  // Search Filter
  const filteredUsers = users.filter((u) =>
    u.fullName.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.mobile.includes(search)
  );

  return (
    <>
      {/* Header */}
      <div className="page-wrapper">
      <div className="page-header d-flex justify-content-between align-items-center mb-3">
        <h3 className="page-title">Users</h3>
        <button
          className="page-action-btn"
          onClick={() => navigate("/users/add")}
        >
          + Add User
        </button>
      </div>
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name, email, mobile..."
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="table-container">
        
        
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => navigate(`/users/edit/${user.id}`)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
      
    </>
  );
}
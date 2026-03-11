import React, { useState } from "react";
import axios from "axios";

function Profile() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // ✅ Get logged-in user from localStorage
  const authUser = JSON.parse(localStorage.getItem("user"));

 

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!authUser) {
      alert("User not logged in");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/auth/change-password", {
        email: authUser.email,
        oldPassword: oldPassword.trim(),
        newPassword: newPassword.trim(),
      });

      alert("Password changed successfully");
      setOldPassword("");
      setNewPassword("");

    } catch (error) {
      alert(error.response?.data || "Error occurred");
    }
  };

  if (!authUser) {
    return <h4>User not logged in</h4>;
  }

  return (
    <div className="container mt-4">

      {/* USER INFORMATION */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header fw-bold">
          Profile Information
        </div>

        <div className="card-body">

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Name</div>
            <div className="col-md-9">{authUser.name}</div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Email</div>
            <div className="col-md-9">{authUser.email}</div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Role</div>
            <div className="col-md-9">{authUser.role}</div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Phone</div>
            <div className="col-md-9">{authUser.phone}</div>
          </div>

        </div>
      </div>

      {/* CHANGE PASSWORD */}
      <div className="card shadow-sm">
        <div className="card-header fw-bold">
          Change Password
        </div>

        <div className="card-body">
          <form onSubmit={handleChangePassword}>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-primary">
              Update Password
            </button>

          </form>
        </div>
      </div>

    </div>
  );
}

export default Profile;
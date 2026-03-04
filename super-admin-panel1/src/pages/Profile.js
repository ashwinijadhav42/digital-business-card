import React, { useState } from "react";
import axios from "axios";

function Profile() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // ✅ Get logged-in user
  const authUser = JSON.parse(localStorage.getItem("user"));

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!authUser) {
      alert("User not logged in");
      return;
    }

    console.log("Email:", authUser.email);
    console.log("Old Password Typed:", oldPassword);

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
      console.log("Server Response:", error.response?.data);
      alert(error.response?.data || "Error occurred");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Change Password</h3>

      <form onSubmit={handleChangePassword}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Update Password</button>
      </form>
    </div>
  );
}

export default Profile;
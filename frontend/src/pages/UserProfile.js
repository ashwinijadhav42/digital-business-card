import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  //  Get user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  //  Change Password
  const handlePasswordChange = async () => {
  if (!oldPassword || !newPassword) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:8080/api/user/change-password", {
      method: "PUT", //  FIX HERE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile: user.mobile,   // or id (depends on backend)
        oldPassword,
        newPassword,
      }),
    });

    const data = await res.text();

    if (!res.ok) {
      throw new Error(data);
    }

    alert("Password updated successfully!");
    setOldPassword("");
    setNewPassword("");

  } catch (err) {
    console.error(err);
    alert("Error: " + err.message);
  }

};

  if (!user) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container py-5">

      {/* PROFILE INFO */}
      <div className="card shadow mb-4 p-4">
        <h5 className="mb-3">Profile Information</h5>
        <hr />

        <div className="row mb-2">
          <div className="col-md-3 fw-bold">Name</div>
          <div className="col-md-9">{user.name}</div>
        </div>

        <div className="row mb-2">
          <div className="col-md-3 fw-bold">Email</div>
          <div className="col-md-9">{user.email}</div>
        </div>

        <div className="row mb-2">
          <div className="col-md-3 fw-bold">Mobile</div>
          <div className="col-md-9">{user.mobile}</div>
        </div>
      </div>

      {/* CHANGE PASSWORD */}
      <div className="card shadow p-4">
        <h5 className="mb-3">Change Password</h5>
        <hr />

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handlePasswordChange}>
          Update Password
        </button>
      </div>

    </div>
  );
};

export default UserProfile;
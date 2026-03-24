import React, { useState } from "react";
import axios from "axios";

function Login({ setAuthUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const startLogoutTimer = () => {
    setTimeout(() => {
      localStorage.removeItem("user");
      setAuthUser(null);
      alert("Session expired. Please login again.");
      window.location.reload(); 
    }, 60 * 60 * 1000); // 60 minutes
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email: email,
          password: password,
        }
      );

      console.log("Login Response:", res.data);

      // Save user
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("loginTime", Date.now());
      setAuthUser(res.data);

      // Start auto logout timer
      startLogoutTimer();

    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-title">
          <h3 className="login-title">Admin Login</h3>
        </div>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <div className="input-group">
            <span className="icon">✉️</span>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label>Password</label>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
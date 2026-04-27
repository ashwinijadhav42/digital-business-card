import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css"; // Create this CSS file for styling the login page

function Login({ setAuthUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const startLogoutTimer = () => {
    setTimeout(() => {
      localStorage.removeItem("user");
      setAuthUser(null);
      alert("Session expired. Please login again.");
      window.location.reload();
    }, 60 * 60 * 1000);
  };

  // 🔹 STEP 1
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      alert("OTP sent to your email");
      setStep(2);

    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  // 🔹 STEP 2
  const verifyOtp = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/auth/verify-otp",
      { email, otp }
    );

    localStorage.setItem("user", JSON.stringify(res.data));

    // ✅ ADD THIS LINE (this is your missing piece)
    localStorage.setItem("loginTime", new Date().getTime());

    setAuthUser(res.data);

  } catch (err) {
    alert("Invalid or Expired OTP");
  }
};

  return (
    <div className="login-container">
  <div className="login-card">
    
    <h3 className="login-title">Admin Login</h3>

    {step === 1 && (
      <form onSubmit={handleLogin}>

        <label>Email</label>
        <div className="input-group">
          <span className="icon">📧</span>
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

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    )}

    {step === 2 && (
      <div>
        <div className="input-group">
          <span className="icon">🔑</span>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <button onClick={verifyOtp} className="login-btn">
          Verify OTP
        </button>
      </div>
    )}

  </div>
</div>
  );
}export default Login;
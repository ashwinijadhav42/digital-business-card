import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();
  const { templateType } = useParams();   //  GET templateType from URL

  const handleLogin = (e) => {
    e.preventDefault();

    // After successful login
    navigate(`/create-doctor-card/${templateType}`);
  };

  return (
    <div className="text-center" style={{ padding: "40px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

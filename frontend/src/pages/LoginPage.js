import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { category, templateType } = useParams();


  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});


  
  //  Validation Function
  const validateForm = () => {
    let newErrors = {};

    if (!isLogin) {
      if (!fullName.trim()) {
        newErrors.fullName = "Full Name is required";
      } else if (fullName.length < 3) {
        newErrors.fullName = "Full Name must be at least 3 characters";
      } else if (!/^[A-Za-z\s]+$/.test(fullName)) {
        newErrors.fullName = "Only letters and spaces allowed";
      }
    }

    if (!mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }
    

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      newErrors.password =
        "Password must contain at least one letter and one number";
    }

    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
//Reset  Form
  const resetForm = () => {
  setFullName("");
  setMobile("");
  setPassword("");
  setConfirmPassword("");
  setErrors({});
};


  //  Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const url = isLogin
      ? "http://localhost:8080/api/user/login"
      : "http://localhost:8080/api/user/signup";

    const body = isLogin
      ? { mobile, password }
      : { fullName, mobile, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Request failed");
      }

      const data = await res.json();
      console.log("Success:", data);

      alert(isLogin ? "Login successful!" : "Account created successfully!");

     

  
if (isLogin) {
  navigate(`/create-${category}-card/${templateType}`);
}



    } catch (err) {
      console.error("Error:", err);
      alert("Invalid credentials or server error!");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow-lg p-4 rounded-4">

            <div className="d-flex justify-content-center mb-4">
              <button
                className={`btn me-2 ${!isLogin ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => {
                  setIsLogin(false);
                  setErrors({});
                   resetForm();
                }}
              >
                Sign Up
              </button>
              <button
                className={`btn ${isLogin ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => {
                  setIsLogin(true);
                  setErrors({});
                  resetForm();
                }}
              >
                Sign In
              </button>
            </div>

            <form onSubmit={handleSubmit}>

              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  {errors.fullName && (
                    <div className="invalid-feedback d-block">
                      {errors.fullName}
                    </div>
                  )}
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  </span>
                  <input
                    type="text"
                    className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                    placeholder="Mobile Number"
                    maxLength="10"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                {errors.mobile && (
                  <div className="invalid-feedback d-block">
                    {errors.mobile}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && (
                  <div className="invalid-feedback d-block">
                    {errors.password}
                  </div>
                )}
              </div>

              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <div className="invalid-feedback d-block">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100 mt-3">
                {isLogin ? "Sign In" : "Create Account"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

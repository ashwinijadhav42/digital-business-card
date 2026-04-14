import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Admins from "./pages/Admins";
import AddAdmin from "./pages/AddAdmin";
import EditAdmin from "./pages/EditAdmin";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Cards from "./pages/Cards";
import Templates from "./pages/Templates";
import PricingList from "./pages/PricingList";
import AddPricing from "./pages/AddPricing";
import EditPricing from "./pages/EditPricing";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";
import EditCategory from "./pages/EditCategory";
import FeatureMaster from "./pages/FeatureMaster";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import "./styles/layout.css";
import "./styles/form.css";
import "./styles/page.css";
import "./styles/theme.css";
import "./styles/login.css";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginTime");
    setAuthUser(null);
  };

  useEffect(() => {
    if (authUser) {
      const loginTime = localStorage.getItem("loginTime");
      const now = new Date().getTime();

      if (loginTime) {
        const diff = now - loginTime;
        const remaining = 60 * 60 * 1000 - diff;

        if (remaining <= 0) {
          handleLogout();
        } else {
          const timer = setTimeout(() => {
            alert("Session expired. Please login again.");
            handleLogout();
          }, remaining);

          return () => clearTimeout(timer);
        }
      }
    }
  }, [authUser]);

  return (
    <Router>
      {!authUser ? (
        <Login setAuthUser={setAuthUser} />
      ) : (
        <div className="app-layout">
          <Sidebar
            collapsed={collapsed}
            role={authUser.role}
            onLogout={handleLogout}
          />

          <div className={`main-content ${collapsed ? "collapsed" : ""}`}>
            <Header
              onToggle={() => setCollapsed(!collapsed)}
              authUser={authUser}
              onLogout={handleLogout}
            />

            <div className="page-content">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<Admins />} />
                <Route path="/admin/add" element={<AddAdmin />} />
                <Route path="/admin/edit/:id" element={<EditAdmin />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/add" element={<AddUser />} />
                <Route path="/users/edit/:id" element={<EditUser />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/pricinglist" element={<PricingList />} />
                <Route path="/pricing/add" element={<AddPricing />} />
                <Route path="/pricing/edit/:id" element={<EditPricing />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/add" element={<AddBlog />} />
                <Route path="/blogs/edit/:id" element={<EditBlog />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/add" element={<AddCategory />} />
                <Route path="/categories/edit/:id" element={<EditCategory />} />
                <Route path="/featuremaster" element={<FeatureMaster />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
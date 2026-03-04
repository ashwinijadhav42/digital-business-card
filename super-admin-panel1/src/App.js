import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Admins from "./pages/Admins";
import AddAdmin from "./pages/AddAdmin";
import EditAdmin from "./pages/EditAdmin";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
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

  // ❌ Removed sessionStorage
  const [authUser, setAuthUser] = useState(null);

  const handleLogout = () => {
    setAuthUser(null);
  };

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
                <Route path="/cards" element={<Cards />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/pricinglist" element={<PricingList />} />
                <Route path="/pricinglist/add" element={<AddPricing />} />
                <Route path="/pricinglist/edit/:id" element={<EditPricing />} />
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
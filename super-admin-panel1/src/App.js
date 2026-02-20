import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Admins from "./pages/Admins";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";
import Cards from "./pages/Cards";
import Templates from "./pages/Templates";
import PricingList from "./pages/PricingList";
import AddPricing from "./pages/AddPricing";
import Categories from "./pages/Categories";
import EditCategory from "./pages/EditCategory";
import AddCategory from "./pages/AddCategory";
import AddAdmin from "./pages/AddAdmin";
import EditBlog from "./pages/EditBlog";  
import EditPricing from "./pages/EditPricing";
import FeatureMaster from "./pages/FeatureMaster";

import "./styles/layout.css";
import "./styles/form.css";
import "./styles/page.css";
import "./styles/theme.css";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="app-layout">
        <Sidebar collapsed={collapsed} />

        <div className={`main-content ${collapsed ? "collapsed" : ""}`}>
          <Header onToggle={() => setCollapsed(!collapsed)} />

          <div className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admins />} />
              <Route path="/admin/add" element={<AddAdmin />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/add" element={<AddUser />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/add" element={<AddCategory />} />
              <Route path="/categories/edit/:id" element={<EditCategory />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/blogs/edit/:id" element={<EditBlog />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/pricinglist" element={<PricingList />} />
              <Route path="/pricing/add" element={<AddPricing />} />
              <Route path="/editpricing/:id" element={<EditPricing />} />
              <Route path="/featuremaster" element={<FeatureMaster />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

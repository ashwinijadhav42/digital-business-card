import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Blogs from "./pages/Blogs";
import Pricing from "./pages/Pricing";
import Templates from "./pages/Templates";
import LoginPage from "./pages/LoginPage";
import CreateCard from "./pages/CreateCard";
import BusinessCard from "./components/cards/FreelancerCards/Freelancer";
import DoctorTemplate from "./pages/DoctorTemplates";
import CorporateTemplates from "./pages/CorporateTemplates";
import FreelancerTemplates from "./pages/FreelancerTemplates";
import RealEstateTemplates from "./pages/RealEstateTemplates";
import Freelancer from "./components/cards/FreelancerCards/Freelancer";
import TemplateCategoryForm from "./pages/TemplateCategoryForm";
import AddBlog from "./pages/AddBlog";
import PricingList from "./pages/PricingList";
import AddPricing from "./pages/AddPricing";
import CreateDoctorCard from "./components/cards/DoctorCard/CreateDoctorCard";
import ViewDoctorCard from "./components/cards/DoctorCard/ViewDoctorCard";
import TemplatesByCategory from "./pages/TemplatesByCategory";
import CreateFreelancerCard from "./components/cards/FreelancerCards/CreateFreelancerCard";
import ViewFreelancerCard from "./components/cards/FreelancerCards/ViewFreelancerCard";
import CreateCorporateCard from "./components/cards/CorporateCard/CreateCorporateCard";
import CreateRealEstateCard from "./components/cards/RealEstateCard/CreateRealEstateCard";
import BlogDetails from "./pages/BlogDetails";
import ViewCorporateCard from "./components/cards/CorporateCard/ViewCorporateCard";
import UserProfile from "./pages/UserProfile";
import UserLayout from "./components/UserLayout";
import Affiliations from "./pages/Affiliations";

import ViewRealEstateCard from "./components/cards/RealEstateCard/ViewRealEstateCard";
import CreateSampleCard from "./components/cards/OtherCard/CreateSampleCard/CreateSampleCard";
import ViewSampleCard from "./components/cards/OtherCard/ViewSampleCard"
import SampleCardInquiryList from "./components/cards/OtherCard/InquiryList"

import SampleCard from "./components/cards/OtherCard/SampleCard";
import DoctorCard3 from "./components/cards/DoctorCard/DoctorCard3";
import DoctorCard1 from "./components/cards/DoctorCard/DoctorCard1";

export default function MainApp() {
  const location = useLocation();

  const hideHeaderRoutes = ["/profile"];

  return (
    <>
      {/* Hide Header on profile */}
      {!location.pathname.startsWith("/user") && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blogs" element={<Blogs />} />
         <Route path="/pricingDesign" element={<Pricing />} /> 
        <Route path="/loginPage" element={<LoginPage />} />


<Route path="/DoctorCard3" element={<DoctorCard3/>} />

        <Route path="/createCard" element={<CreateCard />} />
        <Route path="/templates" element={<Templates />} />

        {/* <Route path="/templates/doctorTemplates" element={<DoctorTemplate />} />
             <Route path="/templates/corporateTemplates" element={<CorporateTemplates />} />
             <Route path="/templates/freelancerTemplates" element={<FreelancerTemplates />} />
             <Route path="/templates/realEstateTemplates" element={<RealEstateTemplates />} />
             */}
        <Route path="/templates/:category" element={<TemplatesByCategory />} />
        <Route path="/templates/freelancerTemplates" element={<FreelancerTemplates />} />
        <Route path="/templates/buiseness" element={<BusinessCard />} />
        {/* <Route path ="templates/other" element={<SampleCard/>} /> */}

        <Route path="/template-category/add" element={<TemplateCategoryForm />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        <Route path="/pricing" element={<PricingList />} />
        <Route path="/add-pricing" element={<AddPricing />} />
        <Route path="/edit-pricing/:id" element={<AddPricing />} />

        <Route path="/createDoctorCard" element={<CreateDoctorCard />} />
        <Route path="/CreateCorporateCard" element={<CreateDoctorCard />} />

        {/*
             <Route path="/login/:category/:templateId" element={<LoginPage />} />
             <Route path="/login/:templateType" element={<LoginPage />} /> */}

        <Route path="/login/:category/:templateType" element={<LoginPage />} />


        <Route path="/create-doctor-card/:templateType" element={<CreateDoctorCard />} />
        <Route path="/view-doctor-card/:slug" element={<ViewDoctorCard />} />

        <Route path="/create-freelancer-card/:templateType" element={<CreateFreelancerCard />} />
        <Route path="/view-freelancer-card/:slug" element={<ViewFreelancerCard />} />

        <Route path="/create-corporate-card/:templateType" element={<CreateCorporateCard />} />
        <Route path="/view-card/:slug" element={<ViewCorporateCard />} />

        <Route path="/create-realestate-card/:templateType" element={<CreateRealEstateCard />} />
        <Route path="/view-realestate-card/:slug" element={<ViewRealEstateCard />} />

        <Route path="/create-other-card/:templateType" element={<CreateSampleCard />} />
        <Route path="/view-sample-card/:slug" element={<ViewSampleCard />} />
        <Route path="/SampleCardInquiryList" element={<SampleCardInquiryList />} />

        {/* <Route path="/profile" element={<UserProfile/>} /> */}
        {/* <Route path="/profile" element={<UserLayout/>} /> */}

        <Route path="/user" element={<UserLayout />}>
          <Route path="Affiliations" element={<Affiliations />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="templates" element={<Templates />} />
          <Route path="create-card" element={<CreateCard />} />
          <Route path="SampleCardInquiryList" element={<SampleCardInquiryList />} />

        </Route>
      </Routes>
      <Footer />

    </>
  );
}
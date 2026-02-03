import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Blogs from "./pages/Blogs";
import Pricing from "./pages/Pricing";
import Templates from "./pages/Templates";
import CreateCard from "./pages/CreateCard";
import BusinessCard from "./components/cards/FreelancerCards/Freelancer";
import DoctorTemplate from "./pages/DoctorTemplates";
import CorporateTemplates from "./pages/CorporateTemplates";
import FreelancerTemplates from "./pages/FreelancerTemplates";
import RealEstateTemplates from "./pages/RealEstateTemplates";
import Freelancer from "./components/cards/FreelancerCards/Freelancer";



function App() {
  return (
    <BrowserRouter>
<Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
         <Route path="/createCard" element={<CreateCard />} />
         <Route path="/templates" element={<Templates />} />       
        <Route path="/templates/doctorTemplates" element={<DoctorTemplate />} />
        <Route path="/templates/corporateTemplates" element={<CorporateTemplates/>} />
        <Route path="/templates/freelancerTemplates" element={<FreelancerTemplates/>} />
        <Route path="/templates/realEstateTemplates" element={<RealEstateTemplates/>}/>
     
     <Route path="/templates/buiseness" element={<BusinessCard/>} />
     <Route path="/templates/freelancer" element={<Freelancer/>}/>
   
    
      </Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;

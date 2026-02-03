 import Freelancer from "../components/cards/FreelancerCards/Freelancer";
 import FreelancerSoftwareEngineer from "../components/cards/FreelancerCards/FreelanceSoftwareEngineer";
 import { Link } from "react-router-dom";


 function FreelancerTemplates() { 
 return (
    <div className="container py-4">
      <h3 className="text-center mb-4">Choose Freelancer Template</h3>

      <div className="row  gx-5 gy-4  align-items-start">
        <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
           <Link
    to="/templates/freelancer"
    className="card-link w-100 text-decoration-none"
  >
            <Freelancer /></Link>
          </div>
        </div>
<div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <Link
    to="/"
    className="card-link w-100 text-decoration-none"
  >
            <FreelancerSoftwareEngineer />
            </Link>
          </div>
        

       </div>


      </div>
    </div>
  );
}

export default FreelancerTemplates;

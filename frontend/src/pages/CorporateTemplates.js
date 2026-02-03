import SoftwareEngineer from "../components/cards/CorporateCard/SoftwareEngineer";
import BusinessAnalyst from "../components/cards/CorporateCard/BusinessAnalyst";
import { Link } from "react-router-dom";


function CorporateTemplates() {
  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">Choose Corporate Template</h3>

      <div className="row  gx-5 gy-4  align-items-start">
        <div className="col-md-6 col-lg-4 d-flex">
          <div className="card-link w-100">
             
            <SoftwareEngineer />
            
          </div>
        </div>

        <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <Link
    to="/"
    className="card-link w-100 text-decoration-none"
  >
            <BusinessAnalyst />
            </Link>
          </div>
        </div>

       


      </div>
    </div>
  );
}

export default CorporateTemplates;

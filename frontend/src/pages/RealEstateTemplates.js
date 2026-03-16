import { Link } from "react-router-dom";

import RealEstate from "../components/cards/RealEstateCard/RealEstate";
import UnityRealEstate from "../components/cards/RealEstateCard/UnityRealEstate";


function RealEstateTemplates() {
  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">Choose RealEstate Template</h3>

      <div className="row  gx-5 gy-5  align-items-start">
        <div className="col-md-6 col-lg-4 d-flex">
          <div className="card-link w-100">
            <Link
                to="/"
                className="card-link w-100 text-decoration-none"
              >
                        <RealEstate />
                        </Link>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 d-flex">
          <div className="card-link w-100">
            <Link
                to="/"
                className="card-link w-100 text-decoration-none"
              >
                        <UnityRealEstate />
                        </Link>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <Link to="/loginPage/realestate/1"
              className="card-link text-decoration-none" >
              <UnityRealEstate data={{}} showAllIcons={true} />
            </Link>
          </div>
        </div>

        
        

       


      </div>
    </div>
  );
}

export default RealEstateTemplates;

import DoctorCard1 from "../components/cards/DoctorCard/DoctorCard1";
import DoctorCard2 from "../components/cards/DoctorCard/DoctorCard2";
import { Link } from "react-router-dom";

function DoctorTemplates() {
  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">Choose Doctor Template</h3>

      <div className="row g-4 align-items-stretch">
        <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <Link
              to="/LoginPage" className="card-link w-100 text-decoration-none" >
              <DoctorCard1 />
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <Link
              to="/LoginPage" className="card-link w-100 text-decoration-none" >
              <DoctorCard2 />
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
}

export default DoctorTemplates;

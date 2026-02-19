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
            <Link to="/loginPage/doctor/1"
              className="card-link text-decoration-none" >
              <DoctorCard1 data={{}} showAllIcons={true} />
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <Link to="/loginPage/doctor/2"
              className="card-link  text-decoration-none" >
              <DoctorCard2 data={{}} showAllIcons={true} />
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <Link to="/loginPage/DOCTOR_CARD_1"
              className="card-link  text-decoration-none" >
              <DoctorCard1 data={{}} showAllIcons={true} />
            </Link>
          </div>
        </div>

         <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <Link to="/loginPage/DOCTOR_CARD_2"
              className="card-link  text-decoration-none" >
              <DoctorCard2 data={{}} showAllIcons={true} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DoctorTemplates;

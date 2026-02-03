import DoctorCard1 from "../components/cards/DoctorCard/DoctorCard1";
import DoctorCard2 from "../components/cards/DoctorCard/DoctorCard2";

function DoctorTemplates() {
  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">Choose Doctor Template</h3>

      <div className="row g-4 align-items-stretch">
        <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <DoctorCard1 />
          </div>
        </div>

        <div className="col-md-6 col-lg-4 d-flex">
          <div className="w-100">
            <DoctorCard2 />
          </div>
        </div>


      </div>
    </div>
  );
}

export default DoctorTemplates;

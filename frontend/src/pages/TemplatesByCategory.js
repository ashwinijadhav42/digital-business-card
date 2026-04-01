import { useParams, Link } from "react-router-dom";
import DoctorCard1 from "../components/cards/DoctorCard/DoctorCard1";
import DoctorCard2 from "../components/cards/DoctorCard/DoctorCard2";
import BusinessAnalystCard from "../components/cards/CorporateCard/BusinessAnalyst";
import SoftwareEngineer from "../components/cards/CorporateCard/SoftwareEngineer";
import FreelanceSoftwareEngineer from "../components/cards/FreelancerCards/FreelanceSoftwareEngineer";
import Freelancer from "../components/cards/FreelancerCards/Freelancer";
import RealEstate from "../components/cards/RealEstateCard/RealEstate";
import UnityRealEstate from "../components/cards/RealEstateCard/UnityRealEstate";
import SampleCard from "../components/cards/OtherCard/SampleCard";


const templateMap = {
  doctor: [
    { id: 1, component: DoctorCard1 },
    { id: 2, component: DoctorCard2 },
    
  ],

  corporate: [
    { id: 1, component: BusinessAnalystCard },
    { id: 2, component: SoftwareEngineer },
  ],
  freelancer: [
    { id: 1, component: Freelancer },
    { id: 2, component: FreelanceSoftwareEngineer },
  ],
  realestate: [
    { id: 1, component: RealEstate },
    { id: 2, component: UnityRealEstate },
  ],
  other:[
{
  id:1,component:SampleCard
}
  ]

};


function TemplatesByCategory() {
  const { category } = useParams();
  const templates = templateMap[category];

  if (!templates) {
    return (
      <div className="container py-5 text-center">
        <h4>No templates found for this category</h4>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4 text-capitalize">
        Choose {category} Template
      </h3>

      <div className="row g-5 align-items-stretch">
        {templates.map((template) => {
          const TemplateComponent = template.component;

          return (
            <div
              key={template.id}
              className="col-md-8 col-lg-6 d-flex"
            >
              <div className="w-100">
                <Link
                  to={
                    localStorage.getItem("user")
                      ? `/create-${category}-card/template${template.id}`
                      : `/login/${category}/${template.id}`
                  }
                  className="text-decoration-none"
                >
                  <TemplateComponent />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TemplatesByCategory;

import SoftwareEngineer from "../components/cards/CorporateCard/SoftwareEngineer";
import BusinessAnalyst from "../components/cards/CorporateCard/BusinessAnalyst";
import { useNavigate } from "react-router-dom";
import { TEMPLATE_IDS } from "../constants/templateIds";

function CorporateTemplates() {
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId) => {
    localStorage.setItem("selectedTemplate", templateId);

    const token = localStorage.getItem("token");
    navigate(token ? "/create-card" : "/LoginPage");
  };

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">Choose Corporate Template</h3>

      <div className="row gx-5 gy-4">
        <div
          className="col-md-6 col-lg-4"
          onClick={() =>
            handleTemplateSelect(TEMPLATE_IDS.CORP_SOFTWARE_ENGINEER)
          }
        >
          <SoftwareEngineer />
        </div>

        <div
          className="col-md-6 col-lg-4"
          onClick={() =>
            handleTemplateSelect(TEMPLATE_IDS.CORP_BUSINESS_ANALYST)
          }
        >
          <BusinessAnalyst />
        </div>
      </div>
    </div>
  );
}

export default CorporateTemplates;

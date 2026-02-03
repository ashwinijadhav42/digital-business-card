import doctorImg from "../assets/images/templates/doctorImg1.jpg";
import corporateImg from "../assets/images/templates/corporateImg.jpg";
import freelancerImg from "../assets/images/templates/freelancerImg.jpg"
import realEstateImg from "../assets/images/templates/realEstateImg.jpg"
import { Link } from "react-router-dom";

function Templates() {

  const templates = [
    {
      id: 1,
      title: "Doctor",
      description: "Perfect for clinics & hospitals",
      image: doctorImg,
      link: "/templates/doctorTemplates",
    },
    {
      id: 2,
      title: "Corporate",
      description: "Perfect for professionals & companies",
      image: corporateImg,
      link: "/templates/corporateTemplates",

    },
    {
  id: 3,
  title: "Freelancer",
  description: "Perfect for designers, developers & creators",
  image: freelancerImg,
  link: "/templates/freelancerTemplates",
},
{
  id: 4,
  title: "Real Estate",
  description: "Perfect for designers, developers & creators",
  image: realEstateImg,
  link: "/templates/realEstateTemplates",
},
   

  ];

  return (
    <>
      <section className="container py-4">
       <h1 className="fw-bold text-center">
          Explore Card Templates
        </h1>
        <p className="text-center text-muted mb-3">
          Choose a professional digital business card design for your industry.
        </p>

        <div className="row justify-content-center">

          {templates.map((template) => (
            <div
              className="col-12 col-sm-6 col-lg-4 mb-4"
              key={template.id}
            >
              <div className="card shadow-sm h-100">

                <img
                  src={template.image}
                  alt={`${template.title} Business Card`}
                  className="card-img-top template-img"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{template.title}</h5>
                  <p className="text-muted small">
                    {template.description}
                  </p>
                  <Link
                    to={template.link}
                    className="btn btn-primary btn-sm"
                  >
                    View Template
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default Templates;

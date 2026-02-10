import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Templates() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/templates/getAllTemplates")
      .then((res) => setTemplates(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="container py-4">
      <h1 className="fw-bold text-center">Explore Card Templates</h1>
      <p className="text-center text-muted mb-3">
        Choose a professional digital business card design for your industry.
      </p>

      <div className="row justify-content-center">
        {templates.map((template) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={template.id}>
            <div className="card shadow-sm h-100">
              <img
  src={`http://localhost:8080/uploads/${template.imageUrl}`}
  alt={`${template.title} Business Card`}
  className="card-img-top template-img"
/>
              <div className="card-body text-center">
                <h5 className="card-title">{template.title}</h5>
                <p className="text-muted small">{template.description}</p>
                <Link to={template.link} className="btn btn-primary btn-sm">
                  View Template
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Templates;

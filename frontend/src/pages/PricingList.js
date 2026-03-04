import React from "react";

function PricingCard({
  title,
  price,
  duration,
  features = [],
  highlight = false,
}) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className={`card h-100 shadow-sm ${highlight ? "border-primary border-2" : ""}`}>
        <div className="card-body text-center p-4 d-flex flex-column">
          <h5 className="fw-bold">{title}</h5>

          <h2 className="my-3 text-primary">
            ₹{price}
            <small className="text-muted fs-6"> / {duration}</small>
          </h2>

          <ul className="list-unstyled text-muted mb-4 flex-grow-1">
            {Array.isArray(features) && features.length > 0 ? (
              features.map((f) => (
                <li key={f.id} className="mb-2">
                  ✔ {f.name}
                </li>
              ))
            ) : (
              <li className="text-muted">No Features</li>
            )}
          </ul>

          <button
            className={`btn ${highlight ? "btn-primary" : "btn-outline-primary"} w-100`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
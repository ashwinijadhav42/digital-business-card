function PricingCard({ title, price, duration, features = [], highlight }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div
        className={`card h-100 text-center shadow-sm ${
          highlight ? "border-primary border-2" : ""
        }`}
      >
        <div className="card-body p-4">
          <h5 className="fw-bold">{title}</h5>

          <h2 className="my-3 text-primary">
            ₹{price}
            <small className="text-muted fs-6">/{duration}</small>
          </h2>

          <ul
            className="list-unstyled text-muted mb-4"
            style={
              features.length > 7
              ? {
                maxHeight: "200px",
                overflowY: "auto",
                paddingRight: "8px",
              }
            : {}
            }
            >
              {Array.isArray(features) && features.length > 0 ? (
              features.map((feature) => (
              <li key={feature.id} className="mb-2">
                ✔ {feature.name}
              </li>
            ))
            ) : (
              <li>No Features Available</li>
            )}
          </ul>

          <button
            className={`btn ${
              highlight ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
function FeatureCard({ icon, title, description }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0 text-center p-4">
        <div className="mb-3 fs-1 text-primary">
          {icon}
        </div>
        <h5 className="fw-semibold">{title}</h5>
        <p className="text-muted small">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;



function CardPreview({ data }) {
  return (

    
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-body text-center">

        <h5 className="fw-bold mb-1">{data.fullName || "Your Name"}</h5>
        <p className="text-muted mb-1">{data.designation}</p>
        <p className="fw-semibold">{data.company}</p>

        <hr />

        <p className="mb-1">📞 {data.mobile}</p>
        <p className="mb-1">✉ {data.email}</p>
        <p className="mb-1">🌐 {data.website}</p>

        <span className="badge bg-primary mt-2">
          {data.templateType} Template
        </span>

      </div>
    </div>
  );
}

export default CardPreview;

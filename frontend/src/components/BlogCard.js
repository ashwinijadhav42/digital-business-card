import { Link } from "react-router-dom";

function BlogCard({ id, image, title, description, date }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4 bg-light">
      <div className="card h-100 shadow-sm border-0">

        <img
          src={image}
          alt={title}
          className="card-img-top"
        />

        <div className="card-body d-flex flex-column">
          <small className="text-muted mb-2">{date}</small>

          <h5 className="fw-semibold">{title}</h5>

          <p className="text-muted small flex-grow-1">
            {description}
          </p>

          <Link
            to={`/blogs/${id}`}
            className="btn btn-outline-primary btn-sm mt-auto"
          >
            Read More
          </Link>

        </div>
      </div>
    </div>
  );
}

export default BlogCard;
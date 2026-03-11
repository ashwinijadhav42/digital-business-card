import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BlogDetails() {

  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container py-5">

      <div className="page-header d-flex justify-content-between align-items-center mb-3">
        <h1 className="fw-bold">{blog.title}</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/blogs")}
        >
          Back to Blogs
        </button>
      </div>

      <p className="text-muted">{blog.publishDate}</p>

      <img
        src={`http://localhost:8080/uploads/blogs/${blog.imageUrl}`}
        className="card-img-top"
        alt={blog.title}
      />

      <p style={{ whiteSpace: "pre-line" }}>
          {blog.description}
    </p>

      <div dangerouslySetInnerHTML={{ __html: blog.content }} />

    </div>
  );
}

export default BlogDetails;
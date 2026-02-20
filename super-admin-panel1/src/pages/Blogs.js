import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ Fetch Blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/blogs/all"
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // ✅ Delete Blog
  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this blog?")) return;

  try {
    await axios.post(
      "http://localhost:8080/api/blogs/delete",
      null,
      {
        params: { id: id }
      }
    );

    alert("Blog deleted successfully");
    fetchBlogs();
  } catch (error) {
    console.error("Delete error:", error);
    alert("Error deleting blog");
  }
};


  // ✅ Edit Blog
  ;

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h3 className="page-title">Blog List</h3>
        <button
          className="page-action-btn"
          onClick={() => navigate("/blogs/add")}
        >
          + Add Blog
        </button>
      </div>
      <div className="table-container">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Publish Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No blogs found
              </td>
            </tr>
          ) : (
            blogs.map((blog, index) => (
              <tr key={blog.id}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={`http://localhost:8080/uploads/blogs/${blog.imageUrl}`}
                    alt="blog"
                    width="80"
                    height="60"
                    style={{ objectFit: "cover" }}
                  />
                </td>

                <td>{blog.title}</td>
                <td>{blog.description}</td> 

                <td>
                  {blog.status ? (
                    <span className="badge bg-success">Active</span>
                  ) : (
                    <span className="badge bg-secondary">Inactive</span>
                  )}
                </td>

                <td>{blog.publishDate}</td>

                <td>
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => navigate(`/blogs/edit/${blog.id}`)}
                  >
                    Edit
                  </button>


                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Blog;

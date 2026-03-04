import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch Blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8080/api/blogs/all"
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.post(
        "http://localhost:8080/api/blogs/delete",
        null,
        { params: { id } }
      );

      alert("Blog deleted successfully");
      fetchBlogs();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting blog");
    }
  };

  // Filter by Title
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <div className="page-header d-flex justify-content-between align-items-center mb-3">
        <h3 className="page-title">Blog List</h3>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/blogs/add")}
        >
          + Add Blog
        </button>
      </div>

      {/* Search Box */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by blog title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary"></div>
          </div>
        ) : (
          <table className="table table-bordered table-hover align-middle">
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
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No blogs found
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog, index) => (
                  <tr key={blog.id}>
                    <td>{index + 1}</td>

                    <td>
                      <img
                        src={
                          blog.imageUrl
                            ? `http://localhost:8080/uploads/blogs/${blog.imageUrl}`
                            : "https://via.placeholder.com/80x60"
                        }
                        alt="blog"
                        width="80"
                        height="60"
                        style={{ objectFit: "cover" }}
                        className="rounded"
                      />
                    </td>

                    <td>{blog.title}</td>

                    <td style={{ maxWidth: "250px" }}>
                      {blog.description.length > 80
                        ? blog.description.substring(0, 80) + "..."
                        : blog.description}
                    </td>

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
                        className="btn btn-sm btn-warning me-2"
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
        )}
      </div>
    </div>
  );
};

export default Blog;
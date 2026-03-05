import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories, deleteCategory } from "../api/api";
import "../styles/table.css";

export default function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteCategory(id)
        .then(() => fetchData())
        .catch((err) => console.error(err));
    }
  };

  // 🔍 Filter by Title
  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="page-header d-flex justify-content-between align-items-center mb-3">
        <h2 className="page-title">Categories</h2>
        <button
          className="page-action-btn"
          onClick={() => navigate("/categories/add")}
        >
          + Add Category
        </button>
      </div>

      {/* 🔍 Search Box */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by category title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary"></div>
          </div>
        ) : (
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No categories found
                  </td>
                </tr>
              ) : (
                filteredCategories.map((cat) => (
                  <tr key={cat.id}>
                    <td>
                      <img
                        src={
                          cat.imageUrl
                            ? `http://localhost:8080/uploads/${cat.imageUrl}`
                            : "https://via.placeholder.com/80x60"
                        }
                        alt="category"
                        width="80"
                        height="60"
                        style={{ objectFit: "cover" }}
                        className="rounded"
                      />
                    </td>

                    <td>{cat.title}</td>

                    <td style={{ maxWidth: "250px" }}>
                      {cat.description?.length > 80
                        ? cat.description.substring(0, 80) + "..."
                        : cat.description}
                    </td>

                    <td>{cat.link}</td>

                    <td>
                      {cat.status ? (
                        <span className="badge bg-success">Active</span>
                      ) : (
                        <span className="badge bg-secondary">Inactive</span>
                      )}
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() =>
                          navigate(`/categories/edit/${cat.id}`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(cat.id)}
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
    </>
  );
}

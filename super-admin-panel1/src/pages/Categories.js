import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories, deleteCategory } from "../api/api";
import "../styles/table.css";

export default function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteCategory(id)
        .then(() => fetchData())
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Categories</h2>
        <button
          className="page-action-btn"
          onClick={() => navigate("/categories/add")}
        >
          Add Category
        </button>
      </div>

      <div className="table-container">
        <table className="table table-bordered table-striped">
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
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td>
                  {cat.imageUrl && (
                    <img
                      src={`http://localhost:8080/uploads/${cat.imageUrl}`}
                      alt="category"
                      width="80"
                    height="60"
                    style={{ objectFit: "cover" }}
                    />
                  )}
                </td>
                <td>{cat.title}</td>
                <td>{cat.description}</td>
                <td>{cat.link}</td>
                <td>{cat.status ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/categories/edit/${cat.id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(cat.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import { useNavigate } from "react-router-dom";

export default function Admins() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Admins</h2>

        <button
          className="page-action-btn"
          onClick={() => navigate("/admin/add")}
        >
          Add Admin
        </button>
      </div>

      <p>No admins added.</p>
    </>
  );
}

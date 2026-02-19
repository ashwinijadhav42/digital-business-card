import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Users</h2>

        <button
          className="page-action-btn"
          onClick={() => navigate("/users/add")}
        >
          Add User
        </button>
      </div>

      <p>No users added.</p>
    </>
  );
}

import { useNavigate } from "react-router-dom";

export default function AddAdmin() {
  const navigate = useNavigate();

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="page-header">
          <h3 className="form-title">Add Admin</h3>
          <button className="btn-back" onClick={() => navigate("/admin")}>
            ← Back
          </button>
        </div>

        <div className="form-grid">
          <input placeholder="Admin Name *" />
          <input placeholder="Email *" />

          <input placeholder="Phone Number" />
          <select>
            <option>Role</option>
            <option>Super Admin</option>
            <option>Sub Admin</option>
          </select>

          <input type="password" placeholder="Password *" />
          <input type="password" placeholder="Confirm Password *" />

          <div className="file-upload">
            <label>Profile Image</label>
            <input type="file" />
            <small>png, jpg, jpeg</small>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn-save">Save</button>
          <button className="btn-discard">Discard</button>
        </div>
      </div>
    </div>
  );
}

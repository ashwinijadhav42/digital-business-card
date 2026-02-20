import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const navigate = useNavigate();

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="page-header">
          <h3 className="form-title">Add User</h3>
          <button className="btn-back" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>

        <div className="form-grid">
          <input placeholder="First Name *" />
          <input placeholder="Last Name *" />

          <input placeholder="Email *" />
          <input placeholder="Contact No" />

          <input type="password" placeholder="Password *" />
          <input type="password" placeholder="Confirm Password *" />

          <select>
            <option>Select Plan</option>
            <option>Basic</option>
            <option>Premium</option>
          </select>

          <div className="file-upload">
            <label>Profile</label>
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

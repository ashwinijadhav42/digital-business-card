import React, { useState } from "react";
import "./Affiliations.css";

function Affiliation() {
  const [showPopup, setShowPopup] = useState(false);
  const [showInvitePopup, setShowInvitePopup] = useState(false);
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("affiliation");

  // ✅ NEW: Get logged-in user
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ NEW: Create unique referral link
  const referralCode = user?.id || user?.email || "guest";
  const referralLink = `http://localhost:3000/register?ref=${referralCode}`;

  // ✅ Dummy Data
  const affiliationData = [
    {
      name: "Jhon Fowler",
      email: "jhon@mailinator.com",
      amount: "₹100.00",
      date: "Sep 10 2025",
    },
    {
      name: "Riyan Smith",
      email: "Riyan@rezulti.com.br",
      amount: "₹100.00",
      date: "Jan 06 2025",
    },
  ];

  const withdrawalData = [
    { amount: "₹10.00", status: "Rejected", date: "Jan 09 2026" },
    { amount: "₹46.00", status: "Approved", date: "Dec 03 2025" },
    { amount: "₹100.00", status: "Approved", date: "Oct 08 2025" },
  ];

  return (
    <div className="aff-container">
      <h1 className="aff-title">Affiliations</h1>

      {/* Referral Section */}
      <div className="aff-referral-box">
        <input
          type="text"
          value={referralLink}  
          readOnly
        />

        <button
          className="aff-copy-btn"
          onClick={() => {
            navigator.clipboard.writeText(referralLink);  
            alert("Copied!");
          }}
        >
          Copy
        </button>

        <div className="aff-right-buttons">
          <button className="aff-how-btn" onClick={() => setShowPopup(true)}>
            How it works?
          </button>

          <button
            className="aff-invite-btn"
            onClick={() => setShowInvitePopup(true)}
          >
            Send Invite
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="aff-popup-overlay"
          onClick={() => setShowPopup(false)}
        >
          <div className="aff-popup" onClick={(e) => e.stopPropagation()}>
            <h3>How to work Affiliation?</h3>
            <p>
              Share your referral link. When someone registers using your link
              and purchases a subscription, you earn ₹100 reward.
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Invite Popup */}
      {showInvitePopup && (
        <div
          className="aff-popup-overlay"
          onClick={() => setShowInvitePopup(false)}
        >
          <div className="aff-popup" onClick={(e) => e.stopPropagation()}>
            <h3>Send Email</h3>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="aff-email-input"
            />

            <p className="aff-small-text">
              We'll never share your email with anyone else.
            </p>

            <div style={{ marginTop: "15px" }}>
              <button
                onClick={() => {
                  alert("Invite sent to: " + email);
                  setShowInvitePopup(false);
                  setEmail("");
                }}
              >
                Send
              </button>

              <button
                style={{ marginLeft: "10px" }}
                onClick={() => setShowInvitePopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="aff-card-wrapper">
        <div className="aff-card aff-total">
          <p>Total Affiliation Amount</p>
          <h3>₹200.00</h3>
        </div>

        <div className="aff-card aff-current">
          <p>Current Amount</p>
          <h3>₹54.00</h3>
        </div>
      </div>

      {/* Note */}
      <p className="aff-note">
        Note: Your affiliate links will be displayed at the bottom of your
        digital_Business card page. When someone registers through your link and
        then purchases a subscription, you will be rewarded with ₹100.00
      </p>

      {/* Tabs */}
      <div className="aff-tabs">
        <button
          className={activeTab === "affiliation" ? "aff-active" : "aff-inactive"}
          onClick={() => setActiveTab("affiliation")}
        >
          Affiliation
        </button>

        <button
          className={activeTab === "withdrawal" ? "aff-active" : "aff-inactive"}
          onClick={() => setActiveTab("withdrawal")}
        >
          Withdrawal
        </button>
      </div>

      {/* ================= TABLES ================= */}

      {activeTab === "affiliation" && (
        <div className="aff-table">
          <div className="aff-table-header">
            <span>USER</span>
            <span>AFFILIATION AMOUNT</span>
            <span>DATE</span>
          </div>

          {affiliationData.map((item, index) => (
            <div className="aff-table-row" key={index}>
              <div>
                <strong>{item.name}</strong>
                <br />
                <small>{item.email}</small>
              </div>

              <span className="aff-badge green">{item.amount}</span>

              <span className="aff-date">{item.date}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "withdrawal" && (
        <div className="aff-table">
          <div className="aff-table-header">
            <span>AMOUNT</span>
            <span>STATUS</span>
            <span>DATE</span>
          </div>

          {withdrawalData.map((item, index) => (
            <div className="aff-table-row" key={index}>
              <span className="aff-badge green">{item.amount}</span>

              <span
                className={`aff-badge ${
                  item.status === "Approved" ? "green" : "red"
                }`}
              >
                {item.status}
              </span>

              <span className="aff-date">{item.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Affiliation;
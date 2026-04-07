import React, { useEffect, useState } from "react";

function InquiryList() {

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:8080/api/inquiries")
      .then(res => res.json())
      .then(setData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 UPDATE STATUS
  const updateStatus = async (id, status) => {
    await fetch(
      `http://localhost:8080/api/inquiries/${id}/status?status=${status}`,
      { method: "PUT" }
    );
    fetchData();
  };

  // 🔥 DELETE
  const deleteInquiry = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;

    await fetch(
      `http://localhost:8080/api/inquiries/${id}`,
      { method: "DELETE" }
    );

    fetchData();
  };

  return (
    <div className="container text-center mt-4">
      <h3>User Inquiries</h3>

      <table className="table table-bordered mt-3 text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Message</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>

              {/* STATUS */}
              <td>
                <span className={
                  item.status === "NEW"
                    ? "badge bg-danger"
                    : item.status === "ANSWERED"
                    ? "badge bg-warning"
                    : "badge bg-success"
                }>
                  {item.status}
                </span>
              </td>

              {/* ACTIONS */}
              <td>
                <button
                  className="btn btn-sm btn-success me-2"
                  onClick={() => updateStatus(item.id, "ANSWERED")}
                >
                  Mark Answered
                </button>

                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() => updateStatus(item.id, "CLOSED")}
                >
                  Close
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteInquiry(item.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InquiryList;
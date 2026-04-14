function PricingCard({ title, price, duration, features = [], highlight }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div
        className={`card h-100 text-center shadow-sm ${
          highlight ? "border-primary border-2" : ""
        }`}
      >
        <div className="card-body p-4">
          <h5 className="fw-bold">{title}</h5>

          <h2 className="my-3 text-primary">
            ₹{price}
            <small className="text-muted fs-6">/{duration}</small>
          </h2>

          <ul
            className="list-unstyled text-muted mb-4"
            style={
              features.length > 7
              ? {
                maxHeight: "200px",
                overflowY: "auto",
                paddingRight: "8px",
              }
            : {}
            }
            >
              {Array.isArray(features) && features.length > 0 ? (
              features.map((feature) => (
              <li key={feature.id} className="mb-2">
                ✔ {feature.name}
              </li>
            ))
            ) : (
              <li>No Features Available</li>
            )}
          </ul>

          <button
  className={`btn ${highlight ? "btn-primary" : "btn-outline-primary"} w-100`}
  onClick={async () => {
    const slug = localStorage.getItem("currentSlug");

    try {
      // 1️⃣ Create Order
      const res = await fetch("http://localhost:8080/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: price  // ✅ dynamic price
        })
      });

      const order = await res.json();

      // 2️⃣ Razorpay
      const options = {
        key: "rzp_test_Sbh1YyXMJxqIMt",
        amount: order.amount,
        currency: "INR",
        name: "Digital Card",
        description: title,
        order_id: order.id,

        handler: async function (response) {
          await fetch("http://localhost:8080/api/payment/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              slug: slug
            })
          });

          localStorage.setItem(`paid_${slug}`, "true");

          alert("✅ Payment Successful");

          // redirect back to card page
          window.location.href = `/view-sample-card/${slug}`;
        },

        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("❌ Payment Failed");
    }
  }}
>
  Get Started
</button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
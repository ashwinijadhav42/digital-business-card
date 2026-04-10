import { QRCodeCanvas } from "qrcode.react";
import "./CardActions.css"
import {
  FaDownload,
  FaWhatsapp,
  FaShoppingCart,
  FaCopy
} from "react-icons/fa";


function CardActions({ slug, publicUrl, onDownload, variant = "light" }) {
const isPaid = localStorage.getItem(`paid_${slug}`) === "true";

  const handleWhatsapp = () => {
    if (!slug) return;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(publicUrl)}`,
      "_blank"
    );
  };
const handleBuyNow = async () => {
  if (!slug) return;

  try {
    // 1️⃣ Create Order
    const res = await fetch("http://localhost:8080/api/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: 499
      })
    });

    const order = await res.json();

    // 2️⃣ Razorpay Options
    const options = {
      key: "rzp_test_Sbh1YyXMJxqIMt",
      amount: order.amount,
      currency: "INR",
      name: "Digital Card",
      description: "Buy Card",
      order_id: order.id,

      // ✅ FORCE UPI ONLY
      method: {
        upi: true,
        card: true,
        netbanking: true,
        wallet: true,
        paylater: true
      },

      // ✅ Prefill (optional but good UX)
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999"
      },

      // ✅ Payment Success
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
        window.location.reload();
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
};

  const handleCopy = () => {
    if (!slug) return;
    navigator.clipboard.writeText(publicUrl);
    alert("Link Copied!");
  };

  return (
    <div className="card-actions mt-4 mb-4">

      {/* ================= QR ================= */}
      <div className="mt-4">
        <h5>Scan QR Code</h5>
        <QRCodeCanvas value={publicUrl} size={200} />
      </div>

      {/* ================= DOWNLOAD ================= */}
       {!slug && (
        <p className={`mt-2 ${variant === "dark" ? "text-light-custom" : "text-muted"}`}>
  Create card first to enable download pdf and sharing features
</p>
      )}
      <button
  className="freelancer-btn mt-2 pdf-custom-style"
  disabled={!slug || !isPaid}
  onClick={() => {
    if (!isPaid) {
      alert("Please complete payment first");
      return;
    }
    onDownload();
  }}
>
  <FaDownload className="me-2" />
  {isPaid ? "Download PDF" : "Locked (Pay to Download)"}
</button>
     

      {/* ================= SHARE ================= */}
      <div className="mt-4 freelancer-share">
        <h5>Share This Card</h5>

       

        {/* WhatsApp */}
        <button
          className="freelancer-btn m-1"
          disabled={!slug}
          onClick={handleWhatsapp}
        >
          <FaWhatsapp className="me-1" />
          Share on WhatsApp
        </button>

        {/* Buy Now */}
<button
  className="freelancer-btn m-1 buy-now-btn"
  disabled={!slug}
  onClick={handleBuyNow}
>
  <FaShoppingCart className="me-1" />
  Buy Now
</button>
        {/* Copy Link */}
        <button
          className="freelancer-btn m-1
            copy-link-btn"
          disabled={!slug}
          onClick={handleCopy}
        > 
        <FaCopy className="me-1"/>
          Copy Link
        </button>

      </div>

    </div>
  );
}

export default CardActions;
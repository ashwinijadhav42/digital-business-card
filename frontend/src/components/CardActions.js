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
  const handleBuyNow = () => {
  if (!slug) return;

  // store slug so we can use it later
  localStorage.setItem("currentSlug", slug);

  // redirect to pricing page
  window.location.href = "/pricingDesign";
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
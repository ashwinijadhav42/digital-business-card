import FeatureCard from "../components/FeatureCard";
import { 
  FaQrcode, 
  FaIdCard, 
  FaPalette, 
  FaChartLine, 
  FaShareAlt, 
  FaMobileAlt 
} from "react-icons/fa";

function Features() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-4  text-center">
        <div className="container">
          <h1 className="fw-bold">Powerful Features</h1>
          <p className="text-muted mt-3">
            Everything you need to create, share, and manage your digital business card.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-5">
        <div className="container">
          <div className="row">

            <FeatureCard
              icon={<FaQrcode />}
              title="QR Code Sharing"
              description="Share your digital card instantly using a QR code."
            />

            <FeatureCard
              icon={<FaIdCard />}
              title="One-Click Contact Save"
              description="Allow users to save your contact directly to their phone."
            />

            <FeatureCard
              icon={<FaMobileAlt />}
              title="NFC Compatible"
              description="Works seamlessly with NFC-enabled business cards."
            />

            <FeatureCard
              icon={<FaPalette />}
              title="Custom Design"
              description="Choose themes, colors, and layouts that match your brand."
            />

            <FeatureCard
              icon={<FaShareAlt />}
              title="Social Media Integration"
              description="Add WhatsApp, LinkedIn, Instagram, and more."
            />

            <FeatureCard
              icon={<FaChartLine />}
              title="Analytics & Insights"
              description="Track profile views, clicks, and engagement."
            />

          </div>
        </div>
      </section>

      
    </>
  );
}

export default Features;

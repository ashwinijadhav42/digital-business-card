import PricingCard from "../components/PricingCard";

function Pricing() {
  return (
    <>
      {/* HERO */}
      <section className="py-4  text-center">
        <div className="container">
          <h1 className="fw-bold">Simple & Transparent Pricing</h1>
          <p className="text-muted mt-3">
            Choose the plan that fits your business needs.
          </p>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="py-3">
        <div className="container">
          <div className="row justify-content-center">

            <PricingCard
              title="Free"
              price="0"
              duration="forever"
              features={[
                "1 Digital Business Card",
                "Basic Design",
                "QR Code Sharing",
                "Mobile Friendly",
              ]}
            />

            <PricingCard
              title="Pro"
              price="499"
              duration="year"
              
              features={[
                "10 Digital Business Card",
                "Everything in Free",
                "Custom Branding",
                "Social Media Links",
                "Analytics Tracking",
                "Priority Support",
              ]}
            />

            <PricingCard
              title="Business"
              price="999"
              duration="year"
              features={[
                "Multiple Cards",
                "Team Access",
                "Advanced Analytics",
                "Custom Domain",
                "Dedicated Support",
              ]}
            />

          </div>
        </div>
      </section>

      {/* FAQ / TRUST */}
      <section className="py-3 text-center">
        <div className="container">
          <h5 className="fw-semibold">No Hidden Charges</h5>
          <p className="text-muted mt-2">
            Cancel anytime. Upgrade whenever you want.
          </p>
        </div>
      </section>
    </>
  );
}

export default Pricing;

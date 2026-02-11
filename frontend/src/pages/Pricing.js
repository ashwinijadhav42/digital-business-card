import { useEffect, useState } from "react";
import PricingCard from "../components/PricingCard";
import axios from "axios";

function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/pricing/activePlans")
      .then((res) => setPlans(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="py-4 text-center">
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

            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                price={plan.price}
                duration={plan.duration}
                features={plan.features.map(f => f.feature)}
              />
            ))}

          </div>
        </div>
      </section>

      {/* TRUST */}
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

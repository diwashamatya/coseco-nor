import React from "react";
import "./Features.css";

const features = [
  {
    title: "Mobile Wallet Fare Payments",
    desc: "Secure payments via mobile wallets and cards.",
  },
  {
    title: "Real-Time Validation & Ticketing",
    desc: "Instant verification across transport networks.",
  },
  {
    title: "Transport Data Dashboards",
    desc: "Monitor performance with real-time insights.",
  },
  {
    title: "API & System Integrations",
    desc: "Seamless integration with third-party platforms.",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">Platform Features</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

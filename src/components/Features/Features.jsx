import React from "react";
import { motion } from "framer-motion";
import "./Features.css";

const Features = () => {
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

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    <section className="expertise-section">
      <motion.h2
        className="section-title"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Platform Features
      </motion.h2>

      <motion.div
        className="card-grid"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVars}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="glass-card"
            variants={fadeUp}
            whileHover={{ y: -15 }}
          >
            <div className="card-number">0{i + 1}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="card-corner"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;

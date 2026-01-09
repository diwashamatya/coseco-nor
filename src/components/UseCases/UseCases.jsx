import React from "react";
import { motion } from "framer-motion";
import "./UseCases.css";
import AnimatedDivider from "../Shared/AnimatedDivider/AnimatedDivider";

const WhoWeServe = () => {
  const clients = [
    {
      title: "Urban Bus Operators",
      desc: "Streamline operations with automated fare collection and real-time tracking for urban bus networks.",
    },
    {
      title: "Regional Transit Authorities",
      desc: "Centralized management systems for regional transportation coordination and planning.",
    },
    {
      title: "Metro & Light Rail Systems",
      desc: "Integrated solutions for metro systems with seamless passenger experience and operational efficiency.",
    },
    {
      title: "Smart Cities Initiatives",
      desc: "Comprehensive smart mobility platforms for modern urban development and sustainability.",
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
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    <section className="serve-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Who We Serve</span>
      </motion.h2>

      <motion.div
        className="serve-grid"
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {clients.map((client, i) => (
          <motion.div
            key={i}
            className="serve-card"
            variants={fadeUp}
            whileHover={{ y: -10 }}
          >
            <div className="card-index">0{i + 1}</div>
            <div className="card-content">
              <h3>{client.title}</h3>
              <p className="serve-description">{client.desc}</p>
              <a href="#" className="serve-cta">
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="card-glow" />
          </motion.div>
        ))}
      </motion.div>
      <AnimatedDivider  />
    </section>
  );
};

export default WhoWeServe;

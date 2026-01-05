import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  // Master Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

  const badgeAnim = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="about-page"
      initial="initial"
      animate="animate"
      variants={containerVars}
    >
      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">
        <motion.div className="about-content" variants={fadeUp}>
          <motion.span className="subtitle" variants={fadeUp}>
            Innovation • Integrity • Infrastructure
          </motion.span>
          <motion.h1 variants={fadeUp}>
            The Future of <br />
            <span className="gradient-text">Urban Movement.</span>
          </motion.h1>
          <motion.p variants={fadeUp}>
            Coseco engineers the invisible systems that keep cities moving. From
            Eindhoven to the world, we build the digital backbone of modern
            mobility.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-image-container"
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=2070"
            alt="Smart City"
          />
          <div className="glass-overlay"></div>
        </motion.div>
      </section>

      {/* ================= WHO WE ARE (ARCHITECTURAL DESIGN) ================= */}
      <section className="who-we-are">
        <div className="who-layout">
          <motion.div
            className="who-main-text"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="section-tag">
              <div className="tag-line"></div>
              <span>Who We Are</span>
            </div>
            <h2 className="display-text">
              We bridge the gap between <br />
              <span className="accent">Code and Concrete.</span>
            </h2>
            <div className="who-description">
              <p>
                Founded in 2018, Coseco is a collective of engineers and
                architects dedicated to public transport excellence. We
                specialize in high-load payment systems and secure cloud
                infrastructure.
              </p>
              <p>
                Our mission is simple: make every journey seamless, secure, and
                future-proof through intelligent software design.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="who-visual"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={badgeAnim}
          >
            <div className="innovation-badge">
              <span className="number">08</span>
              <span className="text">
                Years of <br /> Excellence
              </span>
              <motion.div
                className="badge-glow"
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE DO (GLASS CARDS) ================= */}
      <section className="what-we-do">
        <motion.h2
          className="section-title"
          initial="initial"
          whileInView="animate"
          variants={fadeUp}
        >
          Our Expertise
        </motion.h2>
        <motion.div
          className="card-grid"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVars}
        >
          {[
            {
              title: "Smart Payments",
              desc: "Contactless EMV & QR solutions for transit.",
            },
            {
              title: "Cloud Systems",
              desc: "Scalable infrastructure for national networks.",
            },
            {
              title: "Access Control",
              desc: "Military-grade identity & security protocols.",
            },
            {
              title: "API Ecosystems",
              desc: "Connecting legacy hardware to modern clouds.",
            },
          ].map((item, i) => (
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

      {/* ================= STATS (COUNTER LOOK) ================= */}
      <motion.section
        className="stats-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={containerVars}
      >
        {[
          { label: "Founded", val: "2018" },
          { label: "Systems", val: "24/7" },
          { label: "Reliability", val: "99.9%" },
          { label: "Impact", val: "Global" },
        ].map((stat, i) => (
          <motion.div key={i} className="stat-item" variants={fadeUp}>
            <h3>{stat.val}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
};

export default About;

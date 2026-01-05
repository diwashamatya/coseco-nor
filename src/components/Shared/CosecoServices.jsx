import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./CosecoServices.css";

const services = [
  {
    id: "mobility",
    number: "01",
    title: "Smart Mobility Solutions",
    icon: "🚀",
    short: "Intelligent transport ecosystems.",
    long: "Comprehensive smart mobility platforms integrating AI, IoT, and real-time data analytics to revolutionize urban transportation.",
    points: [
      "AI-Powered Routing",
      "Real-time Analytics",
      "IoT Integration",
      "Urban Mobility Platforms",
    ],
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  },
  {
    id: "ticketing",
    number: "02",
    title: "Contactless Ticketing Systems",
    icon: "📲",
    short: "Seamless digital ticketing.",
    long: "End-to-end contactless payment solutions including NFC, QR codes, and mobile wallet integration for frictionless transit experiences.",
    points: [
      "NFC Technology",
      "QR Code Systems",
      "Mobile Payments",
      "Digital Wallets",
    ],
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
  },
  {
    id: "fare",
    number: "03",
    title: "Fare Collection Platforms",
    icon: "💰",
    short: "Modern fare management.",
    long: "Scalable fare collection systems supporting multiple payment methods, dynamic pricing, and revenue management analytics.",
    points: [
      "Multi-payment Support",
      "Dynamic Pricing",
      "Revenue Analytics",
      "Fraud Detection",
    ],
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
  },
  {
    id: "information",
    number: "04",
    title: "Passenger Information Systems",
    icon: "📊",
    short: "Real-time passenger updates.",
    long: "Advanced passenger information systems providing real-time updates, journey planning, and multimodal transport coordination.",
    points: [
      "Real-time Updates",
      "Journey Planning",
      "Digital Signage",
      "Mobile Apps",
    ],
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
  },
  {
    id: "integration",
    number: "05",
    title: "Transport System Integration",
    icon: "🔗",
    short: "Unified transport networks.",
    long: "Seamless integration of disparate transport systems into cohesive networks with centralized control and data exchange.",
    points: [
      "API Integration",
      "Legacy System Migration",
      "Data Exchange",
      "Centralized Control",
    ],
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  },
  {
    id: "consulting",
    number: "06",
    title: "IT Consulting & Custom Software",
    icon: "💼",
    short: "Tailored technology solutions.",
    long: "Strategic IT consulting and custom software development specializing in transport technology innovation and digital transformation.",
    points: [
      "Tech Strategy",
      "Custom Development",
      "System Architecture",
      "Digital Transformation",
    ],
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)",
  },
];

const partners = [
  { name: "TransitTech", logo: "TT", color: "#2563eb" },
  { name: "UrbanMove", logo: "UM", color: "#059669" },
  { name: "SmartTransit", logo: "ST", color: "#7c3aed" },
  { name: "MobilityCorp", logo: "MC", color: "#dc2626" },
  { name: "CityConnect", logo: "CC", color: "#f59e0b" },
  { name: "TransitAI", logo: "TA", color: "#0891b2" },
];

const CosecoServices = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [activeHover, setActiveHover] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const active = services.find((s) => s.id === selectedId);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const element = containerRef.current;
        const { top, height } = element.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight - top) / (height * 0.5))
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -15,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="coseco-container" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="animated-bg">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-orb"
            style={{
              background: services[i]?.gradient,
              left: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-badge"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="pulse-dot" />
          Transforming Transportation
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Future-Ready
          <motion.span
            className="gradient-text"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {" "}
            Transit Technology
          </motion.span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Building intelligent transport ecosystems that connect cities, empower
          passengers, and drive sustainable mobility.
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="services-section"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="section-header">
          <motion.div className="section-number" variants={numberVariants}>
            01
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Innovative solutions powering the future of urban mobility
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelectedId(service.id)}
              onMouseEnter={() => setActiveHover(index)}
              onMouseLeave={() => setActiveHover(null)}
              style={{
                "--service-color": service.color,
                "--service-gradient": service.gradient,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Animated Border */}
              <div className="card-border" />

              {/* Card Content */}
              <div className="card-content">
                <motion.div
                  className="service-number"
                  animate={{
                    scale: activeHover === index ? 1.2 : 1,
                    color: activeHover === index ? service.color : "#666",
                  }}
                >
                  {service.number}
                </motion.div>

                <div className="service-icon-wrapper">
                  <motion.span
                    className="service-icon"
                    animate={{
                      rotate: activeHover === index ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.short}</p>

                <motion.div
                  className="card-hint"
                  animate={{
                    opacity: activeHover === index ? 1 : 0.5,
                    x: activeHover === index ? 5 : 0,
                  }}
                >
                  Click to explore →
                </motion.div>
              </div>

              {/* Hover Effect Layer */}
              <motion.div
                className="card-hover-layer"
                initial={false}
                animate={{
                  opacity: activeHover === index ? 0.1 : 0,
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Partner Marquee */}
      <motion.section
        className="partners-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="marquee-container">
          <motion.div
            className="marquee-track"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                className="partner-card"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                style={{ "--partner-color": partner.color }}
              >
                <div className="partner-logo">{partner.logo}</div>
                <span className="partner-name">{partner.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedId && active && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="modal-container"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              style={{ "--modal-color": active.color }}
            >
              {/* Animated Modal Background */}
              <div className="modal-bg-pattern" />

              {/* Modal Header */}
              <div className="modal-header">
                <div className="modal-number">{active.number}</div>
                <div className="modal-title-section">
                  <motion.div
                    className="modal-icon"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {active.icon}
                  </motion.div>
                  <h2>{active.title}</h2>
                  <p className="modal-tagline">{active.short}</p>
                </div>
                <motion.button
                  className="close-button"
                  onClick={() => setSelectedId(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>×</span>
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="modal-content">
                <motion.p
                  className="modal-description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {active.long}
                </motion.p>

                <div className="capabilities-section">
                  <h3>Key Capabilities</h3>
                  <div className="capabilities-grid">
                    {active.points.map((point, index) => (
                      <motion.div
                        key={index}
                        className="capability-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="capability-dot" />
                        <span>{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <motion.div
                  className="modal-cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="cta-content">
                    <h4>Ready to Transform Your Transit System?</h4>
                    <p>Let's build the future of mobility together</p>
                    <div className="cta-buttons">
                      <motion.a
                        href="mailto:contact@coseco.nl"
                        className="primary-cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Start Project
                      </motion.a>
                      <motion.a
                        href="#contact"
                        className="secondary-cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Book Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="scroll-progress"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ type: "spring", stiffness: 100 }}
      />
    </div>
  );
};

export default CosecoServices;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Services.css";
import PerspectiveScroll from "./PerspectiveScroll";
import RootLayout from "../Layouts/RootLayout";

const SERVICES = [
  {
    id: 1,
    title: "Enterprise Cybersecurity Solutions",
    subtitle: "Advanced Threat Protection & Security Excellence",
    content:
      "Comprehensive cybersecurity services designed to protect your critical business assets and maintain operational continuity.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    details: {
      description:
        "Our cybersecurity experts employ cutting-edge techniques to identify vulnerabilities before attackers can exploit them. We provide end-to-end security solutions that protect your organization's digital infrastructure, data, and reputation.",
      keyBenefits: [
        "24/7 threat monitoring and rapid response capabilities",
        "Customized security frameworks tailored to your business needs",
        "Compliance with international security standards and regulations",
        "Proactive threat hunting to identify hidden risks",
        "Security awareness training for your employees",
      ],
      process: [
        "Initial security assessment and risk analysis",
        "Development of comprehensive security strategy",
        "Implementation of security controls and solutions",
        "Ongoing monitoring, testing, and improvement",
        "Regular reporting and strategic security reviews",
      ],
    },
  },
  {
    id: 2,
    title: "Strategic HR Solutions",
    subtitle: "Talent Acquisition & Workforce Optimization",
    content:
      "Comprehensive HR services that streamline your operations and provide access to top-tier IT professionals in Vietnam's thriving technology market.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    details: {
      description:
        "We provide strategic HR solutions that help businesses scale their workforce efficiently while maintaining high-quality standards. Our expertise in Vietnam's talent market gives you access to skilled professionals with competitive advantages.",
      keyBenefits: [
        "Access to Vietnam's growing pool of 1+ million tech professionals",
        "Compliance with local labor laws and regulations",
        "Reduced time-to-hire with our curated talent pools",
        "Cost optimization through strategic workforce planning",
        "Cultural integration support for global teams",
      ],
      process: [
        "Workforce planning and requirements analysis",
        "Talent sourcing and comprehensive vetting process",
        "Onboarding and integration support",
        "Ongoing performance management",
        "Strategic workforce optimization",
      ],
    },
  },
  {
    id: 3,
    title: "Custom Software Development",
    subtitle: "Innovative Solutions for Your Unique Business Challenges",
    content:
      "Tailored software development services that leverage the latest technologies to solve your specific business problems and drive digital transformation.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    details: {
      description:
        "Our development teams create custom software solutions that address your specific business needs with scalability and performance in mind. We use agile methodologies to deliver high-quality software that provides real business value.",
      keyBenefits: [
        "Dedicated development teams with domain expertise",
        "Flexible engagement models to suit your project needs",
        "End-to-end development lifecycle management",
        "Integration with existing systems and infrastructure",
        "Future-proof solutions with modern technology stacks",
      ],
      process: [
        "Discovery and requirements gathering",
        "Architecture design and technical planning",
        "Agile development with continuous feedback",
        "Rigorous testing and quality assurance",
        "Deployment, maintenance, and enhancement",
      ],
    },
  },
  {
    id: 4,
    title: "Dedicated Development Teams",
    subtitle: "Your Extended Engineering Force",
    content:
      "Access to pre-vetted, highly skilled developers and complete agile teams that integrate seamlessly with your organization to accelerate product development.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    details: {
      description:
        "Our Dedicated Resource model provides you with immediate access to top-tier development talent without the overhead of recruitment and management. We handle all HR functions while you focus on product development and business strategy.",
      keyBenefits: [
        "Rapid team onboarding (within 2-4 weeks)",
        "Full control over team management and workflow",
        "Seamless integration with your existing processes",
        "Cost-effective scaling of development capacity",
        "Specialized expertise across multiple technologies",
      ],
      process: [
        "Requirements analysis and team composition",
        "Talent matching and vetting process (2-3 candidates per role)",
        "Onboarding and integration with your workflows",
        "Regular performance reviews and feedback",
        "Continuous resource optimization and scaling",
      ],
    },
  },
];

export default function LinearGrid() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = SERVICES.find((item) => item.id === selectedId);

  // Function to handle modal close
  const handleClose = () => {
    setSelectedId(null);
  };

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  return (
    <>
      <div>
        <header className="header">
          <h1>Made for modern teams</h1>
          <p>
            Explore our premium services designed for forward-thinking
            organizations
          </p>
        </header>

        <div className="grid">
          {SERVICES.map((item) => (
            <motion.div
              key={item.id}
              className="card"
              onClick={() => setSelectedId(item.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: item.id * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
            >
              <div className="card-inner">
                <div className="card-visual">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    loading="lazy"
                  />
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <div className="card-subtitle">{item.subtitle}</div>
                    <h2 className="card-title">{item.title}</h2>
                  </div>

                  <p className="card-description">{item.content}</p>

                  <div className="card-features">
                    {item.content
                      .split("\n\n")[0]
                      ?.split("\n")
                      .filter((line) => line.startsWith("•"))
                      .slice(0, 2)
                      .map((feature, index) => (
                        <div key={index} className="feature-item">
                          {feature.substring(1).trim()}
                        </div>
                      ))}
                  </div>

                  <div className="card-footer">
                    <span className="view-link">View details</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedId && (
            <motion.div
              className="modal-overlay"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="modal-card"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 400,
                }}
              >
                <motion.button
                  className="close-btn"
                  onClick={handleClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>

                <div className="modal-content-wrapper">
                  <div className="modal-main">
                    <div className="modal-header">
                      <div className="modal-subtitle">
                        {selectedItem.subtitle}
                      </div>
                      <h2 className="modal-title">{selectedItem.title}</h2>
                      <p className="modal-description">
                        {selectedItem.details.description}
                      </p>
                    </div>

                    <div className="modal-details">
                      <div className="modal-section">
                        <h3>Key Benefits</h3>
                        <div className="modal-feature-list">
                          {selectedItem.details.keyBenefits.map(
                            (benefit, index) => (
                              <div key={index} className="modal-feature">
                                {benefit}
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div className="modal-section process-section">
                        <h3>Our Process</h3>
                        <div className="modal-feature-list">
                          {selectedItem.details.process.map((step, index) => (
                            <div
                              key={index}
                              className="modal-feature process-item"
                            >
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="modal-actions">
                      <motion.button
                        className="primary-button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Schedule Consultation
                      </motion.button>
                      <motion.button
                        className="secondary-button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleClose}
                      >
                        Close
                      </motion.button>
                    </div>
                  </div>

                  <div className="modal-visual">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="modal-image"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <PerspectiveScroll />
    </>
  );
}

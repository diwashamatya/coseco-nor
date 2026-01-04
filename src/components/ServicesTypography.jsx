import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./ServicesTypography.css";

const services = [
  "Smart Mobility Solutions",
  "Contactless Ticketing Systems",
  "Fare Collection Platforms",
  "Passenger Information Systems",
  "Transport System Integration",
  "IT Consulting & Custom Software",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Ribbit-like smooth ease
    },
  },
};

export default function ServicesTypography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="services-section" ref={ref}>
      <div className="services-wrapper">
        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="services-list"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((text, index) => (
            <motion.div className="service-item" key={index} variants={item}>
              <span className="service-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="service-text">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

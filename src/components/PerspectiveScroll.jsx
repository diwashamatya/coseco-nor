import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ServicesTunnel = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smoothing out the scroll jitters
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const services = [
    { id: "01", title: "Smart Mobility Solutions" },
    { id: "02", title: "Contactless Ticketing Systems" },
    { id: "03", title: "Fare Collection Platforms" },
    { id: "04", title: "Passenger Information Systems" },
    { id: "05", title: "Transport System Integration" },
    { id: "06", title: "IT Consulting & Custom Software" },
  ];

  return (
    <div style={{ backgroundColor: "#000" }}>
      <div
        ref={containerRef}
        style={{ height: "4000px", position: "relative" }}
      >
        <div style={styles.stickyViewport}>
          {/* UI OVERLAY */}
          <div style={styles.uiLayout}>
            <div style={styles.topRow}>
              <div style={styles.status}>
                <span style={styles.liveDot} />
                SERVICES
              </div>
            </div>
            <div style={styles.bottomRow}>
              <h2 style={styles.mainHeading}>
                Future of <br /> Transport.
              </h2>
            </div>
          </div>

          {/* TUNNEL BOX */}
          <div style={styles.boxFrame}>
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                total={services.length}
                progress={smoothProgress}
              />
            ))}
          </div>

          <div style={styles.vignette} />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index, total, progress }) => {
  const start = index / total;
  const end = (index + 1) / total;

  // 1. SCALE: Card enters at 0.7, stays at 1.0 (perfect size), leaves at 1.8
  const scale = useTransform(
    progress,
    [start, start + 0.2, end - 0.2, end],
    [0.7, 1, 1, 1.8]
  );

  // 2. OPACITY: Sharp fade in and out
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );

  // 3. LETTER SPACING: Makes text feel dynamic but keeps it 100% readable
  const letterSpacing = useTransform(progress, [start, end], ["2px", "6px"]);

  return (
    <motion.div
      style={{
        ...styles.cardWrapper,
        scale,
        opacity,
        zIndex: total - index,
      }}
    >
      <div style={styles.cardInner}>
        <div style={styles.cardContent}>
          <span style={styles.cardNumber}>{service.id}</span>
          <motion.h3 style={{ ...styles.cardTitle, letterSpacing }}>
            {service.title}
          </motion.h3>
        </div>

        {/* Simple clear border */}
        <div style={styles.borderAccent} />
      </div>
    </motion.div>
  );
};

const styles = {
  stickyViewport: {
    position: "sticky",
    top: "calc(50vh - 300px)",
    height: "600px",
    width: "100%",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  uiLayout: {
    position: "absolute",
    inset: 0,
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 100,
    pointerEvents: "none",
  },
  status: {
    color: "#e2ff31",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  liveDot: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    background: "#e2ff31",
    borderRadius: "50%",
    marginRight: "10px",
  },
  mainHeading: {
    color: "#fff",
    fontSize: "42px",
    fontWeight: "300",
    margin: 0,
    lineHeight: 1,
  },

  boxFrame: {
    position: "relative",
    width: "450px",
    height: "300px",
  },
  cardWrapper: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardInner: {
    width: "100%",
    height: "100%",
    backgroundColor: "#080808",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    position: "relative",
  },
  cardContent: { textAlign: "center" },
  cardNumber: {
    color: "#e2ff31",
    fontSize: "14px",
    fontFamily: "monospace",
    display: "block",
    marginBottom: "20px",
  },
  cardTitle: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "500",
    textTransform: "uppercase",
    margin: 0,
    lineHeight: 1.2,
  },
  borderAccent: {
    position: "absolute",
    bottom: "20px",
    width: "30px",
    height: "2px",
    backgroundColor: "#e2ff31",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle, transparent 40%, #000 100%)",
    zIndex: 10,
    pointerEvents: "none",
  },
};

export default ServicesTunnel;

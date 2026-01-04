import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesTunnel = () => {
  const containerRef = useRef(null);

  // We use scrollYProgress to drive the card movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
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
      {/* THE TRACK: This must be tall to 'lock' the scroll. 
          The page will stay here for 3000px of scrolling. */}
      <div
        ref={containerRef}
        style={{ height: "3000px", position: "relative" }}
      >
        {/* THE VIEWPORT: This stays fixed in the center of the user's screen */}
        <div style={styles.stickyViewport}>
          {/* STATIC SIDE TEXT: This never moves or gets covered */}
          <div style={styles.uiLayout}>
            <div style={styles.sideHeader}>
              <span style={styles.dot}>●</span>
              <span style={styles.label}>OUR SERVICES</span>
            </div>
            <div style={styles.bottomLeft}>
              <h2 style={styles.mainHeading}>
                Future of <br /> Transport.
              </h2>
            </div>
          </div>

          {/* THE TUNNEL BOX: The cards only live inside here */}
          <div style={styles.boxFrame}>
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                total={services.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Subtle light effect at the back of the box */}
          <div style={styles.innerGlow} />
        </div>
      </div>

      {/* Footer to test the unlock */}
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000",
          borderTop: "1px solid #222",
        }}
      />
    </div>
  );
};

const ServiceCard = ({ service, index, total, progress }) => {
  const start = index / total;
  const end = (index + 1) / total;

  // ANIMATION SETTINGS
  // We scale from 0.4 up to 2.5 (High enough to look like it's coming close,
  // but small enough not to cover the whole screen).
  const scale = useTransform(progress, [start, end], [0.4, 2.5]);

  // Card fades in as it starts moving, then vanishes before it gets too big
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.2, end],
    [0, 1, 1, 0]
  );

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
        <div style={styles.cardNumber}>{service.id}</div>
        <h3 style={styles.cardTitle}>{service.title}</h3>
      </div>
    </motion.div>
  );
};

// --- DESIGN STYLES ---
const styles = {
  stickyViewport: {
    position: "sticky",
    top: 0,
    height: "100vh", // Full screen height lock
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#080808",
  },
  uiLayout: {
    position: "absolute",
    inset: 0,
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 10,
    pointerEvents: "none",
  },
  sideHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  dot: { color: "#e2ff31", fontSize: "10px" },
  label: {
    color: "#fff",
    fontSize: "12px",
    letterSpacing: "3px",
    fontWeight: "bold",
  },
  mainHeading: {
    color: "#fff",
    fontSize: "42px",
    fontWeight: "300",
    lineHeight: "1.1",
    margin: 0,
  },
  boxFrame: {
    position: "relative",
    width: "400px",
    height: "260px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  cardInner: {
    width: "100%",
    height: "100%",
    backgroundColor: "#111",
    border: "1px solid #e2ff3133", // Faint lime border
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
  },
  cardNumber: {
    fontSize: "12px",
    color: "#e2ff31",
    fontFamily: "monospace",
    marginBottom: "15px",
  },
  cardTitle: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "400",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  innerGlow: {
    position: "absolute",
    width: "200px",
    height: "200px",
    background:
      "radial-gradient(circle, rgba(226, 255, 49, 0.05) 0%, transparent 70%)",
    pointerEvents: "none",
  },
};

export default ServicesTunnel;

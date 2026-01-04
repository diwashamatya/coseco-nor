import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CompactTunnel = () => {
  const containerRef = useRef(null);

  // We track the scroll relative to the viewport (window)
  // but only while this specific container is in view.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      id: 1,
      title: "Fading Identity",
      img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Urban Decay",
      img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Neon Dreams",
      img: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <div style={{ backgroundColor: "#000" }}>
      {/* 1. THE TRACK: This determines how much you have to scroll. 
          Height 2000px means you scroll 2000px to finish the animation. */}
      <div
        ref={containerRef}
        style={{ height: "2000px", position: "relative" }}
      >
        {/* 2. THE VIEWPORT: This is exactly 600px high and stays stuck 
            at the top of the screen until the 2000px scroll is done. */}
        <div style={styles.stickyViewport}>
          {/* STATIC UI OVERLAY */}
          <div style={styles.uiContainer}>
            <div style={styles.topNav}>
              <div style={styles.logo}>✦</div>
              <div style={styles.navGroup}>
                <span>Works</span>
                <button style={styles.helloBtn}>Hello</button>
              </div>
            </div>
            <div style={styles.bottomInfo}>
              <h1 style={styles.mainTitle}>Experiments</h1>
            </div>
          </div>

          {/* THE TUNNEL BOX */}
          <div style={styles.boxFrame}>
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                total={cards.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          <div style={styles.bgGlow} />
        </div>
      </div>

      {/* Small filler to show the page continues scrolling after the box */}
      <div style={{ height: "100vh", background: "#111" }} />
    </div>
  );
};

const Card = ({ card, index, total, progress }) => {
  const start = index / total;
  const end = (index + 1) / total;

  // We make the scale very aggressive (0.5 to 10) so they fly PAST the camera
  const scale = useTransform(progress, [start, end], [0.5, 10]);
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
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
        <img src={card.img} alt={card.title} style={styles.cardImg} />
        <div style={styles.cardOverlay}>
          <h3 style={styles.cardTitle}>{card.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const styles = {
  stickyViewport: {
    position: "sticky",
    top: 0,
    height: "600px", // Fixed height as requested
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  uiContainer: {
    position: "absolute",
    inset: 0,
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 50,
    pointerEvents: "none",
  },
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pointerEvents: "auto",
  },
  navGroup: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "12px",
    color: "#fff",
  },
  helloBtn: {
    backgroundColor: "#e2ff31",
    padding: "6px 12px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
  mainTitle: {
    fontSize: "32px",
    color: "#fff",
    margin: 0,
  },
  boxFrame: {
    position: "relative",
    width: "400px",
    height: "300px",
  },
  cardWrapper: {
    position: "absolute",
    inset: 0,
  },
  cardInner: {
    width: "100%",
    height: "100%",
    backgroundColor: "#111",
    border: "1px solid rgba(255,255,255,0.1)",
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.5,
  },
  cardOverlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    color: "#fff",
    fontSize: "20px",
    fontStyle: "italic",
  },
  bgGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
    pointerEvents: "none",
  },
};

export default CompactTunnel;
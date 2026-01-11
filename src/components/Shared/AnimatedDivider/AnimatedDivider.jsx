import React from "react";
import { motion } from "framer-motion";
import "./AnimatedDivider.css";

const AnimatedDivider = () => {
  return (
    <div className="divider-container">
      <motion.div
        className="base-line"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
      >
        <motion.div
          className="scanner-dot"
          animate={{
            left: ["-10%", "110%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedDivider;

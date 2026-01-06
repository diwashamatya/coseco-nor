import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";


const Contact = () => {
  // Animation Definitions
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    
      <motion.section
        className="contact-section"
        initial="initial"
        animate="animate"
        variants={containerVars}
      >
        <div className="contact-wrapper">
          {/* Left Side: Branding & Info */}
          <motion.div className="contact-side-info" variants={itemVars}>
            <h1 className="hero-text">
              Get in <span className="accent">Touch.</span>
            </h1>
            <p className="sub-text">
              Have a vision? Let’s build it together with precision and code.
            </p>

            <div className="contact-details">
              <div className="detail-box">
                <small>Email</small>
                <p>hello@coseco.studio</p>
              </div>
              <div className="detail-box">
                <small>Location</small>
                <p>Remote / Global</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Glass Form */}
          <motion.div className="contact-form-container" variants={itemVars}>
            <form className="glass-form">
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
                <span className="bar"></span>
              </div>

              <div className="input-group">
                <input type="email" placeholder="Email Address" required />
                <span className="bar"></span>
              </div>

              <div className="input-group custom-select">
                <select required defaultValue="">
                  <option value="" disabled>
                    Inquiry Type
                  </option>
                  <option value="web">Web Development</option>
                  <option value="ui">UI/UX Design</option>
                  <option value="consult">Consultation</option>
                </select>
                <span className="bar"></span>
                <div className="select-arrow"></div>
              </div>

              <div className="input-group">
                <textarea
                  placeholder="Tell us about your project..."
                  rows="4"
                ></textarea>
                <span className="bar"></span>
              </div>

              <motion.button
                className="glow-btn"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "var(--color-accent)",
                  color: "#000",
                }}
                whileTap={{ scale: 0.98 }}
              >
                PROJECT INQUIRY
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
   
  );
};

export default Contact;

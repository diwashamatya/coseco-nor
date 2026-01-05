import React, { useState } from "react";
import {  motion, AnimatePresence } from "framer-motion";
import "../styles/Services.css";
import PerspectiveScroll from './PerspectiveScroll'
const DATA = [
  {
    id: 1,
    title: "Modern Web Services",
    subtitle: "Purpose-built for scale",
    content:
      "Detailed information about our high-performance web development services...",
    image: "https://via.placeholder.com/300x200/111/fff?text=Services",
  },
  {
    id: 2,
    title: "AI-Driven Insights",
    subtitle: "Designed to move fast",
    content:
      "Our blog post on how AI is transforming the way product teams analyze data...",
    image: "https://via.placeholder.com/300x200/222/fff?text=Blog",
  },
  {
    id: 3,
    title: "UI/UX Excellence",
    subtitle: "Crafted to perfection",
    content:
      "The philosophy behind our design system and how we approach user interfaces...",
    image: "https://via.placeholder.com/300x200/333/fff?text=Design",
  },
];

export default function LinearGrid() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div className="container">
        <header className="header">
          <h1>Made for modern teams</h1>
          <p>Explore our latest blogs and professional services.</p>
        </header>

        <div className="grid">
          {DATA.map((item) => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              className="card"
              onClick={() => setSelectedId(item.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-visual">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <motion.h3 layoutId={`title-${item.id}`}>
                  {item.subtitle}
                </motion.h3>
                <motion.p>{item.title}</motion.p>
              </div>
              <div className="plus-icon">+</div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="modal-overlay" onClick={() => setSelectedId(null)}>
              <motion.div
                layoutId={`card-${selectedId}`}
                className="modal-card"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="close-btn"
                  onClick={() => setSelectedId(null)}
                >
                  ✕
                </motion.button>

                <div className="modal-body">
                  <motion.h3 layoutId={`title-${selectedId}`}>
                    {DATA.find((i) => i.id === selectedId).subtitle}
                  </motion.h3>
                  <h2>{DATA.find((i) => i.id === selectedId).title}</h2>
                  <p>{DATA.find((i) => i.id === selectedId).content}</p>
                  <button className="cta-button">Read More</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <PerspectiveScroll />
    </>
  );
}

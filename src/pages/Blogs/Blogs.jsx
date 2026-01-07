import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowRight, Calendar, Tag } from "lucide-react";
import "./Blogs.css";
import { POSTS } from "../../data/Posts";


const PostCard = ({ post, onOpen, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="post-card"
      onClick={() => onOpen(post)}
      style={{ willChange: "transform" }}
    >
      <div className="post-media">
        <img
          src={post.img.src}
          alt={post.img.alt}
          loading="lazy"
          onLoad={(e) => (e.target.style.opacity = 1)}
        />
        <div className="post-overlay">
          <span className="category-tag">{post.category}</span>
        </div>
      </div>

      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-footer">
          <span className="read-more">
            Read Story <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const PostModal = ({ post, onClose }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.classList.remove("modal-open");
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scroll propagation
  const handleScroll = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-container"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.8,
        }}
        onClick={(e) => e.stopPropagation()}
        onScroll={handleScroll}
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X />
        </button>

        <div className="modal-scroll-area" onScroll={handleScroll}>
          <div className="modal-hero">
            <img
              src={post.img.src}
              alt={post.img.alt}
              onLoad={(e) => (e.target.style.opacity = 1)}
            />
          </div>

          <div className="modal-inner-content">
            <div className="modal-meta">
              <span className="meta-item">
                <Tag size={14} /> {post.category}
              </span>
              <span className="meta-item">
                <Calendar size={14} /> Jan 2026
              </span>
            </div>

            <h2 className="modal-heading">{post.title}</h2>

            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="modal-actions">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Visit Official Article <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function BlogApp() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Clear post after animation completes
    setTimeout(() => {
      setSelectedPost(null);
    }, 300);
  };

  return (
    <div className="blog-wrapper">
      <header className="blog-intro">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="intro-content"
        >
          <span className="sub-heading">Corporate News</span>
          <h1 className="main-heading">
            Innovation in <span>Smart Mobility</span>
          </h1>
          <p>
            Tracking the digitalization of public transport across Nepal and
            Asia.
          </p>
        </motion.div>
      </header>

      <div className="blog-grid">
        {POSTS.map((post, idx) => (
          <PostCard
            key={post.id}
            post={post}
            index={idx}
            onOpen={handleOpenModal}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isModalOpen && selectedPost && (
          <PostModal
            key={selectedPost.id}
            post={selectedPost}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
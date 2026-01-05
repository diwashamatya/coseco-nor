import React, { useState } from "react";
import { Linkedin, Mail, Search, X, MapPin, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData, locations } from "./teamData"; // Ensure these paths match your file structure
import GlobalPresence from "./Global";
import "./People.css";

const People = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  // Logic: Get team based on tab, then filter by search input
  const getFilteredTeam = () => {
    const baseList =
      activeTab === "all"
        ? Object.values(teamData).flat()
        : teamData[activeTab] || [];

    return baseList.filter(
      (m) =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const finalDisplayList = getFilteredTeam();

  return (
    <div className="team-root dark-theme">
      <header className="modern-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="header-content"
        >
          <div className="line-accent"></div>
          <h1 className="gradient-text">Global Innovation Team</h1>
        </motion.div>

        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="location-tabs-container">
          <div className="scroll-container">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc.id)}
                className={`location-tab ${
                  activeTab === loc.id ? "active" : ""
                }`}
              >
                <span className="flag">{loc.flag || "🌍"}</span>
                <span className="location-name">{loc.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Instant Rendering Grid (No layout animations for tabs) */}
        <div className="team-grid-modern">
          {finalDisplayList.map((m) => (
            <div
              key={m.id}
              className="team-member-card"
              onClick={() => setSelectedMember(m)}
            >
              <div className="member-image-wrapper">
                <img src={m.image} alt={m.name} className="member-image" />
                <div className="card-click-hint">View Profile</div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
              </div>
            </div>
          ))}
          {finalDisplayList.length === 0 && (
            <div className="no-results">No team members found.</div>
          )}
        </div>
      </main>

      {/* --- REFINED PREMIUM MODAL --- */}
      <AnimatePresence>
        {selectedMember && (
          <div className="modal-overlay">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-backdrop"
              onClick={() => setSelectedMember(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="member-modal-v2"
            >
              <button
                className="close-modal-v2"
                onClick={() => setSelectedMember(null)}
              >
                <X size={20} />
              </button>

              <div className="modal-layout">
                <div className="modal-visual">
                  <img src={selectedMember.image} alt={selectedMember.name} />
                  <div className="visual-overlay"></div>
                </div>

                <div className="modal-body">
                  <header className="modal-body-header">
                    <span className="badge-modern">
                      {selectedMember.department || "Innovation"}
                    </span>
                    <h2>{selectedMember.name}</h2>
                    <p className="role-subtitle">{selectedMember.role}</p>
                  </header>

                  <div className="info-grid">
                    <div className="info-box">
                      <Briefcase size={16} />
                      <div>
                        <label>Focus</label>
                        <span>Strategy & Growth</span>
                      </div>
                    </div>
                    <div className="info-box">
                      <MapPin size={16} />
                      <div>
                        <label>Base</label>
                        <span>
                          {activeTab === "all"
                            ? "Global"
                            : activeTab.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="modal-bio">
                    Dedicated to driving impactful digital solutions and
                    fostering a culture of excellence within our global
                    innovation network.
                  </p>

                  <div className="modal-footer-actions">
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="btn-primary"
                    >
                      <Mail size={18} />
                      Contact
                    </a>
                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-icon"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <GlobalPresence />
    </div>
  );
};

export default People;

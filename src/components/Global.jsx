import React, { useState } from "react";
import { X, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import "./GlobalPresence.css"; // Make sure this is still imported

const offices = [
  {
    country: "Netherlands",
    city: "Eindhoven",
    address: "Kastanjelaan 400 (Microlab), 5616 LZ, Eindhoven",
    phone: "+31 85 06 07 437",
    email: "info@coseco-services.com",
    code: "NL / 040",
  },
  {
    country: "China",
    city: "Hong Kong",
    address: "23F Suit 02, Blk 1 New World Tower, 18 Queen's road Central",
    phone: "+65 8356 8373",
    email: "info@coseco-services.com",
    code: "HK / 852",
  },
  {
    country: "Philippines",
    city: "Manila",
    address:
      "7F Finman Building, 131 Tordesillas St., Salcedo Village, Makati City",
    phone: "+63 917 545 9308",
    email: "info@coseco-services.com",
    code: "PH / 002",
  },
  {
    country: "Nepal",
    city: "Kathmandu",
    address: "M8X3+HP4, Guna Kamdev Marg, Kathmandu 44600",
    phone: "+977 9851007937",
    email: "info@coseco-services.com",
    code: "NP / 977",
  },
];

const GlobalPresence = () => {
  const [activeOffice, setActiveOffice] = useState(null);

  return (
    <section className="coseco-global-presence">
      <div className="coseco-global-container">
        <div className="coseco-global-intro">
          <div className="coseco-line-accent"></div>
          <span className="coseco-section-label">Explore / Global</span>
          <h2 className="coseco-section-title">Our Offices.</h2>
        </div>

        <div className="coseco-presence-grid">
          {offices.map((office, index) => (
            <div
              key={index}
              className="coseco-location-tile"
              onClick={() => setActiveOffice(office)}
            >
              <span className="coseco-tile-code">{office.code}</span>
              <div className="tile-main">
                <h3 className="coseco-tile-city" data-text={office.city}>
                  {office.city}
                </h3>
                <p className="coseco-tile-country">{office.country}</p>
              </div>
              <div className="tile-action">
                <div className="arrow-circle">
                  <ArrowRight size={20} className="coseco-action-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeOffice && (
        <div
          className="coseco-modal-overlay"
          onClick={() => setActiveOffice(null)}
        >
          <div
            className="coseco-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="coseco-modal-close"
              onClick={() => setActiveOffice(null)}
            >
              <X size={24} />
            </button>
            <div className="coseco-modal-grid">
              <div className="modal-sidebar">
                <span className="coseco-modal-code">{activeOffice.code}</span>
                <h2 className="coseco-modal-city">{activeOffice.city}</h2>
                <p className="coseco-modal-country">{activeOffice.country}</p>
              </div>
              <div className="coseco-modal-info">
                <div className="coseco-info-section">
                  <label>
                    <MapPin size={14} /> Location
                  </label>
                  <p>{activeOffice.address}</p>
                </div>
                <div className="coseco-info-section">
                  <label>
                    <Phone size={14} /> Contact
                  </label>
                  <a href={`tel:${activeOffice.phone}`}>{activeOffice.phone}</a>
                </div>
                <div className="coseco-info-section">
                  <label>
                    <Mail size={14} /> Email
                  </label>
                  <a href={`mailto:${activeOffice.email}`}>
                    {activeOffice.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GlobalPresence;

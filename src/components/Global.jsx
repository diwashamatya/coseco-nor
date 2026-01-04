import React, { useState } from 'react';
import { X, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import './GlobalPresence.css';

const offices = [
  { country: "Netherlands", city: "Eindhoven", address: "Kastanjelaan 400 (Microlab), 5616 LZ, Eindhoven", phone: "+31 85 06 07 437", email: "info@coseco-services.com", code: "NL / 040" },
  { country: "China", city: "Hong Kong", address: "23F Suit 02, Blk 1 New World Tower, 18 Queen's road Central", phone: "+65 8356 8373", email: "info@coseco-services.com", code: "HK / 852" },
  { country: "Philippines", city: "Manila", address: "7F Finman Building, 131 Tordesillas St., Salcedo Village, Makati City", phone: "+63 917 545 9308", email: "info@coseco-services.com", code: "PH / 002" },
  { country: "Nepal", city: "Kathmandu", address: "M8X3+HP4, Guna Kamdev Marg, Kathmandu 44600", phone: "+977 9851007937", email: "info@coseco-services.com", code: "NP / 977" }
];

const GlobalPresence = () => {
  const [activeOffice, setActiveOffice] = useState(null);

  return (
    <section className="presence-root">
      <div className="presence-container">
        <div className="presence-intro">
          <div className="line-accent"></div>
          <span className="section-label">Explore / Global</span>
          <h2 className="section-title">Our Offices.</h2>
        </div>

        <div className="presence-grid">
          {offices.map((office, index) => (
            <div key={index} className="location-tile" onClick={() => setActiveOffice(office)}>
              {/* Animated Background Layer */}
              <div className="tile-bg-overlay"></div>
              
              <span className="tile-code">{office.code}</span>
              <div className="tile-main">
                <h3 className="tile-city" data-text={office.city}>{office.city}</h3>
                <p className="tile-country">{office.country}</p>
              </div>
              <div className="tile-action">
                <div className="arrow-circle">
                   <ArrowRight size={20} className="action-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeOffice && (
        <div className="modal-overlay" onClick={() => setActiveOffice(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveOffice(null)}><X size={24} /></button>
            <div className="modal-grid">
              <div className="modal-sidebar">
                <span className="modal-code">{activeOffice.code}</span>
                <h2 className="modal-city">{activeOffice.city}</h2>
                <p className="modal-country">{activeOffice.country}</p>
              </div>
              <div className="modal-info">
                <div className="info-section">
                  <label><MapPin size={14} /> Location</label>
                  <p>{activeOffice.address}</p>
                </div>
                <div className="info-section">
                  <label><Phone size={14} /> Contact</label>
                  <a href={`tel:${activeOffice.phone}`}>{activeOffice.phone}</a>
                </div>
                <div className="info-section">
                  <label><Mail size={14} /> Email</label>
                  <a href={`mailto:${activeOffice.email}`}>{activeOffice.email}</a>
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
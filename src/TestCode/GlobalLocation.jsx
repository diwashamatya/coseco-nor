import React from "react";
import { ArrowRight, Globe2, Mail, Phone, MapPin } from "lucide-react";
import "./GlobalPresence.css";

const offices = [
  {
    country: "Netherlands",
    city: "Eindhoven",
    address: "Kastanjelaan 400 (Microlab), 5616 LZ, Eindhoven",
    phone: "+31 85 06 07 437",
    code: "NL / 040",
  },
  {
    country: "China",
    city: "Hong Kong",
    address: "23F Suit 02, Blk 1 New World Tower, 18 Queen's road Central",
    phone: "+65 8356 8373",
    code: "HK / 852",
  },
  {
    country: "Philippines",
    city: "Manila",
    address: "7F Finman Building, 131 Tordesillas St., Makati City",
    phone: "+63 917 545 9308",
    code: "PH / 002",
  },
  {
    country: "Nepal",
    city: "Kathmandu",
    address: "M8X3+HP4, Guna Kamdev Marg, Kathmandu 44600",
    phone: "+977 9851007937",
    code: "NP / 977",
  },
];

const GlobalPresence = () => {
  return (
    <section className="presence-root">
      <div className="presence-container">
        <div className="presence-intro">
          <div className="line-accent"></div>
          <span className="section-label">02 / Locations</span>
          <h2 className="section-title">
            Global footprint. <br />
            Local expertise.
          </h2>
        </div>

        <div className="presence-grid">
          {offices.map((office, index) => (
            <div key={index} className="location-tile">
              <div className="tile-header">
                <span className="tile-code">{office.code}</span>
                <h3 className="tile-city">{office.city}</h3>
                <p className="tile-country">{office.country}</p>
              </div>

              <div className="tile-details">
                <div className="info-block">
                  <MapPin size={14} />
                  <p>{office.address}</p>
                </div>
                <div className="info-links">
                  <a href={`tel:${office.phone}`} className="info-link">
                    <Phone size={14} /> {office.phone}
                  </a>
                </div>
              </div>

              <div className="tile-action">
                <span className="action-text">Office Details</span>
                <ArrowRight size={18} className="action-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;

import React from "react";
import "./Marquee.css";

const LogoMarquee = () => {
  const logos = [
    { src: "/images/logo1.jpg", alt: "Logo 1" },
    { src: "/images/logo2.png", alt: "Logo 2" },
    { src: "/images/logo3.png", alt: "Logo 3" },
    { src: "/images/logo4.png", alt: "Logo 4" },
    { src: "/images/logo5.jpg", alt: "Logo 5" },
    { src: "/images/logo6.jpg", alt: "Logo 6" },
    { src: "/images/logo7.png", alt: "Logo 7" },
    { src: "/images/logo8.jpg", alt: "Logo 8" },
    { src: "/images/logo9.png", alt: "Logo 9" },
    { src: "/images/logo10.jpg", alt: "Logo 10" },
    { src: "/images/logo11.png", alt: "Logo 11" },
  ];

  const displayLogos = [...logos, ...logos];

  return (
    <section className="marquee-section dark">
      <div className="marquee-header">
        <h2 className="marquee-title">Trusted by Global Brands</h2>
        <p className="marquee-subtitle">
          Powering the next generation of digital experiences
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {displayLogos.map((logo, index) => (
            <div className="logo-wrapper" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;

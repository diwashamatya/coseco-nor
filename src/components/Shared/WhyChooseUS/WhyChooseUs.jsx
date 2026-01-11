import React from "react";
import "./WhyChooseUs.css";

const WhyChooseSunbytes = () => {
  const features = [
    {
      title: "Tailored Team Solutions",
      description:
        "Each team is formed following a comprehensive examination of your software development needs.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 15L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Start Small From 1 FTE",
      description:
        "1 FTE (Full-time Equivalent) can be spread over multiple disciplines to fit your requirements.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 15V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Quick Scalability",
      description: "Connect to a network of top talents locally to globally.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8L20 12L16 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 4L16 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8L12 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12L8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 16L4 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20L8 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 16L12 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Consultancy & Strategy",
      description:
        "Provide appropriate technology and HR/ operations guidance to support the business’s sustainable growth.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 12H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 8V16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 16C14.2091 16 16 17.7909 16 20C16 21.068 15.5597 22.0434 14.849 22.75C14.1383 23.4566 13.1629 24 12 24C10.8371 24 9.86175 23.4566 9.15102 22.75C8.44028 22.0434 8 21.068 8 20C8 17.7909 9.79086 16 12 16Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Cost Efficiency & Transparency",
      description:
        "Deliver the best value as an Tech&Talent provider, including the cost of top-tier software developers and HR service.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 12H12.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Security & NDA",
      description:
        "All of the Sunbytes staff are required to sign NDA before starting work on any projects.",
      icon: (
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C12 22 20 18 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 8H12.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="why-choose">
      <h2 className="section-title">
        Why you should choose <span className="brand-highlight">COSECO</span>
      </h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSunbytes;

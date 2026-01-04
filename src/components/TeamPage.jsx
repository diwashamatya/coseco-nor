import React, { useState } from "react";
import { Linkedin, Mail, Globe, MapPin, Phone, Facebook } from "lucide-react";
import './TeamPage.css'

const TeamPage = () => {
  const [activeLocation, setActiveLocation] = useState("all");

  const teamData = {
    netherlands: [
      {
        id: 1,
        name: "Patrick Henzen",
        role: "Founder & CEO",
        email: "patrick@coseco-services.com",
        linkedin: "https://nl.linkedin.com/in/patrickhenzen",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2020/11/patrick-bijgesneden-scaled.jpg",
        bio: "Leading the strategic vision and growth of Coseco Services.",
      },
      {
        id: 2,
        name: "Cees Geel",
        role: "Co-founder and COO",
        email: "cees.geel@coseco-services.com",
        linkedin: "https://www.linkedin.com/in/ceesgeel/",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2020/11/cees-bijgesneden-scaled.jpg",
        bio: "Oversees daily operations and ensures service excellence.",
      },
      {
        id: 3,
        name: "Tommy Heydon",
        role: "Technical Support",
        email: "tommy@coseco-services.com",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2020/11/Tommy-bijgesneden-scaled.jpg",
        bio: "Provides expert technical support and system maintenance.",
      },
      {
        id: 4,
        name: "Janice Almirante",
        role: "Back Office Manager",
        email: "janice@coseco-services.com",
        linkedin: "https://www.linkedin.com/in/janice-almirante-1bb771b5/",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2021/05/dddfc0d2-026b-423a-9284-b1f8dd1a58a5-1-2.jpeg",
        bio: "Manages administrative operations and office efficiency.",
      },
      {
        id: 5,
        name: "Femke Henzen",
        role: "Marketing and Content",
        email: "femke@coseco-services.com",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2021/05/22281880_1609724845714509_8752631759845537636_n-2.jpeg",
        bio: "Creates compelling marketing strategies and content.",
      },
      {
        id: 6,
        name: "Lo Henzen",
        role: "Marketing and Content",
        email: "Lo.henzen@coseco-services.com",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2023/02/9B085AB9-8664-495C-9B44-A3AE83A80E83.jpeg",
        bio: "Specializes in digital marketing and content creation.",
      },
      {
        id: 7,
        name: "Gladwyn Teo",
        role: "CTO",
        email: "gladwyn@coseco-services.com",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2020/07/gladwyn_profile.jpg",
        bio: "Leads technological innovation and development.",
      },
    ],
    philippines: [
      {
        id: 8,
        name: "Michael John De Castro",
        role: "General Manager Philippines",
        email: "mike@coseco-services.com",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2021/03/mike-de-castro.png",
        bio: "Oversees operations and growth in the Philippines region.",
      },
      {
        id: 9,
        name: "Jugel P. Lucero",
        role: "Technical Support Representative",
        email: "jugel.lucero@coseco-services.com",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-10-at-02.48.52.jpeg",
        bio: "Provides technical support and customer service.",
      },
    ],
    nepal: [
      {
        id: 10,
        name: "Dipendra Shrestha",
        role: "General Manager Coseco/CEO Ncloud",
        email: "dipendra.shrestha@coseco-services.com",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2023/02/C959B354-8A2D-4B0F-9BF2-26C20C79D898.jpeg",
        bio: "Leads operations in Nepal and oversees Ncloud initiatives.",
      },
      {
        id: 11,
        name: "Mahendra Kibachhen",
        role: "Business Development Officer",
        email: "mahendra@coseco-services.com",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2023/02/EDF6F390-D7C7-45C2-9F63-B2B85A20E09F.jpeg",
        bio: "Drives business growth and partnership development.",
      },
      {
        id: 12,
        name: "Rohit Shrestha",
        role: "Technical Manager",
        email: "roheet.shrestha@coseco-services.com",
        image:
          "https://www.coseco-services.com/wp-content/uploads/2023/02/0159A67E-D2FF-451D-9F66-D391309B36E2.jpeg",
        bio: "Manages technical projects and team coordination.",
      },
    ],
  };

  const locations = [
    { id: "all", name: "All Teams", count: 12 },
    { id: "netherlands", name: "Netherlands", count: 7 },
    { id: "philippines", name: "Philippines", count: 2 },
    { id: "nepal", name: "Nepal", count: 3 },
  ];

  const offices = [
    {
      country: "NETHERLANDS",
      city: "Eindhoven",
      address: "Kastanjelaan 400 (Microlab), 5616 LZ, Eindhoven",
      email: "info@coseco-services.com",
      phone: "+31 85 06 07 437",
    },
    {
      country: "CHINA",
      city: "Hong Kong",
      address: "23F Suit 02, Blk 1 New World Tower, 18 Queen's road Central",
      email: "info@coseco-services.com",
      phone: "+65 8356 8373",
    },
    {
      country: "PHILIPPINES",
      city: "Manila",
      address:
        "7F Finman Building, 131 Tordesillas St., Salcedo Village, Makati City",
      email: "info@coseco-services.com",
      phone: "+63 917 545 9308",
    },
    {
      country: "NEPAL",
      city: "Kathmandu",
      address: "M8X3+HP4, Guna Kamdev Marg, Kathmandu 44600, Nepal",
      email: "info@coseco-services.com",
      phone: "+977 9851007937",
    },
  ];

  const filteredTeam =
    activeLocation === "all"
      ? [...teamData.netherlands, ...teamData.philippines, ...teamData.nepal]
      : teamData[activeLocation];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our Global Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our technology is great, but our people make the difference. With
              offices spanning from Eindhoven to Kathmandu, we're proud of our
              diverse, talented team driving innovation in smart mobility.
            </p>
          </div>
        </div>
      </header>

      {/* Location Filter */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(location.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeLocation === location.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
                }`}
              >
                <span className="font-semibold">{location.name}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    activeLocation === location.id
                      ? "bg-blue-500"
                      : "bg-gray-200"
                  }`}
                >
                  {location.count}
                </span>
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Mail size={18} />
                      <span className="text-sm">Email</span>
                    </a>

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin size={18} />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Offices */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Global Presence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With strategically located offices across the globe, we deliver
              smart mobility solutions where you need them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {office.country}
                    </h3>
                    <p className="text-blue-600 font-medium">{office.city}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gray-400 mt-1" size={18} />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-gray-400" size={18} />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-gray-400" size={18} />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="text-gray-700 hover:text-blue-600 text-sm"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Coseco Services</h3>
              <p className="text-gray-400">
                Smart mobility solutions worldwide
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/coseco-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/Coseco-106460778537931"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>Copyright © 2023 Coseco Services. All rights reserved.</p>
            <a
              href="/privacy-policy"
              className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;

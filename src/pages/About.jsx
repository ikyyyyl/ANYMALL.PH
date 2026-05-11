import React, { useState } from "react";

function About() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-500">
        CONTACT US
      </h1>

      <p className="mt-3 text-gray-600">
        Learn more about ANYMALL and what we stand for.
      </p>

      {/* DROPDOWN CONTAINER */}
      <div className="mt-10 space-y-4">

        {/* OUR STORY */}
        <div className="border rounded-lg bg-white shadow-sm">
          <button
            onClick={() => toggle("story")}
            className="w-full text-left px-5 py-4 font-semibold text-gray-800 hover:bg-gray-50 flex justify-between items-center"
          >
            Our Story
            <span className="text-teal-500">
              {open === "story" ? "−" : "+"}
            </span>
          </button>

          {open === "story" && (
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
              ANYMALL started as a small distribution hub focused on bringing
              innovative smart appliances to Filipino households. Over time, we
              grew into a trusted platform connecting global brands with local
              consumers who value quality, convenience, and technology.
            </div>
          )}
        </div>

        {/* MISSION & VISION */}
        <div className="border rounded-lg bg-white shadow-sm">
          <button
            onClick={() => toggle("mission")}
            className="w-full text-left px-5 py-4 font-semibold text-gray-800 hover:bg-gray-50 flex justify-between items-center"
          >
            Mission & Vision
            <span className="text-teal-500">
              {open === "mission" ? "−" : "+"}
            </span>
          </button>

          {open === "mission" && (
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                <span className="font-semibold text-gray-800">Mission:</span>{" "}
                To provide high-quality smart appliances that improve everyday
                living through innovation, reliability, and affordability.
              </p>

              <p>
                <span className="font-semibold text-gray-800">Vision:</span>{" "}
                To become a leading smart appliance distributor in Southeast
                Asia, empowering homes with intelligent technology solutions.
              </p>
            </div>
          )}
        </div>

        {/* WHY CHOOSE US */}
        <div className="border rounded-lg bg-white shadow-sm">
          <button
            onClick={() => toggle("why")}
            className="w-full text-left px-5 py-4 font-semibold text-gray-800 hover:bg-gray-50 flex justify-between items-center"
          >
            Why Choose Us
            <span className="text-teal-500">
              {open === "why" ? "−" : "+"}
            </span>
          </button>

          {open === "why" && (
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
              <ul className="list-disc ml-5 space-y-2">
                <li>Authorized and trusted global brand partners</li>
                <li>High-quality and original products only</li>
                <li>Fast and secure nationwide distribution</li>
                <li>Reliable customer support and service</li>
                <li>Commitment to innovation and smart living</li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default About;
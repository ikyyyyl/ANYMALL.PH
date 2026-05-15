import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Trusted Global Brands",
      description:
        "We partner with internationally recognized smart appliance and technology brands.",
      icon: "🌍",
    },
    {
      title: "Nationwide Distribution",
      description:
        "Efficient warehouse operations and logistics support across the Philippines.",
      icon: "🚚",
    },
    {
      title: "Smart Living Solutions",
      description:
        "Innovative products designed to improve convenience, comfort, and lifestyle.",
      icon: "🏠",
    },
    {
      title: "Reliable Customer Support",
      description:
        "Dedicated assistance before, during, and after every purchase.",
      icon: "💬",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-3xl text-white">

            <p className="uppercase tracking-[4px] text-sm font-semibold text-teal-100 mb-4">
              ABOUT
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              ANYMALL.PH
            </h1>

            <p className="text-lg text-teal-50 leading-relaxed">
              The company was established on November 14, 2021, with the mission to bring innovative smart appliances, trusted global brands, and reliable distribution services to Filipino households and businesses nationwide.
            </p>

          </div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-teal-500 font-semibold uppercase tracking-[3px] mb-3">
              Our Company
            </p>

            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              A Growing E-Commerce and Distribution Company
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              ANYMALL started as a small distribution hub focused on bringing
              innovative smart appliances to Filipino households.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              Through dedication, operational excellence, and strong brand
              partnerships, we expanded into a trusted platform that connects
              global technology brands with local consumers.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Today, ANYMALL continues to provide high-quality products,
              dependable customer service, and efficient nationwide
              distribution support for modern smart living.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-5xl font-bold text-teal-500 mb-2">50+</h3>
              <p className="text-gray-600 font-medium">
                Smart Products Available
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-5xl font-bold text-teal-500 mb-2">10+</h3>
              <p className="text-gray-600 font-medium">
                Partner Brands
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-5xl font-bold text-teal-500 mb-2">100%</h3>
              <p className="text-gray-600 font-medium">
                Authentic Products
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-5xl font-bold text-teal-500 mb-2">PH</h3>
              <p className="text-gray-600 font-medium">
                Nationwide Distribution
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-14">
            <p className="text-teal-500 font-semibold uppercase tracking-[3px] mb-3">
              Purpose & Direction
            </p>

            <h2 className="text-4xl font-bold text-gray-800">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* MISSION */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-3xl p-10 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="text-5xl mt-1">
                  <i className="fas fa-bullseye"></i>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
                  <p className="leading-relaxed text-teal-50 text-lg">
                    We aim to provide products and services combined
                    with exceptional customer buying experience.
                  </p>
                </div>
              </div>
            </div>

            {/* VISION */}
            <div className="bg-gray-900 text-white rounded-3xl p-10 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="text-5xl mt-1">
                  <i className="fas fa-rocket"></i>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2">Our Vision</h3>
                  <p className="leading-relaxed text-gray-300 text-lg">
                    We will be a catalyst for providing world-class products and services in the Philippines.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-14">
            <p className="text-teal-500 font-semibold uppercase tracking-[3px] mb-3">
              Why ANYMALL
            </p>

            <h2 className="text-4xl font-bold text-gray-800">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          {/* HIGHLIGHTED QUOTE */}
          <div className="mt-10">
            <blockquote className="bg-teal-50 border-l-4 border-teal-500 italic px-6 py-4 rounded-md text-teal-700 max-w-3xl mx-auto text-center text-lg">
              “It’s not the number of years that define an employee—it’s the CONSISTENT OF EFFORT, ATTITUDE, and HEART INVESTED inthe work”
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-teal-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Experience Smarter Living With ANYMALL
          </h2>

          <p className="text-lg text-teal-50 leading-relaxed mb-8">
            Discover trusted smart appliances, innovative technology,
            and reliable customer support designed for modern lifestyles.
          </p>

          <button
            onClick={() => navigate("/Products")}
            className="bg-white text-teal-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Explore Products
          </button>

        </div>
      </section>
    </div>
  );
}

export default About;
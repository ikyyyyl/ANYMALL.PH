import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const features = [
    {
      title: "Trusted Warehouse",
      desc: "100% authentic products from official brands",
      icon: "fas fa-warehouse",
    },
    {
      title: "Multiple Global Brands",
      desc: "We handle the best smart appliances brands",
      icon: "fas fa-globe",
    },
    {
      title: "Fast Distribution",
      desc: "Nationwide delivery and secure packaging",
      icon: "fas fa-truck",
    },
    {
      title: "Quality Check",
      desc: "All items are tested and quality assured",
      icon: "fas fa-check-circle",
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-700 text-sm mt-10">
      <div className="max-w-8xl mx-auto px-4 py-1 flex flex-col gap-6">

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-3 border border-gray-200 rounded-lg p-4 bg-gray-50 transition"
            >
              <i
                className={`${feature.icon} text-teal-500 text-2xl mt-1`}
              ></i>

              <div>
                <p className="font-semibold text-gray-800">
                  {feature.title}
                </p>
                <p className="text-xs text-gray-500">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-xs text-black-500">
          © {year} ANYMALL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
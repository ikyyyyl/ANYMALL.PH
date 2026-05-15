import React from "react";

import manta from "../assets/manta.webp";
import wfifth from "../assets/wfifth.jpg";
import anymall1 from "../assets/anymall_warehouse.png";
import anymall2 from "../assets/anymall_warehouse(2).png";

function Contact() {
  const stores = [
    {
      name: "MANTA CORPORATE PLAZA",
      address: "11TH FLR, ARCA SOUTH, TAGUIG CITY",
      image: manta,
    },
    {
      name: "W FIFTH AVE",
      address:
        "8TH FLR BRGY 807 W FIFTH AVENUE INC. BONIFACIO GLOBAL CITY, TAGUIG",
      image: wfifth,
    },
    {
      name: "WAREHOUSE TAGUIG",
      address:
        "94B ELECTRONICS AVE FTI PEZA WESTERN BICUTAN, TAGUIG CITY",
      image: anymall1,
    },
    {
      name: "WAREHOUSE PARANAQUE",
      address:
        "LOT 9A CHAMPACA EXT. UPS4 BRGY MARCELO GREEN, PARANAQUE CITY",
      image: anymall2,
    },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* HEADER STRIP */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-5xl font-bold">Contact & Support Center</h1>
          <p className="mt-3 text-teal-50 max-w-2xl">
            ANYMALL support team, warehouse operations, and corporate offices
            all in one place.
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">

        {/* LEFT: SUPPORT PANEL (sticky feel) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-10 h-fit">

          {/* EMAIL */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-bold text-teal-600 mb-3">
              📧 Email Support
            </h2>

            <div className="space-y-2 text-sm text-gray-600">
              <p>anymallofficialstore@gmail.com</p>
              <p>anymallhrdept@gmail.com</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-bold text-teal-600 mb-3">
              📞 Hotline
            </h2>
            <p className="text-gray-700 text-sm">02-8655-7686</p>
          </div>

          {/* HOURS */}
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-bold text-teal-600 mb-3">
              ⏱ Support Hours
            </h2>
            <p className="text-sm text-gray-600">
              Mon – Fri: 8:00 AM – 5:00 PM <br />
              Sat: 9:00 AM – 6:00 PM
            </p>
          </div>

          {/* QUICK ACTION */}
          <a
            href="https://www.facebook.com/AnymallPH"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-teal-600 text-white text-center py-4 rounded-2xl font-semibold hover:bg-teal-500 transition"
          >
            Message on Facebook
          </a>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="lg:col-span-2 space-y-10">

          {/* LOCATION HEADER */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Our Operations Network
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Offices and warehouses across key locations
            </p>
          </div>

          {/* WAREHOUSE GRID (card catalog style) */}
          <div className="grid sm:grid-cols-2 gap-6">

            {stores.map((store, index) => (
              <div
                key={index}
                className="group border rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-sm mb-2">
                    {store.name}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    📍 {store.address}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* MAP STYLE CTA BLOCK */}
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">
              Need Directions or Business Inquiry?
            </h3>

            <p className="text-gray-300 text-sm mb-5">
              Visit our main warehouse or contact our logistics team for
              partnership and distribution concerns.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Anymall.ph+Warehouse+Taguig"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 px-6 py-3 rounded-xl font-semibold hover:bg-teal-400 transition"
            >
              Open in Google Maps
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
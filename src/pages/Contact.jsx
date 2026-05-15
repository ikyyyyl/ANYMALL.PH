import React, { useState } from "react";

import manta from "../assets/manta.png";
import wfifth from "../assets/wfifth.png";
import anymall1 from "../assets/anymall_warehouse.png";
import anymall2 from "../assets/anymall_warehouse(2).png";

function Contact() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  const stores = [
    {
      name: "MANTA CORPORATE PLAZA",
      address: "11TH FLR, ARCA SOUTH, TAGUIG CITY",
      image: manta,
    },
    {
      name: "W FIFTH AVE",
      address: " 8TH FLR BRGY 807 W FIFTH AVENUE INC. ND STREET, CORNER TH AVENUE, BONIFACIO GLOBAL CITY, TAGUIG CITY",
      image: wfifth,
    },
    {
      name: "WAREHOUSE TAGUIG",
      address: "WAREHOUSE 94B ELECTRONICS AVENUE FTI PEZA WESTERN BICUTAN, TAGUIG CITY",
      image: anymall1,
    },
        {
      name: "WAREHOUSE PARANAQUE",
      address: "LOT 9A CHAMPACA EXT. UPS4. BRGY MARCELO GREEN. PARANAQUE CITY",
      image: anymall2,
    },
  ];

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-500 mb-8">
        CONTACT US
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Contact Section */}
        <div className="border rounded-lg p-6 bg-gradient-to-br from-teal-50 to-white shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">📞 Contact</h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>
              <a href="mailto:anymallofficialstore@gmail.com" className="text-teal-500 hover:underline ml-2">
                anymallofficialstore@gmail.com <br />
                anymallhrdept@gmail.com
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Telephone Number:</span>
              <a href="tel:+15551234567" className="text-teal-500 hover:underline ml-2">
                0286557686
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Support Hours:</span>
              <span className="ml-2"><br />
              Mon: 8AM - 5PM <br /> 
              Sat: 9AM - 6PM</span>
            </p>
          </div>
        </div>

        {/* Location Section */}
        <div className="border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">📍 Main Location</h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">Address:</span>
              <span className="block text-gray-600 mt-2">
                ANYMALL Warehouse<br />
                94B Electronics Road FTI Peza Western Bicutan <br />
                Taguig City, 1630
              </span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">GPS:</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Anymall.ph+Warehouse+Taguig" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline ml-2">View on Map</a>
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="border rounded-lg p-6 bg-gradient-to-br from-purple-50 to-white shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">🔗 Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-teal-500 hover:underline">FAQ & Help</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61580096738293" className="text-teal-500 hover:underline">Careers</a></li>
            <li><a href="https://www.facebook.com/AnymallPH" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">Facebook Page</a></li>
          </ul>
        </div>
      </div>

      {/* Listed Stores Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">🏪 Offices and Warehouse</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map((store, index) => (
            <div key={index} className="border-l-4 border-teal-500 pl-4 py-4 flex flex-col h-full">
              <img
                src={store.image}
                alt={store.name}
                className="w-full aspect-[3/4] object-cover rounded-md mb-3"
              />
              <h3 className="font-bold text-base text-gray-800 mb-2 line-clamp-2">{store.name}</h3>
              <p className="text-gray-600 mb-2 text-sm line-clamp-3 flex-grow">
                <span className="font-semibold">📍</span> {store.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Contact;
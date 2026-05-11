import React, { useState } from "react";

function Contact() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-500">
        CONTACT US
      </h1>
        <p className="text-gray-600 mt-4">  
            We value your feedback and inquiries. Please feel free to reach out to us through any of the following channels:
        </p>
        <div className="mt-6 space-y-4">
            <div className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-xl transition">
                <h2 className="font-bold text-gray-800">Email</h2>
                <p className="text-sm text-gray-600 mt-2">
                    For general inquiries, please email us at 
                    <a href="mailto:info@anymall.com" className="text-teal-500 hover:underline">
                        info@anymall.com
                    </a>
                </p>
            </div>
        </div>
    </div>
  );
}


export default Contact;
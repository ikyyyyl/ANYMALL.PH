function CleaningDevices() {
  const products = [
    {
      name: "Robot Vacuum X10",
      desc: "Smart mapping, automatic cleaning, and powerful suction.",
    },
    {
      name: "Cordless Vacuum Pro",
      desc: "Lightweight design with strong suction for deep cleaning.",
    },
    {
      name: "Wet & Dry Cleaner",
      desc: "Dual-function cleaner for both liquid and dry mess.",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-teal-500">
        Cleaning Devices
      </h1>

      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {products.map((item) => (
          <div
            key={item.name}
            className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h2 className="font-bold text-gray-800">{item.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CleaningDevices;
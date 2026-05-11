function KitchenAppliances() {
  const products = [
    {
      name: "Smart Rice Cooker",
      desc: "AI cooking modes for perfect rice every time.",
    },
    {
      name: "Air Fryer Pro",
      desc: "Healthy cooking with less oil and faster heating.",
    },
    {
      name: "Electric Kettle Smart",
      desc: "Temperature control with auto shut-off safety.",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-teal-500">
        Kitchen Appliances
      </h1>

      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {products.map((item) => (
          <div className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
            <h2 className="font-bold">{item.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KitchenAppliances;
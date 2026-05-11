function CarTech() {
  const products = [
    {
      name: "DDPAI Dash Cam Pro",
      desc: "Ultra HD recording with loop recording and GPS tracking.",
    },
    {
      name: "Smart Car Charger",
      desc: "Fast charging with built-in safety protection.",
    },
    {
      name: "Parking Sensor Kit",
      desc: "Assists parking with real-time distance alerts.",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-teal-500">
        Car Tech
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

export default CarTech;
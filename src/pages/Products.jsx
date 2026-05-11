function Products() {
  const products = [
    {
      name: "Robot Vacuum X10",
      category: "Cleaning Devices",
      desc: "Smart mapping, automatic cleaning, and powerful suction for hands-free cleaning.",
    },
    {
      name: "Smart Security Camera Pro",
      category: "Smart Home",
      desc: "Real-time monitoring with HD video, night vision, and mobile alerts.",
    },
    {
      name: "DDPAI Dash Cam Mini",
      category: "Car Tech",
      desc: "Ultra-clear driving recorder with loop recording and GPS tracking.",
    },
    {
      name: "Air Fryer Pro Max",
      category: "Kitchen Appliances",
      desc: "Healthy cooking with rapid air circulation and smart temperature control.",
    },
    {
      name: "Smart Rice Cooker AI",
      category: "Kitchen Appliances",
      desc: "Automatically adjusts cooking time and heat for perfect rice every time.",
    },
    {
      name: "Cordless Vacuum Ultra",
      category: "Cleaning Devices",
      desc: "Lightweight, powerful suction designed for deep home cleaning.",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-teal-500">
        OUR PRODUCTS
      </h1>

      <p className="mt-3 text-gray-600 max-w-6xl">
        Explore ANYMALL’s curated selection of smart appliances designed for modern living, comfort, and convenience.
      </p>

      {/* PRODUCT GRID */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm 
            hover:shadow-xl hover:-translate-y-1 hover:border-teal-400 
            transition-all duration-300 cursor-pointer"
          >
            {/* CATEGORY TAG */}
            <span className="text-xs font-semibold text-teal-500">
              {product.category}
            </span>

            {/* PRODUCT NAME */}
            <h2 className="mt-2 text-xl font-bold text-gray-800">
              {product.name}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {product.desc}
            </p>

            {/* CTA */}
            <div className="mt-4 text-teal-500 text-sm font-semibold opacity-80">
              View details →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
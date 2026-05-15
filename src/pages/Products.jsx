import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/product";

function Products() {
  const navigate = useNavigate();

  const allProducts = Object.entries(productsData).flatMap(
    ([brand, items]) =>
      items.map((item) => ({
        ...item,
        brand,
      }))
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");

  const categories = [
    "All",
    ...new Set(allProducts.map((p) => p.category)),
  ];

  const brands = ["All", ...Object.keys(productsData)];

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const brandMatch =
      selectedBrand === "All" ||
      product.brand === selectedBrand;

    return categoryMatch && brandMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* TOP HEADER BAR */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Discover Smart Products
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Browse curated smart appliances from top global brands
            </p>
          </div>

          <div className="text-sm text-gray-500">
            {filteredProducts.length} products available
          </div>

        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-4 gap-8">

        {/* FILTER PANEL */}
        <aside className="lg:col-span-1 space-y-6">

          {/* CATEGORY FILTER */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-gray-800 mb-4">Category</h2>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                    selectedCategory === cat
                      ? "bg-teal-500 text-white border-teal-500"
                      : "bg-gray-50 text-gray-600 hover:border-teal-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* BRAND FILTER */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-gray-800 mb-4">Brands</h2>

            <div className="space-y-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                    selectedBrand === brand
                      ? "bg-teal-500 text-white"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* RESET */}
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedBrand("All");
            }}
            className="w-full bg-gray-900 text-white py-3 rounded-2xl font-semibold hover:bg-gray-800 transition"
          >
            Reset Filters
          </button>
        </aside>

        {/* PRODUCTS AREA */}
        <main className="lg:col-span-3">

          {/* GRID */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredProducts.map((product) => (
              <div
                key={`${product.brand}-${product.id}`}
                className="group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >

                {/* IMAGE AREA */}
                <div className="h-56 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <span className="text-xs font-semibold text-teal-600">
                    {product.brand}
                  </span>

                  <h2 className="font-bold text-gray-800 mt-1 text-lg leading-snug">
                    {product.name}
                  </h2>

                  <p className="text-xs text-gray-500 mt-1">
                    {product.category}
                  </p>

                  <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* PRICE + CTA */}
                  <div className="mt-5 flex items-center justify-between">

                    <p className="text-green-600 font-bold text-lg">
                      ₱ {product.price.toLocaleString()}
                    </p>

                    <button
                      onClick={() =>
                        navigate(`/product/${product.brand}/${product.id}`)
                      }
                      className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
                    >
                      View
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </main>
      </div>
    </div>
  );
}

export default Products;
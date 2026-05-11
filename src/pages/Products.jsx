import React, { useState } from "react";
import productsData from "../data/product";

function Products() {

  // CONVERT OBJECT DATA INTO ARRAY
  const allProducts = Object.entries(productsData).flatMap(
    ([brand, items]) =>
      items.map((item) => ({
        ...item,
        brand,
      }))
  );

  // FILTER STATES
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");

  // DYNAMIC CATEGORIES
  const categories = [
    "All",
    ...new Set(allProducts.map((product) => product.category)),
  ];

  // DYNAMIC BRANDS
  const brands = [
    "All",
    ...Object.keys(productsData),
  ];

  // FILTER PRODUCTS
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
    <div className="p-8">
      {/* HEADER */}
      <h1 className="text-4xl font-bold text-teal-500">
        OUR PRODUCTS
      </h1>

      <p className="mt-3 text-gray-600">
        Explore smart appliances designed for modern living.
      </p>

      {/* MAIN LAYOUT */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Filters
            </h2>

            {/* CATEGORY */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 
                focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* BRAND */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Brand
              </label>

              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 
                focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* RESET BUTTON */}
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedBrand("All");
              }}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white 
              font-semibold py-3 rounded-lg transition"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredProducts.map((product) => (
              <div
                key={`${product.brand}-${product.id}`}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm 
                hover:shadow-xl hover:-translate-y-1 hover:border-teal-400 
                transition-all duration-300 cursor-pointer"
              >

                {/* PRODUCT IMAGE */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-contain mb-4"
                />

                {/* BRAND */}
                <span className="text-xs font-semibold text-teal-500">
                  {product.brand}
                </span>

                {/* PRODUCT NAME */}
                <h2 className="mt-2 text-lg font-bold text-gray-800">
                  {product.name}
                </h2>

                {/* CATEGORY */}
                <p className="text-sm text-gray-500 mt-1">
                  {product.category}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* PRICE */}
                <p className="mt-4 text-2xl font-bold text-green-600">
                  ₱ {product.price.toLocaleString()}
                </p>

                {/* RATING + STOCK */}
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>⭐ {product.rating}</span>
                  <span>{product.stock} stocks</span>
                </div>

                {/* CTA */}
                <button
                  className="mt-5 w-full bg-teal-500 hover:bg-teal-600 
                  text-white font-semibold py-2 rounded-lg transition"
                >
                  View Details
                </button>

              </div>
            ))}

          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;
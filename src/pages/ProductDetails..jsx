import { useParams } from "react-router-dom";
import { useState } from "react";
import productsData from "../data/product";

function ProductDetails() {
  const { brand, id } = useParams();

  const product = productsData[brand]?.find(
    (item) => item.id.toString() === id
  );

  const [activeTab, setActiveTab] = useState("description");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const productImages =
    Array.isArray(product?.images) && product.images.length > 0
      ? product.images
      : [product?.image].filter(Boolean);

  if (!product) {
    return (
      <div className="p-10 text-2xl font-bold">
        Product not found.
      </div>
    );
  }

  return (
    <div className="bg-[#f7f7f7] min-h-screen p-6 lg:p-10">

      {/* BREADCRUMB */}
      <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-8">
        <span>Home</span>
        <span>{">"}</span>

        <span>Products</span>
        <span>{">"}</span>

        <span>{product.category}</span>
        <span>{">"}</span>

        <span className="text-teal-500 font-semibold">
          {product.name}
        </span>
      </div>

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

        {/* LEFT SIDE */}
        <div className="xl:col-span-9">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* THUMBNAILS */}
            <div className="lg:col-span-1 flex lg:flex-col gap-4">

              {productImages.map((img, index) => (
                <button
                  key={`${img}-${index}`}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`${
                    selectedImageIndex === index
                      ? "border-2 border-teal-400"
                      : "border"
                  } rounded-2xl p-2 bg-white`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-20 h-20 object-contain"
                  />
                </button>
              ))}

            </div>

            {/* MAIN IMAGE */}
            <div className="lg:col-span-5 bg-white border rounded-2xl p-8 flex items-center justify-center relative">

              {productImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === 0 ? productImages.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border text-xl text-gray-600 hover:border-teal-400"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === productImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border text-xl text-gray-600 hover:border-teal-400"
                  >
                    ›
                  </button>
                </>
              )}

              <img
                src={productImages[selectedImageIndex]}
                alt={`${product.name} ${selectedImageIndex + 1}`}
                className="w-full h-[450px] object-contain"
              />

            </div>

            {/* PRODUCT INFO */}
            <div className="lg:col-span-6">

              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-gray-500 mt-2">
                by {brand}
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* FEATURES */}
              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>

                  <span className="text-gray-700">
                    Smart AI Technology
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>

                  <span className="text-gray-700">
                    High Performance Cleaning
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>

                  <span className="text-gray-700">
                    Official Local Warranty
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>

                  <span className="text-gray-700">
                    Modern Premium Design
                  </span>
                </div>

              </div>

              {/* PRICE */}
              <div className="mt-10">

                <div className="flex items-center gap-4">
                  <span className="text-2xl font-semibold text-gray-700">
                    SRP:
                  </span>

                  <h2 className="text-5xl font-bold text-gray-900">
                    ₱{product.price.toLocaleString()}
                  </h2>
                </div>

                <p className="text-sm text-gray-500 mt-3">
                  Price may vary depending on the official store.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <div className="xl:col-span-3">

          <div className="bg-white border rounded-3xl p-6">

            <h2 className="text-2xl font-bold text-teal-500 mb-6">
              WHERE TO BUY
            </h2>

            {/* WEBSITE */}
            <div className="border rounded-2xl p-4 flex items-center justify-between mb-4 hover:border-teal-400 transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full border flex items-center justify-center text-2xl">
                  🌐
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Official Website
                  </h3>

                  <p className="text-sm text-gray-500">
                    Visit official website
                  </p>
                </div>

              </div>

              <span className="text-xl text-gray-400">
                ↗
              </span>

            </div>

            {/* SHOPEE */}
            <div className="border rounded-2xl p-4 flex items-center justify-between mb-4 hover:border-orange-400 transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                  S
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Shopee Official Store
                  </h3>

                  <p className="text-sm text-gray-500">
                    View on Shopee
                  </p>
                </div>

              </div>

              <span className="text-xl text-gray-400">
                ↗
              </span>

            </div>

            {/* LAZADA */}
            <div className="border rounded-2xl p-4 flex items-center justify-between mb-4 hover:border-blue-400 transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  Laz
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Lazada Official Store
                  </h3>

                  <p className="text-sm text-gray-500">
                    View on Lazada
                  </p>
                </div>

              </div>

              <span className="text-xl text-gray-400">
                ↗
              </span>

            </div>

            {/* NOTE */}
            <div className="mt-6 bg-gray-100 rounded-xl p-4 text-center text-sm text-gray-500">
              We are not affiliated with any of the stores listed above.
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-10">

        {/* DESCRIPTION */}
        <div className="xl:col-span-9 bg-white border rounded-3xl p-8">

          {/* TABS */}
          <div className="flex gap-10 border-b pb-4 mb-6 overflow-x-auto">

            <button
              onClick={() => setActiveTab("description")}
              className={`font-bold pb-2 transition ${
                activeTab === "description"
                  ? "text-teal-500 border-b-4 border-teal-500"
                  : "text-gray-500"
              }`}
            >
              DESCRIPTION
            </button>

            <button
              onClick={() => setActiveTab("specs")}
              className={`font-bold pb-2 transition ${
                activeTab === "specs"
                  ? "text-teal-500 border-b-4 border-teal-500"
                  : "text-gray-500"
              }`}
            >
              SPECIFICATIONS
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`font-bold pb-2 transition ${
                activeTab === "reviews"
                  ? "text-teal-500 border-b-4 border-teal-500"
                  : "text-gray-500"
              }`}
            >
              REVIEWS
            </button>

          </div>

          {/* TAB CONTENT */}
          {activeTab === "description" && (
            <div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

                <div className="text-center">
                  <div className="text-5xl mb-3">⚡</div>

                  <h3 className="font-bold text-gray-800">
                    Powerful
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Advanced performance
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-5xl mb-3">🧠</div>

                  <h3 className="font-bold text-gray-800">
                    Smart AI
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Intelligent features
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-5xl mb-3">🧼</div>

                  <h3 className="font-bold text-gray-800">
                    Auto Cleaning
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Hassle-free usage
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-5xl mb-3">📍</div>

                  <h3 className="font-bold text-gray-800">
                    Smart Mapping
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Accurate navigation
                  </p>
                </div>

              </div>

            </div>
          )}

          {activeTab === "specs" && (
            <div className="space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">
                  Brand
                </span>

                <span>{brand}</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">
                  Category
                </span>

                <span>{product.category}</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">
                  Price
                </span>

                <span>
                  ₱{product.price.toLocaleString()}
                </span>
              </div>

            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-gray-500">
              No reviews yet.
            </div>
          )}

        </div>

        {/* SPEC BOX */}
        <div className="xl:col-span-3">

          <div className="bg-white border rounded-3xl p-6">

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  Brand
                </span>

                <span>{brand}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  Category
                </span>

                <span>{product.category}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  Price
                </span>

                <span>
                  ₱{product.price.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  Warranty
                </span>

                <span>1 Year</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  Support
                </span>

                <span>Official Store</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
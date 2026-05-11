import xiaomi from "../assets/xiaomi.png";
import dreame from "../assets/dreame.png";
import amazfit from "../assets/amazfit.png";
import ddpai from "../assets/ddpai.png";
import uwant from "../assets/uwant.png";
import toptoy from "../assets/toptoy.png";
import wanbo from "../assets/wanbo.png";
import mibro from "../assets/mibro.png";
import vinko from "../assets/vinko.png";

function Brands() {
  const brands = [
    {
      name: "Xiaomi",
      img: xiaomi,
      exposure: 100,
      desc: "Innovative smart devices and lifestyle electronics known for quality and affordability.",
    },
    {
      name: "Dreame",
      img: dreame,
      exposure: 95,
      desc: "Advanced cleaning technology including smart robot vacuums and cordless cleaners.",
    },
    {
      name: "Amazfit",
      img: amazfit,
      exposure: 105,
      desc: "Smart wearables focused on fitness tracking, health monitoring, and daily performance.",
    },
    {
      name: "DDPAI",
      img: ddpai,
      exposure: 100,
      desc: "High-quality dash cameras and driving recorders designed for safety and reliability.",
    },
    {
      name: "Uwant",
      img: uwant,
      exposure: 98,
      desc: "Smart home cleaning appliances built for convenience and efficient household care.",
    },
    {
      name: "TopToy",
      img: toptoy,
      exposure: 110,
      desc: "Creative collectible toys blending pop culture, design, and modern craftsmanship.",
    },
    {
      name: "Wanbo",
      img: wanbo,
      exposure: 103,
      desc: "Portable projectors offering home entertainment with clear visuals and smart features.",
    },
    {
      name: "Mibro",
      img: mibro,
      exposure: 100,
      desc: "Smartwatches and fitness trackers that combine style, functionality, and health insights.",
    },
    {
      name: "Vinko",
      img: vinko,
      exposure: 97,
      desc: "Smart home appliances and lifestyle products designed for modern living and convenience.",
    }
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-teal-500">
        OUR BRANDS
      </h1>

      <p className="mt-3 text-gray-600 max-w-6xl">
        ANYMALL collaborates with globally trusted smart appliance brands
        to bring innovation, convenience, and quality directly to you.
      </p>

      {/* BRAND GRID */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm 
            hover:shadow-xl hover:-translate-y-1 hover:border-teal-400 
            transition-all duration-300 cursor-pointer"
          >
            <div className="w-full h-40 mb-4 flex items-center justify-center overflow-hidden rounded">
              <img
                src={brand.img}
                alt={brand.name}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                style={{ filter: `brightness(${brand.exposure}%)` }}
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800 group-hover:text-teal-500">
              {brand.name}
            </h2>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {brand.desc}
            </p>

            <div className="mt-4 text-teal-500 text-sm font-semibold opacity-80">
              Explore products →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
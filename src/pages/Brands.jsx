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
      href: "https://www.mi.com/ph/store/",
      desc: "Smart devices and lifestyle electronics built for modern living.",
    },
    {
      name: "Dreame",
      img: dreame,
      href: "https://ph.dreametech.com/",
      desc: "Advanced cleaning technology and intelligent home solutions.",
    },
    {
      name: "Amazfit",
      img: amazfit,
      href: "https://us.amazfit.com/",
      desc: "Smart wearables focused on health, fitness, and performance.",
    },
    {
      name: "DDPAI",
      img: ddpai,
      href: "https://ph.ddpai.com/",
      desc: "High-quality dash cams for safe and smart driving.",
    },
    {
      name: "Uwant",
      img: uwant,
      href: "https://uwant.com.ph/",
      desc: "Smart cleaning appliances for effortless home care.",
    },
    {
      name: "TopToy",
      img: toptoy,
      href: "https://gotoptoy.com/",
      desc: "Collectible designer toys inspired by pop culture.",
    },
    {
      name: "Wanbo",
      img: wanbo,
      href: "https://wanbo.cn/",
      desc: "Portable projectors for immersive home entertainment.",
    },
    {
      name: "Mibro",
      img: mibro,
      href: "https://www.mibrofit.com/",
      desc: "Affordable smartwatches for fitness and daily tracking.",
    },
    {
      name: "Vinko",
      img: vinko,
      href: "https://www.facebook.com/vinkophofficial/",
      desc: "Smart home appliances designed for everyday convenience.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <p className="uppercase tracking-[4px] text-sm text-teal-100 mb-4">
            Brand Ecosystem
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Trusted Global Brands, One Platform
          </h1>

          <p className="text-teal-50 max-w-2xl text-lg leading-relaxed">
            ANYMALL partners with leading global technology brands to bring
            innovative, high-quality, and affordable smart products to
            Filipino consumers.
          </p>

        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="font-bold text-teal-600 mb-2">Verified Partners</h3>
          <p className="text-sm text-gray-600">
            All brands are officially distributed and trusted.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="font-bold text-teal-600 mb-2">Smart Technology</h3>
          <p className="text-sm text-gray-600">
            Focus on innovation, automation, and smart living.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="font-bold text-teal-600 mb-2">Nationwide Supply</h3>
          <p className="text-sm text-gray-600">
            Powered by efficient warehouse distribution.
          </p>
        </div>

      </section>

      {/* FEATURED BRAND (HIGHLIGHT) */}
      <section className="max-w-7xl mx-auto px-6 pb-10">

        <div className="bg-white rounded-3xl shadow-md border overflow-hidden grid md:grid-cols-2">

          <div className="p-10 flex flex-col justify-center">
            <p className="text-teal-500 font-semibold uppercase tracking-[3px] mb-3">
              Featured Brand
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Xiaomi
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              From smartphones to smart home devices and appliances, Xiaomi leads in
              delivering innovative and affordable technology for modern
              lifestyles.
            </p>

            <a
              href="https://www.mi.com/ph/store/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold w-fit hover:bg-teal-500 transition"
            >
              Explore Mi Online Mall
            </a>
          </div>

          <div className="bg-gray-100 flex items-center justify-center p-10">
            <img
              src={xiaomi}
              alt="Xiaomi"
              className="w-60 object-contain"
            />
          </div>

        </div>
      </section>

      {/* BRAND GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              All Partner Brands
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Explore our full ecosystem of global partners
            </p>
          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >

              <div className="h-28 flex items-center justify-center mb-5">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-20 object-contain group-hover:scale-105 transition"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-600">
                {brand.name}
              </h3>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {brand.desc}
              </p>

              <p className="mt-4 text-sm text-teal-600 font-semibold">
                Visit Brand →
              </p>

            </a>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Brands;
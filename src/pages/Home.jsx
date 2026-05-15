import { motion } from "framer-motion";
import products from "../data/product";

import hero from "../assets/hero-image.png";
import { useNavigate } from 'react-router-dom';
import xiaomi from "../assets/xiaomi.png";
import dreame from "../assets/dreame.png";
import amazfit from "../assets/amazfit.png";
import ddpai from "../assets/ddpai.png";
import uwant from "../assets/uwant.png";
import toptoy from "../assets/toptoy.png";
import wanbo from "../assets/wanbo.png";
import mibro from "../assets/mibro.png";
import vinko from "../assets/vinko.png";

function Home() {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate('/Products');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-teal-50">

      {/* HERO SECTION */}

      <motion.section className="flex items-center justify-between px-15 py-0 bg-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      >
        <div className="animate-fade-in">
          <p className="text-teal-500 font-bold">WELCOME TO ANYMALL</p>
          <h1 className="text-5xl font-bold leading-tight">
            Smart Living <br />
            <span className="text-teal-500">Starts Here</span>
          </h1> 
          <p className="text-gray-500 text-sm mt-4">
            Your trusted warehouse for top smart appliances brands.
          </p>

          <button onClick={goToProduct} className="mt-6 bg-teal-500 text-white text-sm font-bold px-4 py-1 rounded hover:bg-gray-400 transition">
            BROWSE PRODUCTS
          </button>
        </div>
<img src={hero} className="w-[850px] h-[290px] object-cover" alt="products" />
{/* <img
  src={hero}
  className="w-[850px] h-[290px] object-cover float-animation"
  alt="products"
/> */}
      </motion.section>

      {/* BRANDS */}
      <motion.section className="px-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
        <h2 className="text-center font-semibold mb-1">OUR BRANDS</h2>
        <hr className="mb-8 w-15 mx-auto border-t-3 border-teal-500" />

        <div className="flex gap-4 justify-center flex-wrap">
          {[
            { name: "Xiaomi", image: xiaomi },
            { name: "Dreame", image: dreame },
            { name: "Amazfit", image: amazfit },
            { name: "DDPAI", image: ddpai },
            { name: "Uwant", image: uwant },
            { name: "TopToy", image: toptoy },
            { name: "Wanbo", image: wanbo },
            { name: "Mibro", image: mibro },
            { name: "Vinko", image: vinko }
          ].map((brand) => (
              <a
                key={brand.name}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-50 h-20 px-6 py-3 shadow rounded-xl flex items-center justify-center border border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-teal-400 transition-all duration-300"
              >
                <img src={brand.image} alt={brand.name} className="h-30 w-30 object-contain" />
                <span className="sr-only">{brand.name}</span>
              </a>
            )
          )}
        </div>
      </motion.section>

      {/* <motion.section
  className="px-5 py-5"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
></motion.section> */}
      {/* SHOP BY CATEGORY */}
      <motion.section className="px-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
        <h2 className="text-center font-semibold mb-1">SHOP BY CATEGORY</h2>
        <hr className="mb-8 w-15 mx-auto border-t-3 border-teal-500" />

        <div className="flex gap-4 justify-center flex-wrap">
          {[
            { name: "Cleaning Devices", icon: <i className="fas fa-broom" />, description: "Robot vacuums, cordless vacuums, and more." },
            { name: "Smart Home", icon: <i className="fas fa-home" />, description: "Cameras, sensors, smart hubs and more." },
            { name: "Car Tech", icon: <i className="fas fa-car" />, description: "Dashcams, car accessories, and smart gadgets." },
            { name: "Kitchen Appliances", icon: <i className="fas fa-kitchen-set" />, description: "Rice cookers, kettles, air fryer, and more." },
          ].map((category) => (
            <div
              key={category.name}
              className="bg-white w-77 px-4 py-2 shadow rounded-md border border-gray-500 hover:shadow-lg transition flex items-center justify-between gap-4"
            >
              <span className="flex h-20 w-25 items-center justify-center shrink-0 text-3xl text-teal-500">
                {category.icon}
              </span>

              <div className="flex-1 flex flex-col items-start gap-1">
                <p className="font-semibold text-left">{category.name}</p>
                <p className="text-xs text-gray-500 text-left">{category.description}</p>
                <button
                  onClick={() => navigate('/Products', { state: { category: category.name } })}
                  className="mt-6 bg-teal-500 text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-teal-600 hover:scale-105 active:scale-95 transition duration-300 shadow-md hover:shadow-xl"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>


      {/* PRODUCTS GRID */}
      <section className="px-5 py-5">
        <h2 className="text-center font-semibold mb-1">FEATURED PRODUCTS</h2>
        <hr className="mb-8 w-15 mx-auto border-t-3 border-teal-500" />

        <div className="flex gap-4 justify-center flex-wrap">
          {Object.values(products)
            .flat()
            .map((product) => (
              <div
                key={product.id}
                className="bg-white w-77 px-5 py-5 shadow rounded-md border border-gray-500 hover:shadow-lg transition flex flex-col items-center gap-8"
              >
                <span className="flex h-55 w-full items-center justify-center shrink-0">
                  <img src={product.images[0]} alt={product.name} className="h-60 w-60 object-contain" />
                </span>

                <div className="flex w-full flex-col items-center gap-3">
                  <p className="font-semibold text-center">{product.name}</p>
                  <p className="text-xs text-gray-500 text-center">{product.description}</p>
                  <p className="text-lg text-green-600 text-center font-bold py-2">₱ {product.price.toLocaleString()}</p>
                  <button
                    onClick={() => navigate('/Products', { state: { product } })}
                    className="w-30 text-teal-500 text-sm font-bold rounded hover:text-gray-400 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
      
    </div>
  );
}

// function Footer() {
//   return (
//     <footer className="mt-8 bg-white border-t border-gray-200 py-6">
//       <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
//         <p className="mb-2 font-semibold text-teal-500">ANYMALL</p>
//         <p className="mb-1">Trusted warehouse for smart appliances.</p>
//         <p className="text-xs">© {new Date().getFullYear()} ANYMALL. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

export default Home;
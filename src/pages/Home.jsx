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
      <section className="flex items-center justify-between px-15 py-0 bg-gray-200">
        <div>
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

        <img
          src={hero}
          className="w-[850px] h-[290px] object-cover"
          alt="products"
        />
      </section>

      {/* BRANDS */}
      <section className="px-5 py-5">
        <h2 className="text-center font-semibold mb-1">OUR BRANDS</h2>
        <hr className="mb-8 w-15 mx-auto border-t-3 border-teal-500" />

        <div className="flex gap-4 justify-center flex-wrap">
          {[
            { name: "Xiaomi", image: xiaomi, link: "https://www.mi.com/ph/store/" },
            { name: "Dreame", image: dreame, link: "https://ph.dreametech.com/" },
            { name: "Amazfit", image: amazfit, link: "https://us.amazfit.com/" },
            { name: "DDPAI", image: ddpai, link: "https://ph.ddpai.com/" },
            { name: "Uwant", image: uwant, link: "https://uwant.com.ph/" },
            { name: "TopToy", image: toptoy, link: "https://gotoptoy.com/" },
            { name: "Wanbo", image: wanbo, link: "https://wanbo.cn/" },
            { name: "Mibro", image: mibro, link: "https://www.mibrofit.com/" },
            { name: "Vinko", image: vinko, link: "https://www.facebook.com/vinkophofficial/" }
          ].map((brand) => (
              <a
                key={brand.name}
                href={brand.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-50 h-20 px-6 py-3 shadow rounded-md flex items-center justify-center border border-gray-500 hover:shadow-lg transition"
              >
                <img src={brand.image} alt={brand.name} className="h-30 w-30 object-contain" />
                <span className="sr-only">{brand.name}</span>
              </a>
            )
          )}
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="px-5 py-5">
        <h2 className="text-center font-semibold mb-1">SHOP BY CATEGORY</h2>
        <hr className="mb-8 w-15 mx-auto border-t-3 border-teal-500" />

        <div className="flex gap-4 justify-center flex-wrap">
          {[
            { name: "Cleaning Devices", icon: <i class="fas fa-broom" />, description: "Robot vacuums, cordless vacuums, and more." },
            { name: "Smart Home", icon: <i class="fas fa-home" />, description: "Cameras, sensors, smart hubs and more." },
            { name: "Car Tech", icon: <i class="fas fa-car" />, description: "Dashcams, car accessories, and smart gadgets." },
            { name: "Kitchen Appliances", icon: <i class="fas fa-kitchen-set" />, description: "Rice cookers, kettles, air fryer, and more." },
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
                <button className="w-17 text-teal-500 text-xs font-bold py-1 rounded hover:text-gray-400 transition">
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


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
                  <img src={product.image} alt={product.name} className="h-60 w-60 object-contain" />
                </span>

                <div className="flex w-full flex-col items-center gap-3">
                  <p className="font-semibold text-center">{product.name}</p>
                  <p className="text-xs text-gray-500 text-center">{product.description}</p>
                  <p className="text-lg text-green-600 text-center font-bold py-2">₱ {product.price.toLocaleString()}</p>
                  <button className="w-30 text-teal-500 text-sm font-bold rounded hover:text-gray-400 transition">
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
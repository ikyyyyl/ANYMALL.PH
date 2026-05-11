import dreame_l20ultra from "../assets/dreame_l20.png";
import dreame_l10s from "../assets/dreame_l10s-ultra.png";
import xiaomi_purifier4 from "../assets/xiaomi_purifier4.png";
import ddpai_z50 from "../assets/ddpai_z50-4k.png";
import wanbo_t2max from "../assets/wanbo_t2max.png";
import uwant_b100 from "../assets/uwant_b100.png";
import toptoy_naruto from "../assets/toptoy_naruto-blindbox.png";
import amazfit_cheetah2pro from "../assets/amazfit_cheetah2pro.png";
import amazfit_active3 from "../assets/amazfit_active3.png";

const products = {
  Dreame: [
    {
      id: 1,
      name: "Dreame L20 Ultra Robot Vacuum",
      category: "Cleaning Devices",
      price: 39999,
      image: dreame_l20ultra,
      description: "Advanced cleaning with ultra power and smart mapping.",
      stock: 8,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Dreame Bot L10s Ultra",
      category: "Robot Vacuum",
      price: 32999,
      image: dreame_l10s,
      description: "Automatic robot vacuum with self-cleaning station.",
      stock: 5,
      rating: 4.8,
    },
  ],

  Xiaomi: [
    {
      id: 1,
      name: "Xiaomi Smart Air Purifier 4",
      category: "Smart Home",
      price: 8999,
      image: xiaomi_purifier4,
      description: "Smart purification for cleaner and healthier air.",
      stock: 15,
      rating: 4.8,
    },
    // {
    //   id: 2,
    //   name: "Xiaomi Pad 6",
    //   category: "Tablet",
    //   price: 22999,
    //   image: "/src/assets/xiaomi_pad6.png",
    //   description: "High-performance tablet for work and entertainment.",
    //   stock: 10,
    //   rating: 4.7,
    // },
  ],

  DDPAI: [
    {
      id: 1,
      name: "DDPAI Z50 4K Dashcam",
      category: "Car Tech",
      price: 6499,
      image: ddpai_z50,
      description: "4K UHD recording with smart features for safer driving.",
      stock: 12,
      rating: 4.5,
    },
    // {
    //   id: 8,
    //   name: "DDPAI Z50 Dual",
    //   category: "Dash Camera",
    //   price: 8999,
    //   image: "/src/assets/ddpai_z50-4k.png",
    //   description: "4K dual-channel dash camera for vehicles.",
    //   stock: 7,
    //   rating: 4.8,
    // },
  ],

  Wanbo: [
    {
      id: 1,
      name: "Wanbo T2 Max Smart Projector",
      category: "Smart Home",
      price: 10999,
      image: wanbo_t2max,
      description: "Enjoy cinema experience at home in full HD clarity.",
      stock: 12,
      rating: 4.6,
    },
  ],

  Uwant: [
    {
      id: 1,
      name: "UWANT B100 Wet and Dry Vacuum Cleaner",
      category: "Cleaning Devices",
      price: 17999,
      image: uwant_b100,
      description: "Delivers a deep and effective clean using powerful water pressure and brush scrubbing to lift dirt, stains, and embedded debris from surfaces.",
      stock: 9,
      rating: 4.7,
    },
    // {
    //   id: 10,
    //   name: "Uwant V100 Vacuum Cleaner",
    //   category: "Vacuum Cleaner",
    //   price: 8999,
    //   image: "/src/assets/uwant-v100.jpg",
    //   description: "Cordless vacuum cleaner with strong suction.",
    //   stock: 11,
    //   rating: 4.6,
    // },
  ],

  TOPTOY: [
    {
      id: 1,
      name: "TOPTOY NARUTO Shippuden Beast Plush Series Keychain Blind Box",
      category: "Collectibles",
      price: 1899,
      image: toptoy_naruto,
      description: "Collect adorable beast-themed plush keychains inspired by Naruto: Shippuden.",
      stock: 30,
      rating: 4.9,
    },
    // {
    //   id: 2,
    //   name: "TOPTOY One Piece Figure",
    //   category: "Anime Figure",
    //   price: 2499,
    //   image: "/src/assets/toptoy_onepiece.jpg",
    //   description: "Detailed One Piece collectible figure.",
    //   stock: 14,
    //   rating: 4.8,
    // },
  ],

  Amazfit: [
    {
      id: 1,
      name: "Amazfit Cheetah 2 Pro",
      category: "Smart Home",
      price: 27999,
      image: amazfit_cheetah2pro,
      description: "Smart watch that supports more than just miles and splits, bringing together the strength, recovery, and discipline that drive performance.",
      stock: 20,
      rating: 4.7,
    },
    {
      id: 2,
      name: "Amazfit Active 3 Premium",
      category: "Smart Home",
      price: 10299,
      image: amazfit_active3,
      description: "Smartwatch that  helps you move forward by training smarter, building a stronger foundation, and trusting the process that leads to results.",
      stock: 25,
      rating: 4.6,
    },
  ],
};

export default products;
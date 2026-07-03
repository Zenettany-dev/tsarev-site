"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCar, FaCarSide, FaMotorcycle, FaTruckPickup, 
  FaHelicopter, FaTruck, FaShip, FaCoins, FaArrowLeft, 
  FaShoppingCart, FaTelegramPlane, FaTimes, FaSnowplow,
  FaGhost, FaRobot, FaRocket, FaCrown 
} from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const carData = {
  1: [
    { name: "KIA K5 (Полицейская)", price: 3500, icon: <FaCarSide /> },
    { name: "BMW G30 (МВД)", price: 2250, icon: <FaCarSide /> },
    { name: "Mercedes-Benz GLS 63 AMG (МВД)", price: 3000, icon: <FaCarSide /> },
    { name: "ВАЗ 2107 (МВД)", price: 5000, icon: <FaCarSide /> },
    { name: "LADA VESTA (МВД)", price: 2500, icon: <FaCarSide /> },
    { name: "Skoda Octavia (МВД)", price: 2500, icon: <FaCarSide /> },
    { name: "BMW 1000R (МВД)", price: 3000, icon: <FaMotorcycle /> },
    { name: "УАЗ Патриот (МВД)", price: 2750, icon: <FaTruckPickup /> },
    { name: "Toyota Camry (МВД)", price: 3000, icon: <FaCarSide /> },
    { name: "BMW X5M (МВД)", price: 1500, icon: <FaCarSide /> },
    { name: "LADA Granta (МВД)", price: 1500, icon: <FaCarSide /> },
    { name: "Porsche 911 992 (МВД)", price: 4000, icon: <FaCarSide /> },
    { name: "Audi RS6 Avant (МВД)", price: 3500, icon: <FaCarSide /> },
    { name: "Служебный вертолёт Polmay (МВД)", price: 3500, icon: <FaHelicopter /> },
    { name: "Mercedes-AMG C63 S (МВД)", price: 3000, icon: <FaCarSide /> },
    { name: "Буханка «Инкассация»", price: 2550, icon: <FaTruck /> },
    { name: "Subaru Impreza RS Sport", price: 3500, icon: <FaCarSide /> },
    { name: "Ferrari LaFerrari", price: 4000, icon: <FaCarSide /> },
    { name: "BMW M5 CS", price: 4000, icon: <FaCarSide /> },
  ],
  2: [
    { name: "Mercedes-Benz SLS AMG", price: 4000, icon: <FaCarSide /> },
    { name: "Hummer H1", price: 3000, icon: <FaTruckPickup /> },
    { name: "Bentley 1928 8 Litre", price: 3250, icon: <FaCarSide /> },
    { name: "BMW 850", price: 2250, icon: <FaCarSide /> },
    { name: "Bentley Turbo R", price: 2500, icon: <FaCarSide /> },
    { name: "Mercedes-Benz AMG McLaren SLR", price: 3500, icon: <FaCarSide /> },
    { name: "Tesla Cybertruck", price: 3750, icon: <FaTruckPickup /> },
    { name: "Lamborghini Aventador", price: 3800, icon: <FaCarSide /> },
    { name: "Mercedes-Benz CLK-GTR", price: 4000, icon: <FaCarSide /> },
    { name: "Mercedes-Benz W124 Coupe AMG", price: 3750, icon: <FaCarSide /> },
    { name: "MERCEDES-BENZ 280SL", price: 2500, icon: <FaCarSide /> },
    { name: "DODGE RAM SRT", price: 2500, icon: <FaTruckPickup /> },
    { name: "QUADRA V-TECH", price: 3250, icon: <FaCarSide /> },
    { name: "BMW M3 G80 CS", price: 4000, icon: <FaCarSide /> },
    { name: "BANDITO БАГГИ", price: 2222, icon: <FaCarSide /> },
    { name: "SHELBY COBRA ШЕЛБИ КОБРА", price: 3333, icon: <FaCarSide /> },
    { name: "NAPER RAILTON", price: 3000, icon: <FaCarSide /> },
    { name: "ZAZ-4", price: 3500, icon: <FaCarSide /> },
    { name: "MERCEDES-BENZ W126", price: 3500, icon: <FaCarSide /> },
    { name: "FORD MUSTANG 1967", price: 3500, icon: <FaCarSide /> },
  ],
  3: [
    { name: "Ford Hot Rod", price: 3000, icon: <FaCarSide /> },
    { name: "International Prostar LT", price: 3000, icon: <FaTruck /> },
    { name: "Rolls-Royce Cullinan Bunker", price: 4000, icon: <FaCarSide /> },
    { name: "Rolls-Royce Phantom VIII Bunker", price: 4000, icon: <FaCarSide /> },
    { name: "Ferrari Enzo", price: 3500, icon: <FaCarSide /> },
    { name: "Mercedes-Benz Puch", price: 3500, icon: <FaTruckPickup /> },
    { name: "Lamborghini Tecnoma (яхта)", price: 3750, icon: <FaShip /> },
    { name: "Chopper Skeleton", price: 3750, icon: <FaMotorcycle /> },
    { name: "Phantom VII H", price: 3500, icon: <FaCarSide /> },
    { name: "Phantom VII P", price: 3500, icon: <FaCarSide /> },
    { name: "Tesla Semi", price: 4000, icon: <FaTruck /> },
    { name: "Bentley Ultratank", price: 3500, icon: <FaTruckPickup /> },
    { name: "Lamborghini Diablo", price: 4000, icon: <FaCarSide /> },
    { name: "Гоночный ВАЗ 2101", price: 3333, icon: <FaCarSide /> },
  ],
  4: [
    { name: "Mercedes-Benz G65 (Old)", price: 2500, icon: <FaCarSide /> },
    { name: "Lexus LX570", price: 2800, icon: <FaCarSide /> },
    { name: "Range Rover Vogue", price: 2700, icon: <FaCarSide /> },
    { name: "BMW M5 F90 (CS Style)", price: 3200, icon: <FaCarSide /> },
    { name: "Audi Q8 RS", price: 3000, icon: <FaCarSide /> },
    { name: "Cadillac Escalade 2023", price: 3500, icon: <FaCarSide /> },
    { name: "Bugatti Chiron", price: 5000, icon: <FaRocket /> },
    { name: "Pagani Huayra", price: 4500, icon: <FaRocket /> },
    { name: "McLaren P1", price: 4200, icon: <FaCarSide /> },
    { name: "Koenigsegg Jesko", price: 5500, icon: <FaRocket /> },
    { name: "Rolls-Royce Boat Tail", price: 6000, icon: <FaShip /> },
    { name: "Maybach S680", price: 3800, icon: <FaCarSide /> },
  ]
};

export default function DonateCarsPage() {
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<{name: string, price: number} | null>(null);

  const openBuyModal = (name: string, price: number) => {
    setSelectedProduct({ name, price });
  };

  const getTgLink = () => {
    if (!selectedProduct) return "#";
    const text = encodeURIComponent(`Привет! Заинтересовал товар "${selectedProduct.name}", за ${selectedProduct.price} DCOINS.`);
    return `https://t.me/TSAREV2025?text=${text}`;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050508]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
            <Link href="/donate" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl border border-white/5 transition-all group">
              <span className="text-blue-500 group-hover:-translate-x-1 transition-transform">
                <FaArrowLeft />
              </span>
              <span className="font-bold uppercase text-xs tracking-widest">Назад</span>
            </Link>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <FaCar className="text-white text-3xl" />
              </div>
              <div>
                <h1 className="text-4xl font-[1000] italic uppercase tracking-tighter text-white leading-none">
                  <span className="text-blue-600">ДОНАТ</span> АВТОМОБИЛИ
                </h1>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Страница {page} из 4</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 p-2 bg-white/[0.02] rounded-[24px] border border-white/5">
            <button className="flex-1 min-w-[140px] px-6 py-4 rounded-xl text-center font-black uppercase text-[10px] tracking-widest transition-all bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              Автомобили
            </button>
            {['Скины', 'Наборы', 'DCOINS', 'Прочее'].map((tab) => (
              <button key={tab} className="flex-1 min-w-[140px] px-6 py-4 rounded-xl text-center font-black uppercase text-[10px] tracking-widest transition-all text-gray-500 hover:bg-white/5 hover:text-white">
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-2 mb-10 justify-center">
            {[1, 2, 3, 4].map((p) => (
              <button 
                key={p} 
                onClick={() => setPage(p)}
                className={`w-12 h-12 rounded-xl font-black transition-all border ${page === p ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/5 border-white/5 text-gray-500 hover:border-blue-600'}`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {carData[page as keyof typeof carData]?.map((car, idx) => (
                <motion.div 
                  key={car.name + page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                  className="bg-[#0a0a0f] border border-white/5 p-8 rounded-[32px] hover:border-blue-600/50 transition-all group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-600/10 border border-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 text-2xl group-hover:scale-110 transition-transform">
                      {car.icon}
                    </div>
                    <h3 className="font-black text-white italic uppercase text-sm leading-tight flex-1">{car.name}</h3>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-500 font-black text-xs">
                      <FaCoins /> {car.price}
                    </div>
                    <button 
                      onClick={() => openBuyModal(car.name, car.price)}
                      className="px-6 py-3 bg-white/5 hover:bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                    >
                      Купить
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#0d0f1a] border border-white/10 p-10 rounded-[40px] max-w-md w-full text-center shadow-2xl"
            >
              <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 text-gray-500 hover:text-white"><FaTimes /></button>
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-600/30">
                <FaShoppingCart className="text-blue-500 text-3xl" />
              </div>
              <h2 className="text-white font-[1000] italic uppercase text-2xl mb-2">Оформить заказ</h2>
              <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-8">
                Вы покупаете <span className="text-white">{selectedProduct.name}</span> за <span className="text-blue-500">{selectedProduct.price} DCOINS</span>
              </p>
              <a 
                href={getTgLink()}
                target="_blank"
                className="flex items-center justify-center gap-3 w-full py-5 bg-[#24A1DE] text-white font-[1000] italic uppercase text-xs tracking-widest rounded-2xl hover:scale-105 transition-all shadow-lg shadow-[#24A1DE]/20"
              >
                <FaTelegramPlane className="text-xl" /> Написать менеджеру
              </a>
              <p className="text-gray-600 font-bold uppercase text-[9px] mt-6 tracking-tighter">Нажмите, чтобы перейти в чат с @TSAREV2025</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
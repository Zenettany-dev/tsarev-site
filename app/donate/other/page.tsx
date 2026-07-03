"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCar, FaTshirt, FaBox, FaCoins, FaCube, 
  FaArrowLeft, FaLayerGroup, FaWarehouse, FaHome,
  FaTimes, FaTelegramPlane, FaExclamationCircle, FaInfoCircle
} from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OtherDonatePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [fullscreenImg, setFullscreenImg] = useState(false);
  const [nickname, setNickname] = useState("");
  const [showAlert, setShowAlert] = useState<{ show: boolean, msg: string }>({ show: false, msg: "" });

  const [slots, setSlots] = useState({ car: 0, business: 0, house: 0 });
  const [garageCoords, setGarageCoords] = useState({ x: '', y: '', z: '' });
  const [houseCoords, setHouseCoords] = useState({ x: '', y: '', z: '' });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
        setFullscreenImg(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const updateSlot = (type: keyof typeof slots, change: number) => {
    setSlots(prev => ({
      ...prev,
      [type]: Math.max(0, Math.min(100, prev[type] + change))
    }));
  };

  const totalSlotPrice = (slots.car + slots.business + slots.house) * 200;

  const handleOrder = (message: string) => {
    if (!nickname.trim()) {
      setShowAlert({ show: true, msg: "Пожалуйста, введите ваш игровой никнейм" });
      return;
    }
    window.open(`https://t.me/TSAREV2025?text=${encodeURIComponent(message)}`, '_blank');
    setActiveModal(null);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050508]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
            <Link href="/donate" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl border border-white/5 transition-all group">
              <FaArrowLeft className="text-blue-500 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold uppercase text-xs tracking-widest">Назад</span>
            </Link>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <FaCube className="text-white text-3xl" />
              </div>
              <div>
                <h1 className="text-4xl font-[1000] italic uppercase tracking-tighter text-white leading-none">
                  <span className="text-blue-600">ПРОЧИЕ</span> УСЛУГИ
                </h1>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Дополнительные возможности для вашего аккаунта</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 p-2 bg-white/[0.02] rounded-[24px] border border-white/5">
            {[
              { name: 'Автомобили', icon: <FaCar />, link: '/donate/cars', active: false },
              { name: 'Скины', icon: <FaTshirt />, link: '/donate/skins', active: false },
              { name: 'Наборы', icon: <FaBox />, link: '/donate/sets', active: false },
              { name: 'DCOINS', icon: <FaCoins />, link: '/donate/coins', active: false },
              { name: 'Прочее', icon: <FaCube />, link: '/donate/other', active: true },
            ].map((tab) => (
              <Link 
                key={tab.name} 
                href={tab.link}
                className={`flex-1 min-w-[140px] px-6 py-4 rounded-xl text-center font-black uppercase text-[10px] tracking-widest transition-all flex items-center justify-center gap-2 ${
                  tab.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:bg-white/5 hover:text-white'
                }`}
              >
                {tab.icon} {tab.name}
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="bg-[#0a0a0f] border border-white/5 p-8 rounded-[32px] relative overflow-hidden group hover:border-blue-600/50 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-[40px]" />
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 text-2xl mb-6 border border-white/5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaLayerGroup />
              </div>
              <h3 className="text-xl font-black text-white italic uppercase mb-2">Слоты имущества</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-8 leading-relaxed">Дополнительные места для транспорта, бизнесов и домов.</p>
              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <span className="text-blue-500 font-black italic">200 ₽ <span className="text-[10px] text-gray-600 uppercase">/ шт</span></span>
                <button onClick={() => setActiveModal('slots')} className="px-6 py-3 bg-white/5 hover:bg-blue-600 text-white font-black uppercase text-[10px] rounded-xl transition-all border border-white/10 hover:border-blue-600 shadow-lg">Выбрать</button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="bg-[#0a0a0f] border border-white/5 p-8 rounded-[32px] relative overflow-hidden group hover:border-blue-600/50 transition-all"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 text-2xl mb-6 border border-white/5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaWarehouse />
              </div>
              <h3 className="text-xl font-black text-white italic uppercase mb-2">Метка гаража</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-8 leading-relaxed">Установка персональной иконки гаража на игровой карте.</p>
              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <span className="text-blue-500 font-black italic">150 ₽</span>
                <button onClick={() => setActiveModal('garage')} className="px-6 py-3 bg-white/5 hover:bg-blue-600 text-white font-black uppercase text-[10px] rounded-xl transition-all border border-white/10 hover:border-blue-600 shadow-lg">Купить</button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-[#0a0a0f] border border-white/5 p-8 rounded-[32px] relative overflow-hidden group hover:border-blue-600/50 transition-all"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 text-2xl mb-6 border border-white/5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaHome />
              </div>
              <h3 className="text-xl font-black text-white italic uppercase mb-2">Метка дома</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-8 leading-relaxed">Отображение вашего дома на карте для всех игроков.</p>
              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <span className="text-blue-500 font-black italic">200 ₽</span>
                <button onClick={() => setActiveModal('house')} className="px-6 py-3 bg-white/5 hover:bg-blue-600 text-white font-black uppercase text-[10px] rounded-xl transition-all border border-white/10 hover:border-blue-600 shadow-lg">Купить</button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeModal === 'slots' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0d0f1a] border border-white/10 p-10 rounded-[40px] max-w-md w-full">
              <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"><FaTimes /></button>
              <h2 className="text-white font-[1000] italic uppercase text-2xl mb-8 text-center">ВЫБОР <span className="text-blue-600">СЛОТОВ</span></h2>
              
              <div className="space-y-4 mb-8">
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Ваш никнейм" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-600 outline-none font-bold text-sm transition-all" />
                
                {['car', 'business', 'house'].map((type) => (
                  <div key={type} className="flex items-center justify-between bg-black/40 border border-white/5 p-4 rounded-2xl">
                    <span className="text-gray-400 font-black uppercase text-[10px] tracking-widest">{type === 'car' ? 'Авто' : type === 'business' ? 'Бизнес' : 'Дома'}</span>
                    <div className="flex items-center gap-4">
                      <button onClick={() => updateSlot(type as any, -1)} className="w-10 h-10 bg-white/5 rounded-xl hover:bg-blue-600 transition-all font-bold">－</button>
                      <span className="w-4 text-center font-black text-blue-600 italic">{slots[type as keyof typeof slots]}</span>
                      <button onClick={() => updateSlot(type as any, 1)} className="w-10 h-10 bg-white/5 rounded-xl hover:bg-blue-600 transition-all font-bold">＋</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-600/10 border border-blue-600/20 rounded-2xl p-4 flex justify-between items-center mb-6">
                <span className="text-gray-400 font-bold text-xs uppercase">Итого:</span>
                <span className="text-2xl font-black text-blue-600 italic tracking-tighter">{totalSlotPrice} ₽</span>
              </div>

              <button 
                onClick={() => handleOrder(`✅ Заявка на слоты\nНик: ${nickname}\nАвто: ${slots.car}, Биз: ${slots.business}, Дом: ${slots.house}\nИтого: ${totalSlotPrice} ₽`)}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-[1000] italic uppercase text-xs tracking-widest rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3"
              >
                <FaTelegramPlane /> Оплатить в Telegram
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(activeModal === 'garage' || activeModal === 'house') && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveModal(null)} className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#0d0f1a] border border-white/10 p-10 rounded-[40px] max-w-md w-full">
              <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"><FaTimes /></button>
              <h2 className="text-white font-[1000] italic uppercase text-2xl mb-8 text-center">МЕТКА <span className="text-blue-600">{activeModal === 'garage' ? 'ГАРАЖА' : 'ДОМА'}</span></h2>
              
              <div onClick={() => setFullscreenImg(true)} className="mb-6 cursor-pointer relative group rounded-2xl overflow-hidden border border-white/10">
                <img src="/img/coords-preview.jpg" className="w-full h-24 object-cover opacity-50 group-hover:opacity-80 transition-all" alt="Hint" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-black uppercase text-white bg-blue-600 px-3 py-1 rounded-lg shadow-xl">Посмотреть пример</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 text-left">
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Ваш никнейм" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-600 outline-none font-bold text-sm transition-all" />
                <div className="grid grid-cols-3 gap-2">
                    {['x', 'y', 'z'].map(coord => (
                        <input 
                            key={coord} 
                            placeholder={coord.toUpperCase()} 
                            value={activeModal === 'garage' ? garageCoords[coord as keyof typeof garageCoords] : houseCoords[coord as keyof typeof houseCoords]}
                            onChange={(e) => {
                                activeModal === 'garage' 
                                    ? setGarageCoords(p => ({...p, [coord]: e.target.value}))
                                    : setHouseCoords(p => ({...p, [coord]: e.target.value}))
                            }}
                            className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-white focus:border-blue-600 outline-none font-mono text-sm" 
                        />
                    ))}
                </div>
              </div>

              <div className="flex justify-between items-center mb-6 px-2">
                <span className="text-gray-500 font-black uppercase text-[10px]">Стоимость:</span>
                <span className="text-xl font-black text-blue-600 italic">{activeModal === 'garage' ? '150' : '200'} ₽</span>
              </div>

              <button 
                onClick={() => {
                    const c = activeModal === 'garage' ? garageCoords : houseCoords;
                    if(!c.x || !c.y || !c.z) return setShowAlert({ show: true, msg: "Введите все координаты (X, Y, Z)" });
                    handleOrder(`✅ Покупка метки ${activeModal}\n👤 Ник: ${nickname}\n📍 Координаты: ${c.x}, ${c.y}, ${c.z}\n💰 Цена: ${activeModal === 'garage' ? 150 : 200} ₽`);
                }}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-[1000] italic uppercase text-xs tracking-widest rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3"
              >
                <FaTelegramPlane /> Оформить заказ
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {fullscreenImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6 cursor-pointer" 
            onClick={() => setFullscreenImg(false)}
          >
            <motion.img 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src="/img/coords-preview.jpg" className="max-w-full max-h-full rounded-3xl border-4 border-white/10 shadow-2xl" alt="Full hint" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAlert.show && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
             <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#1a0a0a] border border-red-500/20 p-8 rounded-[32px] max-w-sm w-full text-center"
             >
               <div className="text-red-500 text-4xl mb-4 flex justify-center"><FaExclamationCircle /></div>
               <h3 className="text-white font-black uppercase italic mb-2">Внимание</h3>
               <p className="text-gray-400 font-bold text-xs uppercase mb-6 leading-relaxed">{showAlert.msg}</p>
               <button onClick={() => setShowAlert({ show: false, msg: "" })} className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-black uppercase text-[10px] rounded-xl transition-all">Понятно</button>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
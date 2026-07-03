"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCoins, FaArrowLeft, FaCar, FaTshirt, FaBox, 
  FaCube, FaCalculator, FaMinus, FaPlus, FaGift,
  FaBolt, FaShieldAlt, FaPercent, FaHeadset, 
  FaInfoCircle, FaExclamationCircle, FaTimes, FaTelegramPlane 
} from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DonateCoinsPage() {
  const [nickname, setNickname] = useState("");
  const [amount, setAmount] = useState(100);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState<{ show: boolean, msg: string }>({ show: false, msg: "" });

  const calculateBonus = (val: number) => {
    if (val >= 10000) return 30;
    if (val >= 5000) return 20;
    if (val >= 2500) return 15;
    if (val >= 1000) return 10;
    if (val >= 500) return 5;
    return 0;
  };

  const bonus = calculateBonus(amount);
  const bonusAmount = Math.floor(amount * (bonus / 100));
  const totalCoins = amount + bonusAmount;
  const price = Math.ceil(amount / 10);

  const handleBuyClick = () => {
    if (!nickname.trim()) {
      setShowAlert({ show: true, msg: "Пожалуйста, введите ваш игровой никнейм" });
      return;
    }
    if (amount < 1) {
      setShowAlert({ show: true, msg: "Введите корректное количество DCOINS (минимум 1)" });
      return;
    }
    setShowModal(true);
  };

  const getTgLink = () => {
    const message = encodeURIComponent(
      `✅ Новая заявка на покупку DCOINS\n\n` +
      `👤 Никнейм: ${nickname}\n` +
      `💰 DCOINS: ${amount}\n` +
      `💵 Сумма к оплате: ${price} ₽\n` +
      `🎁 Бонус: +${bonus}% (${bonusAmount} DCOINS)\n` +
      `✨ Итого: ${totalCoins} DCOINS\n\n` +
      `Пожалуйста, предоставьте реквизиты для оплаты.`
    );
    return `https://t.me/TSAREV2025?text=${message}`;
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
                <FaCoins className="text-white text-3xl" />
              </div>
              <div>
                <h1 className="text-4xl font-[1000] italic uppercase tracking-tighter text-white leading-none">
                  <span className="text-blue-600">DCOINS</span> ПОПОЛНЕНИЕ
                </h1>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">1 рубль = 10 DCOINS + бонусы</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 p-2 bg-white/[0.02] rounded-[24px] border border-white/5">
            {[
              { name: 'Автомобили', icon: <FaCar />, link: '/donate/cars', active: false },
              { name: 'Скины', icon: <FaTshirt />, link: '/donate/skins', active: false },
              { name: 'Наборы', icon: <FaBox />, link: '/donate/sets', active: false },
              { name: 'DCOINS', icon: <FaCoins />, link: '/donate/coins', active: true },
              { name: 'Прочее', icon: <FaCube />, link: '/donate/other', active: false },
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

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="bg-[#0a0a0f] border border-white/5 p-8 rounded-[32px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]" />
              
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3 italic uppercase">
                <FaCalculator className="text-blue-600" /> Калькулятор
              </h2>

              <div className="space-y-6 relative z-10">
                <div>
                  <label className="block text-gray-500 font-black uppercase text-[10px] tracking-widest mb-3">Ваш никнейм</label>
                  <input 
                    type="text" 
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="Введите игровой ник"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-600 focus:outline-none transition-all font-bold"
                  />
                </div>

                <div>
                  <label className="block text-gray-500 font-black uppercase text-[10px] tracking-widest mb-3">Количество DCOINS</label>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden w-fit">
                    <button onClick={() => setAmount(prev => Math.max(1, prev - 100))} className="w-14 h-14 flex items-center justify-center text-blue-500 hover:bg-white/5 transition-all"><FaMinus /></button>
                    <input 
                      type="number" 
                      value={amount}
                      onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                      className="w-32 bg-transparent text-center text-white font-black text-xl outline-none border-x border-white/10"
                    />
                    <button onClick={() => setAmount(prev => prev + 100)} className="w-14 h-14 flex items-center justify-center text-blue-500 hover:bg-white/5 transition-all"><FaPlus /></button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[500, 1000, 2500, 5000, 10000].map(val => (
                    <button 
                      key={val} 
                      onClick={() => setAmount(val)}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] font-black hover:border-blue-600 transition-all"
                    >
                      {val}
                    </button>
                  ))}
                </div>

                <div className="bg-black/40 rounded-3xl p-6 border border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-tighter">К оплате:</span>
                    <span className="text-white font-black">{price} ₽</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-tighter">Бонус:</span>
                    <span className="text-blue-500 font-black">+{bonus}%</span>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex justify-between items-end">
                    <span className="text-gray-300 font-black uppercase text-xs">Итого DCOINS:</span>
                    <span className="text-3xl font-[1000] text-blue-600 italic tracking-tighter">{totalCoins}</span>
                  </div>
                </div>

                <button 
                  onClick={handleBuyClick}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black italic uppercase rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3"
                >
                  <FaCoins /> Купить DCOINS
                </button>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                className="bg-[#0a0a0f] border border-white/5 p-8 rounded-[32px]"
              >
                <h3 className="text-lg font-black text-white mb-6 flex items-center gap-3 uppercase italic">
                  <FaGift className="text-blue-600" /> Бонусы
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'от 500 DCOINS (50 ₽)', val: '+5%' },
                    { label: 'от 1000 DCOINS (100 ₽)', val: '+10%' },
                    { label: 'от 2500 DCOINS (250 ₽)', val: '+15%' },
                    { label: 'от 5000 DCOINS (500 ₽)', val: '+20%' },
                    { label: 'от 10000 DCOINS (1000 ₽)', val: '+30%' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                      <span className="text-gray-400 text-xs font-bold uppercase">{item.label}</span>
                      <span className="text-blue-500 font-black">{item.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FaBolt />, title: 'Мгновенно', desc: 'Сразу после оплаты' },
                  { icon: <FaShieldAlt />, title: 'Безопасно', desc: 'Защита платежей' },
                  { icon: <FaPercent />, title: 'Бонусы', desc: 'До +30% к сумме' },
                  { icon: <FaHeadset />, title: 'Поддержка', desc: '24/7 в Telegram' },
                ].map((f, i) => (
                  <div key={i} className="bg-[#0a0a0f] border border-white/5 p-5 rounded-2xl">
                    <div className="text-blue-500 mb-3 text-xl">{f.icon}</div>
                    <h4 className="text-white font-black uppercase text-[10px] mb-1">{f.title}</h4>
                    <p className="text-gray-500 text-[9px] uppercase font-bold leading-tight">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#0d0f1a] border border-white/10 p-10 rounded-[40px] max-w-md w-full text-center"
            >
              <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"><FaTimes /></button>
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-600/30 text-blue-500 text-3xl">
                <FaCoins />
              </div>
              <h2 className="text-white font-[1000] italic uppercase text-2xl mb-2">Подтверждение</h2>
              <div className="bg-black/40 rounded-3xl p-6 border border-white/5 text-left space-y-3 mb-8">
                <div className="flex justify-between text-xs font-bold uppercase"><span className="text-gray-500">Ник:</span> <span className="text-white">{nickname}</span></div>
                <div className="flex justify-between text-xs font-bold uppercase"><span className="text-gray-500">Сумма:</span> <span className="text-white">{price} ₽</span></div>
                <div className="flex justify-between text-xs font-bold uppercase"><span className="text-gray-500">Итого:</span> <span className="text-blue-500">{totalCoins} DCOINS</span></div>
              </div>
              <a 
                href={getTgLink()}
                target="_blank"
                className="flex items-center justify-center gap-3 w-full py-5 bg-[#24A1DE] text-white font-[1000] italic uppercase text-xs tracking-widest rounded-2xl hover:scale-105 transition-all shadow-lg"
              >
                <FaTelegramPlane className="text-xl" /> Отправить заявку
              </a>
            </motion.div>
          </div>
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
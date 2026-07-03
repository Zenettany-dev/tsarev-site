"use client";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiSend, FiHardDrive } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InstallPage() {
  const tapeText = Array(20).fill("В РАЗРАБОТКЕ • ").join("");

  return (
    <>
      <Header />
      <div className="min-h-screen pt-44 pb-20 px-6 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-9xl font-[1000] italic uppercase tracking-tighter text-white">УСТАНОВКА</h1>
            <p className="text-green-500 font-black uppercase tracking-[0.5em] text-sm mt-4">Выбери удобный способ игры</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            <div className="group relative bg-[#0a0a0f] border border-white/5 p-12 rounded-[45px] transition-all overflow-hidden select-none">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-20 pointer-events-none" />
              
              <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center overflow-hidden">
                <div className="absolute w-[150%] h-12 bg-amber-500 text-black font-[1000] text-xs uppercase tracking-[0.3em] flex items-center rotate-12 shadow-[0_0_30px_rgba(245,158,11,0.3)] border-y border-black/10">
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                    className="whitespace-nowrap italic"
                  >
                    {tapeText}
                  </motion.div>
                </div>
                
                <div className="absolute w-[150%] h-12 bg-amber-500 text-black font-[1000] text-xs uppercase tracking-[0.3em] flex items-center -rotate-12 shadow-[0_0_30px_rgba(245,158,11,0.3)] border-y border-black/10">
                  <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                    className="whitespace-nowrap italic"
                  >
                    {tapeText}
                  </motion.div>
                </div>
              </div>

              <div className="absolute top-8 right-12 text-white/5 text-6xl font-black italic">01</div>
              <FiDownload className="text-5xl text-gray-600 mb-8" />
              <h2 className="text-4xl font-[1000] italic uppercase text-white/40 mb-6 tracking-tight">Через официальный лаунчер</h2>
              <p className="text-gray-700 font-bold uppercase text-xs tracking-widest leading-relaxed mb-10">
                Автоматическая установка всех файлов, быстрое обновление и стабильное соединение. Рекомендуется для всех игроков.
              </p>
              <div className="inline-flex items-center gap-4 px-12 py-6 bg-white/5 border border-white/5 text-white/20 font-[1000] italic uppercase text-sm tracking-widest rounded-2xl pointer-events-none">
                Скачать Лаунчер <FiDownload />
              </div>
            </div>
          
            <div className="group relative bg-[#0a0a0f] border border-white/5 p-12 rounded-[45px] hover:border-green-600/50 transition-all">
              <div className="absolute top-8 right-12 text-green-600/20 text-6xl font-black italic">02</div>
              <FiHardDrive className="text-5xl text-green-600 mb-8" />
              <h2 className="text-4xl font-[1000] italic uppercase text-white mb-6 tracking-tight">Сборка</h2>
              <p className="text-gray-500 font-bold uppercase text-xs tracking-widest leading-relaxed mb-10">
                Для опытных игроков. Скачай архив с игрой и установи в любую папку вручную.
              </p>
              <a 
                href="/install/sborka.zip" 
                download 
                className="inline-flex items-center gap-4 px-12 py-6 bg-green-600 text-white font-[1000] italic uppercase text-sm tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-green-600/20"
              >
                Скачать Архив <FiExternalLink />
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600/10 to-transparent border border-green-500/20 p-8 rounded-[35px] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#24A1DE] rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
                <FaTelegramPlane />
              </div>
              <div>
                <h3 className="text-white font-[1000] italic uppercase text-2xl tracking-tight">Возникли проблемы?</h3>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-1">Наша техподдержка ответит на любой вопрос 24/7</p>
              </div>
            </div>
            <a 
              href="https://t.me/kunik_dev" 
              target="_blank"
              className="px-10 py-5 bg-[#24A1DE] text-white font-[1000] italic uppercase text-[11px] tracking-[0.2em] rounded-2xl hover:bg-white hover:text-[#24A1DE] transition-all flex items-center gap-3"
            >
              Написать в Telegram <FiSend />
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
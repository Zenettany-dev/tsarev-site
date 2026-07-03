"use client";
import { motion } from "framer-motion";
import { 
  FiHelpCircle, FiVideo, FiMonitor, FiStar, 
  FiInfo, FiArrowRight, FiHardDrive, FiCpu, FiZap 
} from "react-icons/fi";
import { FaWindows } from "react-icons/fa6";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HelpPage() {
  const requirements = {
    min: [
      { icon: <FaWindows />, label: "ОС", val: "Windows 7+" },
      { icon: <FiCpu />, label: "Процессор", val: "Core 2 Duo 1.8 ГГц" },
      { icon: <FiZap />, label: "ОЗУ", val: "2 GB" },
      { icon: <FiMonitor />, label: "Видео", val: "Nvidia 7900 (256MB)" },
      { icon: <FiHardDrive />, label: "Диск", val: "32 ГБ" },
    ],
    rec: [
      { icon: <FaWindows />, label: "ОС", val: "Windows 10/11" },
      { icon: <FiCpu />, label: "Процессор", val: "4-ядерный CPU" },
      { icon: <FiZap />, label: "ОЗУ", val: "4 GB" },
      { icon: <FiMonitor />, label: "Видео", val: "От 1 GB памяти" },
      { icon: <FiHardDrive />, label: "Диск", val: "32 ГБ (SSD)" },
    ]
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050508] text-white pt-44 pb-20 px-6 overflow-hidden">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-green-600/10 blur-[180px] -z-10 animate-pulse" />

        <div className="max-w-6xl mx-auto">
          
          <div className="text-center md:text-left mb-24">

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[9rem] font-[1000] italic uppercase leading-[0.8] tracking-tighter mb-4"
            >
              КАК <span className="text-green-600">НАЧАТЬ?</span>
            </motion.h1>
            <p className="text-gray-500 font-bold uppercase tracking-[0.5em] text-xs md:text-sm italic">
              Инструкция по установке <span className="text-white">ATRIAN ONLINE</span>
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/[0.02] border border-white/5 rounded-[48px] p-2 md:p-10 mb-20 backdrop-blur-xl relative group overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             
             <div className="flex items-center gap-4 mb-8 px-6 pt-6 md:pt-0">
                <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-500">
                    <FiVideo className="text-2xl" />
                </div>
                <h2 className="text-3xl font-[1000] italic uppercase tracking-tight">Видео гайд</h2>
             </div>

             <div className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <iframe 
                  src="URL VIDOS" 
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                />
             </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {['min', 'rec'].map((type, idx) => (
              <motion.div 
                key={type}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/[0.02] border border-white/5 rounded-[48px] p-10 hover:border-green-600/30 transition-all relative group"
              >
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
                  <h3 className={`text-3xl font-[1000] italic uppercase ${type === 'min' ? 'text-white' : 'text-green-600'}`}>
                    {type === 'min' ? 'MINIMAL' : 'RECOMMENDED'}
                  </h3>
                  {type === 'min' ? <FiMonitor className="text-2xl opacity-20" /> : <FiStar className="text-2xl text-green-600" />}
                </div>

                <div className="space-y-6">
                  {requirements[type as keyof typeof requirements].map((item, i) => (
                    <div key={i} className="flex items-center justify-between group/item">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 group-hover/item:text-green-500 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">{item.label}</p>
                          <p className="text-sm font-bold uppercase italic">{item.val}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 flex items-center gap-6 mb-12 max-w-2xl">
                <FiInfo className="text-green-600 text-4xl shrink-0" />
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 leading-relaxed">
                    Убедитесь, что ваш ПК соответствует характеристикам. В случае проблем с запуском — обратитесь в нашу <span className="text-white">техническую поддержку</span>.
                </p>
            </div>

            <Link href="/install" className="group relative px-20 py-8 bg-green-600 rounded-[32px] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_60px_rgba(37,99,23,0.4)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 text-2xl font-[1000] italic uppercase flex items-center gap-4">
                  СКАЧАТЬ ЛАУНЧЕР <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
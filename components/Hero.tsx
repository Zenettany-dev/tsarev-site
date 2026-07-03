"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiPlay, FiShield, FiCpu, FiClock } from "react-icons/fi";

export default function Hero() {
  const achievements = [
    { val: "30+", label: "Активных игроков", icon: <FiPlay className="text-green-500" /> },
    { val: "500+", label: "Уникальных авто", icon: <FiCpu className="text-purple-500" /> },
    { val: "Fair Play", label: "Честная игра", icon: <FiShield className="text-green-500" /> },
    { val: "24/7", label: "Поддержка", icon: <FiClock className="text-red-500" /> },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-green-600/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://tsarevgames.site/img/bg_pattern.png')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl md:text-[11rem] font-[1000] italic uppercase leading-[0.8] tracking-tighter mb-8">
              <span className="text-white">ATRIAN</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">ONLINE</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-2xl font-bold uppercase tracking-[0.4em] mb-12 italic">
              Твой путь в <span className="text-white">Криминальной России</span> начинается здесь
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/install" className="group relative px-16 py-6 bg-green-600 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(3,321,135,0.3)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 text-xl font-[1000] italic uppercase flex items-center gap-3">
                  Начать играть <FiPlay />
                </span>
              </Link>
              
              <Link href="https://forum.tsarevgames.site" className="px-16 py-6 border-2 border-white/10 hover:border-white/40 rounded-2xl text-xl font-[1000] italic uppercase transition-all">
                Форум
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 backdrop-blur-md p-6 md:p-8 rounded-[32px] hover:border-green-500/30 transition-all group"
            >
              <div className="text-2xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-[1000] italic uppercase leading-none mb-2">
                {item.val}
              </h3>
              <p className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
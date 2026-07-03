"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RefPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans italic selection:bg-green-600 overflow-x-hidden">
      <Header />

      <main className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#1e3a8a_0%,_transparent_50%)] opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-[1600px] w-full grid lg:grid-cols-2 gap-16 lg:gap-0 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-10 md:mb-16">
              <div className="h-px w-10 md:w-20 bg-green-600" />
              <p className="text-[9px] md:text-[10px] font-[1000] uppercase tracking-[0.6em] text-green-600/80">ДОСТУП РАЗРЕШЕН</p>
            </div>
            
            <div className="relative mb-12 md:mb-20">
              <h1 className="text-[55px] sm:text-[90px] md:text-[130px] font-[1000] uppercase tracking-[-0.07em] leading-[0.8] mix-blend-difference">
                TEST<span className="text-green-600">.</span>
              </h1>
              <p className="mt-8 text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] opacity-20">ПЕРСОНАЛЬНАЯ РЕФЕРАЛЬНАЯ ПРОГРАММА 2026</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-16 md:mb-24">
              <div className="p-8 md:p-12 bg-[#020202] hover:bg-[#050505] transition-all group overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <img src="https://hassle.fra1.cdn.digitaloceanspaces.com/builds/referral/images/bonus/cash.webp" className="h-8 mb-10 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                <p className="text-[10px] font-[1000] uppercase tracking-widest opacity-20 mb-2">ПАКЕТ ALPHA</p>
                <p className="text-3xl md:text-5xl font-[1000] tracking-tighter italic text-white">50,000,000$</p>
              </div>
              <div className="p-8 md:p-12 bg-[#020202] hover:bg-[#050505] transition-all group overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <img src="https://hassle.fra1.cdn.digitaloceanspaces.com/builds/referral/images/bonus/vip.webp" className="h-8 mb-10 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                <p className="text-[10px] font-[1000] uppercase tracking-widest opacity-20 mb-2">ПАКЕТ DELTA</p>
                <p className="text-3xl md:text-5xl font-[1000] tracking-tighter italic text-white">GOLD VIP</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-px bg-white/10 p-px">
              <a href="/install" className="relative flex-[1.5] py-9 bg-white text-black text-center font-[1000] uppercase tracking-[0.4em] text-[11px] overflow-hidden transition-all duration-300 hover:bg-green-600 hover:text-white group/btn">
                <span className="relative z-10">НАЧАТЬ ИГРАТЬ</span>
                <div className="absolute inset-0 bg-green-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="https://t.me/TSAREVRP" target="_blank" className="relative flex-1 py-9 bg-[#080808] text-white border border-white/5 sm:border-none text-center font-[1000] uppercase tracking-[0.4em] text-[11px] transition-all duration-300 hover:bg-white hover:text-black">
                TELEGRAM-КАНАЛ
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-end pointer-events-none relative h-full items-center"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/15 blur-[140px] rounded-full" />
            <img 
              src="https://hassle.fra1.cdn.digitaloceanspaces.com/referral/15500-part.webp" 
              className="w-full max-w-[700px] h-auto grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 z-10" 
              alt="" 
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

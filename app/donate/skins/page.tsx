"use client";
import { motion } from "framer-motion";
import { FiSlash, FiAlertCircle, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DonateSkinsOff() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050508] text-white pt-44 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-red-600/10 blur-[150px] -z-10" />

        <div className="max-w-4xl w-full text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/[0.02] border border-white/5 p-12 md:p-24 rounded-[60px] backdrop-blur-xl relative overflow-hidden"
          >
            <FiSlash className="absolute -top-10 -right-10 text-white/[0.02] text-[300px] -rotate-12" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-600/20 border border-red-600/30 mb-8">
                <FiAlertCircle className="text-red-600 text-4xl" />
              </div>

              <h1 className="text-5xl md:text-8xl font-[1000] italic uppercase leading-[0.8] tracking-tighter mb-6">
                МОДУЛЬ <br /> <span className="text-red-600">"SKINS"</span>
              </h1>

              <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-[12px] italic mb-12">
                ВРЕМЕННО ОТКЛЮЧЕН АДМИНИСТРАЦИЕЙ
              </p>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

              <Link href="/donate" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-[1000] uppercase italic text-xs rounded-2xl hover:bg-red-600 hover:text-white transition-all duration-300">
                <FiArrowLeft /> ВЕРНУТЬСЯ В МАГАЗИН
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
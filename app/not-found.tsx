"use client";
import Link from "next/link";
import { FiAlertOctagon } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#020204] text-white flex flex-col items-center justify-center p-6 text-center italic font-black uppercase">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-red-600/10 blur-[120px] -z-10" />
      
      <FiAlertOctagon size={80} className="text-red-600 mb-8 animate-pulse" />
      
      <h1 className="text-8xl md:text-9xl tracking-tighter leading-none mb-4">
        404 <br /> <span className="text-red-600">ERROR</span>
      </h1>
      
      <p className="text-gray-500 text-xs tracking-[0.3em] mb-12">
        ЗАПРОШЕННАЯ СТРАНИЦА НЕ НАЙДЕНА ИЛИ УДАЛЕНА
      </p>
      
      <Link 
        href="/" 
        className="px-10 py-4 bg-white text-black text-sm hover:bg-blue-600 hover:text-white transition-all rounded-full"
      >
        ВЕРНУТЬСЯ НА ГЛАВНУЮ
      </Link>
    </main>
  );
}
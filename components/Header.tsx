"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiHome, FiShield, FiCreditCard, FiMessageSquare, FiHelpCircle } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:px-6 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/[0.02] backdrop-blur-md border border-white/5 p-2 md:p-3 rounded-2xl">
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <img 
              src="/img/logo.png" 
              alt="Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover border border-white/10 group-hover:border-green-600 transition-all"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-[1000] italic uppercase leading-none tracking-tighter text-white">
                ATRIAN<span className="text-green-600">ONLINE</span>
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">Главная</Link>
            <Link href="/rules" className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">Правила</Link>
            <Link href="/faq" className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">FAQ</Link>
            <Link href="/donate" className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">Донат</Link>
            <a href="https://forum.tsarevgames.site" className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">Форум</a>
          </nav>

          <Link href="/install" className="hidden lg:block px-8 py-3 bg-green-600 hover:bg-white hover:text-black text-white font-[1000] italic uppercase text-[10px] tracking-widest transition-all skew-x-[-15deg] shadow-[0_10px_20px_rgba(34,197,94,0.2)]">
            Начать играть
          </Link>
        </div>
      </header>

      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-[200] flex items-center justify-between bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/10 p-2 rounded-3xl shadow-2xl">
        <Link href="/" className="flex flex-col items-center justify-center w-14 h-14 text-gray-400 hover:text-green-500 transition-colors">
          <FiHome size={20} />
          <span className="text-[8px] font-black uppercase mt-1">Дом</span>
        </Link>
        <Link href="/rules" className="flex flex-col items-center justify-center w-14 h-14 text-gray-400 hover:text-green-500 transition-colors">
          <FiShield size={20} />
          <span className="text-[8px] font-black uppercase mt-1">База</span>
        </Link>
        <Link href="/install" className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.4)] -mt-10 border-4 border-[#020204]">
          <span className="font-[1000] italic uppercase text-[10px] leading-tight text-center">PLAY</span>
        </Link>
        <Link href="/donate" className="flex flex-col items-center justify-center w-14 h-14 text-gray-400 hover:text-green-500 transition-colors">
          <FiCreditCard size={20} />
          <span className="text-[8px] font-black uppercase mt-1">Донат</span>
        </Link>
        <button onClick={() => setIsOpen(true)} className="flex flex-col items-center justify-center w-14 h-14 text-gray-400 hover:text-green-500 transition-colors">
          <FiMenu size={20} />
          <span className="text-[8px] font-black uppercase mt-1">Меню</span>
        </button>
      </nav>

      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[201] transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)}>
        <div 
          className={`absolute bottom-0 left-0 w-full bg-[#0a0a0c] border-t border-white/10 rounded-t-[40px] p-8 transition-transform duration-500 flex flex-col gap-6 ${isOpen ? "translate-y-0" : "translate-y-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-12 h-1.5 bg-white/10 rounded-full mx-auto mb-4" />
          <div className="flex flex-col gap-2">
            <a href="https://forum.tsarevgames.site" className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 text-white font-black uppercase italic tracking-widest text-sm hover:bg-green-600/20 transition-all">
              <FiMessageSquare className="text-green-500" /> Форум проекта
            </a>
            <Link href="/faq" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 text-white font-black uppercase italic tracking-widest text-sm hover:bg-green-600/20 transition-all">
              <FiHelpCircle className="text-green-500" /> Частые вопросы (FAQ)
            </Link>
          </div>
          <button onClick={() => setIsOpen(false)} className="mt-4 p-4 text-gray-500 font-black uppercase text-[10px] tracking-widest">Закрыть</button>
        </div>
      </div>
    </>
  );
}
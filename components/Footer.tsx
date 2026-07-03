"use client";
import { FaVk, FaTelegramPlane, FaYoutube, FaDiscord } from "react-icons/fa";
import Link from "next/link";

interface SocialBtnProps {
  icon: React.ReactNode;
  href: string;
}

function SocialBtn({ icon, href }: SocialBtnProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center text-xl hover:bg-green-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
    >
      {icon}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="pt-20 pb-32 md:pb-10 px-6 border-t border-white/5 relative overflow-hidden bg-[#050508]">
      <div className="absolute bottom-20 md:-bottom-10 -left-6 md:-left-10 text-[10rem] md:text-[15rem] font-[1000] italic opacity-[0.01] select-none uppercase pointer-events-none">
        ATRIAN
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <Link href="/">
            <img 
              src="/img/logo.png" 
              alt="Logo" 
              className="w-16 h-16 rounded-2xl border-white/10 transition-all shadow-2xl"
            />
          </Link>
          <p className="text-gray-500 font-bold uppercase text-[9px] tracking-[0.3em] leading-relaxed max-w-xs">
            Самый стабильный и атмосферный проект в CRMP. Присоединяйся к нам.
          </p>
        </div>

        <div className="flex justify-center gap-12 md:gap-20 border-y border-white/5 md:border-none py-10 md:py-0">
          <ul className="flex flex-col items-center md:items-start gap-4">
            <li className="text-green-600 font-black italic uppercase text-[10px] tracking-widest mb-2">Проект</li>
            <li><Link href="/news" className="nav-link">Новости</Link></li>
            <li><Link href="/donate" className="nav-link">Донат</Link></li>
            <li><Link href="/rules" className="nav-link">Правила</Link></li>
          </ul>
          <ul className="flex flex-col items-center md:items-start gap-4">
            <li className="text-green-600 font-black italic uppercase text-[10px] tracking-widest mb-2">Сервис</li>
            <li><a href="LINK FORUM " target="_blank" className="nav-link">Форум</a></li>
            <li><Link href="/help" className="nav-link">Помощь</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center gap-8">
          <div className="flex gap-4">
            <SocialBtn href="VK" icon={<FaVk />} />
            <SocialBtn href="TG" icon={<FaTelegramPlane />} />
            <SocialBtn href="YT" icon={<FaYoutube />} />
            <SocialBtn href="DS" icon={<FaDiscord />} />
          </div>
          <div className="text-center md:text-right">
            <span className="block text-[8px] font-black uppercase tracking-[0.5em] text-gray-800 italic mb-1">Developer</span>
            <a href="https://t.me/kannadec_dev" target="_blank" className="text-3xl font-[1000] italic uppercase hover:text-green-600 transition-all tracking-tighter">
              zenettany
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center text-[8px] font-black uppercase tracking-[0.4em] text-gray-800 italic">
        <span>© 2026 ATRIAN ONLINE</span>
        <span className="opacity-40">Разработано с помощью Next.js</span>
      </div>

      <style jsx>{`
        .nav-link {
          font-family: inherit;
          @apply text-gray-500 hover:text-white transition-all uppercase font-black italic text-[10px] tracking-widest;
        }
      `}</style>
    </footer>
  );
}
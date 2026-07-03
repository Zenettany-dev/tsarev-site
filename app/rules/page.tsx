"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiShield, FiUsers, FiStar, FiZap } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  { href: "/rules/project", title: "Проект", desc: "Общие правила сервера, DM, MG, наказания", icon: <FiZap />, color: "from-green-600" },
  { href: "/rules/admin", title: "Администрация", desc: "Обязанности, нормы и запреты для состава", icon: <FiShield />, color: "from-red-600" },
  { href: "/rules/crime", title: "Криминал", desc: "Правила банд, мафий и каптов", icon: <FiStar />, color: "from-orange-600" },
  { href: "/rules/leader", title: "Лидеры", desc: "Обязанности лидеров и заместителей", icon: <FiUsers />, color: "from-purple-600" },
];

export default function RulesHub() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050508] text-white pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[8rem] font-[1000] italic uppercase leading-none tracking-tighter"
          >
            БАЗА <span className="text-green-600">ЗНАНИЙ</span>
          </motion.h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.5em] mt-4 text-[10px]">Выбери интересующий раздел правил</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.href}>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/[0.02] border border-white/5 p-10 rounded-[40px] overflow-hidden transition-all hover:border-white/20"
              >
                <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${cat.color} to-transparent opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
                <div className="text-4xl text-green-600 mb-6">{cat.icon}</div>
                <h2 className="text-3xl font-[1000] italic uppercase mb-2 tracking-tight">{cat.title}</h2>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                  {cat.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
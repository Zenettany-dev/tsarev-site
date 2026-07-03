    "use client";
    import { motion } from "framer-motion";
    import { FiShoppingBag, FiBox, FiLayers, FiCheckCircle, FiClock } from "react-icons/fi";
    import { FaCar, FaCoins, FaGem } from "react-icons/fa"; 
    import Link from "next/link";
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default function DonatePage() {
    const categories = [
        { id: 'cars', name: 'Автомобили', icon: <FaCar />, href: '/donate/cars', active: true, desc: '150+ уникальных моделей' },
        { id: 'skins', name: 'Скины', icon: <FiShoppingBag />, href: '#', active: false, desc: 'Эксклюзивные образы' },
        { id: 'sets', name: 'Наборы', icon: <FiBox />, href: '#', active: false, desc: 'Готовые комплекты' },
        { id: 'coins', name: 'DCOINS', icon: <FaCoins />, href: '/donate/coins', active: true, desc: '1 ₽ = 10 DCOIN' },
        { id: 'other', name: 'Прочее', icon: <FiLayers />, href: '/donate/other', active: true, desc: 'Аксессуары и услуги' },
    ];

    return (
        <>
        <Header />
        <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050508]">
            <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <FaGem className="text-white text-4xl" />
                </div>
                <div>
                <h1 className="text-5xl font-[1000] italic uppercase tracking-tighter text-white leading-none">ДОНАТ ЦЕНТР</h1>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.4em] mt-2">Пополнение игрового счета</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat) => (
                <Link key={cat.id} href={cat.href} className={`p-8 rounded-[32px] border transition-all ${cat.active ? 'bg-white/[0.02] border-white/5 hover:border-blue-500' : 'opacity-40 pointer-events-none border-white/5'}`}>
                    <div className="text-3xl text-blue-500 mb-4">{cat.icon}</div>
                    <h3 className="text-xl font-[1000] italic uppercase text-white mb-2">{cat.name}</h3>
                    <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest">{cat.desc}</p>
                    <div className="mt-6">
                        <span className="text-[9px] font-black uppercase px-3 py-1 bg-white/5 rounded-full text-gray-400 italic">
                            {cat.active ? 'Доступно' : 'Скоро'}
                        </span>
                    </div>
                </Link>
                ))}
            </div>
            </div>
        </div>
        <Footer />
        </>
    );
    }
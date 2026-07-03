"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  const features = [
    {
      tag: "01",
      title: "Открытый мир России",
      desc: "Города, трассы, районы, инфраструктура, транспорт и узнаваемая атмосфера современной России.",
      className: "hover:border-green-500/50 hover:shadow-[0_0_50px_rgba(34,197,94,0.25)] hover:bg-green-950/10"
    },
    {
      tag: "02",
      title: "RP и развитие персонажа",
      desc: "Игрок сам выбирает путь: работа, бизнес, фракции, криминальная линия или спокойная гражданская жизнь.",
      className: "border-red-500/20 hover:border-red-500/60 hover:shadow-[0_0_50px_rgba(239,68,68,0.25)] hover:bg-red-950/10"
    },
    {
      tag: "03",
      title: "Социальная экономика",
      desc: "Сделки, имущество, прокачка, внутриигровая валюта, взаимодействие между игроками и живой рынок.",
      className: "hover:border-green-500/50 hover:shadow-[0_0_50px_rgba(34,197,94,0.25)] hover:bg-green-950/10"
    },
    {
      tag: "04",
      title: "Лаунчер, профиль и донат",
      desc: "Единый портал проекта: скачивание клиента, вход в аккаунт, личный кабинет и пополнение игрового баланса.",
      className: "border-green-500/20 hover:border-green-500/60 hover:shadow-[0_0_50px_rgba(34,197,94,0.3)] hover:bg-green-950/10"
    }
  ];

  // Локальные пути из папки public/img/
  const images = [
    "/img/hero-cover.jpg",
    "/img/fire-rescue-1.jpg",
    "/img/fire-rescue-2.jpg",
    "/img/chase-1.jpg"
  ];

  const doubleImages = [...images, ...images];

  return (
    <main className="min-h-screen bg-[#030305] text-white selection:bg-green-600 overflow-x-hidden relative">
      <Header />
      <Hero />

      {/* МОНИТОРИНГ С МАКСИМАЛЬНЫМ НЕОНОВЫМ ПОДВЕСОМ */}
      <section className="py-16 px-6 max-w-4xl mx-auto relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="relative p-[1px] bg-gradient-to-r from-green-500 via-green-600/40 to-transparent rounded-[30px] overflow-hidden group shadow-[0_0_60px_rgba(34,197,94,0.15)]">
          <div className="bg-[#050508] p-8 rounded-[29px] flex items-center justify-between border border-white/5 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(34,197,94,0.3)] group-hover:border-green-500/40">
            <div>
              <h4 className="text-2xl font-[1000] italic uppercase tracking-tighter text-white group-hover:text-green-400 transition-colors">ATRIAN ONLINE #1</h4>
              <div className="flex items-center gap-2 text-yellow-500 font-black uppercase text-[10px] mt-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(234,179,8,1)]" />
                Мониторинг временно отключен
              </div>
            </div>
            <div className="text-green-500/10 text-4xl font-[1000] italic tracking-tighter transition-all duration-500 group-hover:text-green-500/40 group-hover:scale-105 shadow-sm">
              0 / 100
            </div>
          </div>
        </div>
      </section>

      {/* О ПРОЕКТЕ С ГЛУБОКИМ КИСЛОТНЫМ СВЕЧЕНИЕМ ПОДЛОЖКИ */}
      <section className="py-32 px-6 border-b border-white/5 relative">
        <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-green-500/[0.07] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-red-500/[0.05] blur-[180px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl mb-20">
            <span className="text-green-400 font-black uppercase tracking-[0.4em] text-xs drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">О ПРОЕКТЕ</span>
            <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter mt-2 mb-6">ДЕТАЛИ ЭКОСИСТЕМЫ</h2>
            <p className="text-gray-300 font-bold uppercase tracking-wide text-sm md:text-base leading-relaxed italic">
              ATRIAN ONLINE — новый RP/MMO-проект в духе A#azing On#ine: современная Россия,
              открытый мир, социальная экономика, развитие персонажа, фракции, работы,
              бизнесы и живое взаимодействие между игроками.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((card, i) => (
              <div 
                key={i} 
                className={`bg-[#06060a] border border-white/5 p-10 rounded-[40px] transition-all duration-500 relative group overflow-hidden ${card.className}`}
              >
                <span className="absolute top-8 right-10 text-white/5 group-hover:text-white/20 font-black italic text-5xl transition-colors duration-500">{card.tag}</span>
                <h3 className="text-2xl font-[1000] italic uppercase tracking-tight text-white mb-4 group-hover:translate-x-1 transition-transform">{card.title}</h3>
                <p className="text-gray-500 font-bold uppercase text-xs tracking-wider leading-relaxed max-w-md">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ С НЕОНОВЫМ ФИЛЬТРОМ ПРИ НАВЕДЕНИИ */}
      <section className="py-24 border-b border-white/5 overflow-hidden bg-black/40 relative">
        <div className="absolute inset-0 bg-green-500/[0.02] blur-[100px] pointer-events-none" />
        <div className="flex overflow-hidden relative w-full">
          <motion.div 
            className="flex gap-6 whitespace-nowrap min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {doubleImages.map((src, i) => (
              <div key={i} className="w-[300px] md:w-[450px] h-[180px] md:h-[260px] relative rounded-[32px] overflow-hidden border border-white/5 flex-shrink-0 group transition-all duration-500 hover:border-green-500/50 hover:shadow-[0_0_50px_rgba(34,197,94,0.25)]">
                <img 
                  src={src} 
                  alt="Gallery" 
                  className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ С ЯРКИМ СВЕЧЕНИЕМ АКТИВНЫХ КАРТОЧЕК */}
      <section className="py-32 px-6 max-w-4xl mx-auto relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-green-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="text-center mb-20 relative z-10">
          <span className="text-green-400 font-black uppercase tracking-[0.4em] text-xs drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">FAQ / ПОМОЩЬ НОВИЧКАМ</span>
          <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter mt-2 mb-4">ЧАСТЫЕ ВОПРОСЫ</h2>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Быстрые ответы для тех, кто только начинает играть на ATRIAN ONLINE.</p>
        </div>

        <div className="space-y-4 mb-16 relative z-10">
          <details className="group bg-[#06060a] border border-white/5 rounded-[28px] p-6 transition-all duration-500 open:bg-green-950/5 open:border-green-500/40 open:shadow-[0_0_40px_rgba(34,197,94,0.15)]">
            <summary className="list-none flex items-center justify-between cursor-pointer text-lg font-[1000] italic uppercase tracking-tight select-none">
              Как начать играть?
              <FiChevronDown className="text-gray-500 group-open:rotate-180 group-open:text-green-400 transition-all duration-300" />
            </summary>
            <p className="text-gray-400 font-bold uppercase text-xs tracking-wider leading-relaxed mt-4 pt-4 border-t border-white/5">
              Зарегистрируйся на сайте, скачай лаунчер, войди в аккаунт и подключись к серверу ATRIAN #1.
            </p>
          </details>

          <details className="group bg-[#06060a] border border-white/5 rounded-[28px] p-6 transition-all duration-500 open:bg-green-950/5 open:border-green-500/40 open:shadow-[0_0_40px_rgba(34,197,94,0.15)]">
            <summary className="list-none flex items-center justify-between cursor-pointer text-lg font-[1000] italic uppercase tracking-tight select-none">
              Что делать, если игра не запускается?
              <FiChevronDown className="text-gray-500 group-open:rotate-180 group-open:text-green-400 transition-all duration-300" />
            </summary>
            <p className="text-gray-400 font-bold uppercase text-xs tracking-wider leading-relaxed mt-4 pt-4 border-t border-white/5">
              Проверь установку лаунчера, обнови драйверы, отключи конфликтующий софт и обратись в поддержку проекта.
            </p>
          </details>

          <details className="group bg-[#06060a] border border-white/5 rounded-[28px] p-6 transition-all duration-500 open:bg-green-950/5 open:border-green-500/40 open:shadow-[0_0_40px_rgba(34,197,94,0.15)]">
            <summary className="list-none flex items-center justify-between cursor-pointer text-lg font-[1000] italic uppercase tracking-tight select-none">
              Как пополнить баланс?
              <FiChevronDown className="text-gray-500 group-open:rotate-180 group-open:text-green-400 transition-all duration-300" />
            </summary>
            <p className="text-gray-400 font-bold uppercase text-xs tracking-wider leading-relaxed mt-4 pt-4 border-t border-white/5">
              Зайди в раздел доната, укажи RP-ник и выбери способ оплаты или отправь заявку администрации.
            </p>
          </details>
        </div>

        <div className="text-center relative z-10">
          <Link href="/faq" className="inline-block px-12 py-5 border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] rounded-xl text-xs font-[1000] italic uppercase tracking-widest transition-all duration-300 hover:bg-green-600/5">
            Открыть полный FAQ
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiStar, FiUsers, FiClock, FiAlertTriangle, 
  FiFileText, FiShield, FiChevronDown, FiZap, FiInfo 
} from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RulesSpoiler = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 bg-yellow-600/5 border border-yellow-600/20 rounded-2xl hover:bg-yellow-600/10 transition-all"
      >
        <span className="text-yellow-500 font-[1000] uppercase italic text-xs tracking-widest flex items-center gap-3">
          <FiInfo /> {title}
        </span>
        <FiChevronDown className={`text-yellow-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 text-gray-400 text-[11px] font-bold uppercase italic leading-loose bg-white/[0.01] border-x border-b border-white/5 rounded-b-2xl">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function LeaderRulesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050508] text-white pt-44 pb-20 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-yellow-600/5 blur-[180px] -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h1 className="text-6xl md:text-9xl font-[1000] italic uppercase leading-[0.8] tracking-tighter">
              LEADERS <br /> <span className="text-yellow-500">RULES</span>
            </h1>
            <p className="mt-8 text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] italic border-l-4 border-yellow-600 pl-4">
              ATRIAN ONLINE | Свод правил лидеров и заместителей
            </p>
          </div>

          <div className="space-y-24 text-[13px] font-bold uppercase tracking-tight italic leading-relaxed text-gray-300">
            
            <section>
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiClock className="text-yellow-500" /> 1. AFK И ANTI-AFK
              </h2>
              <div className="space-y-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px]">
                <p><span className="text-yellow-500">1.1</span> Использование Anti-AFK (скрипты, макросы). <br/> <span className="text-red-500">→ Выговор / Удаление из состава / Выговор лидеру проекта.</span></p>
                <p><span className="text-yellow-500">1.2</span> AFK более 20 минут без причины. <br/> <span className="text-red-500">→ Беседа → Выговор лидеру проекта.</span></p>
                <p><span className="text-yellow-500">1.3</span> Длительное AFK в публичных местах. <br/> <span className="text-red-500">→ Беседа + кик.</span></p>
                
                <RulesSpoiler title="ПОНЯТИЯ">
                  AFK — Away From Keyboard — отсутствие активности. <br/>
                  Anti-AFK — программные способы предотвращения ухода в AFK.
                </RulesSpoiler>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiAlertTriangle className="text-yellow-500" /> 2. НАРУШЕНИЯ ПРАВИЛ
              </h2>
              <div className="space-y-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px]">
                <p><span className="text-yellow-500">2.1</span> Массовый DM / DB. <span className="text-red-500 underline ml-2">→ 2 выговора до снятия + Бан.</span></p>
                <p><span className="text-yellow-500">2.3</span> Оскорбление родственников (любой чат). <span className="text-red-600 font-black ml-2">→ НЕМЕДЛЕННОЕ СНЯТИЕ.</span></p>
                <p><span className="text-yellow-500">2.4</span> Использование читов (основа / твинк). <span className="text-red-600 font-black ml-2">→ СНЯТИЕ + БАН.</span></p>
                
                <RulesSpoiler title="РАСШИФРОВКА НАКАЗАНИЙ">
                  Беседа — устное разъяснение. <br/>
                  Мут / Джайл — до 2 выговоров. <br/>
                  Варн — снятие или 2+ выговора. <br/>
                  Бан — снятие + блок.
                </RulesSpoiler>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[48px]">
                <h3 className="text-2xl font-[1000] italic uppercase mb-8 text-yellow-500 flex items-center gap-3"><FiFileText /> 3. ПРОВЕРКА ОТЧЕТОВ</h3>
                <div className="space-y-4 text-xs">
                  <p>Проверка только Лидером/Замом.</p>
                  <p>Срок проверки: <span className="text-white">24 ЧАСА.</span></p>
                  <p>Обязателен вердикт: <span className="text-green-500">ОДОБРЕНО</span> / <span className="text-red-500">ОТКАЗАНО</span>.</p>
                  <p className="text-red-500 italic">Наказание: беседа → выговор.</p>
                </div>
              </div>
              <div className="bg-yellow-600/10 border border-yellow-600/20 p-10 rounded-[48px]">
                <h3 className="text-2xl font-[1000] italic uppercase mb-8 text-yellow-500 flex items-center gap-3"><FiShield /> 4. ЗАПРЕТ НА БЛАТ</h3>
                <p className="text-xs mb-4">4.1 ЗАПРЕЩЕНО ЛЮБОЕ ПОКРОВИТЕЛЬСТВО И УСКОРЕННОЕ ПРОДВИЖЕНИЕ.</p>
                <p className="text-xs">4.2 ЗАПРЕЩЕНО ПОКРЫВАТЬ БЛАТ ДРУГИХ ЛИЦ.</p>
                <p className="mt-6 text-red-500 font-black">ИТОГ: СНЯТИЕ С ДОЛЖНОСТИ.</p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiClock className="text-yellow-500" /> 5-6. НОРМЫ И ГРАФИК
              </h2>
              <div className="space-y-8 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px]">
                <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-white/5 pb-8">
                  <div>
                    <p className="text-yellow-500 mb-2">5.1 МИНИМАЛЬНЫЙ ОНЛАЙН:</p>
                    <p className="text-3xl font-[1000] italic uppercase">3 ЧАСА / СУТКИ</p>
                  </div>
                  <div className="md:text-right text-xs">
                    <p className="text-yellow-500 mb-2">6.2 КРАЙНИЙ СРОК ОТЧЕТА:</p>
                    <p className="text-xl font-black italic">23:59 МСК (ПО ГРАФИКУ)</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                     <p className="text-white">ОБЯЗАТЕЛЬНО В ОТЧЕТЕ:</p>
                     <ul className="list-disc list-inside text-gray-500 text-[11px] space-y-2">
                       <li>3 СКРИНШОТА СОБЕСЕДОВАНИЙ</li>
                       <li>1 СКРИНШОТ /C 60 (ЛИЧНЫЙ ОНЛАЙН)</li>
                     </ul>
                   </div>
                   <div className="bg-red-600/5 p-6 rounded-3xl border border-red-600/20">
                     <p className="text-red-500 mb-2">7. ФОРУМ:</p>
                     <p className="text-[10px] leading-relaxed">ЗАПРЕЩЕНО НЕАДЕКВАТНОЕ ПОВЕДЕНИЕ И ОСКОРБЛЕНИЯ. <br/> НАКАЗАНИЕ: ОТ ВЫГОВОРА ДО СНЯТИЯ.</p>
                   </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiUsers className="text-yellow-500" /> ОБЯЗАННОСТИ ОРГАНИЗАЦИЙ
              </h2>
              <div className="grid md:grid-cols-2 gap-6 bg-yellow-600 p-1 md:p-1.5 rounded-[48px]">
                <div className="bg-[#050508] p-10 rounded-[44px] space-y-6">
                  <h3 className="text-xl font-black text-yellow-500 italic">ОСНОВНОЕ:</h3>
                  <ul className="text-[11px] space-y-4 text-gray-400">
                    <li className="flex gap-3"><FiZap className="text-yellow-500 shrink-0" /> МАКСИМАЛЬНЫЙ RP УРОВЕНЬ ФРАКЦИИ</li>
                    <li className="flex gap-3"><FiZap className="text-yellow-500 shrink-0" /> СРОК ЛИДЕРСТВА: 30 ДНЕЙ</li>
                    <li className="flex gap-3"><FiZap className="text-yellow-500 shrink-0" /> ЗАПОЛНЕНИЕ ФОРУМА ЗА 3 ДНЯ</li>
                    <li className="flex gap-3"><FiZap className="text-yellow-500 shrink-0" /> ДОБАВЛЕНИЕ 9-ОК В КУРИЛКУ ЗА 48Ч</li>
                  </ul>
                </div>
                <div className="bg-[#050508] p-10 rounded-[44px] space-y-6">
                  <h3 className="text-xl font-black text-red-600 italic">ЗАПРЕЩЕНО:</h3>
                  <ul className="text-[11px] space-y-4 text-gray-400">
                    <li className="flex gap-3 border-b border-white/5 pb-2">❌ СОЗДАВАТЬ ВНУТРИФРАКЦИОННУЮ КАЗНУ</li>
                    <li className="flex gap-3 border-b border-white/5 pb-2">❌ КАЧАТЬ ЗАРПЛАТУ (AFK NO ESC)</li>
                    <li className="flex gap-3 border-b border-white/5 pb-2">❌ РАСФОРМ БЕЗ ОДОБРЕНИЯ АДМИНА</li>
                    <li className="flex gap-3">❌ МЕРОПРИЯТИЯ БЕЗ ТРК "РИТМ"</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/[0.02] border border-white/5 p-12 rounded-[50px]">
              <h4 className="text-2xl font-[1000] italic uppercase mb-8 text-white">САНКЦИИ ПРИ УХОДЕ</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border-l-4 border-yellow-500 bg-yellow-500/5">
                  <p className="text-yellow-500 mb-2">УХОД ДО 15 ДНЕЙ:</p>
                  <p className="text-2xl font-black">БАН 30 ДНЕЙ</p>
                </div>
                <div className="p-6 border-l-4 border-white/20 bg-white/5">
                  <p className="text-gray-500 mb-2">УХОД ПОСЛЕ 15 ДНЕЙ:</p>
                  <p className="text-2xl font-black text-gray-300">БАН 14 ДНЕЙ</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
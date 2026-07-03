"use client";
import { motion } from "framer-motion";
import { 
  FiShield, FiAlertTriangle, FiTarget, 
  FiUsers, FiImage, FiVideo, FiInfo,
  FiZap, FiMapPin, FiActivity, FiBriefcase, FiLock
} from "react-icons/fi";
import { FaSkull, FaSackDollar, FaGun, FaHandshake } from "react-icons/fa6";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RuleCard = ({ title, desc, punishment }: { title: string, desc: string, punishment?: string }) => (
  <div className="group bg-white/[0.02] border border-white/5 p-6 rounded-[32px] hover:bg-white/[0.04] hover:border-green-500/30 transition-all duration-300">
    <div className="flex justify-between items-start mb-3 gap-4">
      <h3 className="text-white font-[1000] italic uppercase tracking-wider text-[12px] leading-tight">{title}</h3>
      {punishment && (
        <span className="px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-[9px] text-red-500 font-black uppercase italic whitespace-nowrap">
          {punishment}
        </span>
      )}
    </div>
    <p className="text-gray-500 text-[11px] font-bold uppercase leading-relaxed tracking-tight group-hover:text-gray-300 transition-colors">
      {desc}
    </p>
  </div>
);

export default function CrimeRulesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#020204] text-white pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-green-600/5 blur-[150px] -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="mb-20 border-l-4 border-green-600 pl-8">
            <h1 className="text-6xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-[0.8] mb-6">
              CRIME <span className="text-green-600">CODEX</span>
            </h1>
            <p className="text-gray-500 font-[1000] uppercase tracking-[0.4em] text-[10px] italic">
              ATRIAN ONLINE | ПОЛНЫЙ СВОД ПРАВИЛ НЕЛЕГАЛЬНЫХ ОРГАНИЗАЦИЙ
            </p>
          </div>

          <div className="space-y-24">
            
            <section id="general">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-green-600/10 rounded-3xl border border-green-600/20 text-green-600">
                  <FaSkull size={28} />
                </div>
                <div>
                  <h2 className="text-4xl font-[1000] italic uppercase leading-none">01. Базовые правила</h2>
                  <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest mt-2">Обязательно к прочтению всем участникам</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <RuleCard title="1.1 Видеофиксация" desc="Каждый участник обязан записывать захваты, терракты и похищения. Хранение — 48 часов." punishment="WARN / BAN" />
                <RuleCard title="1.2 DeathMatch (DM)" desc="Убийство без IC причины. Разрешено при защите территории или по заказу." punishment="JAIL 120" />
                <RuleCard title="1.3 PowerGaming (PG)" desc="Преувеличение возможностей (1 в 3, стрельба против спецназа в одиночку)." punishment="JAIL 60" />
                <RuleCard title="1.4 Revenge Kill (RK)" desc="Возвращение на место смерти или убийство игрока в ответ сразу после спавна." punishment="WARN" />
                <RuleCard title="1.5 Смена ника" desc="Члены банд обязаны иметь ник, соответствующий лору организации (нация/стиль)." punishment="УВОЛЬНЕНИЕ" />
                <RuleCard title="1.6 Слив склада" desc="Вынос ресурсов со склада банды без одобрения лидера/зама." punishment="BAN PERMANENT" />
              </div>
            </section>

            <section id="captures">
              <div className="flex items-center gap-4 mb-10 text-green-600">
                <div className="p-4 bg-green-600/10 rounded-3xl border border-green-600/20">
                  <FiTarget size={28} />
                </div>
                <div>
                  <h2 className="text-4xl font-[1000] italic uppercase leading-none text-white">02. Война за территории</h2>
                  <p className="text-[10px] text-green-600/60 uppercase font-black tracking-widest mt-2">Регламент каптов и стрел</p>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-[48px] p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-green-600 font-[1000] italic uppercase text-xs tracking-widest border-b border-green-600/20 pb-4">Технические ограничения:</p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="text-[11px] font-black italic uppercase text-gray-400">Пинг игрока</span>
                        <span className="text-white font-[1000]">MAX 180ms</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="text-[11px] font-black italic uppercase text-gray-400">FPS на записи</span>
                        <span className="text-white font-[1000]">MIN 30 FPS</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-3">
                        <span className="text-[11px] font-black italic uppercase text-gray-400">Кол-во участников</span>
                        <span className="text-white font-[1000]">5 VS 5 | 15 VS 15</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-red-500 font-[1000] italic uppercase text-xs tracking-widest border-b border-red-500/20 pb-4 text-right">Строго запрещено:</p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {['Слайды', '+C', 'Отводы', 'Хилл в бою', 'Маски', 'Труднодоступные крыши', 'Сбив анимаций', 'Абуз ТС'].map(pro => (
                        <span key={pro} className="px-4 py-2 bg-red-500/5 border border-red-500/10 rounded-xl text-[9px] font-black text-red-500 uppercase italic italic tracking-tight">{pro}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="robbery">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-green-600/10 rounded-3xl border border-green-600/20 text-green-600">
                  <FiBriefcase size={28} />
                </div>
                <div>
                  <h2 className="text-4xl font-[1000] italic uppercase leading-none">03. Громкие дела</h2>
                  <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest mt-2">Похищения, теракты, захваты зданий</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <RuleCard title="3.1 Состав группы" desc="Для похищения нужно 3+ участника в масках. Для теракта — 10+." punishment="JAIL 120" />
                <RuleCard title="3.2 Время проведения" desc="С 15:00 до 23:00 по МСК. Между терактами КД — 48 часов." punishment="ПРЕД ЛИДЕРУ" />
                <RuleCard title="3.3 Выкуп" desc="Максимальные суммы выкупа за гос. лиц прописаны в спец. таблице." punishment="WARN" />
                <RuleCard title="3.4 Условия в ЗЗ" desc="Любые криминальные действия в Зеленых Зонах запрещены (кроме спец. ивентов)." punishment="WARN" />
              </div>
            </section>

            <section id="diplo">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-green-600/10 rounded-3xl border border-green-600/20 text-green-600">
                  <FaHandshake size={28} />
                </div>
                <div>
                  <h2 className="text-4xl font-[1000] italic uppercase leading-none">04. Внешний вид и дипломатия</h2>
                  <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest mt-2">Отношения между бандами</p>
                </div>
              </div>
              <div className="bg-white/[0.01] border border-white/5 rounded-[40px] p-8">
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-4">
                      <h4 className="text-white font-[1000] italic uppercase text-sm border-l-2 border-green-600 pl-4 mb-4">Черный список скинов:</h4>
                      <p className="text-[10px] text-gray-500 font-black uppercase leading-relaxed">
                        Запрещены скины: <span className="text-white underline">Хасбик, Супер Сус, Литвин, Маленькие эльфы, Уэнздей, Аниме-тян и другие маленькие скины.</span> 
                        Использование данных скинов на каптах — <span className="text-red-500">от WARN до БАНА 7 ДНЕЙ.</span>
                      </p>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-white font-[1000] italic uppercase text-sm border-l-2 border-green-600 pl-4 mb-4">Объявление войны:</h4>
                      <p className="text-[10px] text-gray-500 font-black uppercase leading-relaxed text-right">
                        Война (WARR) считается активной только после IC встречи лидеров и забива в Discord/Сайт. 
                        Нападение без дипломатии — <span className="text-red-500 font-black">СТРОГИЙ ПРЕД ЛИДЕРУ.</span>
                      </p>
                   </div>
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="p-12 bg-green-600 rounded-[56px] text-black overflow-hidden relative">
                <FiZap className="absolute -right-10 -bottom-10 text-black/10 w-64 h-64" />
                <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase leading-none mb-6">Незнание <br/>не освобождает</h2>
                <p className="text-sm font-black uppercase italic leading-tight max-w-xl">
                  Администрация проекта TSAREV GAMES вправе выдать наказание на свое усмотрение, если ситуация выходит за рамки адекватного RP процесса.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
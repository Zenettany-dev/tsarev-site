"use client";
import { 
  FiShield, FiAlertOctagon, FiClock, FiFileText, 
  FiSend, FiZap, FiUserCheck, FiTarget, FiInfo 
} from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdminRulesFinal() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050508] text-white pt-44 pb-20 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-red-600/5 blur-[180px] -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h1 className="text-6xl md:text-9xl font-[1000] italic uppercase leading-[0.8] tracking-tighter">
              ADMIN <br /> <span className="text-red-600 text-shadow-glow-red">RULES</span>
            </h1>
            <p className="mt-8 text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] italic border-l-4 border-red-600 pl-4">
              ATRIAN ONLINE | РЕГЛАМЕНТ АДМИНИСТРАЦИИ
            </p>
          </div>

          <div className="space-y-24 text-[13px] font-bold uppercase tracking-tight italic leading-relaxed text-gray-300">
            
            <section id="section-1">
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiShield className="text-red-600" /> 1. ОБЯЗАННОСТИ И ПОЛОЖЕНИЯ
              </h2>
              <div className="space-y-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px]">
                <p><span className="text-red-600">1.1</span> В обязанности администратора входит: Помощь игрокам в рамках RP; Повышение комфорта; Контроль игрового процесса, экономики и баланса; Модерация жалоб, репортов, форума и Discord; Курирование фракций; Знание всех правил.</p>
                <p><span className="text-red-600">1.1.1</span> Запрещено занимать любые административные должности на других RP-проектах.</p>
                <p><span className="text-red-600">1.2</span> Обязательное разделение IC и OOC. Запрещено обсуждать IC-ситуации в /b, /pm, общем чате с целью влияния на них.</p>
                <p><span className="text-red-600">1.3</span> Руководство: ГА, ЗГА и руководство проекта.</p>
                <p><span className="text-red-600">1.4</span> Повышение: по решению ГА/ЗГА при учёте срока, отсутствия выговоров и активности.</p>
                <p><span className="text-red-600">1.5</span> Право на отпуск до 10 дней с одобрения руководства.</p>
                
                <div className="p-6 bg-red-600/5 border border-red-600/20 rounded-3xl my-8">
                  <p className="text-red-600 mb-4 font-black">1.6 СИСТЕМА ВЗЫСКАНИЙ:</p>
                  <ul className="space-y-2 text-gray-400">
                    <li>1.6.1 СТРОГИЙ ВЫГОВОР СНИМАЕТСЯ ТОЛЬКО ПО РЕШЕНИЮ ГА/ЗГА.</li>
                    <li>1.6.2 УСТНЫЙ ВЫГОВОР СНИМАЕТСЯ АВТОМАТИЧЕСКИ ЧЕРЕЗ 14 ДНЕЙ.</li>
                    <li>1.6.3 ДВА УСТНЫХ ВЫГОВОРА ПРИРАВНИВАЮТСЯ К ОДНОМУ СТРОГОМУ.</li>
                    <li>1.6.4 ТРИ СТРОГИХ ВЫГОВОРА — СНЯТИЕ С ПОСТА.</li>
                  </ul>
                </div>

                <p><span className="text-red-600">1.7</span> Соблюдение правил поведения в чатах (вежливость, отсутствие токсичности).</p>
                <p><span className="text-red-600">1.8</span> Запрещено использование нецензурной лексики в сторону игроков или коллег.</p>
                <p><span className="text-red-600">1.9</span> Обязательное присутствие на общих собраниях администрации.</p>
                <p><span className="text-red-600">1.10</span> Не может препятствовать легитимному RP-процессу.</p>
                <p><span className="text-red-600">1.10.1</span> Запрещено использовать команды (/fixcar, /hp, /slap и др.) для вмешательства в RP.</p>
                <p><span className="text-red-600">1.11</span> Запрещено создание помех игрокам без веской причины.</p>
                <p><span className="text-red-600">1.12</span> Обязан находиться в Discord/TeamSpeak во время работы.</p>
                <p><span className="text-red-600">1.13</span> Запрещено разглашение информации из админ-разделов/конф.</p>
                <p><span className="text-red-600">1.14</span> Выполнение нормы онлайна (рекомендуется +4 часа в сутки).</p>
                <p><span className="text-red-600">1.15</span> Запрещено удаление логов/сообщений без согласования.</p>
                <p><span className="text-red-600">1.16</span> Запрещено выдавать наказания по доказательствам из ЛС без фиксации в логах.</p>
                <p><span className="text-red-600">1.17</span> Обязан отвечать на жалобы на форуме в закреплённом разделе.</p>
                <p><span className="text-red-600">1.18</span> Хранение доказательств нарушений — минимум 3-ое суток.</p>
                <p><span className="text-red-600">1.19</span> Запрещено игнорирование просьб о помощи в /report.</p>
                <p><span className="text-red-600">1.20</span> Запрещено использование прав в личных целях (краш, выдача денег и т.д.).</p>
                <p><span className="text-red-600">1.25</span> Запрещено некорректное общение с руководством проекта.</p>
                <p><span className="text-red-600">1.27</span> Игра с твинка — только с разрешения ГА при стабильном онлайне админов.</p>
                <p><span className="text-red-600">1.28.1</span> Запрещено быть лидером/замом в гос. структурах.</p>
                <p><span className="text-red-600">1.31</span> AFK более 20 минут запрещено (накрутка PayDay).</p>
                <p><span className="text-red-600">1.32</span> Принятие репорта — в течение 3 минут. Игнор более 10 мин — строгий выговор.</p>
                <p><span className="text-red-600">1.33</span> Равное наказание для всех (друзей, медиа, сокланов). Блат запрещен.</p>
              </div>
            </section>

            <section id="section-2">
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiUserCheck className="text-red-600" /> 2. ИГРОВОЕ ИМУЩЕСТВО
              </h2>
              <div className="space-y-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px]">
                <p><span className="text-red-600">2.1</span> Администратор имеет право владеть домом, автомобилем, одеждой, полученными честным путём.</p>
                <p><span className="text-red-600">2.2</span> Запрещено владеть игровым бизнесом. (Исключение: тест или снятие неактива по ГА).</p>
                <p><span className="text-red-600">2.3</span> Запрещена перепродажа игровых ценностей.</p>
                <p><span className="text-red-600">2.4</span> Запрещено передавать доступ к авто/оружию, созданным через админ-команды.</p>
              </div>
            </section>

            <section id="section-3">
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiAlertOctagon className="text-red-600" /> 3. ДОПОЛНИТЕЛЬНЫЕ ПРАВИЛА
              </h2>
              <div className="space-y-8 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px]">
                <div className="p-6 border border-red-600/30 bg-red-600/5 rounded-2xl">
                  <p className="text-red-600 font-black">ЗАПРЕЩЕНО ПРИНИМАТЬ ЖАЛОБЫ В ЛИЧНЫЕ СООБЩЕНИЯ В СОЦ СЕТЯХ/ФОРУМА (Исключение: Чит). В остальных случаях - на форум. ЗАПРЕЩЕНО ВСЕМ ВНЕ ЗАВИСИМОСТИ ОТ ДОЛЖНОСТИ.</p>
                </div>
                <p><span className="text-red-600">3.2</span> Запрещено публично высмеивать игроков / ситуации сервера.</p>
                <p><span className="text-red-600">3.3</span> Обязателен вежливый и нейтральный тон общения (обращение на «Вы»).</p>
                <p><span className="text-red-600">3.5</span> Запрещено участвовать в RP ситуациях без разрешения ГА и в период с 10:00 до 22:00.</p>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[48px]">
                <h3 className="text-2xl font-[1000] italic uppercase mb-8 text-red-600 flex items-center gap-3"><FiClock /> НОРМА ОНЛАЙНА</h3>
                <ul className="space-y-4 text-[10px] font-black uppercase italic tracking-widest text-gray-400">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>1, 2, 3 УРОВЕНЬ</span> <span className="text-white">3 ЧАСА</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>4 УРОВЕНЬ (ГС/ЗГС)</span> <span className="text-white">4 ЧАСА</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>5-7 УРОВЕНЬ</span> <span className="text-white">4 ЧАСА</span></li>
                  <li className="flex justify-between"><span>8 УРОВЕНЬ</span> <span className="text-gray-600">НЕТ НОРМЫ</span></li>
                </ul>
              </div>

              <div className="bg-red-600 p-10 rounded-[48px] text-black">
                <h3 className="text-2xl font-[1000] italic uppercase mb-6 flex items-center gap-3"><FiSend /> ФОРМАТ ОТЧЕТА</h3>
                <div className="bg-black/10 p-6 rounded-2xl font-mono text-xs space-y-1 font-bold">
                  <p>1. Никнейм в игре:</p>
                  <p>2. Скриншот (нормы /time):</p>
                  <p>3. Дата выполнения:</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-red-900/20 to-transparent p-12 rounded-[50px] border border-white/5">
              <h4 className="text-2xl font-[1000] italic uppercase mb-6 flex items-center gap-3 text-red-600">
                <FiZap /> POST SCRIPTUM
              </h4>
              <div className="space-y-6 text-gray-400 text-xs font-black tracking-wide">
                <p>АДМИНИСТРАЦИЯ ПРЕЖДЕ ВСЕГО ДОЛЖНА РУКОВОДСТВОВАТЬСЯ <span className="text-white underline">ЗДРАВЫМ СМЫСЛОМ</span>.</p>
                <p>НЕ ДУШИТЕ ИГРОКА, ЕСЛИ ОН НЕ ПРИНЕС СЕРЬЕЗНОГО ВРЕДА. СОБЛЮДАЙТЕ КУЛЬТУРУ ОБЩЕНИЯ.</p>
                <div className="grid grid-cols-2 gap-4 text-red-500 italic uppercase">
                   <span>⚠ НЕ ЧИНИТЕ АВТО</span>
                   <span>⚠ НЕ ВЫДАВАЙТЕ HP</span>
                   <span>⚠ НЕ ВМЕШИВАЙТЕСЬ В RP</span>
                   <span>⚠ НЕ ИГНОРЬТЕ РЕПОРТ</span>
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
"use client";
import { 
  FiShield, FiMessageSquare, FiAlertTriangle, FiTarget, 
  FiZap, FiUserCheck, FiInfo, FiTruck, FiAlertOctagon 
} from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FullProjectRules() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050508] text-white pt-44 pb-20 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-green-600/5 blur-[180px] -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h1 className="text-6xl md:text-9xl font-[1000] italic uppercase leading-[0.8] tracking-tighter">
              RULES <br /> <span className="text-green-600 text-shadow-glow">PROJECT</span>
            </h1>
            <p className="mt-8 text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] italic border-l-4 border-green-600 pl-4">
              ATRIAN ONLINE | Свод правил проекта
            </p>
          </div>

          <div className="space-y-24 text-[13px] font-bold uppercase tracking-tight italic leading-relaxed text-gray-300">
            
            <section id="section-1">
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiUserCheck className="text-green-600" /> 1. АККАУНТЫ И ИГРОВЫЕ ЦЕННОСТИ
              </h2>
              <div className="space-y-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px]">
                <p><span className="text-green-600">1.1</span> Создание аккаунтов с целью обхода наказания (твинки). <br/> <span className="text-red-500">→ Наказание: блокировка всех связанных аккаунтов.</span></p>
                <p><span className="text-green-600">1.2</span> Использование нескольких аккаунтов для получения преимущества (передача имущества, прокачка, обход ограничений). <br/> <span className="text-red-500">→ Наказание: блокировка аккаунтов до 30 дней или навсегда.</span></p>
                <p><span className="text-green-600">1.3</span> Передача аккаунта третьим лицам / игра на переданном или купленном аккаунте. <br/> <span className="text-red-500">→ Наказание: блокировка аккаунтов навсегда, на других серверах — до 30 дней.</span></p>
                <p><span className="text-green-600">1.4</span> Создание аккаунтов со схожими никнеймами с целью обхода наказания или получения выгоды. <br/> <span className="text-red-500">→ Наказание: блокировка аккаунта навсегда.</span></p>
                <p><span className="text-green-600">1.5</span> Никнеймы с нецензурной лексикой, оскорблениями, вульгарностью, вымышленными именами или схожие с именами администрации/публичных личностей. <br/> <span className="text-red-500">→ Наказание: от кика до блокировки аккаунта навсегда.</span></p>
                <p><span className="text-green-600">1.6</span> Продажа/передача аккаунта третьим лицам за внутриигровую или внеигровую валюту. <br/> <span className="text-red-500">→ Наказание: блокировка аккаунта навсегда.</span></p>
                <p><span className="text-green-600">1.7</span> Продажа/попытка продажи виртуальных ценностей за внеигровую валюту или имущество. <br/> <span className="text-red-500">→ Наказание: блокировка всех игровых аккаунтов навсегда с запретом на игру.</span></p>
                <p><span className="text-green-600">1.8</span> Покупка/попытка покупки виртуальных ценностей вне официального сайта проекта. <br/> <span className="text-red-500">→ Наказание: блокировка аккаунта от 30 дней до перманентной блокировки.</span></p>
                <p><span className="text-green-600">1.9</span> Любые сделки с игровой валютой, имуществом или услугами вне официальных источников проекта. <br/> <span className="text-red-500">→ Наказание: перманентная блокировка аккаунта.</span></p>
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-orange-500">
                  <FiAlertTriangle className="flex-shrink-0" />
                  <p className="text-[10px]">Администрация не несёт ответственности за утерю аккаунта при его передаче третьим лицам.</p>
                </div>
              </div>
            </section>

            <section id="section-2">
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiShield className="text-green-600" /> 2. ОБЩИЕ ПРАВИЛА ПРОЕКТА TSAREV GAMES
              </h2>
              <div className="space-y-8 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px]">
                <p><span className="text-green-600">2.1</span> При выборе наказания администрация вправе учитывать уровень основного аккаунта, а не того, с которого было совершено нарушение.</p>
                <p><span className="text-green-600">2.2</span> Игрокам до 5 уровня (включительно), не состоящим в банде/фракции, наказания сокращаются вдвое (по сроку и типу).</p>
                <p><span className="text-green-600">2.3</span> Систематические нарушения одного и того же правила за короткий срок могут привести к удвоению наказания. <br/> <span className="text-gray-500 italic text-[11px]">Пример: DM 60 минут → повторное нарушение 120 минут.</span></p>
                <p><span className="text-green-600">2.4</span> Наказания за разные нарушения суммируются. <br/> <span className="text-gray-500 italic text-[11px]">Пример: DM + таран = деморган + warn.</span></p>
                <p><span className="text-green-600">2.5</span> Главный администратор вправе применять индивидуальные наказания и выдавать санкции на основной аккаунт.</p>
                <p><span className="text-green-600">2.6</span> Подача жалобы с целью уклонения от наказания (если нарушение очевидно) может повлечь дополнительное наказание.</p>
                <div className="p-6 bg-white/[0.03] rounded-3xl border border-green-600/20">
                  <p className="text-green-600 mb-4">2.7 При нападении без причины разрешается:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Открыть ответный огонь (даже в зелёной зоне)</li>
                    <li>Покинуть игру</li>
                    <li>Использовать средства самолечения</li>
                  </ul>
                  <p className="mt-4 text-[10px] text-gray-500 underline">Рекомендуется иметь доказательства.</p>
                </div>

                <div className="space-y-6 pt-10">
                  <h3 className="text-2xl font-black italic text-red-600 uppercase flex items-center gap-2 underline">СТРОГО ЗАПРЕЩЕНО</h3>
                  <p><span className="text-green-600">2.8</span> Выдача себя за администратора. <span className="text-red-500">→ От мут 360 минут до блокировки навсегда.</span></p>
                  <p><span className="text-green-600">2.9</span> Распространение личной информации игроков. <span className="text-red-500">→ От мут 360 минут до перманентной блокировки.</span></p>
                  <p><span className="text-green-600">2.10</span> Срыв стримов/видео проекта (стримснайпинг и т.п.). <span className="text-red-500">→ Блокировка от 10 дней.</span></p>
                  <p><span className="text-green-600">2.11</span> Нецензурные/запрещённые названия семьи, банды, киоска, номеров. <span className="text-red-500">→ От предупреждения до удаления/конфискации.</span></p>
                  <p><span className="text-green-600">2.12</span> Замены скинов/транспорта, дающие преимущество. <span className="text-red-500">→ От warn до блокировки 30 дней.</span> <br/> <span className="text-gray-500">На войнах любые замены запрещены.</span></p>
                  <p><span className="text-green-600">2.13</span> Одновременное нахождение в гос. и крим. структурах с разных аккаунтов. <span className="text-red-500">→ ЧС организации или блокировка до 7 дней.</span></p>
                  <p><span className="text-green-600">2.14</span> Ложная жалоба на сотрудника МВД/ФСБ. <span className="text-red-500">→ Деморган 120 минут.</span></p>
                  <p><span className="text-green-600">2.15</span> Сговор в ивентовых мини-играх. <span className="text-red-500">→ Деморган 120 минут.</span></p>
                  <p><span className="text-green-600">2.16</span> Использование багов/обходов сервера (+C, сбив анимаций и т.п.). <span className="text-red-500">→ От деморгана 120 минут до перманентной блокировки.</span></p>
                  <p><span className="text-green-600">2.17</span> Обман игроков/администрации на имущество или валюту. <span className="text-red-500">→ От 30 дней до навсегда.</span></p>
                  <p><span className="text-green-600">2.18</span> Читы, скрипты, стороннее ПО, связь с читерами. <span className="text-red-500">→ Перманентная блокировка всех аккаунтов.</span></p>
                  <p><span className="text-green-600">2.21</span> Использование VPN для обхода наказания. <span className="text-red-500">→ Перманентная блокировка.</span></p>
                  <p><span className="text-green-600">2.23</span> Удаление доказательств после рассмотрения жалобы (7 дней). <span className="text-red-500">→ Блокировка форумного или игрового до 7 дней.</span></p>
                  <p><span className="text-green-600">2.25</span> Обман администрации на имущество. <span className="text-red-500">→ От 30 дней до навсегда.</span></p>
                </div>
                <p className="text-center text-gray-500 text-[10px] pt-10">⚠ НЕЗНАНИЕ ПРАВИЛ НЕ ОСВОБОЖДАЕТ ОТ ОТВЕТСТВЕННОСТИ.</p>
              </div>
            </section>

            <section id="section-3">
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiMessageSquare className="text-green-600" /> 3. ПРАВИЛА ИГРОВЫХ ЧАТОВ
              </h2>
              <div className="grid md:grid-cols-2 gap-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px]">
                <div className="space-y-4">
                  <p><span className="text-green-600 text-xs">3.1</span> Оскорбление в репорт. <span className="text-red-500">→ 120–360 мин блок.</span></p>
                  <p><span className="text-green-600 text-xs">3.2</span> Мат/капс/флуд в репорт. <span className="text-red-500">→ 30–120 мин блок.</span></p>
                  <p><span className="text-green-600 text-xs">3.5</span> Оскорбления/капс в OOC. <span className="text-red-500">→ 60–120 мин блок.</span></p>
                  <p><span className="text-green-600 text-xs">3.10</span> Оскорбление администрации. <span className="text-red-500">→ от 120 мин блок.</span></p>
                </div>
                <div className="space-y-4">
                  <p><span className="text-green-600 text-xs">3.12</span> Оскорбление родных / проекта. <span className="text-red-500">→ блок 6–96 часов.</span></p>
                  <p><span className="text-green-600 text-xs">3.14</span> Национализм/Расизм. <span className="text-red-500">→ бан до 15 дней.</span></p>
                  <p><span className="text-green-600 text-xs">3.17</span> Политразжиг. <span className="text-red-500">→ бан от 5 дней.</span></p>
                  <p><span className="text-green-600 text-xs">3.18</span> Реклама сторонних ресурсов. <span className="text-red-500">→ от 30 дней до перманента.</span></p>
                </div>
                <div className="col-span-full mt-6 p-6 bg-white/[0.03] rounded-3xl border border-white/10">
                   <p className="text-green-600 mb-2">3.7 Использование OOC-информации в голосовом или IC-чатах.</p>
                   <p className="text-gray-400">→ Блокировка чата 60 минут (для 20+ уровня — 120 минут).</p>
                   <ul className="mt-4 space-y-1 text-[11px] text-gray-500 italic">
                     <li>• Отыгровки в ГЧ не считаются OOC.</li>
                     <li>• OOC в ГЧ допустимо в группе до 3-х чел при согласии всех.</li>
                   </ul>
                </div>
                <div className="col-span-full p-4 border border-green-600/30 rounded-2xl">
                   <p className="text-[11px]"><span className="text-green-600">3.19</span> Обсуждение в OOC игровых ситуаций и использование этой инфы в IC. <span className="text-red-500">→ Блок 30–60 минут.</span> <span className="text-gray-600 ml-2">(Действует с 11.02.2026)</span></p>
                </div>
              </div>
            </section>

            <section id="section-4">
              <h2 className="text-4xl font-[1000] italic uppercase mb-10 text-white flex items-center gap-4">
                <FiTarget className="text-green-600" /> 4. ИГРОВЫЕ НАРУШЕНИЯ (RP-ПРОЦЕСС)
              </h2>
              
              <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px] space-y-12">
                
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-black mb-4">4.1 DM (DEATHMATCH)</h3>
                  <p className="text-gray-400 mb-4 text-xs uppercase tracking-wider">Убийство / урон без веской IC-причины. <span className="text-red-500">→ Деморган 30–120 мин.</span></p>
                  <ul className="space-y-2 text-gray-500 text-[11px]">
                    <li>• На системных работах: <span className="text-white">60-180 мин.</span></li>
                    <li>• Массовый (4+ игрока): <span className="text-white">Warn / бан до 7 дней.</span></li>
                    <li>• На ивентах: <span className="text-white">30-180 мин / бан до 5 дней.</span></li>
                    <li>• Провокация: <span className="text-white">10 мин.</span> <span className="underline italic text-red-400">(Оскорбление не повод для убийства!)</span></li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-black mb-4">4.2 NRD (NONRP DRIVE)</h3>
                  <div className="space-y-4">
                    <p>Объезд светофора <span className="text-red-500">→ 15 мин.</span></p>
                    <p>Встречка (10+ сек) <span className="text-red-500">→ 30–60 мин.</span></p>
                    <p>Намеренный таран <span className="text-red-500">→ WARN.</span></p>
                    <p>Езда по полям <span className="text-red-500">→ 30 мин.</span> <span className="text-gray-600">(До 3 уровня — пред).</span></p>
                  </div>
                  
                  <div className="mt-8 p-6 bg-green-600/5 border border-green-600/20 rounded-[32px]">
                    <p className="text-green-600 mb-6 flex items-center gap-2"><FiTruck /> РАЗРЕШЕНО ЕПП НА СЛЕДУЮЩЕМ ТРАНСПОРТЕ:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-[8px] font-black italic text-gray-400">
                      <span>Bandos [ID: 568]</span>
                      <span>Sherp [ID: 15239]</span>
                      <span>Ford HotRod [ID: 15295]</span>
                      <span>Mercedes P900 [ID: 15297]</span>
                      <span>Bentley UltraTank [ID: 15616]</span>
                      <span>GAZ 52 Тайга [ID: 15612]</span>
                      <span>UAZ Концепт [ID: 15635]</span>
                      <span>LC 300 Safari [ID: 15632]</span>
                      <span>БРДМ [ID: 444]</span>
                      <span>Brabus Crawler [ID: 556]</span>
                      <span>Huracan Sterrato [ID: 15660]</span>
                      <span>BMW XM OR [ID: 15667]</span>
                      <span>GMC Hummer EV [ID: 15647]</span>
                      <span>ZIL 131 [ID: 15681]</span>
                      <span>Porsche Marsien [ID: 15688]</span>
                      <span>Mercedes G-EVO [ID: 17445]</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-white/5">
                  <div className="space-y-6">
                    <p><span className="text-green-600">4.3 NRP:</span> Выкидывание из авто (30м), Казино (30-60м), В/Ч колючка (60-120м).</p>
                    <p><span className="text-green-600">4.4 TK:</span> Урон своим. <span className="text-red-500">→ 60 мин / WARN.</span></p>
                    <p><span className="text-green-600">4.5-4.6 RK:</span> Месть / Возврат на место смерти. <span className="text-red-500">→ 60 мин.</span></p>
                    <p><span className="text-green-600">4.8 DB:</span> Урон с авто. <span className="text-red-500">→ 60 мин.</span> <span className="text-orange-500">(В ЗЗ — WARN)</span></p>
                  </div>
                  <div className="space-y-6">
                    <p><span className="text-green-600">4.9 PG:</span> Нет страха за жизнь (1 vs 3). <span className="text-red-500">→ 60 мин.</span></p>
                    <p><span className="text-green-600">4.10 Уход от RP:</span> Офф при смерти / Вода от погони. <span className="text-red-500">→ 15 мин / WARN.</span></p>
                    <p><span className="text-green-600">4.12 Своя пользу:</span> Игнор RP-отыгровок. <span className="text-red-500">→ 60 мин.</span></p>
                    <p><span className="text-green-600">4.13 SK:</span> Спавн-килл. <span className="text-red-500">→ WARN.</span> <span className="text-gray-500">(Доступно через 5 сек после спавна)</span></p>
                    <p><span className="text-green-600">4.14 Текст-RP:</span> Обязательно при выкл ГЧ. <span className="text-red-500">→ 60 мин блок ГЧ.</span></p>
                  </div>
                </div>

              </div>
            </section>

            <section className="bg-gradient-to-r from-green-900/20 to-transparent p-12 rounded-[50px] border border-white/5">
              <h4 className="text-2xl font-[1000] italic uppercase mb-6 flex items-center gap-3 text-green-600">
                <FiZap /> POST SCRIPTUM
              </h4>
              <div className="space-y-6 text-gray-400 text-xs font-black tracking-wide">
                <p>АДМИНИСТРАЦИЯ ПРЕЖДЕ ВСЕГО ДОЛЖНА РУКОВОДСТВОВАТЬСЯ <span className="text-white underline">ЗДРАВЫМ СМЫСЛОМ</span>.</p>
                <p>ПРИМЕР: НОВЫЙ ИГРОК С НИКОМ “NIKITA_STRIX”. АДМИН НЕ ДОЛЖЕН СРАЗУ ЖЕ БАНИТЬ, А ОБЪЯСНИТЬ, ЧТО ЭТО ЗАПРЕЩЕНО. НЕ ДУШИТЕ ИГРОКА, ЕСЛИ ОН НЕ ПРИНЕС СЕРЬЕЗНОГО ВРЕДА.</p>
                <p className="text-white italic">СОБЛЮДАЙТЕ КУЛЬТУРУ ОБЩЕНИЯ. ПРИЯТНОЙ ИГРЫ!</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
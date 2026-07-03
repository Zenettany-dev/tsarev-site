"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiSearch, FiHelpCircle, FiBookOpen, FiCpu, FiCreditCard } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "Все вопросы", icon: <FiHelpCircle /> },
    { id: "start", name: "Начало игры", icon: <FiBookOpen /> },
    { id: "tech", name: "Технические проблемы", icon: <FiCpu /> },
    { id: "donate", name: "Донат и аккаунт", icon: <FiCreditCard /> },
  ];

  const faqData = [
    {
      category: "start",
      question: "Как начать играть на проекте?",
      answer: "Всё просто: перейди в раздел «Начать играть» на главной странице, скачай наш фирменный лаунчер, зарегистрируй аккаунт, дождись окончания загрузки игровых файлов и нажимай кнопку PLAY."
    },
    {
      category: "start",
      question: "Каковы системные требования?",
      answer: "Для комфортной игры в 60 FPS вам потребуется: Windows 10/11 (64-bit), процессор уровня Intel Core i5/AMD Ryzen 5, 8 ГБ оперативной памяти и видеокарта уровня GTX 1050 Ti или выше. Наличие SSD крайне рекомендуется."
    },
    {
      category: "tech",
      question: "Лаунчер выдает ошибку при запуске или скачивании, что делать?",
      answer: "Попробуйте запустить лаунчер от имени администратора. Если не помогло, временно отключите антивирус/Защитник Windows (они могут блокировать файлы модификации) или выполните «Проверку файлов» в настройках самого лаунчера."
    },
    {
      category: "tech",
      question: "Что делать, если крашит игру при заходе на сервер?",
      answer: "Чаще всего краши происходят из-за устаревших драйверов видеокарты или отсутствия необходимых библиотек. Обновите драйверы до актуальной версии и установите пакеты DirectX и Visual C++ (все нужные ссылки есть в настройках лаунчера)."
    },
    {
      category: "donate",
      question: "Я оплатил донат, но валюта не пришла. Что делать?",
      answer: "Обычно зачисления происходят моментально, но в редких случаях платежные шлюзы могут обрабатывать транзакцию до 15-30 минут. Если время прошло, а баланс пуст — сделайте скриншот чека и напишите в технический раздел нашего форума."
    },
    {
      category: "donate",
      question: "Как восстановить доступ к аккаунту?",
      answer: "Если вы забыли пароль или потеряли доступ к почте, воспользуйтесь формой восстановления в личном кабинете на сайте. Если почта не была привязана, вам необходимо обратиться в специальный раздел поддержки на форуме, предоставив регистрационные данные."
    }
  ];

  const filteredFaq = faqData.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#030305] text-white selection:bg-green-600 overflow-x-hidden relative pt-32">
      <Header />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/[0.06] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-red-500/[0.02] blur-[180px] rounded-full pointer-events-none" />

      <section className="max-w-4xl mx-auto px-6 relative z-10 mb-24">
        <div className="text-center mb-16">
          <span className="text-green-400 font-black uppercase tracking-[0.4em] text-xs drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">БАЗА ЗНАНИЙ</span>
          <h1 className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter mt-3 mb-6">БАЗА FAQ / ПОМОЩЬ</h1>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-widest max-w-xl mx-auto leading-relaxed">
            Найди ответы на любые технические и игровые вопросы. Если твоей проблемы нет в списке — загляни на наш форум.
          </p>
        </div>

        <div className="relative mb-12 group">
          <div className="absolute inset-0 bg-green-500/5 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
          <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-green-500 transition-colors" size={20} />
          <input
            type="text"
            placeholder="ПОИСК ПО ВОПРОСАМ (НАПРИМЕР: КРАШ, ДОНАТ, ЛАУНЧЕР)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(null);
            }}
            className="w-full bg-[#06060a] border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-xs font-black uppercase tracking-widest text-white placeholder-gray-600 outline-none focus:border-green-500/40 focus:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition-all duration-300"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider border relative overflow-hidden transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-green-600 border-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                  : "bg-[#06060a] border-white/5 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div layout className="space-y-4 min-h-[300px]">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  layout
                  key={index}
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`border rounded-[28px] p-6 cursor-pointer relative overflow-hidden transition-all duration-500 ${
                    isOpen 
                      ? "bg-green-950/[0.12] border-green-500/50 shadow-[0_0_50px_rgba(34,197,94,0.2)]" 
                      : "bg-[#06060a] border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]"
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -inset-24 bg-green-500/[0.03] blur-2xl rounded-full pointer-events-none"
                    />
                  )}

                  <div className="w-full flex items-center justify-between text-left select-none relative z-10">
                    <span className={`text-base md:text-lg font-[1000] italic uppercase tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "text-white"
                    }`}>
                      {faq.question}
                    </span>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? "#4ade80" : "#6b7280" }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <FiChevronDown size={22} />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        className="overflow-hidden relative z-10"
                      >
                        <motion.div 
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 10, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="text-gray-400 font-bold uppercase text-xs tracking-wider leading-relaxed pt-5 mt-4 border-t border-white/5"
                        >
                          {faq.answer}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              layout
              className="text-center py-16 border border-dashed border-white/5 rounded-[28px] bg-white/[0.01]"
            >
              <p className="text-gray-500 font-black uppercase text-xs tracking-widest">Ничего не найдено по вашему запросу</p>
            </motion.div>
          )}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
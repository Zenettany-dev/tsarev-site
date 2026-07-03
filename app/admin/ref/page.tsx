"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPortal() {
  const [pass, setPass] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(false);
  const [refs, setRefs] = useState<any[]>([]);
  const [form, setForm] = useState({ nickname: "", filename: "" });
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  
  const [toast, setToast] = useState<{msg: string, type: 'error' | 'success'} | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [formError, setFormError] = useState(false);

  const showToast = (msg: string, type: 'error' | 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    const session = localStorage.getItem("tsarev_v4_session");
    if (session) {
      const { expiry } = JSON.parse(session);
      if (new Date().getTime() < expiry) setIsAuth(true);
    }
  }, []);

  const load = async () => {
    try {
      const res = await fetch('/api/get-refs');
      const data = await res.json();
      const list = data.refs || (Array.isArray(data) ? data : []);
      const formatted = list.map((r: any) => ({
        name: r.nickname || r.name || "Unknown",
        url: r.url || `${window.location.hostname}/ref/${r.filename}`,
        date: r.date || new Date().toISOString()
      }));
      setRefs(formatted);
    } catch (e) { console.error("Load fail"); }
  };

  useEffect(() => { if (isAuth) load(); }, [isAuth]);

  const handleLogin = async () => {
    setAuthLoading(true);
    if (pass === "123") {
      const expiry = new Date().getTime() + 10 * 60 * 60 * 1000;
      localStorage.setItem("tsarev_v4_session", JSON.stringify({ expiry }));
      setIsAuth(true);
    } else {
      setError(true);
      setPass("");
      showToast("Доступ запрещен", "error");
      setTimeout(() => setError(false), 500);
    }
    setAuthLoading(false);
  };

  const handleCreate = async () => {
    if (!form.nickname || !form.filename) {
      setFormError(true);
      showToast("Заполните все поля", "error");
      setTimeout(() => setFormError(false), 500);
      return;
    }
    setLoading(true);
    try {
      const host = window.location.hostname === "localhost" ? "tsarevgames.site" : window.location.hostname;
      const res = await fetch('/api/create-ref', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, domain: host }) 
      });
      if (res.ok) {
        setForm({ nickname: "", filename: "" });
        showToast("Рефка создана", "success");
        await load();
      }
    } catch (e) { showToast("Ошибка сервера", "error"); }
    setLoading(false);
  };

  const confirmDeleteAction = async () => {
    const nick = confirmDelete;
    setConfirmDelete(null);
    try {
      const res = await fetch('/api/delete-ref', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname: nick })
      });
      if (res.ok) {
        setRefs(prev => prev.filter(r => r.name !== nick));
        showToast("Удалено успешно", "success");
      } else { showToast("Ошибка удаления", "error"); }
    } catch (e) { showToast("Ошибка соединения", "error"); }
  };

  if (!isAuth) return (
    <div className="fixed inset-0 flex items-center justify-center p-6 bg-[#020202]">
      <motion.div animate={error ? { x: [-10, 10, -10, 10, 0] } : {}} className="w-full max-w-[400px]">
         <div className="bg-[#080808] rounded-[40px] p-12 border border-white/5 text-center shadow-2xl font-sans italic">
            <h2 className="text-3xl font-[1000] uppercase italic mb-10 tracking-tighter">Admin<span className="text-blue-600">.</span>Access</h2>
            <input type="password" value={pass} onKeyDown={e => e.key === 'Enter' && handleLogin()} onChange={e => setPass(e.target.value)} className="w-full bg-black border border-white/5 p-7 rounded-[25px] text-center text-xl font-bold outline-none focus:border-blue-600 text-white transition-all mb-6 tracking-[0.4em]" placeholder="••••" />
            <button onClick={handleLogin} disabled={authLoading} className="w-full h-20 bg-blue-600 text-white rounded-[25px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">{authLoading ? "..." : "Войти"}</button>
         </div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020202] text-white p-8 lg:p-24 font-sans italic selection:bg-blue-600">
      <AnimatePresence>{toast && <Toast msg={toast.msg} type={toast.type} />}</AnimatePresence>
      <AnimatePresence>{confirmDelete && <DeleteModal name={confirmDelete} onCancel={() => setConfirmDelete(null)} onConfirm={confirmDeleteAction} />}</AnimatePresence>

      <div className="max-w-[1500px] mx-auto">
        <header className="flex justify-between items-end mb-32">
          <div>
            <h1 className="text-[100px] font-[1000] uppercase italic tracking-tighter leading-[0.8] mb-6">REF<br/><span className="text-blue-600">PANEL</span></h1>
            <span className="px-6 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Admin panel</span>
          </div>
          <button onClick={() => {localStorage.removeItem("tsarev_v4_session"); setIsAuth(false)}} className="px-10 py-5 bg-white/5 border border-white/10 rounded-[20px] text-[10px] font-black uppercase tracking-widest hover:bg-red-600/20 hover:text-red-500 transition-all">Logout</button>
        </header>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <motion.div animate={formError ? { x: [-10, 10, -10, 10, 0] } : {}} className="bg-[#080808] border border-white/5 p-12 rounded-[50px] sticky top-10 shadow-2xl">
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-black uppercase text-blue-500 tracking-[0.3em] mb-4 block italic">Ник игрока</label>
                  <input value={form.nickname} onChange={e => setForm({...form, nickname: e.target.value})} className="w-full bg-black border border-white/5 p-7 rounded-[25px] outline-none focus:border-blue-600 transition-all font-black uppercase italic text-xl" placeholder="Nickname" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-blue-500 tracking-[0.3em] mb-4 block italic">Папка проекта</label>
                  <input value={form.filename} onChange={e => setForm({...form, filename: e.target.value})} className="w-full bg-black border border-white/5 p-7 rounded-[25px] outline-none focus:border-blue-600 transition-all font-black uppercase italic text-xl" placeholder="Folder_Name" />
                </div>
                <button onClick={handleCreate} disabled={loading} className="w-full bg-white text-black py-8 rounded-[30px] font-[1000] text-2xl uppercase italic hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                  {loading ? "..." : "Создать"}
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6">
              <AnimatePresence mode="popLayout">
                {refs.map((r) => (
                  <motion.div key={r.name} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }} className="group bg-[#080808] border border-white/5 p-8 rounded-[40px] flex items-center justify-between hover:border-blue-600/30 transition-all duration-500">
                    <div>
                      <h4 className="text-2xl font-[1000] uppercase italic mb-2 tracking-tighter group-hover:text-blue-600 transition-all">{r.name}</h4>
                      <div className="flex gap-4 opacity-30 text-[10px] font-black uppercase tracking-widest italic">
                        <span className="text-blue-500 opacity-100">{r.url}</span>
                        <span>{new Date(r.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setConfirmDelete(r.name)} className="w-14 h-14 bg-red-600/10 text-red-500 rounded-2xl flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                      </button>
                      <a href={`https://${r.url}`} target="_blank" className="px-8 bg-white text-black rounded-2xl flex items-center font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-lg">Open</a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Toast = ({ msg, type }: any) => (
  <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.5 }} className="fixed top-10 right-10 z-[500] px-10 py-6 rounded-[25px] border backdrop-blur-xl shadow-2xl bg-[#080808]/80 border-white/10">
    <div className="flex items-center gap-4">
      <div className={`w-2 h-2 rounded-full animate-pulse ${type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`} />
      <span className={`font-black uppercase tracking-widest text-[11px] ${type === 'error' ? 'text-red-500' : 'text-blue-400'}`}>{msg}</span>
    </div>
  </motion.div>
);

const DeleteModal = ({ name, onCancel, onConfirm }: any) => (
  <div className="fixed inset-0 z-[600] flex items-center justify-center p-6 backdrop-blur-md bg-black/60">
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-[#080808] border border-white/10 p-12 rounded-[50px] max-w-[500px] w-full text-center shadow-[0_0_100px_rgba(0,0,0,1)] text-white">
      <h3 className="text-2xl font-[1000] uppercase italic mb-10 tracking-tighter">Удалить <span className="text-red-500">{name}</span>?</h3>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={onCancel} className="py-6 rounded-[25px] bg-white/5 font-black uppercase text-[10px] tracking-widest">Отмена</button>
        <button onClick={onConfirm} className="py-6 rounded-[25px] bg-red-600 font-black uppercase text-[10px] tracking-widest shadow-lg shadow-red-600/20 text-white">Удалить</button>
      </div>
    </motion.div>
  </div>
);
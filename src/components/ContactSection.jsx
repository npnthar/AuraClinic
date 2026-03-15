import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#c8956c] mb-3">Свяжитесь с Нами</p>
          <h2 className="text-4xl font-light text-[#3d2c26] mb-6">
            Запишитесь на <span className="italic">Консультацию</span>
          </h2>
          <div className="w-12 h-px bg-[#c8956c] mb-8" />
          <p className="text-[#6b5a53] leading-relaxed mb-12">
            Ваш путь к естественной красоте начинается с беседы. Запишитесь на приватную консультацию с Др. Еленой Морб и получите индивидуальный план лечения, специально разработанный для вас.
          </p>

          <div className="space-y-6">
            {[
              { icon: "📍", label: "Адрес", val: "12 Avenue Lumière, Paris 75008" },
              { icon: "📞", label: "Телефон", val: "+33 (0)1 23 45 67 89" },
              { icon: "✉️", label: "Почта", val: "hello@lumiere-aesthetics.com" },
              { icon: "🕐", label: "Часы", val: "Пн–Пт 9:00–19:00 / Сб 10:00–16:00" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <div className="text-xs tracking-widest uppercase text-[#8b6f5e]">{item.label}</div>
                  <div className="text-sm text-[#3d2c26] mt-0.5">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-2xl font-light text-[#3d2c26] mb-3">Спасибо!</h3>
              <p className="text-[#6b5a53]">Мы получили ваше сообщение и свяжемся с вами в течение 24 часов.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 border border-[#c8956c] text-[#c8956c] px-6 py-3 text-sm tracking-widest uppercase hover:bg-[#c8956c] hover:text-white transition-colors"
              >
                Отправить Еще
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs tracking-widest uppercase text-[#8b6f5e] block mb-2">Полное Имя *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[#e8ddd6] bg-[#fdf8f5] px-4 py-3 text-sm text-[#3d2c26] focus:outline-none focus:border-[#c8956c] transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-[#8b6f5e] block mb-2">Телефон</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-[#e8ddd6] bg-[#fdf8f5] px-4 py-3 text-sm text-[#3d2c26] focus:outline-none focus:border-[#c8956c] transition-colors"
                    placeholder="+7 (900) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-[#8b6f5e] block mb-2">Почта *</label>
                <input
                  required type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-[#e8ddd6] bg-[#fdf8f5] px-4 py-3 text-sm text-[#3d2c26] focus:outline-none focus:border-[#c8956c] transition-colors"
                  placeholder="ваша@почта.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-[#8b6f5e] block mb-2">Интересующая Услуга</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-[#e8ddd6] bg-[#fdf8f5] px-4 py-3 text-sm text-[#3d2c26] focus:outline-none focus:border-[#c8956c] transition-colors"
                >
                  <option value="">Выберите услугу</option>
                  <option>Ботокс</option>
                  <option>Дермальные Филлеры</option>
                  <option>Лазерные Процедуры</option>
                  <option>Уход за Кожей</option>
                  <option>Общая Консультация</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-[#8b6f5e] block mb-2">Сообщение</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-[#e8ddd6] bg-[#fdf8f5] px-4 py-3 text-sm text-[#3d2c26] focus:outline-none focus:border-[#c8956c] transition-colors resize-none"
                  placeholder="Расскажите о ваших целях..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c8956c] text-white py-4 text-sm tracking-widest uppercase hover:bg-[#b07d56] transition-colors duration-300"
              >
                Отправить Сообщение
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
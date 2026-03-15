const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "О нас", href: "#about" },
  { label: "Опыт", href: "#experience" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Услуги", href: "#services" },
  { label: "Контакты", href: "#contact" },
];

const services = ["Ботокс", "Дермальные Филлеры", "Лазерные Процедуры", "Уход за Кожей", "Мезотерапия", "RF Микронидлинг"];

export default function Footer() {
  const scroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#3d2c26] text-[#e8ddd6]">
      {/* CTA band */}
      <div className="bg-[#c8956c] py-12 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-2">Готовы Начать?</p>
        <h3 className="text-3xl font-light text-white mb-6">
          Запишитесь на Бесплатную <span className="italic">Консультацию</span>
        </h3>
        <button
          onClick={() => scroll("#contact")}
          className="border border-white text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-[#c8956c] transition-colors duration-300"
        >
          Свяжитесь с Нами
        </button>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="text-xl font-light tracking-[0.2em] uppercase text-[#c8956c] mb-4">Lumière</div>
          <p className="text-sm text-[#a89489] leading-relaxed mb-6">
            Премиум нехирургическая эстетическая медицина. Естественные результаты, исключительный уход.
          </p>
          <div className="flex gap-4">
            {["IG", "FB", "YT"].map((s) => (
              <button key={s} className="w-9 h-9 border border-[#6b5a53] text-xs text-[#a89489] hover:border-[#c8956c] hover:text-[#c8956c] transition-colors">
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className="text-xs tracking-widest uppercase text-[#c8956c] mb-5">Навигация</div>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scroll(link.href)}
                  className="text-sm text-[#a89489] hover:text-[#c8956c] transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="text-xs tracking-widest uppercase text-[#c8956c] mb-5">Услуги</div>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <button
                  onClick={() => scroll("#services")}
                  className="text-sm text-[#a89489] hover:text-[#c8956c] transition-colors"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs tracking-widest uppercase text-[#c8956c] mb-5">Контакты</div>
          <ul className="space-y-4 text-sm text-[#a89489]">
            <li>12 Avenue Lumière<br />Paris 75008, France</li>
            <li>+33 (0)1 23 45 67 89</li>
            <li>hello@lumiere-aesthetics.com</li>
            <li>Пн–Пт: 9:00–19:00<br />Сб: 10:00–16:00</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#4f3a33] py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6b5a53]">
          <span>© 2024 Lumière Aesthetics. Все права защищены.</span>
          <div className="flex gap-6">
            <span className="hover:text-[#c8956c] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#c8956c] cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-[#c8956c] cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "О нас", href: "#about" },
  { label: "Опыт", href: "#experience" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Услуги", href: "#services" },
  { label: "Контакты", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#fdf8f5]/95 backdrop-blur shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="text-xl font-light tracking-[0.2em] text-[#8b6f5e] uppercase">
          Lumière
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm tracking-widest uppercase text-[#6b5a53] hover:text-[#c8956c] transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="hidden md:block text-sm tracking-widest uppercase bg-[#c8956c] text-white px-6 py-2.5 hover:bg-[#b07d56] transition-colors duration-300"
          onClick={() => handleNav("#contact")}
        >
          Записаться
        </button>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-[#6b5a53] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#6b5a53] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#6b5a53] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fdf8f5] border-t border-[#e8ddd6] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm tracking-widest uppercase text-[#6b5a53] hover:text-[#c8956c] text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            className="text-sm tracking-widest uppercase bg-[#c8956c] text-white px-6 py-2.5 hover:bg-[#b07d56] transition-colors w-full"
            onClick={() => handleNav("#contact")}
          >
            Записаться
          </button>
        </div>
      )}
    </nav>
  );
}
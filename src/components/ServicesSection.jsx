import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "botox",
    tab: "Ботокс",
    title: "Ботулинический Токсин (Ботокс)",
    tagline: "Разгладьте тонкие линии, не теряя выражение лица.",
    image: "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?w=700&q=80",
    desc: "Наши точные инъекции Ботокса нацелены на динамические морщины — линии лба, гусиные лапки, линии хмурого взгляда — при этом сохраняя естественное движение лица. Результат — освеженный, отдохнувший вид, который остается неподражаемо вам.",
    points: ["Линии лба и хмурого взгляда", "Гусиные лапки", "Лифтинг бровей", "Сужение челюсти", "Полосы на шее"],
    duration: "30 мин",
    downtime: "Нет",
    results: "3–6 месяцев",
  },
  {
    id: "fillers",
    tab: "Филлеры",
    title: "Дермальные Филлеры",
    tagline: "Восстановите объем, уточните контуры, вернитесь молодость.",
    image: "https://images.unsplash.com/photo-1583241475880-083f84372725?w=700&q=80",
    desc: "Используя премиум филлеры на основе гиалуроновой кислоты, мы лепим и восстанавливаем объем лица с художественной точностью. От увеличения губ до определения скул и коррекции носогубных складок — результаты мгновенны, естественны и красиво долговечны.",
    points: ["Увеличение губ", "Контурирование щек", "Носогубные складки", "Коррекция слезной борозды", "Определение линии челюсти"],
    duration: "45–60 мин",
    downtime: "1–2 дня",
    results: "9–18 месяцев",
  },
  {
    id: "laser",
    tab: "Лазер",
    title: "Лазерные Процедуры",
    tagline: "Новое поколение шлифовки кожи и коррекции тона.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
    desc: "Наша клиника предлагает полный спектр медицинских лазерных процедур для текстуры кожи, пигментации, сосудистых проблем и омоложения. Каждый протокол специально разработан для вашего типа кожи и целей, обеспечивая видимые результаты с минимальным временем восстановления.",
    points: ["Фракционная шлифовка CO₂", "IPL фото-омоложение", "Удаление пигментации", "Сосудистые очаги", "Удаление волос"],
    duration: "30–90 мин",
    downtime: "2–7 дней",
    results: "Долговечные",
  },
  {
    id: "skin",
    tab: "Уход за Кожей",
    title: "Продвинутые Процедуры для Кожи",
    tagline: "Медицинский уход за сияющей и здоровой кожей.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80",
    desc: "Помимо инъекций и лазеров, мы предлагаем комплексное лечение кожи — от RF-микронидлинга и мезотерапии до профессиональных химических пилингов и индивидуальных программ по уходу за кожей, разработанных для восстановления и поддержания сияющей кожи в долгосрочной перспективе.",
    points: ["RF Микронидлинг", "Мезотерапия", "Химические пилинги", "Биоревитализация", "Индивидуальные планы ухода за кожей"],
    duration: "45–75 мин",
    downtime: "0–5 дней",
    results: "Кумулятивные",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active);

  return (
    <div className="py-28 bg-[#fdf8f5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#c8956c] mb-3">Что Мы Предлагаем</p>
          <h2 className="text-4xl font-light text-[#3d2c26]">Наши <span className="italic">Услуги</span></h2>
          <div className="w-12 h-px bg-[#c8956c] mx-auto mt-6" />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-0 mb-12 border border-[#e8ddd6]">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex-1 min-w-[120px] px-6 py-4 text-xs tracking-widest uppercase transition-all duration-300 ${
                active === s.id
                  ? "bg-[#c8956c] text-white"
                  : "bg-white text-[#6b5a53] hover:bg-[#f0ddd4]"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <div>
              <h3 className="text-3xl font-light text-[#3d2c26] mb-2">{current.title}</h3>
              <p className="text-[#c8956c] italic mb-6">{current.tagline}</p>
              <p className="text-[#6b5a53] leading-relaxed mb-8">{current.desc}</p>

              <ul className="space-y-2 mb-10">
                {current.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-[#6b5a53]">
                    <span className="w-4 h-px bg-[#c8956c] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              {/* Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Продолжительность", val: current.duration },
                  { label: "Время Восстановления", val: current.downtime },
                  { label: "Результаты", val: current.results },
                ].map((b) => (
                  <div key={b.label} className="border border-[#e8ddd6] px-5 py-3 text-center">
                    <div className="text-xs tracking-widest uppercase text-[#8b6f5e]">{b.label}</div>
                    <div className="text-sm font-medium text-[#3d2c26] mt-1">{b.val}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}
                className="mt-8 bg-[#c8956c] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#b07d56] transition-colors duration-300"
              >
                Записаться на Эту Процедуру
              </button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#f0ddd4] translate-x-4 translate-y-4" />
              <img
                src={current.image}
                alt={current.title}
                className="relative z-10 w-full h-[480px] object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
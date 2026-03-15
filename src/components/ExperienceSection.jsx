import { motion } from "framer-motion";

const timeline = [
  {
    year: "2012",
    title: "Медицинская Степень",
    place: "Парижский Университет — Факультет Медицины",
    desc: "Окончила с отличием по специальности Дерматология и Эстетическая Медицина.",
  },
  {
    year: "2014",
    title: "Интернатура и Специализация",
    place: "Клиника Сен-Луи, Париж",
    desc: "Специализировалась на инъекционных процедурах и нехирургических методах омоложения лица.",
  },
  {
    year: "2016",
    title: "Продвинутое Обучение на Лазерах",
    place: "Европейская Лазерная Академия, Вена",
    desc: "Сертифицирована в технологиях фракционного CO₂, IPL и RF-микронидлинга.",
  },
  {
    year: "2018",
    title: "Открыла Частную Практику",
    place: "Клиника Люмьер Эстетика",
    desc: "Основала собственную клинику, сосредоточенную на индивидуальном, результативном эстетическом уходе.",
  },
  {
    year: "2022",
    title: "Международный Оратор",
    place: "AMWC Монако и Всемирный Конгресс Эстетической Медицины",
    desc: "Представила исследование по продвинутому контурированию филлерами и естественным результатам.",
  },
];

export default function ExperienceSection() {
  return (
    <div className="py-28 bg-[#fdf8f5]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#c8956c] mb-3">Карьерный Путь</p>
          <h2 className="text-4xl font-light text-[#3d2c26]">Рабочий <span className="italic">Опыт</span></h2>
          <div className="w-12 h-px bg-[#c8956c] mx-auto mt-6" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[80px] md:left-1/2 top-0 bottom-0 w-px bg-[#e8ddd6] -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year dot */}
                <div className="absolute left-[80px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c8956c] border-4 border-[#fdf8f5] z-10 top-1" />

                {/* Content card */}
                <div className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right pl-20 md:pl-0" : "md:pl-12 pl-20 md:pl-0"}`}>
                  <span className="text-xs tracking-widest uppercase text-[#c8956c] font-medium">{item.year}</span>
                  <h3 className="text-lg font-medium text-[#3d2c26] mt-1">{item.title}</h3>
                  <p className="text-sm text-[#c8956c] mt-0.5 italic">{item.place}</p>
                  <p className="text-sm text-[#8b6f5e] mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
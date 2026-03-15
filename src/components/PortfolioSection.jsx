import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Все", "Ботокс", "Филлеры", "Лазер", "Кожа"];

const works = [
  { id: 1, cat: "Ботокс", before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80", after: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=80", label: "Ботокс Лба" },
  { id: 2, cat: "Филлеры", before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80", after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", label: "Увеличение Губ" },
  { id: 3, cat: "Лазер", before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80", after: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80", label: "Лазерная Шлифовка" },
  { id: 4, cat: "Кожа", before: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80", after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80", label: "Омоложение Кожи" },
  { id: 5, cat: "Филлеры", before: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=80", after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80", label: "Контурирование Щек" },
  { id: 6, cat: "Ботокс", before: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80", after: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80", label: "Лифтинг Бровей" },
];

function WorkCard({ work }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-72 overflow-hidden">
        <img src={work.before} alt="before" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: hover ? 0 : 1 }} />
        <img src={work.after} alt="after" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: hover ? 1 : 0 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3d2c26]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm font-medium">{work.label}</p>
          <p className="text-white/70 text-xs mt-0.5">{hover ? "После" : "До"} — наведите для сравнения</p>
        </div>
        {/* Before/After badge */}
        <div className="absolute top-3 left-3 text-xs tracking-widest uppercase bg-white/90 text-[#c8956c] px-2 py-1">
          {hover ? "После" : "До"}
        </div>
      </div>
      <div className="bg-white p-4 border-b-2 border-[#c8956c]">
        <p className="text-sm font-medium text-[#3d2c26]">{work.label}</p>
        <p className="text-xs text-[#8b6f5e] mt-0.5 tracking-widest uppercase">{work.cat}</p>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? works : works.filter((w) => w.cat === active);

  return (
    <div className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#c8956c] mb-3">Наша Работа</p>
          <h2 className="text-4xl font-light text-[#3d2c26]">До и <span className="italic">После</span></h2>
          <div className="w-12 h-px bg-[#c8956c] mx-auto mt-6" />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                active === cat
                  ? "bg-[#c8956c] text-white"
                  : "border border-[#c8956c] text-[#c8956c] hover:bg-[#c8956c] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
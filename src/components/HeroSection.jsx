import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdf8f5]">
      {/* Animated background circles */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#f0ddd4] opacity-40 -top-32 -right-32"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#e8cfc3] opacity-30 -bottom-20 -left-20"
        animate={{ scale: [1, 1.08, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full bg-[#c8956c] opacity-10 top-1/2 left-1/4"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-[0.3em] uppercase text-[#c8956c] mb-4"
          >
            Эстетическая Медицина
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl md:text-6xl font-light text-[#3d2c26] leading-tight mb-6"
          >
            Ваша Естественная
            <br />
            <span className="italic text-[#c8956c]">Красота,</span>
            <br />
            Совершенствуется.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[#8b6f5e] text-lg leading-relaxed mb-10 max-w-md"
          >
            Нехирургические эстетические процедуры, адаптированные для улучшения ваших уникальных черт — Ботокс, филлеры, лазерные процедуры и другое, проводимые с точностью и артистизмом.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <button
              onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}
              className="bg-[#c8956c] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#b07d56] transition-colors duration-300"
            >
              Записаться на Консультацию
            </button>
            <button
              onClick={() => document.querySelector("#services").scrollIntoView({ behavior: "smooth" })}
              className="border border-[#c8956c] text-[#c8956c] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#c8956c] hover:text-white transition-colors duration-300"
            >
              Наши Услуги
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex gap-10 mt-14"
          >
            {[
              { num: "12+", label: "Лет Опыта" },
              { num: "3,000+", label: "Довольных Клиентов" },
              { num: "15+", label: "Процедур" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-light text-[#c8956c]">{stat.num}</div>
                <div className="text-xs tracking-widest uppercase text-[#8b6f5e] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute inset-0 border border-[#c8956c] opacity-30 translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
              alt="Aesthetic clinic"
              className="w-full h-[580px] object-cover relative z-10"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white shadow-xl px-6 py-4"
          >
            <div className="text-xs tracking-widest uppercase text-[#8b6f5e]">Сертифицированный Специалист</div>
            <div className="text-sm font-medium text-[#3d2c26] mt-1">Др. Елена Морб</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-[#8b6f5e]">Прокрутить</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-[#c8956c]"
        />
      </motion.div>
    </div>
  );
}
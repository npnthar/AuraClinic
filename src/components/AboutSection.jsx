import { motion } from "framer-motion";

const credentials = [
  "Врач в области дерматологии и эстетической медицины",
  "Сертифицированный специалист по инъекциям ботулотоксина",
  "Член EADV (Европейской академии дерматологии)",
  "Сертификат по филлерам и контурной пластике",
];

export default function AboutSection() {
  return (
    <div className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-[#f0ddd4] -z-10 -translate-x-4 -translate-y-4" />
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
            alt="Dr. Elena Moreau"
            className="w-full h-[560px] object-cover object-top"
          />
          <div className="absolute bottom-6 right-6 bg-[#c8956c] text-white px-6 py-4 text-center">
            <div className="text-3xl font-light">12+</div>
            <div className="text-xs tracking-widest uppercase mt-1">Лет Практики</div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#c8956c] mb-4">О Докторе</p>
          <h2 className="text-4xl font-light text-[#3d2c26] leading-snug mb-6">
            Др. Елена <span className="italic">Морб</span>
          </h2>
          <div className="w-12 h-px bg-[#c8956c] mb-8" />
          <p className="text-[#6b5a53] leading-relaxed mb-6">
            Др. Елена Морб — сертифицированный специалист в области эстетической медицины с более чем 12-летним опытом, трансформирующей жизни через искусство нехирургического улучшения красоты. Её философия сосредоточена на достижении естественных, гармоничных результатов, которые подчеркивают уникальные черты каждого пациента.
          </p>
          <p className="text-[#6b5a53] leading-relaxed mb-10">
            Прошедшая обучение в ведущих европейских клиниках, она сочетает медицинскую точность с взглядом художника — внимательно прислушиваясь к каждому пациенту, чтобы создать индивидуальный план лечения, обеспечивающий тонкую, долгую элегантность.
          </p>

          {/* Credentials */}
          <ul className="space-y-3">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#6b5a53]">
                <span className="w-4 h-px bg-[#c8956c] mt-2.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
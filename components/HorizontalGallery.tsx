
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalGallery: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  const items = [
    { id: 1, title: "INTÉGRITÉ PUBLIQUE", img: "/assets/formation-en-guyane-3.webp", size: "w-80 h-96", y: "top-20" },
    { id: 2, title: "CONFORMITÉ SAPIN II", img: "/assets/compilation-com-electorale-e1749714874115.jpg", size: "w-[35vw] h-[50vh]", y: "top-40" },
    { id: 3, title: "DÉCIDER SANS SUBIR", img: "/assets/photo-parlant-drajes--scaled.webp", size: "w-96 h-80", y: "bottom-20", grayscale: true },
    { id: 4, title: "VIGIE DÉCISIONNELLE", img: "/assets/naissance.webp", size: "w-72 h-72", y: "top-10", grayscale: true },
    { id: 5, title: "TRANSMISSION", img: "/assets/Probitas_Farah-Zaoui-640b-400x400-1.webp", size: "w-[30vw] h-[40vh]", y: "bottom-10" },
  ];

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-[#0C2E59]">
      <div className="sticky top-0 h-screen flex items-center pt-24 overflow-hidden">
        {/* Typographie de fond qui bouge avec le scroll horizontal */}
        <motion.div style={{ x }} className="flex items-center gap-12 pl-[10vw]">

          {/* Main Headline */}
          <div className="flex flex-col whitespace-nowrap pr-40">
            <h2 className="text-[9vw] font-cinzel font-black uppercase leading-[0.8] tracking-tighter text-white/10">
              ANCRER <br />
              UNE ÉTHIQUE <br />
              <span className="text-[#BF9B8E] italic">DURABLE</span> <br />
              DANS L’ACTION
            </h2>
            <div className="mt-6 flex items-center gap-8">
              <p className="text-2xl font-serif italic text-white/60 max-w-sm whitespace-normal leading-tight">
                Peu importe <span className="text-white font-bold underline decoration-[#BF9B8E]">où</span> vous en êtes, c'est la <span className="text-white font-bold">rigueur</span> qui définit votre impact.
              </p>
              <svg viewBox="0 0 100 40" className="w-24 fill-[#BF9B8E]">
                <path d="M10,20 Q30,10 50,20 T90,20" stroke="#BF9B8E" fill="none" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Chronological Images */}
          {items.map((item) => (
            <div key={item.id} className={`relative flex-shrink-0 mx-10 ${item.y}`}>
              <span className="block text-[10px] font-mono font-bold tracking-[0.4em] text-white/40 mb-4 uppercase">
                {item.title}
              </span>
              <div className={`${item.size} overflow-hidden rounded-sm shadow-2xl group relative border border-white/5`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${item.grayscale ? 'grayscale' : 'brightness-75'} group-hover:grayscale-0 group-hover:brightness-100`}
                />
                <div className="absolute inset-0 bg-[#0C2E59]/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          ))}

          {/* End Statement */}
          <div className="flex-shrink-0 pl-40 pr-[20vw]">
            <h3 className="text-[8vw] font-cinzel font-black uppercase tracking-tighter text-white/5 outline-text">
              L'INTÉGRITÉ <br />AVANT TOUT
            </h3>
          </div>
        </motion.div>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(191, 155, 142, 0.2);
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default HorizontalGallery;

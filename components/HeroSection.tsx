
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/hero_v1.png';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 0.5, 0.35]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], [0, 60]);
  const yImage = useTransform(scrollYProgress, [0.4, 1], ["0%", "-10%"]);

  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#0C2E59]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Fond révélé */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none"
        >
          <motion.div style={{ x: bgTextX }} className="flex gap-20 whitespace-nowrap">
            <span className="text-[12vw] font-cinzel font-black text-white/5 uppercase italic outline-text">ÉTHIQUE & VALEUR</span>
            <span className="text-[12vw] font-cinzel font-black text-white/5 uppercase italic">PROBITAS CONSEIL</span>
          </motion.div>
        </motion.div>

        {/* Shrinking Image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            style={{
              scale,
              borderRadius,
              y: yImage
            }}
            className="relative w-[100vw] h-[100vh] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]"
          >
            <img
              src={heroImage}
              alt="Probitas Conseil - Farah Zaoui"
              className="w-full h-full object-cover object-left md:object-center"
            />
          </motion.div>
        </div>

        {/* Contenu textuel */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute bottom-12 left-0 w-full px-6 md:px-20 z-30"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-5">
              <h2 className="text-4xl md:text-5xl font-cinzel font-black uppercase leading-none mb-6">
                L'Intégrité au service <br /><span className="text-[#BF9B8E]">des organisations</span>
              </h2>
              <p className="text-white/60 text-base max-w-md font-light leading-relaxed">
                Probitas Conseil accompagne les acteurs publics et privés dans la structuration de leur culture d'intégrité avec une approche pragmatique et éthique.
              </p>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="h-[1px] w-full bg-white/20 hidden md:block mb-6"></div>
            </div>
            <div className="md:col-span-5 text-right">
              <div className="inline-block border border-[#BF9B8E] px-8 py-4 text-[#BF9B8E] font-bold text-xs tracking-[0.3em] uppercase hover:bg-[#BF9B8E] hover:text-white transition-all pointer-events-auto cursor-pointer">
                Découvrir l'Expertise
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScratchRevealSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const maskScaleX = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const maskOpacity = useTransform(scrollYProgress, [0.45, 0.5], [1, 0]);

  const scribbleScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);
  const scribbleRotate = useTransform(scrollYProgress, [0.2, 0.4], [-5, -2]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#f4f4f2] py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000">
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              d={`M-100,${i * 120} C200,${i * 100} 800,${i * 200} 1100,${i * 120}`}
              stroke="#0C2E59"
              fill="none"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

          {/* CONSEIL COLUMN */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-16">
              <motion.div
                style={{ scale: scribbleScale, rotate: scribbleRotate }}
                className="absolute -left-12 -top-12 z-20"
              >
                <span className="text-[10vw] font-serif italic text-[#BF9B8E] leading-none drop-shadow-sm select-none">
                  Audit
                </span>
              </motion.div>

              <div className="relative">
                <h2 className="text-[8vw] font-cinzel font-black text-[#0C2E59] leading-none tracking-tighter uppercase">
                  CONSEIL
                </h2>
                <motion.div
                  style={{ scaleX: maskScaleX, opacity: maskOpacity }}
                  className="absolute inset-0 bg-[#0C2E59] origin-right"
                />
              </div>
            </div>

            <div className="text-center max-w-sm relative">
              <p className="text-[#0C2E59]/70 font-medium text-lg leading-relaxed mb-8">
                Une analyse personnalisée de votre situation fiscale et patrimoniale pour définir une stratégie sur-mesure.
              </p>
              <motion.div style={{ scaleX: maskScaleX, opacity: maskOpacity }} className="absolute inset-x-0 -top-2 bottom-0 bg-[#0C2E59] origin-left translate-y-2 h-6" />
              <motion.div style={{ scaleX: maskScaleX, opacity: maskOpacity }} className="absolute inset-x-0 bottom-0 bg-[#0C2E59] origin-right translate-y-6 h-6" />
            </div>
          </div>

          {/* PATRIMOINE COLUMN */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-16">
              <h2 className="text-[8vw] font-serif italic text-[#BF9B8E] leading-none tracking-tighter uppercase mb-[-2vw]">
                Immo
              </h2>
              <div className="relative">
                <h2 className="text-[8vw] font-cinzel font-black text-[#0C2E59] leading-none tracking-tighter uppercase">
                  PATRIMOINE
                </h2>
                <motion.div
                  style={{ scaleX: maskScaleX, opacity: maskOpacity }}
                  className="absolute inset-0 bg-[#0C2E59] origin-left"
                />
              </div>
            </div>

            <div className="text-center max-w-sm relative">
              <p className="text-[#0C2E59]/70 font-medium text-lg leading-relaxed mb-8">
                Accès aux meilleures opportunités d'investissement immobilier et placements financiers sélectionnés pour leur pérennité.
              </p>
              <motion.div style={{ scaleX: maskScaleX, opacity: maskOpacity }} className="absolute inset-x-0 -top-2 bottom-0 bg-[#0C2E59] origin-right translate-y-2 h-6" />
              <motion.div style={{ scaleX: maskScaleX, opacity: maskOpacity }} className="absolute inset-x-0 bottom-0 bg-[#0C2E59] origin-left translate-y-6 h-6" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScratchRevealSection;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const corridorItems = [
  { id: 1, side: 'left', img: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=800', offset: 0.1, label: "STRATÉGIE_FONCIÈRE" },
  { id: 2, side: 'right', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800', offset: 0.2, label: "AUDIT_PATRIMOINE" },
  { id: 3, side: 'left', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800', offset: 0.35, label: "PLACEMENTS_SÉCURISÉS" },
  { id: 4, side: 'right', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800', offset: 0.5, label: "DÉVELOPPEMENT_VALEUR" },
  { id: 5, side: 'left', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800', offset: 0.65, label: "VISION_PÉRENNE" },
  { id: 6, side: 'right', img: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=800', offset: 0.8, label: "SÉCURITÉ_EXPERTISE" },
];

interface CorridorItemProps {
  item: typeof corridorItems[0];
  scrollYProgress: MotionValue<number>;
}

const CorridorItem: React.FC<CorridorItemProps> = ({ item, scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [item.offset - 0.2, item.offset + 0.3], ["120vh", "-120vh"]);
  const x = useTransform(scrollYProgress, [item.offset - 0.1, item.offset + 0.2],
    item.side === 'left' ? ["-20%", "-60%"] : ["20%", "60%"]
  );
  const scale = useTransform(scrollYProgress, [item.offset - 0.1, item.offset + 0.1, item.offset + 0.3], [0.5, 1.2, 1.5]);
  const opacity = useTransform(scrollYProgress, [item.offset - 0.15, item.offset, item.offset + 0.15, item.offset + 0.25], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [item.offset - 0.2, item.offset + 0.3], item.side === 'left' ? [-5, -12] : [5, 12]);

  return (
    <motion.div
      style={{ y, x, scale, opacity, rotate }}
      className={`absolute ${item.side === 'left' ? 'left-0' : 'right-0'} w-[35vw] md:w-[25vw] aspect-[3/4] z-20`}
    >
      <div className="relative w-full h-full group">
        <div className="absolute -top-6 left-0 flex items-center gap-3">
          <span className="text-[10px] font-mono text-[#BF9B8E]">0{item.id}</span>
          <span className="text-[10px] font-cinzel font-black uppercase tracking-[0.3em] text-white/40">{item.label}</span>
        </div>
        <img
          src={item.img}
          alt={item.label}
          className="w-full h-full object-cover rounded-sm grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 shadow-2xl"
        />
        <div className="absolute inset-0 border border-white/10 group-hover:border-[#BF9B8E]/40 transition-colors pointer-events-none" />
      </div>
    </motion.div>
  );
};

const ImageCorridor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);
  const titleOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#0C2E59]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Central Background Text */}
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="relative z-10 text-center pointer-events-none"
        >
          <h2 className="text-[12vw] font-cinzel font-black leading-none uppercase tracking-[0.2em] text-white/5 outline-text">
            VISION
          </h2>
          <h2 className="text-[10vw] font-serif italic text-[#BF9B8E]/20 leading-none -mt-[3vw]">
            Probitas
          </h2>
        </motion.div>

        {/* Corridor Images */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {corridorItems.map((item) => (
            <CorridorItem key={item.id} item={item} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Floating Decoration */}
        <div className="absolute inset-0 pointer-events-none border-[1px] border-[#BF9B8E]/5 m-12 rounded-[60px]" />
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.03);
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ImageCorridor;


import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TopographyBg: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <motion.div
      style={{ rotate, scale }}
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.08]"
    >
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <filter id="glowGold">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={i}
            d={`M ${-200 + i * 100} 500 Q 250 ${200 + i * 50} 500 500 T ${1200 + i * 100} 500`}
            fill="none"
            stroke="#BF9B8E"
            strokeWidth="0.8"
            filter="url(#glowGold)"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`c-${i}`}
            cx="500"
            cy="500"
            r={150 + i * 200}
            fill="none"
            stroke="#BF9B8E"
            strokeWidth="0.3"
            strokeDasharray="10 20"
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default TopographyBg;
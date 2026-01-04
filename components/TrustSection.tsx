
import React from 'react';
import { motion, Variants } from 'framer-motion';

// Partenaires avec deux stats distinctes pour les écriteaux
const logos = [
  { name: "Rothschild & Co", statL: "200+ ans", statR: "Prestige", url: "https://vignette.wikia.nocookie.net/logopedia/images/b/b3/Rothschild_%26_Co_Logo.svg/revision/latest?cb=20180907141315" },
  { name: "Goldman Sachs", statL: "$2.5T AUM", statR: "Global", url: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs_logo.svg" },
  { name: "JP Morgan", statL: "Rating AAA", statR: "Tier 1", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008-1-.svg" },
  { name: "UBS", statL: "Swiss Tech", statR: "Excellence", url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/UBS_Logo.svg" },
  { name: "Morgan Stanley", statL: "Invest", statR: "Top 10", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.svg" },
  { name: "BNP Paribas", statL: "N°1 Europe", statR: "Expertise", url: "https://upload.wikimedia.org/wikipedia/commons/1/12/BNP_Paribas.svg" },
  { name: "Pictet", statL: "Indépendant", statR: "Ethique", url: "https://vignette.wikia.nocookie.net/logopedia/images/9/9f/Pictet_Group_logo.svg/revision/latest?cb=20210202131920" },
  { name: "HSBC Private", statL: "70 Pays", statR: "Private", url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg" }
];

const TrustSection: React.FC = () => {
  // Triple répétition pour assurer que le cycle est mathématiquement parfait
  const infiniteLogos = [...logos, ...logos, ...logos];

  // Variants pour les écriteaux symétriques avec direction de départ inversée (commence vers l'extérieur)
  // Fix: Explicitly typing as Variants and using 'as const' for ease to narrow from string to literal type
  const plaqueLeftVariants: Variants = {
    initial: {
      opacity: 0,
      x: -40,
      y: 30,
      rotate: 0,
      scale: 0.8
    },
    hover: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      // INVERSION : commence par -15 au lieu de 15
      rotate: [-15, 25, -35, 15, -30],
      transition: {
        rotate: { duration: 0.5, ease: "easeOut" as const },
        opacity: { duration: 0.2 },
        default: { type: "spring", stiffness: 200, damping: 15 }
      }
    }
  };

  // Fix: Explicitly typing as Variants and using 'as const' for ease to narrow from string to literal type
  const plaqueRightVariants: Variants = {
    initial: {
      opacity: 0,
      x: 40,
      y: 30,
      rotate: 0,
      scale: 0.8
    },
    hover: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      // INVERSION : commence par 15 au lieu de -15
      rotate: [15, -25, 35, -15, 30],
      transition: {
        rotate: { duration: 0.5, ease: "easeOut" as const },
        opacity: { duration: 0.2 },
        default: { type: "spring", stiffness: 200, damping: 15 }
      }
    }
  };

  return (
    <section className="relative py-72 bg-[#0C2E59] overflow-hidden border-t border-white/5">
      {/* TEXTE DE FOND GÉANT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] overflow-hidden">
        <h2 className="text-[35vw] font-cinzel font-black uppercase tracking-tighter whitespace-nowrap outline-text-bg">
          NETWORK • NETWORK •
        </h2>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 mb-32 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-mono text-[#BF9B8E] tracking-[1em] uppercase mb-8 block"
          >
            NOTRE RÉSEAU DE CONFIANCE
          </motion.span>
          <h3 className="text-5xl md:text-7xl font-cinzel font-black uppercase">
            PARTENAIRES <span className="text-[#BF9B8E] italic font-serif lowercase">élite</span>
          </h3>
        </div>

        {/* CONTENEUR DU MARQUEE - Zéro padding ici pour éviter le décalage de boucle */}
        <div className="relative flex overflow-hidden w-full">
          {/* FADE GRADIENTS SUR LES COTÉS */}
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-r from-[#0C2E59] to-transparent z-40 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-[#0C2E59] to-transparent z-40 pointer-events-none" />

          <motion.div
            className="flex py-24" // Plus de gap ici, on gère l'espacement dans les items
            animate={{ x: ["0%", "-33.3333333333%"] }} // Précision absolue pour éviter le "frottement"
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {infiniteLogos.map((logo, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileHover="hover"
                // Largeur fixe + marge fixe pour une répétition mathématiquement identique
                className="flex-shrink-0 w-[450px] h-48 flex flex-col items-center justify-center relative cursor-default group"
              >
                {/* ÉCRITEAU GAUCHE */}
                <motion.div
                  variants={plaqueLeftVariants}
                  className="absolute -top-16 -left-4 z-30 pointer-events-none origin-bottom"
                >
                  <div className="bg-[#BF9B8E] text-white font-mono font-bold text-[10px] px-3 py-1.5 shadow-[5px_5px_15px_rgba(0,0,0,0.5)] border-l-2 border-white/20 whitespace-nowrap">
                    {logo.statL}
                  </div>
                  <div className="w-[1px] h-8 bg-[#BF9B8E] mx-auto opacity-50" />
                </motion.div>

                {/* ÉCRITEAU DROIT */}
                <motion.div
                  variants={plaqueRightVariants}
                  className="absolute -top-16 -right-4 z-30 pointer-events-none origin-bottom"
                >
                  <div className="bg-white text-[#0C2E59] font-mono font-bold text-[10px] px-3 py-1.5 shadow-[5px_5px_15px_rgba(0,0,0,0.5)] border-r-2 border-[#BF9B8E] whitespace-nowrap">
                    {logo.statR}
                  </div>
                  <div className="w-[1px] h-8 bg-white mx-auto opacity-50" />
                </motion.div>

                {/* LOGO CONTAINER */}
                <div className="relative flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="max-w-[200px] max-h-[80px] object-contain logo-item transition-all duration-700"
                    />
                  </motion.div>

                  {/* LABEL BAS */}
                  <div className="absolute -bottom-14 opacity-0 group-hover:opacity-40 transition-all duration-700">
                    <span className="text-[10px] font-cinzel font-black tracking-[0.5em] uppercase text-white whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                </div>

                {/* AURA GLOW */}
                <div className="absolute inset-0 bg-[#BF9B8E]/0 group-hover:bg-[#BF9B8E]/5 blur-[80px] rounded-full transition-all duration-1000 scale-0 group-hover:scale-110 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FOOTER DE SECTION */}
        <div className="container mx-auto px-6 mt-40 flex justify-center">
          <div className="flex items-center gap-6">
            <div className="h-[0.5px] w-20 bg-[#BF9B8E]/30" />
            <div className="w-2 h-2 rotate-45 border border-[#BF9B8E]/50" />
            <div className="text-[10px] font-mono text-[#BF9B8E] tracking-[0.8em] uppercase">Patrimoine Institutionnel</div>
            <div className="w-2 h-2 rotate-45 border border-[#BF9B8E]/50" />
            <div className="h-[0.5px] w-20 bg-[#BF9B8E]/30" />
          </div>
        </div>
      </div>

      <style>{`
        .outline-text-bg {
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.04);
          color: transparent;
        }
        
        .logo-item {
          filter: brightness(0) invert(1) opacity(0.2);
        }
        
        .group:hover .logo-item {
          opacity: 1;
          filter: brightness(0) invert(1) drop-shadow(0 0 20px rgba(191, 155, 142, 0.6)) sepia(0.3) saturate(1.5);
        }
      `}</style>
    </section>
  );
};

export default TrustSection;

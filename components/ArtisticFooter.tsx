
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

const ArtisticFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#081d38] pt-16 pb-20 overflow-hidden">
      {/* Topography Background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              d={`M-100, ${i * 100} Q250, ${i * 100 - 50} 500, ${i * 100} T1100, ${i * 100} `}
              stroke="#BF9B8E"
              fill="none"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span className="text-[15vw] md:text-[20vw] font-black font-cinzel text-[#BF9B8E] opacity-[0.03] select-none tracking-widest whitespace-nowrap transform translate-y-1/4">
          PROBITAS
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* TOP BRANDING BANNER (PLUS PROCHE DU HAUT) */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#BF9B8E] text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-3">
            Probitas Conseil & Formation
          </p>
          <div className="w-16 md:w-24 h-[1px] bg-[#BF9B8E]/40 mb-3" />
          <p className="text-white/40 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] max-w-lg leading-relaxed">
            Expertise Anti-Corruption • Compliance • Éthique des Affaires
          </p>
          <p className="text-white/30 text-xs italic font-serif mt-4 max-w-md leading-relaxed selection:bg-[#BF9B8E] selection:text-[#0C2E59]">
            Insuffler la culture de l’éthique.
          </p>
        </div>

        {/* 3-COLUMN LINK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 items-start text-center md:text-left">

          {/* COL 1: OFFRES */}
          <div className="flex flex-col gap-8 md:items-start items-center">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <span className="text-[#BF9B8E] font-cinzel font-bold text-xs tracking-widest uppercase border-b border-[#BF9B8E]/20 pb-2 w-max">FORMATION</span>
              <Link to="/formations" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Inter-entreprises</Link>
              <Link to="/formations" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Digital Learning</Link>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <span className="text-[#BF9B8E] font-cinzel font-bold text-xs tracking-widest uppercase border-b border-[#BF9B8E]/20 pb-2 w-max">CONSEIL</span>
              <Link to="/conseil" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Conformité Sapin II</Link>
              <Link to="/communication" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Communication</Link>
            </div>
          </div>

          {/* COL 2: EXPERTISE */}
          <div className="flex flex-col gap-8 md:items-start items-center">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <span className="text-[#BF9B8E] font-cinzel font-bold text-xs tracking-widest uppercase border-b border-[#BF9B8E]/20 pb-2 w-max">SENSIBILISATION</span>
              <Link to="/sensibilisation" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Workshops</Link>
              <Link to="/sensibilisation#conferences" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Conférences</Link>
            </div>
            <div className="flex flex-col gap-4 mt-2 items-center md:items-start">
              <Link to="/municipales-2026" className="text-[#BF9B8E] font-cinzel font-bold text-xs tracking-widest uppercase hover:text-white transition-colors border-b border-[#BF9B8E]/20 pb-2 w-max">MUNICIPALES 2026</Link>
              <Link to="/boutique" className="text-[#BF9B8E] font-cinzel font-bold text-xs tracking-widest uppercase hover:text-white transition-colors border-b border-[#BF9B8E]/20 pb-2 w-max">BOUTIQUE</Link>
            </div>
          </div>

          {/* COL 3: L'AGENCE */}
          <div className="flex flex-col gap-4 md:items-start items-center">
            <span className="text-[#BF9B8E] font-cinzel font-bold text-xs tracking-widest uppercase border-b border-[#BF9B8E]/20 pb-2 w-max">À PROPOS</span>
            <Link to="/a-propos" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Nous connaître</Link>
            <Link to="/realisations" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Nos Réalisations</Link>
            <Link to="/presse" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Presse</Link>
            <Link to="/temoignages" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Témoignages</Link>
            <Link to="/qualiopi" className="text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors">Certification Qualiopi</Link>
          </div>

        </div>

        {/* CONTACT & SOCIAL ROW */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12 border-t border-white/5 pt-12">
          <a href="mailto:contact@probitas-conseil.fr" className="text-white hover:text-[#BF9B8E] font-cinzel transition-colors text-sm tracking-widest uppercase">
            contact@probitas-conseil.fr
          </a>
          <div className="hidden md:block w-1 h-1 rounded-full bg-[#BF9B8E]/50" />
          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/in/corruptionexpert/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors">
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
            <a href="https://www.instagram.com/probitas_off/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors">
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM</span>
            </a>
            <a href="https://substack.com/@farahzaoui" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors">
              <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><title>Substack</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>
              <span>SUBSTACK</span>
            </a>
          </div>
        </div>

        {/* BOTTOM FRAME */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase text-center md:text-left">
            2023-{new Date().getFullYear()} ©PROBITAS • <a href="https://site-internet-six.vercel.app/" className="hover:text-white transition-colors">Proudly made by King Djissi</a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-mono text-white/50 tracking-widest uppercase">
            <Link to="/mentions-legales" className="hover:text-[#BF9B8E]">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-[#BF9B8E]">Politique de confidentialité</Link>
            <Link to="/politique-cookies" className="hover:text-[#BF9B8E]">Politique de cookies (UE)</Link>
            <Link to="/cgv" className="hover:text-[#BF9B8E]">CGV Formation</Link>
            <Link to="/temoignages" className="hover:text-[#BF9B8E]">Témoignages</Link>
          </div>
        </div>
      </div>

      {/* YELLOW BAR */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#BF9B8E]" />
    </footer>
  );
};

export default ArtisticFooter;

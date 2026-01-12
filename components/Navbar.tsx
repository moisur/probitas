import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Navbar: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    {
      label: "Formation",
      href: "#formation",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "À LA CARTE",
          subItems: [
            { label: "PUBLIC", href: "#formation-public" },
            { label: "PRIVÉ", href: "#formation-prive" }
          ]
        },
        { label: "INTER", href: "#formation-surmesure" }
      ]
    },
    {
      label: "Conseil",
      href: "#conseil",
      hasDropdown: true,
      dropdownItems: [
        { label: "CONFORMITE SAPIN II", href: "#conseil" },
        { label: "COMMUNICATION ETHIQUE & D'INFLUENCE", href: "#communication" }
      ]
    },
    {
      label: "Sensibilisation",
      href: "#sensibilisation",
      hasDropdown: true,
      dropdownItems: [
        { label: "ATELIERS", href: "#prevention" },
        { label: "CONFÉRENCES", href: "#sensibilisation-conferences" }
      ]
    },
    {
      label: "Municipales 2026",
      href: "#municipales",
      isSpecial: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="inline-block mr-3">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            <path strokeDasharray="30" strokeDashoffset="30" d="M5 20V4">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="30;0" />
            </path>
            <path strokeDasharray="40" strokeDashoffset="40" d="M5 4C5 4 8 3 12 4C16 5 19 4 19 4V12C19 12 16 13 12 12C8 11 5 12 5 12">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" values="40;0" />
            </path>
          </g>
          <path fill="#428bc1" d="M5 4C5 4 8 3 10 3.5V11.5C8 11 5 12 5 12V4" opacity="0">
            <animate fill="freeze" attributeName="opacity" begin="1s" dur="0.3s" values="0;1" />
          </path>
          <path fill="#fff" d="M10 3.5C10 3.5 12 3 14 3.5V11.5C12 11 10 11.5 10 11.5V3.5" opacity="0">
            <animate fill="freeze" attributeName="opacity" begin="1.2s" dur="0.3s" values="0;1" />
          </path>
          <path fill="#ed4c5c" d="M14 3.5C16 4 19 3 19 3V11C19 11 16 12 14 11.5V3.5" opacity="0">
            <animate fill="freeze" attributeName="opacity" begin="1.4s" dur="0.3s" values="0;1" />
          </path>
        </svg>
      )
    },
    { label: "Boutique", href: "#boutique" },
    {
      label: "À propos",
      href: "#a-propos",
      hasDropdown: true,
      dropdownItems: [
        { label: "NOUS CONNAITRE", href: "#a-propos" },
        { label: "AGENDA", href: "#agenda" },
        { label: "PRESSE", href: "#presse" },
        { label: "TEMOIGNAGES", href: "#temoignages" },
        { label: "CERTIFICATION QUALIOPI", href: "#qualiopi" },
        { label: "CONTACT", href: "#contact" }
      ]
    },
    { label: "Blog", href: "#blog" }
  ];

  return (
    <>
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center bg-[#0C2E59]/80 backdrop-blur-md border-b border-white/5 transition-all duration-500 ease-in-out ${isScrolled && !isHovered ? 'py-3 md:py-4 px-6 md:px-12' : 'px-6 py-6 md:px-10 md:py-8'
          }`}
      >

        {/* Gradients Estompés (Pink Top / Blue Bottom) */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#BF9B8E]/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0C2E59]/80 to-transparent pointer-events-none" />

        <div className="z-[110]">
          <a href="#hero" onClick={() => setIsOpen(false)}>
            <h1 className="text-xl md:text-2xl font-cinzel font-black leading-[0.8] tracking-widest uppercase text-white hover:text-[#BF9B8E] transition-colors cursor-pointer">
              PROBITAS<br /><span className="text-[#BF9B8E] text-[0.6em] tracking-[0.4em]">CONSEIL</span>
            </h1>
          </a>
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden lg:flex gap-10 items-center z-[110]">
          {menuItems.map((item) => {
            // SCROLL FILTER LOGIC: If scrolled AND NOT HOVERED, only show "Municipales 2026"
            if (isScrolled && !isHovered && item.label !== "Municipales 2026") return null;

            return (
              <div
                key={item.label}
                className="relative group h-full flex items-center"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-white/90 hover:text-[#BF9B8E] transition-all"
                >
                  {'icon' in item && item.icon}
                  {item.label}
                  {item.hasDropdown && (
                    <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#0C2E59] border-t-2 border-[#BF9B8E]/40 shadow-2xl py-6 flex flex-col gap-4 z-[110]"
                      >
                        {item.dropdownItems?.map((subItem) => (
                          <div key={subItem.label} className="flex flex-col">
                            {subItem.href ? (
                              <a
                                href={subItem.href}
                                className="px-8 py-2 text-[10px] font-cinzel font-black tracking-[0.2em] uppercase text-white hover:text-[#BF9B8E] transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.label}
                              </a>
                            ) : (
                              <span className="px-8 py-2 text-[10px] font-cinzel font-black tracking-[0.2em] uppercase text-[#BF9B8E]/60 cursor-default">
                                {subItem.label}
                              </span>
                            )}

                            {'subItems' in subItem && subItem.subItems && (
                              <div className="flex flex-col gap-2 pl-4 mb-2">
                                {subItem.subItems.map((nested) => (
                                  <a
                                    key={nested.label}
                                    href={nested.href}
                                    className="px-8 py-1 text-[9px] font-mono font-bold tracking-[0.1em] uppercase text-white/70 hover:text-white transition-colors border-l border-white/10 ml-4"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {nested.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button & Mobile Burger */}
        <div className="flex items-center gap-3 z-[110]">
          <button
            onClick={onOpenContact}
            className="hidden sm:flex bg-[#BF9B8E] text-white font-bold px-7 py-3 rounded-sm items-center gap-2 hover:bg-[#ae8a7e] transition-all text-[10px] tracking-[0.3em] uppercase shadow-lg shadow-[#BF9B8E]/20"
          >
            RESERVER UN APPEL
          </button>

          {/* Custom Burger Icon with Kinetic Spline Animation - Only on Mobile/Tablet */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <motion.span
                animate={isOpen ? { top: "50%", rotate: 45, backgroundColor: "#ffffff" } : { top: "0%", rotate: 0, backgroundColor: "#ffffff" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute left-0 w-full h-0.5 rounded-full origin-center bg-white"
                style={{ top: "0%" }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scale: 0, x: 10 } : { opacity: 1, scale: 1, x: 0, backgroundColor: "#ffffff" }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 rounded-full bg-white"
              />
              <motion.span
                animate={isOpen ? { bottom: "50%", rotate: -45, backgroundColor: "#ffffff", y: 1 } : { bottom: "0%", rotate: 0, backgroundColor: "#ffffff", y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute left-0 w-full h-0.5 rounded-full origin-center bg-white"
                style={{ bottom: "0%" }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#0C2E59] flex flex-col pt-24 overflow-hidden"
          >
            {/* Background Grain Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            {/* Content Container - Scrollable full width */}
            <div className="relative z-10 flex-1 w-full overflow-y-auto no-scrollbar flex flex-col px-8 md:px-24">

              <div className="flex flex-col space-y-4 min-h-min pb-4">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{
                      delay: 0.1 + (i * 0.08),
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`w-full ${'isSpecial' in item ? 'flex flex-col items-center py-6' : ''}`}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group relative inline-flex items-center gap-3 text-4xl sm:text-5xl md:text-7xl font-cinzel font-normal tracking-wide text-white hover:text-[#BF9B8E] transition-colors duration-300 ${'isSpecial' in item ? 'text-center flex-col' : ''}`}
                    >
                      {'icon' in item && <span className={`${'isSpecial' in item ? 'w-16 h-16' : 'w-8 h-8'} flex items-center justify-center`}>{item.icon}</span>}
                      <span className="relative">
                        {item.label}
                        <motion.span
                          className="absolute -bottom-2 left-0 w-0 h-1 bg-[#BF9B8E] group-hover:w-full transition-all duration-500"
                        />
                      </span>
                      <span className={`hidden md:inline-block ml-4 text-sm font-bold text-[#BF9B8E] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono ${'isSpecial' in item ? 'mt-4 ml-0' : ''}`}>
                        0{i + 1}
                      </span>
                    </a>
                    {item.hasDropdown && (
                      <div className="ml-2 mt-2 flex flex-col gap-2 pl-4 border-l border-[#BF9B8E]/30">
                        {item.dropdownItems.map((sub, j) => (
                          <div key={sub.label} className="flex flex-col gap-2">
                            {sub.href ? (
                              <a
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="text-white/60 hover:text-white text-xs sm:text-sm font-mono tracking-widest uppercase transition-colors"
                              >
                                {sub.label}
                              </a>
                            ) : (
                              <span className="text-[#BF9B8E]/60 text-xs sm:text-sm font-mono tracking-widest uppercase">
                                {sub.label}
                              </span>
                            )}

                            {'subItems' in sub && sub.subItems && (
                              <div className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-2">
                                {sub.subItems.map((nested) => (
                                  <a
                                    key={nested.label}
                                    href={nested.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/40 hover:text-white text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-colors"
                                  >
                                    {nested.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FIXED BOTTOM FOOTER MOBILE */}
            <div className="relative z-20 flex-none w-full bg-[#0C2E59]/95 border-t border-white/5 pb-6 pt-4 px-6 flex flex-col items-center gap-4 sm:hidden">
              <button
                className="w-full max-w-sm bg-[#BF9B8E] text-white font-bold px-7 py-4 rounded-sm flex justify-center items-center gap-2 hover:bg-[#ae8a7e] transition-all text-xs tracking-[0.3em] uppercase shadow-lg shadow-[#BF9B8E]/20"
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact?.();
                }}
              >
                RESERVER UN APPEL
              </button>

              <div className="flex space-x-8">
                <a href="https://www.linkedin.com/in/corruptionexpert/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/probitas_off/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://substack.com/@farahzaoui" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  {/* Substack Icon */}
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><title>Substack</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>
                </a>
              </div>
            </div>


            {/* Bottom Info DESKTOP - Absolute Fixed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-8 md:left-24 right-8 hidden md:flex flex-row justify-between items-end gap-8 pointer-events-none"
            >
              <div className="space-y-2 pointer-events-auto">
                <p className="text-[#BF9B8E] text-[10px] font-bold uppercase tracking-[0.4em] font-mono">Contact</p>
                <a href="mailto:contact@probitas-conseil.fr" className="text-white text-lg font-light hover:text-[#BF9B8E] transition-colors">contact@probitas-conseil.fr</a>
              </div>

              <div className="flex space-x-8 pointer-events-auto">
                <a href="https://www.linkedin.com/in/corruptionexpert/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors hover:scale-110 transform duration-300">
                  <Linkedin className="w-6 h-6" strokeWidth={1.5} />
                </a>
                <a href="https://www.instagram.com/probitas_off/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors hover:scale-110 transform duration-300">
                  <Instagram className="w-6 h-6" strokeWidth={1.5} />
                </a>
                <a href="https://substack.com/@farahzaoui" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors hover:scale-110 transform duration-300">
                  {/* Substack Icon */}
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><title>Substack</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>
                </a>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full pointer-events-none opacity-5">
              <div className="w-full h-full border-l border-white/10 flex items-center justify-center">
                <span className="rotate-90 text-[15vh] font-cinzel font-black text-white select-none tracking-tighter whitespace-nowrap">PROBITAS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TestimonialGrid } from './TestimonialGrid';
import { TestimonialSlider } from './TestimonialSlider';
import { ContactSection } from './ContactSection';
import SEO from './SEO';
import ArtisticFooter from './ArtisticFooter';

const TestimonialsPage: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-full bg-[#06162d] flex flex-col pt-32 md:pt-40">
            <SEO
                title="Témoignages | Probitas"
                description="Découvrez les retours d'expérience de nos clients sur nos formations, accompagnements et ateliers de sensibilisation à l'éthique et l'anticorruption."
            />

            {/* Background Ambience Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[80vw] h-[80vw] bg-[#BF9B8E]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute -bottom-[10%] -left-[10%] w-[80vw] h-[80vw] bg-white/5 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
            </div>

            {/* HERO SECTION WITH SLIDER */}
            <header className="relative z-10 w-full mb-32 h-[80vh] min-h-[600px]">
                <TestimonialSlider />

                {/* Overlay with main title */}
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center gap-6"
                    >
                        <img src="/assets/attorney-1.png" alt="" className="w-12 h-auto opacity-30" />
                        <h1 className="text-4xl md:text-6xl font-cinzel font-black uppercase tracking-tighter text-white/90">
                            Mur d'Intégrité
                        </h1>
                        <img src="/assets/attorney-1.png" alt="" className="w-12 h-auto opacity-30 rotate-180" />
                    </motion.div>
                </div>
            </header>

            {/* INTRO TEXT BELOW SLIDER */}
            <section className="relative z-10 container mx-auto px-6 mb-32 text-center">
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-4xl font-serif italic text-[#BF9B8E] mb-8"
                    >
                        Nos clients sont les mieux placés pour parler de nous !
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-white/40 text-sm md:text-base font-mono uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-8"
                    >
                        Ingénierie de formation, coaching stratégique & sensibilisation.
                        Une bibliothèque de confiance et d'expertise.
                    </motion.p>
                </div>
            </section>

            <main className="relative z-10 container mx-auto px-6 mb-48">
                <TestimonialGrid onOpenContact={onOpenContact} />
            </main>

            {/* CTA / CONTACT SECTION */}
            <section className="relative z-10 bg-[#0C2E59]/80 border-y border-white/5 py-32 md:py-48 mb-24 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-[11px] font-mono text-[#BF9B8E] tracking-[1em] uppercase mb-8 block"
                            >
                                Parlons de vous
                            </motion.span>
                            <h3 className="text-4xl md:text-6xl font-cinzel font-black uppercase text-white mb-12 leading-tight">
                                Et si nous parlions de <span className="text-[#BF9B8E] italic font-serif lowercase">vos besoins ?</span>
                            </h3>
                            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12">
                                Chaque projet est unique. Complétez ce formulaire et nous vous contacterons sous 24h pour concevoir ensemble la solution qui vous ressemble.
                            </p>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-[1px] bg-[#BF9B8E]/30 group-hover:w-24 transition-all duration-700" />
                                    <a href="mailto:contact@probitas-conseil.fr" className="text-white hover:text-[#BF9B8E] transition-colors font-mono tracking-widest text-sm">
                                        contact@probitas-conseil.fr
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#06162d]/50 p-8 md:p-12 border border-white/5 rounded-sm">
                            <ContactSection />
                        </div>
                    </div>
                </div>

                {/* Decorative Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none opacity-[0.02] overflow-hidden whitespace-nowrap">
                    <span className="text-[40vw] font-cinzel font-black uppercase tracking-tighter">PROBITAS</span>
                </div>
            </section>

            {/* SPACER FOR GLOBAL FOOTER */}
            <div className="pb-24" />
        </div>
    );
};

export default TestimonialsPage;

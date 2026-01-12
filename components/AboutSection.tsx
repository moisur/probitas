
import React from 'react';
import { motion } from 'framer-motion';
import { guidesData, Guide } from '../data/guides';

interface AboutSectionProps {
    onOpenGuideModal?: (guide: Guide) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onOpenGuideModal }) => {
    return (
        <section id="intervenants" className="py-32 bg-[#F1F0ED] relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#BF9B8E]/5 -skew-x-12 transform translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#BF9B8E] font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
                    >
                        L'Humain au cœur
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-cinzel text-4xl md:text-5xl text-[#0C2E59] font-bold"
                    >
                        Vos <span className="text-[#BF9B8E] italic font-serif">Guides</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto mt-6 font-sans text-[#0C2E59]/70 text-lg leading-relaxed font-light"
                    >
                        Des experts passionnés, choisis pour leur double compétence technique et humaine, capables de tenir un espace sécurisant pour votre transformation éthique.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {guidesData.map((guide, index) => (
                        <motion.div
                            key={guide.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="group flex flex-col items-center text-center cursor-pointer"
                            onClick={() => onOpenGuideModal && onOpenGuideModal(guide)}
                        >
                            <div className="relative w-64 h-80 rounded-sm overflow-hidden shadow-xl mb-8 border border-[#0C2E59]/10">
                                <div className="absolute inset-0 bg-[#0C2E59]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={guide.imageUrl}
                                    alt={guide.name}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    loading="lazy"
                                />

                                {/* Overlay effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2E59]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-6">
                                    <span className="text-[#BF9B8E] font-cinzel tracking-widest text-sm uppercase border-b border-[#BF9B8E]">Voir le profil</span>
                                </div>
                            </div>

                            <h3 className="font-cinzel text-2xl text-[#0C2E59] font-bold group-hover:text-[#BF9B8E] transition-colors">{guide.name}</h3>
                            <p className="mt-2 font-serif text-[#BF9B8E] italic">{guide.role}</p>
                            <p className="mt-4 text-sm font-sans text-[#0C2E59]/70 max-w-xs leading-relaxed">{guide.shortDescription}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

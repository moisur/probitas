import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, CheckCircle2, FileText, Settings, Crown, ArrowRight } from 'lucide-react';

const PreventionPage: React.FC = () => {
    const references = [
        "Centre de gestion de Seine-et-Marne (77) – Prévention des conflits d’intérêts chez les agents publics – 2023",
        "Babiloup – Les fondamentaux de la compliance à destination des compliance officers en France et à l’étranger",
        "Centre de gestion de Seine-et-Marne (77) – Prévention des conflits d’intérêts chez les élus locaux – 2023",
        "Communauté Intercommunale de la Réunion (CINOR) – Prévention des conflits d’intérêts chez les agents publics – 2023",
        "Communauté Intercommunale de la Réunion (CINOR) – Prévention des conflits d’intérêts chez les élus locaux – 2024",
        "Direction Régionale et Départementale de la Jeunesse et des Sports (DRAJES) – Cadeaux invitations : quelle politique adopter à l’approche des JO2024 ? – 2024"
    ];

    const offers = [
        {
            title: "Basique",
            icon: <FileText size={40} />,
            description: "Préparation d’un support généraliste sur la prévention des atteintes à la probité et autres risques juridiques au sein du secteur public ou privé au sens large."
        },
        {
            title: "Confort",
            icon: <Settings size={40} />,
            description: "Nous vous proposons un plan personnalisé :",
            details: [
                "Vous le validez",
                "Nous vous transmettons le support finalisé 15 jours avant l’évènement",
                "Vous nous remontez vos demandes de corrections et d’ajouts (un AR maximum)"
            ]
        },
        {
            title: "Premium",
            icon: <Crown size={40} />,
            description: "Une prestation sur-mesure pour une efficacité maximale :",
            details: [
                "Rendez-vous de cadrage",
                "Proposition d’un plan détaillé",
                "Echanges illimités sur le support",
                "Support finalisé et validé ensemble"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20 font-sans">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <header className="mb-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-cinzel font-black tracking-wider uppercase mb-6"
                    >
                        Sensibilisation <br /><span className="text-[#BF9B8E]">Anticorruption</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 w-24 bg-[#BF9B8E] mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-white/80 font-serif italic max-w-3xl mx-auto"
                    >
                        Ateliers impactants et interactifs pour diffuser la culture de l'intégrité.
                    </motion.p>
                </header>

                {/* La Démarche */}
                <section className="mb-32">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-8"
                        >
                            <h2 className="text-3xl font-cinzel font-bold text-[#BF9B8E] tracking-widest uppercase flex items-center gap-4">
                                <Shield className="text-[#BF9B8E]" />
                                La Démarche
                            </h2>
                            <div className="text-white/80 text-lg leading-relaxed space-y-6 font-light">
                                <p>
                                    En tant que spécialistes de l’anticorruption, nous sommes engagés dans la <strong>promotion de la culture de l’intégrité</strong> au sein de vos organisations. Notre objectif est d’aider les élus, les agents publics et les entreprises à comprendre et à atténuer les risques de corruption.
                                </p>
                                <p>
                                    Nous vous proposons des <strong>interventions personnalisées</strong> pour sensibiliser vos équipes à identifier et prévenir les différentes formes de corruption, ainsi qu’aux conséquences néfastes qu’elle peut engendrer.
                                </p>
                                <p>
                                    À travers des ateliers interactifs et adaptés à chaque contexte, nous encourageons vos employés à développer les <strong>bons réflexes</strong> et à adopter des <strong>pratiques éthiques</strong> dans leurs activités professionnelles quotidiennes.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute inset-0 border-2 border-[#BF9B8E]/30 translate-x-4 translate-y-4 rounded-sm" />
                            {/* Using a placeholder or the image from the legacy site if available. 
                  Since I don't have the exact image asset locally confirmed, I'll use a high quality Unsplash image relevant to 'speaking' or 'meeting' */}
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                                alt="Atelier Sensibilisation"
                                className="relative z-10 rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Le Public */}
                <section className="mb-32 bg-[#081d38] p-12 rounded-sm border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#BF9B8E]/5 rounded-full blur-3xl" />

                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-cinzel font-bold text-white tracking-widest uppercase mb-4">
                            Pour Qui ?
                        </h2>
                        <div className="w-12 h-1 bg-[#BF9B8E] mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { label: "Élus locaux & nationaux", icon: <Award size={32} /> },
                            { label: "Agents publics", icon: <Users size={32} /> },
                            { label: "Salariés d'entreprises", icon: <BriefcaseIcon size={32} /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-white/5 rounded-sm border border-white/10 hover:border-[#BF9B8E] transition-colors group"
                            >
                                <div className="w-16 h-16 bg-[#0C2E59] rounded-full flex items-center justify-center mx-auto mb-6 text-[#BF9B8E] group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-cinzel font-bold text-white uppercase">{item.label}</h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Nos Réalisations */}
                <section className="mb-32">
                    <h2 className="text-3xl font-cinzel font-bold text-white tracking-widest uppercase mb-12 flex items-center gap-4">
                        <CheckCircle2 className="text-[#BF9B8E]" />
                        Nos Réalisations
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {references.map((ref, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white/5 border-l-4 border-[#BF9B8E] p-6 hover:bg-white/10 transition-colors"
                            >
                                <p className="font-serif text-lg text-white/90">{ref}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Nos Offres */}
                <section id="offres" className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-cinzel font-bold text-white tracking-widest uppercase mb-4">
                            Nos Offres
                        </h2>
                        <p className="text-white/60 font-serif italic text-lg">Trois niveaux d'accompagnement pour vos besoins</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {offers.map((offer, idx) => (
                            <motion.div
                                key={offer.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#081d38] border border-white/10 rounded-sm p-8 flex flex-col hover:border-[#BF9B8E] transition-all hover:shadow-[0_0_30px_rgba(191,155,142,0.1)]"
                            >
                                <div className="mb-6 text-[#BF9B8E]">{offer.icon}</div>
                                <h3 className="text-2xl font-cinzel font-bold text-white uppercase mb-4">{offer.title}</h3>
                                <p className="text-white/70 mb-8 font-light flex-grow">{offer.description}</p>

                                {offer.details && (
                                    <ul className="space-y-3 mb-8">
                                        {offer.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#BF9B8E] shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <a href="#contact" className="mt-auto w-full py-4 border border-[#BF9B8E] text-[#BF9B8E] text-center font-bold uppercase tracking-widest hover:bg-[#BF9B8E] hover:text-[#0C2E59] transition-all rounded-sm text-sm">
                                    Demander un devis
                                </a>
                            </motion.div>
                        ))}
                    </div>

                </section>

                {/* Contact CTA */}
                <div className="text-center pt-20 border-t border-white/10">
                    <p className="text-white/60 mb-6 font-mono text-sm uppercase tracking-widest">
                        Une demande spécifique ?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-4 bg-[#BF9B8E] text-white font-bold py-5 px-12 rounded-sm hover:bg-[#ae8a7e] transition-all tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        Contactez-nous <ArrowRight size={20} />
                    </a>
                </div>

            </div>
        </div>
    );
};

// Simple icon wrapper since BriefcaseIcon might not be exported directly or under that name from lucide-react in all versions
// Using a fallback if needed, but Briefcase is standard.
const BriefcaseIcon = ({ size }: { size: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

export default PreventionPage;

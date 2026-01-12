import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    Clock,
    Gavel,
    Users,
    FileText,
    GitBranch,
    AlertTriangle,
    BookOpen,
    ArrowRight,
    Download
} from 'lucide-react';

const MunicipalesPage: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pillars = [
        {
            icon: <Users className="w-8 h-8 text-[#BF9B8E]" />,
            title: "Gestion des conflits d'intérêts",
            desc: "Cadeaux/invitations, déports, transparence et sécurisation des décisions au quotidien."
        },
        {
            icon: <GitBranch className="w-8 h-8 text-[#BF9B8E]" />,
            title: "Sécurisation des décisions et circuits",
            desc: "Mise en place des procédures et réflexes dès les premiers jours du mandat."
        },
        {
            icon: <Gavel className="w-8 h-8 text-[#BF9B8E]" />,
            title: "Commandes publiques & délégations",
            desc: "Prévention des risques de favoritisme et atteintes à la probité dans les marchés."
        },
        {
            icon: <AlertTriangle className="w-8 h-8 text-[#BF9B8E]" />,
            title: "Prévention des risques de capture",
            desc: "Identifier et contrer les tentatives de favoritisme ou d'influence indue."
        },
        {
            icon: <Shield className="w-8 h-8 text-[#BF9B8E]" />,
            title: "Premiers outils & réflexes",
            desc: "Registres, procédures, gouvernance, charte/guide interne pour les équipes élues."
        },
        {
            icon: <BookOpen className="w-8 h-8 text-[#BF9B8E]" />,
            title: "Formation des équipes",
            desc: "Sensibilisation des élus et de l'administration aux bonnes pratiques."
        }
    ];

    const partners = [
        { name: "La Gazette des Communes", role: "Média partenaire" },
        { name: "Koncilio", role: "Centre de formation pour élus" },
        { name: "Newsletter Entourage", role: "Diffusion" },
        { name: "SCET", role: "Relecture en cours" }
    ];

    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20">
            {/* Hero Section */}
            <div className="container mx-auto px-6 mb-32">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-[#BF9B8E]" />
                        <span className="text-[#BF9B8E] font-mono text-[10px] tracking-[0.5em] uppercase">Projet Spécial 2026</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-cinzel font-black text-white leading-[0.9] uppercase mb-12">
                        100 PREMIERS JOURS <br />
                        <span className="text-[#BF9B8E] italic font-serif lowercase">d'un mandat intègre</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/70 font-serif italic max-w-3xl leading-snug mb-8">
                        Un programme probité & sécurisation des décisions destiné aux équipes nouvellement élues et à l'administration.
                    </p>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-12 max-w-2xl">
                        <p className="text-white/60 text-sm">
                            <strong className="text-[#BF9B8E]">Important :</strong> Il ne s'agit pas d'une offre de communication pré-électorale. C'est un programme centré sur la probité et la sécurisation des décisions.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <button className="bg-[#BF9B8E] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#ae8a7e] transition-all flex items-center gap-3">
                            <Download className="w-4 h-4" /> Télécharger le guide (Février 2026)
                        </button>
                        <button
                            onClick={onOpenContact}
                            className="border border-white/20 text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
                        >
                            Demander un devis
                        </button>
                    </div>
                </div>
            </div>

            {/* Program Pillars */}
            <section className="bg-white/5 py-32 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-black uppercase mb-4">Le Programme</h2>
                        <p className="text-white/50 font-serif italic">6 piliers pour un mandat en toute sérénité</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-6 p-8 bg-[#0C2E59] border border-white/10 rounded-2xl hover:border-[#BF9B8E]/30 transition-colors"
                            >
                                {pillar.icon}
                                <h3 className="text-xl font-cinzel font-bold text-white uppercase">{pillar.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Freebie Section */}
            <section className="container mx-auto px-6 py-32">
                <div className="bg-[#BF9B8E] text-[#0C2E59] p-12 md:p-20 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] mb-4 block">Freebie - Février 2026</span>
                        <h2 className="text-3xl md:text-5xl font-cinzel font-black uppercase mb-8">Guide Gratuit : 100 Premiers Jours</h2>
                        <p className="text-xl font-serif italic mb-12 opacity-80">
                            Recevez le guide complet pour démarrer un mandat en toute intégrité. Un livrable collaboratif avec nos partenaires.
                        </p>
                        <button className="bg-[#0C2E59] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3">
                            Être notifié à la sortie <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 hidden lg:block">
                        <Clock className="w-96 h-96" />
                    </div>
                </div>
            </section>

            {/* Strategic Partnerships */}
            <section className="container mx-auto px-6 pb-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-cinzel font-black uppercase mb-4">
                        UN ÉCOSYSTÈME <span className="text-[#BF9B8E]">D'EXPERTISE</span>
                    </h2>
                    <p className="text-white/50 font-serif italic">En partenariat avec des acteurs majeurs du secteur public</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-8 bg-white/5 border border-white/10 rounded-xl"
                        >
                            <h3 className="font-cinzel font-bold text-sm uppercase tracking-widest mb-2">{partner.name}</h3>
                            <p className="text-white/40 text-xs">{partner.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MunicipalesPage;

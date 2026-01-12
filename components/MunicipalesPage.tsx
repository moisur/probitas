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
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 md:pt-48 pb-40 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">

                {/* Editorial Header - AgendaPage Style */}
                <header className="mb-32 relative">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                            <span className="text-[#BF9B8E] font-bold text-[10px] uppercase tracking-[0.4em]">Projet Spécial 2026</span>
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[9vw] font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-white uppercase">
                            100 PREMIERS JOURS <br />
                            <span className="italic font-light text-white/40">D'UN MANDAT INTÈGRE.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-200/60 font-light max-w-xl leading-snug mt-8">
                            Un programme probité & sécurisation destiné aux équipes nouvellement élues et à l'administration.
                        </p>

                        <div className="bg-white/5 border border-white/10 p-6 rounded-sm mt-8 max-w-xl">
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                                <strong className="text-[#BF9B8E]">Précision :</strong> Ce programme est centré sur la sécurisation des décisions et la probité, et ne constitue pas une offre de communication électorale.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 mt-12">
                            <button className="bg-[#BF9B8E] text-[#0C2E59] px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white transition-all flex items-center gap-3 shadow-2xl">
                                <Download className="w-4 h-4" />
                                Télécharger le guide (Fév. 2026)
                            </button>
                            <button
                                onClick={onOpenContact}
                                className="border border-white/20 text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#0C2E59] transition-all"
                            >
                                Demander un devis
                            </button>
                        </div>
                    </div>
                </header>

                {/* Program Pillars - Editorial Grid */}
                <div className="mb-40">
                    <div className="flex items-center gap-4 mb-20">
                        <div className="h-px flex-1 bg-white/10" />
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-white">LE <span className="text-[#BF9B8E]/40 font-light italic">PROGRAMME.</span></h2>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => (
                            <div
                                key={i}
                                className="group bg-[#081d38] border border-white/5 p-10 rounded-sm relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-[#BF9B8E]/30"
                            >
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#BF9B8E]/10 group-hover:bg-[#BF9B8E] transition-colors" />
                                <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500">{pillar.icon}</div>
                                <h3 className="text-xl font-cinzel font-black text-white uppercase mb-4 leading-tight group-hover:text-[#BF9B8E] transition-colors duration-500">{pillar.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Guide CTA - Restored "Plus Joli" Style */}
                <div className="mb-40 bg-[#BF9B8E] text-[#0C2E59] p-12 md:p-20 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
                    <div className="relative z-10 text-center md:text-left">
                        <p className="text-[#0C2E59]/60 mb-4 font-black text-[10px] uppercase tracking-[0.4em]">Livrable Collaboratif</p>
                        <h3 className="text-3xl md:text-5xl font-cinzel font-black uppercase leading-tight tracking-tighter">
                            GUIDE GRATUIT : <br /> <span className="opacity-40 font-light italic">100 PREMIERS JOURS.</span>
                        </h3>
                        <p className="text-[#0C2E59]/70 mt-6 max-w-xl font-light leading-relaxed">
                            Un outil pratique conçu avec nos partenaires pour sécuriser les premiers pas de votre mandat. Disponible en février 2026.
                        </p>
                    </div>
                    <button
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-4 bg-[#0C2E59] text-white font-black py-6 px-12 rounded-sm hover:scale-105 active:scale-95 transition-all tracking-[0.2em] uppercase text-xs shadow-2xl relative z-10"
                    >
                        Être notifié à la sortie
                        <ArrowRight size={16} />
                    </button>
                    {/* Watermark "M" */}
                    <div className="absolute top-0 right-0 text-[18rem] font-cinzel font-black opacity-10 -mr-12 -mt-20 leading-none pointer-events-none select-none">
                        M
                    </div>
                </div>

                {/* Strategic Partnerships - Stylized */}
                <div className="pt-32 border-t border-white/5">
                    <div className="text-center mb-20">
                        <span className="text-[#BF9B8E] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">ÉCOSYSTÈME D'EXPERTISE</span>
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-white">PARTENAIRES <span className="text-[#BF9B8E]/40 font-light italic">STRATÉGIQUES.</span></h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {partners.map((partner, i) => (
                            <div
                                key={i}
                                className="text-center group p-8 border border-white/5 hover:border-[#BF9B8E]/20 transition-all duration-500 rounded-sm bg-white/2"
                            >
                                <h3 className="font-cinzel font-black text-xs uppercase tracking-widest text-[#BF9B8E]/60 group-hover:text-[#BF9B8E] transition-colors mb-2">{partner.name}</h3>
                                <div className="h-px w-4 bg-white/10 mx-auto mb-4 group-hover:w-8 transition-all duration-500" />
                                <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em] font-mono group-hover:text-white/50 transition-colors">{partner.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MunicipalesPage;

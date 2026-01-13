import React from 'react';
import { motion } from 'framer-motion';
import {
    Mic,
    Users,
    FileText,
    Presentation,
    MessageSquare,
    ArrowRight,
    Calendar
} from 'lucide-react';

const SensibilisationPage: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
    // Removed specific scrollTo to allow global hash handling

    const services = [
        {
            id: "conferences",
            icon: <Mic className="w-10 h-10" />,
            title: "Conférences",
            desc: "Interventions pédagogiques et impactantes pour sensibiliser vos équipes ou vos partenaires aux enjeux de l'intégrité.",
            details: [
                "Conférences plénières",
                "Keynotes événementiels",
                "Tables rondes modérées",
                "Webinaires interactifs"
            ]
        },
        {
            id: "ateliers",
            icon: <Users className="w-10 h-10" />,
            title: "Animation d'Ateliers",
            desc: "Sessions interactives et participatives pour ancrer les réflexes éthiques dans le quotidien professionnel.",
            details: [
                "Ateliers de mise en situation",
                "Études de cas pratiques",
                "Jeux de rôle décisionnels",
                "Sessions de co-construction"
            ]
        },
        {
            id: "articles",
            icon: <FileText className="w-10 h-10" />,
            title: "Rédaction d'Articles & Contenus",
            desc: "Production de contenus experts pour renforcer votre positionnement et diffuser la culture de l'intégrité.",
            details: [
                "Articles de fond",
                "Tribunes d'expertise",
                "Guides pratiques",
                "Newsletters thématiques"
            ]
        }
    ];

    const formats = [
        { label: "Présentiel", desc: "Dans vos locaux ou lieu de votre choix" },
        { label: "Distanciel", desc: "Webinaires et visioconférences" },
        { label: "Hybride", desc: "Combinaison des deux formats" }
    ];

    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 md:pt-48 pb-40 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">

                {/* Editorial Header - AgendaPage Style */}
                <header className="mb-32 relative">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                            <span className="text-[#BF9B8E] font-bold text-[10px] uppercase tracking-[0.4em]">Conférences & Ateliers</span>
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[9vw] font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-white uppercase">
                            SENSIBILISATION <br />
                            <span className="italic font-light text-white/40">& RAYONNEMENT.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-200/60 font-light max-w-xl leading-snug mt-8">
                            Conférences impactantes et ateliers immersifs pour ancrer durablement la culture de l'intégrité.
                        </p>
                    </div>
                </header>

                {/* Services Grid - Editorial Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-40">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            id={`sensibilisation - ${service.id} `}
                            className="group bg-[#081d38] border border-white/5 p-10 rounded-sm relative overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-[#BF9B8E]/30 transition-all duration-500 scroll-mt-48 flex flex-col"
                        >
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#BF9B8E]/10 group-hover:bg-[#BF9B8E] transition-colors" />
                            <div className="text-[#BF9B8E]/40 group-hover:text-[#BF9B8E] transition-colors mb-8 duration-500">{service.icon}</div>
                            <h3 className="text-2xl font-cinzel font-black uppercase mb-6 group-hover:text-[#BF9B8E] transition-colors duration-500">{service.title}</h3>
                            <p className="text-white/40 group-hover:text-white/70 transition-colors duration-500 mb-8 leading-relaxed font-light">{service.desc}</p>
                            <ul className="space-y-4 mt-auto">
                                {service.details.map((detail, j) => (
                                    <li key={j} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white/40 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-sm bg-[#BF9B8E]/20 group-hover:bg-[#BF9B8E]/50" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Formats Section - Simplified & Stylish */}
                <div className="py-32 border-t border-white/5">
                    <div className="flex items-center gap-4 mb-20">
                        <div className="h-px flex-1 bg-white/10" />
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-white">NOS <span className="text-[#BF9B8E]/40 font-light italic">FORMATS.</span></h2>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
                        {formats.map((format, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-[#BF9B8E] font-black text-xs uppercase tracking-[0.4em] mb-4 group-hover:scale-110 transition-transform duration-500">{format.label}</div>
                                <div className="h-px w-8 bg-[#BF9B8E]/20 mx-auto mb-6 group-hover:w-16 transition-all duration-500" />
                                <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors">{format.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA - Restored "Plus Joli" Style */}
                <div className="mt-40 bg-[#BF9B8E] text-[#0C2E59] p-12 md:p-20 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
                    <div className="relative z-10 text-center md:text-left">
                        <p className="text-[#0C2E59]/60 mb-4 font-black text-[10px] uppercase tracking-[0.5em]">Collaboration & Rayonnement</p>
                        <h3 className="text-3xl md:text-5xl font-cinzel font-black uppercase leading-tight tracking-tighter">
                            ORGANISONS <br /> VOTRE PROCHAINE <br /> <span className="opacity-40 font-light italic">INTERVENTION.</span>
                        </h3>
                    </div>
                    <button
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-4 bg-[#0C2E59] text-white font-black py-6 px-12 rounded-sm hover:scale-105 active:scale-95 transition-all tracking-[0.2em] uppercase text-xs shadow-2xl relative z-10"
                    >
                        Discuter de votre projet
                        <ArrowRight size={16} />
                    </button>
                    {/* Watermark "S" */}
                    <div className="absolute top-0 right-0 text-[18rem] font-cinzel font-black opacity-10 -mr-12 -mt-20 leading-none pointer-events-none select-none">
                        S
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SensibilisationPage;

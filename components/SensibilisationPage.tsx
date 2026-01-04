import React, { useEffect } from 'react';
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

const SensibilisationPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20">
            {/* Header */}
            <div className="container mx-auto px-6 mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-12 bg-[#BF9B8E]" />
                    <span className="text-[#BF9B8E] font-mono text-[10px] tracking-[0.5em] uppercase">Pilier 3</span>
                </motion.div>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-cinzel font-black text-white leading-[0.9] uppercase mb-12">
                    SENSIBILISATION <br />
                    <span className="text-[#BF9B8E] italic font-serif lowercase">& rayonnement</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 font-serif italic max-w-3xl leading-snug">
                    Conférences, ateliers et production de contenus pour diffuser la culture de l'intégrité et renforcer votre positionnement.
                </p>
            </div>

            {/* Services */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            id={`sensibilisation-${service.id === 'conferences' ? '' : service.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:border-[#BF9B8E]/30 transition-colors scroll-mt-32"
                        >
                            <div className="text-[#BF9B8E] mb-8">{service.icon}</div>
                            <h3 className="text-2xl font-cinzel font-black uppercase mb-6">{service.title}</h3>
                            <p className="text-white/60 mb-8 leading-relaxed">{service.desc}</p>
                            <ul className="space-y-3">
                                {service.details.map((detail, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-white/50">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#BF9B8E]" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Formats */}
            <section className="bg-white/5 py-24 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-3xl font-cinzel font-black uppercase mb-16">Nos Formats</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {formats.map((format, i) => (
                            <div key={i} className="text-center p-8">
                                <h3 className="text-xl font-cinzel font-bold text-[#BF9B8E] uppercase mb-4">{format.label}</h3>
                                <p className="text-white/50 text-sm">{format.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 py-32">
                <div className="bg-[#BF9B8E] text-[#0C2E59] p-12 md:p-20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-black uppercase mb-4">Organiser une intervention ?</h2>
                        <p className="text-lg opacity-80">Contactez-nous pour discuter de vos besoins en sensibilisation.</p>
                    </div>
                    <button className="whitespace-nowrap bg-[#0C2E59] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3">
                        <Calendar className="w-4 h-4" /> Planifier un échange
                    </button>
                    <div className="absolute top-0 right-0 text-[12rem] font-cinzel font-black opacity-10 -mr-10 -mt-10 leading-none">S</div>
                </div>
            </section>
        </div>
    );
};

export default SensibilisationPage;

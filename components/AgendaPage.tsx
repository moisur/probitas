import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

interface Event {
    id: number;
    date: string;
    location: string;
    organization: string;
    topic: string;
    period?: string; // e.g., "4e trimestre 2025"
}

// Data extracted from acopier/agenda/index.html
const events: Event[] = [
    {
        id: 1,
        period: "4e trimestre 2025",
        date: "01/10",
        location: "La Rochelle",
        organization: "Communauté d’Agglomération de La Rochelle",
        topic: "Maîtriser la communication pré-électorale"
    },
    {
        id: 2,
        date: "03/10",
        location: "Paris",
        organization: "Sénat / HATVP",
        topic: "Atelier « prévention des risques associés à la représentation de la collectivité au sein d’organismes extérieurs », animé lors de la 6e rencontre annuelle des déontologues de la sphère publique"
    },
    {
        id: 3,
        date: "06 et 07/10",
        location: "Montpellier",
        organization: "SCET",
        topic: "Dispositif de sensibilisation aux règles de déontologie auprès d’élus"
    },
    {
        id: 4,
        date: "07 et 09/10",
        location: "à distance",
        organization: "AELO",
        topic: "Communication pré-électorale"
    },
    {
        id: 5,
        date: "13/10",
        location: "Paris",
        organization: "Achat Public",
        topic: "Le risque pénal dans les marchés publics"
    },
    {
        id: 6,
        date: "du 15 au 24/10",
        location: "Mayotte",
        organization: "Commune de Tsingoni",
        topic: "Mission de sensibilisation et de cartographie des risques anticorruption"
    },
    {
        id: 7,
        period: "4e trimestre 2025 (suite)",
        date: "05/11",
        location: "Paris",
        organization: "Comité National Olympique et Sportif Français",
        topic: "Consolider le dispositif anticorruption dans le secteur sportif"
    }
];

const AgendaPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20 font-sans">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <header className="mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-cinzel font-black tracking-wider uppercase mb-6"
                    >
                        Agenda <span className="text-[#BF9B8E]">Probitas</span>
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
                        Rejoignez-nous lors de nos prochaines interventions auprès de nos partenaires.
                    </motion.p>
                </header>

                {/* Timeline / Events Grid */}
                <div className="max-w-4xl mx-auto">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Period Header if present */}
                            {event.period && (
                                <div className="md:ml-[-2rem] mb-8 mt-12 bg-[#BF9B8E] text-[#0C2E59] font-cinzel font-bold py-2 px-6 rounded-r-lg inline-block shadow-lg">
                                    {event.period}
                                </div>
                            )}

                            <div className="mb-8 md:flex gap-6 group">
                                {/* Date Column */}
                                <div className="md:w-1/4 mb-4 md:mb-0">
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center group-hover:border-[#BF9B8E]/50 transition-colors h-full flex flex-col justify-center">
                                        <Calendar className="mx-auto mb-2 text-[#BF9B8E]" size={24} />
                                        <span className="text-xl font-bold font-mono text-white block">{event.date}</span>
                                        <div className="flex items-center justify-center gap-1 mt-2 text-white/50 text-xs uppercase tracking-wider">
                                            <MapPin size={12} />
                                            {event.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="md:w-3/4 bg-[#081d38] border border-white/10 p-6 rounded-lg relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(191,155,142,0.1)] transition-all">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#BF9B8E]/50 group-hover:bg-[#BF9B8E] transition-colors" />

                                    <h3 className="text-[#BF9B8E] font-cinzel font-bold text-lg mb-2 flex items-center gap-2">
                                        <Building2 size={18} />
                                        {event.organization}
                                    </h3>
                                    <p className="text-white/80 font-serif leading-relaxed text-lg">
                                        {event.topic}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-20 text-center">
                    <p className="text-white/60 mb-6 font-mono text-sm uppercase tracking-widest">
                        Vous souhaitez organiser une intervention ?
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-[#BF9B8E] text-white font-bold py-4 px-10 rounded-sm hover:bg-[#ae8a7e] transition-all tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        Contactez-nous
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AgendaPage;

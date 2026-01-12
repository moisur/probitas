import React, { useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building2, ChevronDown, ChevronUp, History, Filter, X, ArrowRight } from 'lucide-react';

const farahImg = '/assets/Farah.jpg';

interface Event {
    id: number;
    date: string;
    location: string;
    organization: string;
    topic: string;
    periodGroup: string; // The semester/quarter name
    year: string;
    isDistance: boolean;
}

interface ArchiveItem {
    name: string;
    items: string[];
}

interface ArchivePeriod {
    id: string;
    title: string;
    months: ArchiveItem[];
}

const events: Event[] = [
    {
        id: 1,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "01/10",
        location: "La Rochelle",
        organization: "Communauté d’Agglomération de La Rochelle",
        topic: "Maîtriser la communication pré-électorale"
    },
    {
        id: 2,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "03/10",
        location: "Paris",
        organization: "Sénat / HATVP",
        topic: "Atelier « prévention des risques associés à la représentation de la collectivité au sein d’organismes extérieurs », animé lors de la 6e rencontre annuelle des déontologues de la sphère publique"
    },
    {
        id: 3,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "06 et 07/10",
        location: "Montpellier",
        organization: "SCET",
        topic: "Dispositif de sensibilisation aux règles de déontologie auprès d’élus"
    },
    {
        id: 4,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: true,
        date: "07 et 09/10",
        location: "à distance",
        organization: "AELO",
        topic: "Communication pré-électorale"
    },
    {
        id: 5,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "13/10",
        location: "Paris",
        organization: "Achat Public",
        topic: "Le risque pénal dans les marchés publics"
    },
    {
        id: 6,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "du 15 au 24/10",
        location: "Mayotte",
        organization: "Commune de Tsingoni",
        topic: "Mission de sensibilisation et de cartographie des risques anticorruption"
    },
    {
        id: 7,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "05/11",
        location: "Paris",
        organization: "Comité National Olympité et Sportif Français",
        topic: "Consolider le dispositif anticorruption dans le secteur associatif"
    },
    {
        id: 8,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "du 12 au 14/11",
        location: "Paris",
        organization: "Congrès annuel ACCD’OM",
        topic: "Atelier sur la prévention des atteintes à la probité à destination d’élus et dirigeants des collectivités d’Outre-Mer"
    },
    {
        id: 9,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "19 et 20/11",
        location: "Cergy",
        organization: "CNFPT Île-de-France",
        topic: "Droit d’auteur, droit à l’image, droit d’internet"
    },
    {
        id: 10,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "21/11",
        location: "Paris",
        organization: "Association des Maires de France",
        topic: "Prévenir les situations de conflits d’intérêts"
    },
    {
        id: 11,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: true,
        date: "25 et 27/11",
        location: "à distance",
        organization: "Association AELO",
        topic: "Définir les règles de la communication pré-électorale"
    },
    {
        id: 12,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "26/11",
        location: "Paris",
        organization: "ESMD",
        topic: "Conférence Forum des métiers du droit"
    },
    {
        id: 13,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "27/11",
        location: "Paris",
        organization: "Achat Public",
        topic: "Commande Publique : prévenir les situations de conflits d’intérêts"
    },
    {
        id: 14,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "02/12",
        location: "Paris",
        organization: "ESMD",
        topic: "Atelier « Nouveaux défis pour la conformité et l’anticorruption dans les entreprises à l’horizon 2026 »"
    },
    {
        id: 15,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "05/12",
        location: "Montpellier",
        organization: "SCET",
        topic: "Formation dispositif de sensibilisation aux règles de déontologie et de probité"
    },
    {
        id: 16,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: true,
        date: "09/12",
        location: "à distance",
        organization: "Le don en confiance",
        topic: "Webinaire « La prévention de la corruption dans le secteur associatif »"
    },
    {
        id: 17,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: true,
        date: "11/12",
        location: "à distance",
        organization: "Lamy Formation",
        topic: "Formation « Déontologie : gestion des conflits d’intérêts »"
    },
    {
        id: 18,
        periodGroup: "4e trimestre 2025",
        year: "2025",
        isDistance: false,
        date: "16/12",
        location: "en Guyane",
        organization: "Communauté de Communes de l’Ouest Guyanais",
        topic: "Formation cumul d’activités sur mesure"
    },
    {
        id: 19,
        periodGroup: "1er semestre 2026",
        year: "2026",
        isDistance: true,
        date: "15/01",
        location: "à distance",
        organization: "NAVEX",
        topic: "Webinaire Top 5 Tendances"
    },
    {
        id: 20,
        periodGroup: "1er semestre 2026",
        year: "2026",
        isDistance: false,
        date: "06/02",
        location: "Paris",
        organization: "Wikimedia",
        topic: "Prévention des conflits d’intérêts et des atteintes à la probité dans le secteur associatif"
    },
    {
        id: 21,
        periodGroup: "1er semestre 2026",
        year: "2026",
        isDistance: true,
        date: "06 et 07/03",
        location: "à distance",
        organization: "Université Catholique de Lille",
        topic: "Compliance dans le secteur public"
    },
    {
        id: 22,
        periodGroup: "1er semestre 2026",
        year: "2026",
        isDistance: true,
        date: "26/03",
        location: "à distance",
        organization: "Lamy Liaisons",
        topic: "Déontologie, gestion des conflits d’intérêts"
    },
    {
        id: 23,
        periodGroup: "1er semestre 2026",
        year: "2026",
        isDistance: true,
        date: "18/06",
        location: "à distance",
        organization: "Lamy Liaisons",
        topic: "Déontologie, gestion des conflits d’intérêts"
    },
    {
        id: 24,
        periodGroup: "2e semestre 2026",
        year: "2026",
        isDistance: true,
        date: "21/10",
        location: "à distance",
        organization: "Lamy Liaisons",
        topic: "Déontologie, gestion des conflits d’intérêts"
    }
];

const archives: ArchivePeriod[] = [
    {
        id: "2025-2",
        title: "Archives 2ᵉ semestre 2025",
        months: [
            { name: "Juillet 2025", items: ["Formations – Chartres Métropole", "Wikimedia – Strasbourg", "Formation – Achat Public"] },
            { name: "Septembre 2025", items: ["Formation – CCOGuyanais", "Formations – SCET", "Formation – Achat Public", "Formations – AELO", "Formations – Celio", "Formations – Koncilio"] }
        ]
    },
    {
        id: "2025-1",
        title: "Archives 1ᵉʳ semestre 2025",
        months: [
            { name: "Janvier 2025", items: ["Formation – Groupe SCET", "Wikimedia – Lamy Liaisons"] },
            { name: "Février 2025", items: ["Formation – AP-HP", "Webinaire avec Xavier Gattegno", "Cours – Université Catholique de Lille", "Formation – Achat Public", "Webinaire – Prévention"] },
            { name: "Mars 2025", items: ["Formation – Groupe SCET", "Formation – Ville de Ermont", "Formation – Association AELO", "Formation – Koncilio", "Mission cartographie – Collectivité Territoriale La Réunion"] },
            { name: "Avril 2025", items: ["Webinaire – Koncilio", "Formations – Groupe SCET", "Formation – Achat Public", "Formation – ESDM", "Formation – Association AELO", "Cours – Université Aix-en-Provence", "Atelier de la compliance"] },
            { name: "Mai 2025", items: ["Webinaire – Koncilio", "Formation – Association AELO"] },
            { name: "Juin 2025", items: ["Formation – Achat Public", "Atelier – Le club des juristes", "Formation – 100% Prod", "Webinaire – Koncilio", "Formation – Chartres Métropole", "Formation – Centre de Gestion du 77", "Formation – Gazette des communes"] }
        ]
    },
    {
        id: "2024-2",
        title: "Archives 2ᵉ semestre 2024",
        months: [
            { name: "Juillet 2024", items: ["Formation – Association AELO", "Formation – Tricompétence"] },
            { name: "Septembre 2024", items: ["Formation – Association AELO", "Formation – Association des Maires des Hautes-Alpes", "Formation – Achat public", "Formation – CNFPT Evry", "Formation – Solen Formations", "Formation – Partenariat avec l’Aric"] },
            { name: "Octobre 2024", items: ["Table ronde NAVEX", "Formation – AP-HP", "Formation – Partenariat avec l’Aric", "Formation – Achat Public", "Atelier – Salon Staffs", "Formation – Lamy Liaisons", "Formation – C.C. Ouest Guyanais"] },
            { name: "Novembre 2024", items: ["Formation – CNFPT Cayenne", "Formation d’élues locales", "Formation – SPL Les Ateliers", "Formation – AELO", "Congrès des maires de France", "Formation – Salon Élues Locales"] },
            { name: "Décembre 2024", items: ["Formation – Haut-de-Seine Habitat", "Formation – SPL Les Ateliers", "Formation – AELO", "Formation – Groupe SCET", "Formation – Lamy Liaisons"] }
        ]
    },
    {
        id: "2024-1",
        title: "Archives 1ᵉʳ semestre 2024",
        months: [
            { name: "Février 2024", items: ["Petit-déjeuner au Cabinet Fleurus Avocats"] },
            { name: "Mars 2024", items: ["Atelier à la CINOR – Territoire du Nord de la Réunion", "Webinaire avec Maître Lesteven – Joshua Avocats", "Formation auprès de l’association AELO", "Formation Association des Maires de l’Ariège"] },
            { name: "Avril 2024", items: ["Formation – Achat Public", "Atelier auprès de la DRAJE", "Formation Associations des Maires de France", "Formation pour Altavia France", "Formation pour auprès de l’association AELO"] },
            { name: "Mai 2024", items: ["Formation – Union des maires de Dordogne", "Formation – Association AELO", "Formation – Associations des Maires de Draguignan", "Formation pour Altavia France", "Formation – Association AELO", "Webinaire en partenariat with Navex"] },
            { name: "Juin 2024", items: ["Formation – Achat Public – 2 sessions", "Atelier – Centre de Gestion de Seine-et-Marne – 2 sessions", "Atelier – GIE Chartres Aménagement", "Formation – Lamy Liaisons"] }
        ]
    },
    {
        id: "2023-4",
        title: "Archives 4ᵉ trimestre 2023",
        months: [
            { name: "Novembre 2023", items: ["Atelier à la CINOR – Territoire du Nord de la Réunion", "Congrès des Maires de France", "Folle semaine des marchés publics"] },
            { name: "Décembre 2023", items: ["Conférence débat Lyon Place Financière Ethique des Affaires"] }
        ]
    }
];

const AgendaPage: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
    const [openArchives, setOpenArchives] = useState<string[]>([]);
    const [filterLoc, setFilterLoc] = useState<'all' | 'distance' | 'presence'>('all');
    const [filterPeriod, setFilterPeriod] = useState<string>('all');
    const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);
    const containerRefLoc = useRef<HTMLDivElement>(null);
    const containerRefPeriod = useRef<HTMLDivElement>(null);
    const [masks, setMasks] = useState({ loc: '', period: '' });

    const periods = useMemo(() => {
        const p = Array.from(new Set(events.map(e => e.periodGroup)));
        return p;
    }, []);

    useLayoutEffect(() => {
        const updateMasks = () => {
            const getPath = (container: HTMLDivElement) => {
                if (!container) return '';
                const buttons = Array.from(container.querySelectorAll('button')) as HTMLElement[];
                return buttons.map(btn => {
                    const padding = 5; // Aggressive padding to prevent any clipping artifacts
                    const x = btn.offsetLeft - padding;
                    const y = btn.offsetTop - padding;
                    const w = btn.offsetWidth + (padding * 2);
                    const h = btn.offsetHeight + (padding * 2);
                    const r = 7; // rounded-sm (2px) + padding (5px)
                    return `M ${x + r},${y} h ${w - 2 * r} a ${r},${r} 0 0 1 ${r},${r} v ${h - 2 * r} a ${r},${r} 0 0 1 -${r},${r} h -${w - 2 * r} a ${r},${r} 0 0 1 -${r},-${r} v -${h - 2 * r} a ${r},${r} 0 0 1 ${r},-${r} z`;
                }).join(' ');
            };

            if (containerRefLoc.current) {
                setMasks(prev => ({ ...prev, loc: getPath(containerRefLoc.current!) }));
            }
            if (containerRefPeriod.current) {
                setMasks(prev => ({ ...prev, period: getPath(containerRefPeriod.current!) }));
            }
        };

        const observer = new ResizeObserver(() => {
            requestAnimationFrame(updateMasks);
        });

        const observeElements = () => {
            if (containerRefLoc.current) {
                observer.observe(containerRefLoc.current);
                Array.from(containerRefLoc.current.children).forEach(child => observer.observe(child as Element));
            }
            if (containerRefPeriod.current) {
                observer.observe(containerRefPeriod.current);
                Array.from(containerRefPeriod.current.children).forEach(child => observer.observe(child as Element));
            }
        };

        observeElements();
        // Force update on mount and after font load
        updateMasks();
        document.fonts.ready.then(updateMasks);

        return () => observer.disconnect();
    }, [periods]);

    const toggleArchive = (id: string) => {
        setOpenArchives(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    const filteredEvents = useMemo(() => {
        return events.filter(event => {
            const matchLoc =
                filterLoc === 'all' ? true :
                    filterLoc === 'distance' ? event.isDistance : !event.isDistance;

            const matchPeriod =
                filterPeriod === 'all' ? true :
                    event.periodGroup === filterPeriod;

            return matchLoc && matchPeriod;
        });
    }, [filterLoc, filterPeriod]);

    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 md:pt-48 pb-40 font-sans" onMouseLeave={() => setHoveredFilter(null)}>
            <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">

                {/* Editorial Header - Inspired by Blog */}
                <header className="mb-32 relative">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                            <span className="text-[#BF9B8E] font-bold text-[10px] uppercase tracking-[0.4em]">Calendrier des interventions</span>
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[9vw] font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-white uppercase">
                                AGENDA <br />
                                <span className="italic font-light text-white/40">PROBITAS.</span>
                            </h1>

                            {/* Farah's Photo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative hidden md:block"
                            >
                                <div className="absolute inset-0 bg-[#BF9B8E] blur-2xl opacity-10" />
                                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-sm overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700">
                                    <img
                                        src={farahImg}
                                        alt="Farah Zaoui"
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-12">
                            <p className="text-xl md:text-2xl text-blue-200/60 font-light max-w-xl leading-snug flex-1 min-w-0">
                                Rejoignez-nous lors de nos prochaines interventions auprès de nos partenaires publics et privés.
                            </p>

                            {/* Portaled Filter Bar Style from Blog - Windowed Animation */}
                            <div
                                ref={containerRefLoc}
                                className="flex flex-wrap md:flex-nowrap shrink-0 relative overflow-hidden py-2 gap-y-3"
                            >
                                {/* Stencil Layer for Location Filters */}
                                <div
                                    className="absolute inset-0 z-20 pointer-events-none bg-[#0C2E59]"
                                    style={{
                                        maskImage: masks.loc ? `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg'><path fill='black' d='M0,0 H10000 V10000 H0 z ${masks.loc}' fill-rule='evenodd'/></svg>`)}")` : 'none',
                                        WebkitMaskImage: masks.loc ? `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg'><path fill='black' d='M0,0 H10000 V10000 H0 z ${masks.loc}' fill-rule='evenodd'/></svg>`)}")` : 'none',
                                    }}
                                />

                                {(['all', 'presence', 'distance'] as const).map((f, idx) => (
                                    <React.Fragment key={f}>
                                        {idx > 0 && <div className="w-3 md:w-4" />}
                                        <button
                                            onClick={() => setFilterLoc(f)}
                                            onMouseEnter={() => setHoveredFilter(`loc-${f}`)}
                                            className={`px-6 md:px-8 py-3 rounded-sm text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all relative border z-10 ${filterLoc === f
                                                ? 'text-[#0C2E59] border-white'
                                                : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white'}`}
                                        >
                                            {filterLoc === f && (
                                                <motion.div
                                                    layoutId="activeFilterLoc"
                                                    className="absolute -inset-[3px] bg-white rounded-sm -z-10"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            <span className="relative z-20">
                                                {f === 'all' ? 'Toutes sessions' : f === 'distance' ? 'À distance' : 'Présentiel'}
                                            </span>
                                        </button>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Second Level Filtering: Periods - Windowed Animation */}
                <div
                    ref={containerRefPeriod}
                    className="max-w-5xl mb-16 flex flex-wrap md:flex-nowrap shrink-0 relative overflow-hidden gap-y-3"
                >
                    {/* Stencil Layer for Period Filters */}
                    <div
                        className="absolute inset-0 z-20 pointer-events-none bg-[#0C2E59]"
                        style={{
                            maskImage: masks.period ? `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg'><path fill='black' d='M0,0 H10000 V10000 H0 z ${masks.period}' fill-rule='evenodd'/></svg>`)}")` : 'none',
                            WebkitMaskImage: masks.period ? `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg'><path fill='black' d='M0,0 H10000 V10000 H0 z ${masks.period}' fill-rule='evenodd'/></svg>`)}")` : 'none',
                        }}
                    />

                    <button
                        onClick={() => setFilterPeriod('all')}
                        onMouseEnter={() => setHoveredFilter('period-all')}
                        className={`px-6 py-2.5 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] transition-all border relative z-10 ${filterPeriod === 'all'
                            ? 'text-[#0C2E59] border-white'
                            : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                            }`}
                    >
                        {filterPeriod === 'all' && (
                            <motion.div
                                layoutId="activeFilterPeriod"
                                className="absolute -inset-[3px] bg-white rounded-sm -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-20">Toutes périodes</span>
                    </button>
                    {periods.map((period) => (
                        <React.Fragment key={period}>
                            <div className="w-3 md:w-3" />
                            <button
                                onClick={() => setFilterPeriod(period)}
                                onMouseEnter={() => setHoveredFilter(`period-${period}`)}
                                className={`px-6 py-2.5 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] transition-all border relative z-10 ${filterPeriod === period
                                    ? 'text-[#0C2E59] border-white'
                                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {filterPeriod === period && (
                                    <motion.div
                                        layoutId="activeFilterPeriod"
                                        className="absolute -inset-[3px] bg-white rounded-sm -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-20">{period}</span>
                            </button>
                        </React.Fragment>
                    ))}
                </div>


                {/* Timeline / Events Grid - Hybrid Style (Editorial + Screenshot Cards) */}
                <div className="max-w-5xl mb-24 min-h-[400px]">
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event, index) => {
                                const showHeader = index === 0 || filteredEvents[index - 1].periodGroup !== event.periodGroup;

                                return (
                                    <motion.div
                                        key={event.id}
                                        layout
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.6, delay: (index % 10) * 0.05 }}
                                        className="relative"
                                    >
                                        {/* Period Header */}
                                        {showHeader && (
                                            <motion.div
                                                layout
                                                className="flex items-center gap-6 mb-12 mt-20"
                                            >
                                                <div className="h-px flex-1 bg-white/10" />
                                                <span className="text-white/20 font-black font-cinzel text-sm uppercase tracking-[0.5em]">
                                                    {event.periodGroup}
                                                </span>
                                                <div className="h-px flex-1 bg-white/10" />
                                            </motion.div>
                                        )}

                                        <div className="mb-8 md:flex gap-6 group">
                                            {/* Date Column - Screenshot Style */}
                                            <div className="md:w-1/4 mb-4 md:mb-0">
                                                <div className="bg-white/5 border border-white/10 rounded-sm p-6 text-center group-hover:border-[#BF9B8E]/50 transition-all duration-500 h-full flex flex-col justify-center shadow-xl">
                                                    <Calendar className="mx-auto mb-3 text-[#BF9B8E]/60 group-hover:text-[#BF9B8E] transition-colors" size={24} />
                                                    <span className="text-xl md:text-3xl font-black font-mono text-white block tracking-tighter mb-1">
                                                        {event.date}
                                                    </span>
                                                    <div className="flex items-center justify-center gap-2 text-white/30 text-[9px] font-black uppercase tracking-widest group-hover:text-[#BF9B8E]/60 transition-colors">
                                                        <MapPin size={10} />
                                                        {event.location}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Column - Screenshot Style (Dark Blue) */}
                                            <div className="md:w-3/4 bg-[#081d38] border border-white/5 p-8 md:p-10 rounded-sm relative overflow-hidden group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:border-white/10 transition-all duration-500 flex flex-col justify-center">
                                                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#BF9B8E]/20 group-hover:bg-[#BF9B8E] transition-colors" />

                                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                                    <h3 className="text-[#BF9B8E] font-cinzel font-bold text-lg uppercase tracking-wider flex items-center gap-3">
                                                        <Building2 size={18} className="opacity-40" />
                                                        {event.organization}
                                                    </h3>
                                                    {event.isDistance && (
                                                        <span className="px-3 py-1 rounded-full bg-[#BF9B8E]/10 border border-[#BF9B8E]/20 text-[#BF9B8E] text-[8px] font-black uppercase tracking-widest">
                                                            Online
                                                        </span>
                                                    )}
                                                </div>

                                                <h4 className="text-xl text-white/90 leading-relaxed group-hover:text-[#BF9B8E] transition-colors duration-500 font-normal">
                                                    {event.topic}
                                                </h4>

                                                <div className="pt-6 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#BF9B8E]">Informations & Inscription</span>
                                                    <ArrowRight className="w-4 h-4 text-[#BF9B8E]" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-40 bg-white/5 rounded-sm border border-dashed border-white/10"
                            >
                                <p className="text-white/40 font-serif italic text-2xl">Aucun événement ne correspond à vos critères.</p>
                                <button
                                    onClick={() => { setFilterLoc('all'); setFilterPeriod('all'); }}
                                    className="mt-8 text-[#BF9B8E] hover:underline font-black text-xs uppercase tracking-[0.3em]"
                                >
                                    Explorer tout l'agenda
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Archives Section - Re-styled for Editorial */}
                <div className="max-w-5xl mx-auto pt-32 border-t border-white/10">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <History className="text-[#BF9B8E]" size={20} />
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-white">ARCHIVES <span className="text-[#BF9B8E]/40 font-light italic">PASSÉES.</span></h2>
                    </div>

                    <div className="space-y-6">
                        {archives.map((archive) => (
                            <div key={archive.id} className="border border-white/10 rounded-sm overflow-hidden bg-white/2 hover:bg-white/5 transition-all duration-500 group">
                                <button
                                    onClick={() => toggleArchive(archive.id)}
                                    className="w-full flex items-center justify-between p-8 md:p-12 transition-colors text-left"
                                >
                                    <div className="space-y-2">
                                        <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/30">Sessions clôturées</span>
                                        <h3 className="font-cinzel font-black text-xl md:text-2xl text-white group-hover:text-[#BF9B8E] transition-colors uppercase tracking-widest">{archive.title}</h3>
                                    </div>
                                    <div className={`w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center transition-all duration-500 ${openArchives.includes(archive.id) ? 'bg-[#BF9B8E] text-[#0C2E59] border-[#BF9B8E]' : 'group-hover:border-[#BF9B8E]'}`}>
                                        {openArchives.includes(archive.id) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openArchives.includes(archive.id) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-8 md:px-12 pb-12 overflow-hidden"
                                        >
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8 border-t border-white/5">
                                                {archive.months.map((month, idx) => (
                                                    <div key={idx} className="space-y-4">
                                                        <h4 className="text-[#BF9B8E] font-black text-[10px] uppercase tracking-widest opacity-60 flex items-center gap-3">
                                                            <div className="w-6 h-px bg-[#BF9B8E]/30" />
                                                            {month.name}
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {month.items.map((item, i) => (
                                                                <li key={i} className="text-blue-50/60 font-light text-sm leading-relaxed flex gap-3 group/item">
                                                                    <div className="w-1.5 h-1.5 rounded-sm bg-[#BF9B8E]/30 mt-1.5 flex-shrink-0 group-hover/item:bg-[#BF9B8E] transition-colors" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA - Redesigned to match Blog Sidebar expert vibe */}
                <div className="mt-40 max-w-2xl mx-auto rounded-sm border border-[#BF9B8E]/30 bg-gradient-to-br from-white/5 to-transparent p-12 md:p-20 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#BF9B8E]/5 rounded-full blur-[100px] -mr-32 -mt-32" />

                    <p className="text-[#BF9B8E] mb-6 font-black text-[10px] uppercase tracking-[0.5em]">Collaboration & Interventions</p>
                    <h3 className="text-3xl md:text-5xl font-cinzel font-black text-white uppercase mb-8 leading-tight tracking-tighter">
                        CONSTRUISONS <br /> VOS FORMATIONS <br /> <span className="text-white/40 font-light italic">SUR MESURE.</span>
                    </h3>
                    <button
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-4 bg-[#BF9B8E] text-[#0C2E59] font-black py-5 px-12 rounded-sm hover:bg-white transition-all tracking-[0.2em] uppercase text-xs shadow-2xl hover:scale-105 active:scale-95"
                    >
                        Prendre rendez-vous
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default AgendaPage;

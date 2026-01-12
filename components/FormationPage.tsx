import React, { useEffect } from 'react';
import { Download, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface Formation {
    title: string;
    description: string;
    link?: string; // For future detailed pages
}

interface FaqItem {
    question: string;
    answer: string;
}

// --- Data ---
const publicFormations: Formation[] = [
    {
        title: "Maîtriser le cadre juridique et déontologique du cumul d’activités",
        description: "Sécurisation juridique et diffusion d'une culture de la probité au sein des services municipaux."
    },
    {
        title: "Maîtriser les atteintes à la probité dans la commande publique",
        description: "Identifier les risques juridiques (conflit d'intérêts) et appréhender les risques tout au long de la procédure."
    },
    {
        title: "Garantir son devoir de probité dans l'achat public local",
        description: "Pour élus et acheteurs : obligations légales, repérage des risques et outils de prévention Sapin II."
    },
    {
        title: "Cartographie des risques",
        description: "Comprendre les enjeux, identifier et hiérarchiser les risques, et articuler avec les dispositifs de conformité."
    },
    {
        title: "Référent alerte éthique interne",
        description: "Maîtriser le cadre légal (Sapin II, Waserman), la gouvernance et le traitement des alertes."
    },
    {
        title: "Communiquer en période pré-électorale pour les élus locaux",
        description: "Comprendre les règles et intégrer la réglementation dans les stratégies de communication."
    },
    {
        title: "Communication en période pré-électorale – agents publics",
        description: "Maîtriser et adapter sa communication en période pré-électorale pour les agents publics."
    },
    {
        title: "Obligations déontologiques et risque pénal de l’agent public",
        description: "Identifier les obligations statutaires et les facteurs de risques déontologiques et pénaux."
    },
    {
        title: "Lutte contre la corruption dans la commande publique",
        description: "Prévenir les situations de conflit d’intérêts et les atteintes à la probité."
    },
    {
        title: "Signalement et lancement d’alerte",
        description: "Comprendre le dispositif, accompagner sa mise en place et encourager la confiance."
    },
    {
        title: "Basiques de la compliance publique (Loi Sapin II)",
        description: "Comprendre le dispositif anti-corruption et se préparer à un contrôle de l’AFA."
    }
];

const privateFormations: Formation[] = [
    {
        title: "Déontologie et intégrité – Loi Sapin II",
        description: "Comprendre les enjeux éthiques et juridiques, identifier les risques et adopter les bons réflexes."
    },
    {
        title: "Cartographie des risques",
        description: "Identifier, analyser et hiérarchiser les risques anticorruption dans le secteur privé."
    },
    {
        title: "Référent alerte éthique interne",
        description: "Cadre légal, gouvernance et traitement des alertes pour les référents en entreprise."
    },
    {
        title: "Déployer un dispositif anticorruption et alerte interne",
        description: "Les fondamentaux et la méthode pour déployer un dispositif efficace."
    },
    {
        title: "Dispositif anticorruption : secteurs fondatifs et associatifs",
        description: "Application de la loi Sapin II aux associations et fondations, préparation aux contrôles AFA."
    },
    {
        title: "Signalement et lancement d’alerte (Secteur Privé)",
        description: "Mise en place du dispositif (Sapin II, Waserman) et communication positive en entreprise."
    }
];

const faqs: FaqItem[] = [
    {
        question: "Les formations PROBITAS sont-elles qualifiantes ou certifiantes ?",
        answer: "Les formations PROBITAS sont **qualifiantes**. Elles visent à développer des compétences opérationnelles immédiates sans délivrer de titre RNCP, mais peuvent être reconnues dans le cadre de la formation continue."
    },
    {
        question: "Faut-il former uniquement les dirigeants ou l’ensemble des équipes ?",
        answer: "La prévention ne fonctionne que si elle est portée à tous les niveaux. Former uniquement les cadres est insuffisant ; une culture commune de l'intégrité est nécessaire pour l'ensemble des équipes."
    },
    {
        question: "Intervenez-vous uniquement dans le secteur public ou aussi en entreprise ?",
        answer: "Mon expertise couvre le secteur public, mais j'interviens également auprès des entreprises, notamment celles en lien avec des acteurs publics (marchés, délégations), où les exigences de probité sont fortes."
    },
    {
        question: "Intervenez-vous à distance ou en présentiel ?",
        answer: "Je propose les deux formats. Le présentiel est privilégié pour les échanges et mises en situation, tandis que le distanciel offre plus de souplesse. Un format hybride est possible."
    },
    {
        question: "Quels sont vos délais d’intervention ?",
        answer: "Pour une intervention ponctuelle, comptez quelques semaines. Pour un audit ou un accompagnement approfondi, une anticipation permet de mieux adapter le calendrier."
    }
];

// --- Components ---

const FormationCard: React.FC<{ formation: Formation }> = ({ formation }) => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors flex flex-col h-full group">
        <h3 className="text-xl font-bold text-[#BF9B8E] mb-4 group-hover:text-white transition-colors">
            {formation.title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
            {formation.description}
        </p>
        <div className="mt-auto">
            <span className="inline-flex items-center text-sm font-bold text-[#BF9B8E] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                Détail <ArrowRight className="ml-2 w-4 h-4" />
            </span>
        </div>
    </div>
);

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg transition-colors ${isOpen ? 'text-[#BF9B8E]' : 'text-white/90 group-hover:text-[#BF9B8E]'}`}>
                    {item.question}
                </span>
                {isOpen ? <ChevronUp className="text-[#BF9B8E]" /> : <ChevronDown className="text-white/50" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-white/70 leading-relaxed">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const documentLinks = [
    { name: "Livret d'accueil", href: "#" },
    { name: "Politique de confidentialité", href: "/assets/pdf/2024-probitas-politique-de-confidentialite-formations.pdf" },
    { name: "Conditions Générales", href: "/assets/pdf/cgv-probitas.pdf" }
];

const FormationPage: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 md:pt-48 pb-40 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">

                {/* Editorial Header - AgendaPage Style */}
                <header className="mb-32 relative">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                            <span className="text-[#BF9B8E] font-bold text-[10px] uppercase tracking-[0.4em]">Programmes de formation</span>
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[9vw] font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-white uppercase">
                            FORMATION <br />
                            <span className="italic font-light text-white/40">À LA CARTE.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-200/60 font-light max-w-xl leading-snug mt-8">
                            Des programmes sur mesure pour diffuser la culture de l'intégrité au sein de votre organisation.
                        </p>
                    </div>
                </header>

                {/* Qualiopi Section */}
                <div className="mb-24">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl md:text-5xl font-cinzel font-black text-[#BF9B8E] uppercase tracking-tighter">Certification QUALIOPI</h2>
                                <p className="text-lg md:text-xl font-light text-white/90">
                                    PROBITAS est certifié QUALIOPI pour ses <strong>ACTIONS DE FORMATION</strong>. <br />
                                    Gage de qualité et de professionnalisme reconnu par l'État.
                                </p>
                                <a
                                    href="https://certif-icpf.org/search?query=Probitas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-[#BF9B8E] hover:text-white transition-colors font-black uppercase tracking-[0.4em] text-[10px] group"
                                >
                                    Vérifier le certificat <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>
                            <div className="flex-1 w-full max-w-sm">
                                <img
                                    src="/assets/certificat-qua006775.webp"
                                    alt="Certification Qualiopi - Probitas Actions de Formation"
                                    className="w-full h-auto rounded-sm shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Docs Downloads */}
                <div className="mb-32">
                    <h3 className="text-white/30 mb-8 uppercase tracking-[0.3em] text-[10px] font-black">Documentation légale</h3>
                    <div className="flex flex-wrap gap-4">
                        {documentLinks.map((doc, i) => (
                            <a
                                key={i}
                                href={doc.href}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-all group"
                            >
                                <Download className="w-4 h-4 text-[#BF9B8E]" />
                                <span className="text-xs font-bold group-hover:text-[#BF9B8E] transition-colors uppercase tracking-widest">{doc.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-40">
                    {/* À LA CARTE - PUBLIC */}
                    <section id="formation-public" className="scroll-mt-48">
                        <div className="flex items-center gap-6 mb-16">
                            <div className="h-px w-12 bg-[#BF9B8E]" />
                            <h2 className="text-3xl md:text-5xl font-cinzel font-black text-white uppercase tracking-tighter">Secteur <span className="text-[#BF9B8E]">Public.</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {publicFormations.map((formation, idx) => (
                                <FormationCard key={idx} formation={formation} />
                            ))}
                        </div>
                    </section>

                    {/* À LA CARTE - PRIVÉ */}
                    <section id="formation-prive" className="scroll-mt-48">
                        <div className="flex items-center gap-6 mb-16">
                            <div className="h-px w-12 bg-[#BF9B8E]" />
                            <h2 className="text-3xl md:text-5xl font-cinzel font-black text-white uppercase tracking-tighter">Secteur <span className="text-[#BF9B8E]">Privé.</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {privateFormations.map((formation, idx) => (
                                <FormationCard key={idx} formation={formation} />
                            ))}
                        </div>
                    </section>

                    {/* SUR MESURE - Restored "Plus Joli" Style */}
                    <section id="formation-surmesure" className="scroll-mt-48">
                        <div className="bg-[#BF9B8E] text-[#0C2E59] p-12 md:p-20 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-2xl">
                            <div className="relative z-10 text-center md:text-left">
                                <p className="text-[#0C2E59]/60 mb-4 font-black text-[10px] uppercase tracking-[0.5em]">Co-construction & Expertise</p>
                                <h3 className="text-3xl md:text-5xl font-cinzel font-black uppercase leading-tight tracking-tighter">
                                    FORMATIONS <br /> <span className="opacity-40 font-light italic">SUR MESURE.</span>
                                </h3>
                            </div>
                            <button
                                onClick={onOpenContact}
                                className="inline-flex items-center gap-4 bg-[#0C2E59] text-white font-black py-6 px-12 rounded-sm hover:scale-105 active:scale-95 transition-all tracking-[0.2em] uppercase text-xs shadow-2xl relative z-10"
                            >
                                Discuter de votre projet
                                <ArrowRight size={16} />
                            </button>
                            {/* Watermark "F" */}
                            <div className="absolute top-0 right-0 text-[18rem] font-cinzel font-black opacity-10 -mr-12 -mt-20 leading-none pointer-events-none select-none">
                                F
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="max-w-4xl mx-auto pb-40">
                        <div className="flex items-center gap-4 mb-16">
                            <div className="h-px flex-1 bg-white/10" />
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">QUESTIONS <span className="text-[#BF9B8E]/40 font-light italic">FRÉQUENTES.</span></h2>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <div className="bg-white/2 border border-white/10 rounded-sm p-6 md:p-12 backdrop-blur-sm">
                            {faqs.map((faq, idx) => (
                                <FaqItemComponent key={idx} item={faq} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FormationPage;

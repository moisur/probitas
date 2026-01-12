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
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors flex flex-col h-full group">
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
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20">

            {/* Header */}
            <div className="px-4 md:px-8 mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-cinzel">
                    NOS FORMATIONS À LA CARTE
                </h1>
                <div className="w-24 h-1 bg-[#BF9B8E] mx-auto mb-8"></div>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                    Des programmes sur mesure pour diffuser la culture de l'intégrité
                </p>
            </div>

            {/* Qualiopi Section */}
            <div className="container mx-auto px-4 md:px-8 mb-24 text-center">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 space-y-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
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
                                className="inline-flex items-center text-[#BF9B8E] hover:text-white transition-colors font-black uppercase tracking-[0.3em] text-[10px] group"
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
            <div className="container mx-auto px-4 md:px-8 mb-32">
                <h3 className="text-center text-white/60 mb-8 uppercase tracking-widest text-sm">Documents Utiles</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {documentLinks.map((doc, i) => (
                        <a
                            key={i}
                            href={doc.href}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
                        >
                            <Download className="w-4 h-4 text-[#BF9B8E]" />
                            <span className="text-sm font-bold group-hover:text-[#BF9B8E] transition-colors">{doc.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* À LA CARTE - PUBLIC */}
            <section id="formation-public" className="container mx-auto px-4 md:px-8 mb-32 scroll-mt-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-white/20 flex-grow"></div>
                    <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center uppercase tracking-widest">À LA CARTE - Public</h2>
                    <div className="h-px bg-white/20 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {publicFormations.map((formation, idx) => (
                        <FormationCard key={idx} formation={formation} />
                    ))}
                </div>
            </section>

            {/* À LA CARTE - PRIVÉ */}
            <section id="formation-prive" className="container mx-auto px-4 md:px-8 mb-32 scroll-mt-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-white/20 flex-grow"></div>
                    <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center uppercase tracking-widest">À LA CARTE - Privé</h2>
                    <div className="h-px bg-white/20 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {privateFormations.map((formation, idx) => (
                        <FormationCard key={idx} formation={formation} />
                    ))}
                </div>
            </section>

            {/* SUR MESURE */}
            <section id="formation-surmesure" className="container mx-auto px-4 md:px-8 mb-32 scroll-mt-32">
                <div className="bg-[#BF9B8E] text-[#0C2E59] rounded-2xl p-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-cinzel font-black uppercase mb-6">Formation Sur Mesure</h2>
                    <p className="text-xl font-serif italic mb-10 max-w-2xl mx-auto">
                        Besoin d'un programme spécifique adapté à votre organisation ? <br />
                        Nous co-construisons votre formation pour répondre à vos enjeux propres.
                    </p>
                    <button
                        onClick={onOpenContact}
                        className="inline-block bg-[#0C2E59] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                    >
                        Discuter de votre projet
                    </button>
                </div>
            </section>

            {/* FAQ */}
            <section className="container mx-auto px-4 md:px-8 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-16">
                    QUESTIONS FRÉQUENTES
                </h2>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
                    {faqs.map((faq, idx) => (
                        <FaqItemComponent key={idx} item={faq} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default FormationPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Download, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface Formation {
    slug: string;
    title: string;
    description: string;
}

interface FaqItem {
    question: string;
    answer: string;
}

// --- Data ---
const publicFormations: Formation[] = [
    {
        slug: 'maitriser-le-cadre-juridique-et-deontologique-du-cumul-dactivites',
        title: "Maîtriser le cadre juridique et déontologique du cumul d'activités",
        description: "Sécurisation juridique et diffusion d'une culture de la probité au sein des services municipaux."
    },
    {
        slug: 'maitriser-les-atteintes-a-la-probite-dans-la-commande-publique',
        title: "Maîtriser les atteintes à la probité dans la commande publique",
        description: "Identifier les risques juridiques (conflit d'intérêts) et appréhender les risques tout au long de la procédure."
    },
    {
        slug: 'garantir-son-devoir-de-probite-dans-le-contexte-de-lachat-public-local',
        title: "Garantir son devoir de probité dans l'achat public local",
        description: "Pour élus et acheteurs : obligations légales, repérage des risques et outils de prévention Sapin II."
    },
    {
        slug: 'cartographie-des-risques',
        title: "Cartographie des risques",
        description: "Comprendre les enjeux, identifier et hiérarchiser les risques, et articuler avec les dispositifs de conformité."
    },
    {
        slug: 'referent-alerte-ethique',
        title: "Référent alerte éthique interne",
        description: "Maîtriser le cadre légal (Sapin II, Waserman), la gouvernance et le traitement des alertes."
    },
    {
        slug: 'communiquer-en-periode-pre-electorale-pour-les-elus-locaux',
        title: "Communiquer en période pré-électorale pour les élus locaux",
        description: "Comprendre les règles et intégrer la réglementation dans les stratégies de communication."
    },
    {
        slug: 'communication-en-periode-electorale',
        title: "Communication en période pré-électorale – agents publics",
        description: "Maîtriser et adapter sa communication en période pré-électorale pour les agents publics."
    },
    {
        slug: 'obligations-deontologiques-risque-penal-agent-public',
        title: "Obligations déontologiques et risque pénal de l'agent public",
        description: "Identifier les obligations statutaires et les facteurs de risques déontologiques et pénaux."
    },
    {
        slug: 'lutte-contre-corruption-dans-commande-publique',
        title: "Lutte contre la corruption dans la commande publique",
        description: "Prévenir les situations de conflit d'intérêts et les atteintes à la probité."
    },
    {
        slug: 'signalement-et-lancement-dalerte',
        title: "Signalement et lancement d'alerte",
        description: "Comprendre le dispositif, accompagner sa mise en place et encourager la confiance."
    },
    {
        slug: 'basiques-compliance-publique-loi-sapin2',
        title: "Basiques de la compliance publique (Loi Sapin II)",
        description: "Comprendre le dispositif anti-corruption et se préparer à un contrôle de l'AFA."
    }
];

const privateFormations: Formation[] = [
    {
        slug: 'deontologie-et-integrite-loi-sapin-2',
        title: "Déontologie et intégrité – Loi Sapin II",
        description: "Comprendre les enjeux éthiques et juridiques, identifier les risques et adopter les bons réflexes."
    },
    {
        slug: 'cartographie-des-risques',
        title: "Cartographie des risques",
        description: "Identifier, analyser et hiérarchiser les risques anticorruption dans le secteur privé."
    },
    {
        slug: 'referent-alerte-ethique',
        title: "Référent alerte éthique interne",
        description: "Cadre légal, gouvernance et traitement des alertes pour les référents en entreprise."
    },
    {
        slug: 'deployer-un-dispositif-anticorruption-et-alerte-interne-les-fondamentaux',
        title: "Déployer un dispositif anticorruption et alerte interne",
        description: "Les fondamentaux et la méthode pour déployer un dispositif efficace."
    },
    {
        slug: 'mise-en-place-dispositif-anticorruption-secteurs-fondatifs-associatifs',
        title: "Dispositif anticorruption : secteurs fondatifs et associatifs",
        description: "Application de la loi Sapin II aux associations et fondations, préparation aux contrôles AFA."
    },
    {
        slug: 'signalement-lancement-alerte-secteur-prive-entreprises-associations',
        title: "Signalement et lancement d'alerte (Secteur Privé)",
        description: "Mise en place du dispositif (Sapin II, Waserman) et communication positive en entreprise."
    }
];

const faqs: FaqItem[] = [
    {
        question: "Les formations PROBITAS sont-elles qualifiantes ou certifiantes ?",
        answer: "Les formations PROBITAS sont qualifiantes.\n\nDistinction entre formation certifiante et formation qualifiante :\n\nFormation qualifiante : elle vise à développer des compétences opérationnelles immédiates utiles dans le cadre professionnel, mais sans délivrer de certification officielle ou de titre homologué. Ces formations peuvent néanmoins être reconnues dans certaines conventions collectives ou dans le cadre de la formation continue.\n\nFormation certifiante : elle aboutit à la délivrance d'une certification reconnue par l'État, enregistrée au RNCP (Répertoire National des Certifications Professionnelles) ou au Répertoire Spécifique. Elle s'adresse aux actifs et permet de justifier de compétences validées et directement valorisables dans un cadre professionnel."
    },
    {
        question: "Faut-il former uniquement les dirigeants ou l'ensemble des équipes ?",
        answer: "Les dirigeants donnent l'impulsion et fixent les règles, mais la prévention de la corruption ne fonctionne que si elle est portée à tous les niveaux. Le risque existe dans toutes les fonctions : achats, gestion de projet, relations avec des partenaires, réponses aux appels d'offres… Former uniquement les cadres serait insuffisant. Pour être efficace, la prévention doit s'appuyer sur une culture commune de l'intégrité, partagée par l'ensemble des équipes."
    },
    {
        question: "Intervenez-vous uniquement dans le secteur public ou aussi en entreprise ?",
        answer: "Mon expertise porte principalement sur la conformité dans le secteur public et la gouvernance territoriale. Toutefois, je travaille également avec des entreprises, en particulier celles qui interagissent avec des acteurs publics (marchés publics, délégations de service, partenariats…). Les exigences en matière de transparence et d'intégrité s'imposent de plus en plus aux entreprises, ce qui rend la prévention essentielle, quel que soit le secteur d'activité."
    },
    {
        question: "Intervenez-vous à distance ou en présentiel ?",
        answer: "Je propose les deux formats, selon les besoins et les contraintes des organisations. Le présentiel est privilégié pour les formations impliquant des mises en situation et des échanges directs. Le format à distance offre plus de souplesse et permet de toucher des équipes situées sur différents territoires. Une combinaison des deux peut être envisagée pour concilier efficacité et accessibilité."
    },
    {
        question: "Quels sont vos délais d'intervention ?",
        answer: "Les délais varient en fonction de la demande et de la complexité du projet. Une intervention ponctuelle (conférence, formation d'une demi-journée) peut être organisée sous quelques semaines. Pour une démarche plus approfondie (audit, accompagnement personnalisé), il est préférable d'anticiper pour adapter le calendrier aux besoins spécifiques de l'organisation."
    }
];

// --- Components ---

const FormationCard: React.FC<{ formation: Formation }> = ({ formation }) => (
    <Link to={`/formations/${formation.slug}`} className="block h-full">
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
    </Link>
);

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    // Parse the answer into formatted paragraphs
    const renderAnswer = (answer: string) => {
        const paragraphs = answer.split('\n\n');

        return paragraphs.map((paragraph, idx) => {
            // Check if it's a definition (starts with "Formation qualifiante" or "Formation certifiante")
            if (paragraph.startsWith('Formation qualifiante :')) {
                return (
                    <div key={idx} className="bg-[#BF9B8E]/10 border-l-4 border-[#BF9B8E] p-4 rounded-r-sm mb-4">
                        <p className="text-[#BF9B8E] font-bold text-sm uppercase tracking-wider mb-2">✓ Formation qualifiante</p>
                        <p className="text-white/70 text-sm leading-relaxed">
                            {paragraph.replace('Formation qualifiante : ', '')}
                        </p>
                    </div>
                );
            }
            if (paragraph.startsWith('Formation certifiante :')) {
                return (
                    <div key={idx} className="bg-white/5 border-l-4 border-white/30 p-4 rounded-r-sm mb-4">
                        <p className="text-white/80 font-bold text-sm uppercase tracking-wider mb-2">✓ Formation certifiante</p>
                        <p className="text-white/70 text-sm leading-relaxed">
                            {paragraph.replace('Formation certifiante : ', '')}
                        </p>
                    </div>
                );
            }
            if (paragraph.startsWith('Distinction entre')) {
                return (
                    <p key={idx} className="text-[#BF9B8E] font-bold text-sm uppercase tracking-wider mb-4 mt-4">
                        {paragraph}
                    </p>
                );
            }
            // Default paragraph
            return (
                <p key={idx} className="text-white/70 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                </p>
            );
        });
    };

    return (
        <div className="border-b border-white/10 last:border-0 py-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg font-medium transition-colors pr-4 ${isOpen ? 'text-[#BF9B8E]' : 'text-white/90 group-hover:text-[#BF9B8E]'}`}>
                    {item.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#BF9B8E] text-[#0C2E59]' : 'bg-white/5 text-white/50'}`}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 pl-0 md:pl-4 border-l-0 md:border-l-2 border-[#BF9B8E]/20 ml-0 md:ml-2">
                            {renderAnswer(item.answer)}
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
                    <section id="public" className="scroll-mt-48">
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
                    <section id="prive" className="scroll-mt-48">
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

                    {/* RETOUR EN IMAGES */}
                    <section id="galerie" className="scroll-mt-48">
                        <div className="flex items-center gap-6 mb-16">
                            <div className="h-px w-12 bg-[#BF9B8E]" />
                            <h2 className="text-3xl md:text-5xl font-cinzel font-black text-white uppercase tracking-tighter">
                                Retour en <span className="text-[#BF9B8E]">Images.</span>
                            </h2>
                        </div>

                        <p className="text-blue-200/60 font-light text-lg mb-12 max-w-2xl">
                            Nos interventions en images : de la Guyane à La Réunion, en passant par l'hexagone — la prévention de la corruption s'exporte partout.
                        </p>

                        {/* Masonry-style Gallery */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                            {[
                                { src: '/assets/nos-formations/formation-en-guyane-400x250.webp', title: 'Formation en Guyane', span: 'col-span-2 row-span-2' },
                                { src: '/assets/nos-formations/intervention-a-la-cinor-400x250.webp', title: 'Intervention à la CINOR', span: '' },
                                { src: '/assets/nos-formations/intervention-a-la-cinor1-400x250.webp', title: 'CINOR - Session', span: '' },
                                { src: '/assets/nos-formations/formation-en-guyane-farah-zaoui-400x250.webp', title: 'Farah Zaoui en Guyane', span: 'col-span-2' },
                                { src: '/assets/nos-formations/intervention-cdg-400x250.webp', title: 'CDG Intervention', span: '' },
                                { src: '/assets/nos-formations/photo-intervention-cdg-77-400x250.webp', title: 'CDG 77', span: '' },
                                { src: '/assets/nos-formations/intervention-a-la-cinor2-400x250.webp', title: 'CINOR - Groupe', span: '' },
                                { src: '/assets/nos-formations/photo-groupe-1--400x250.webp', title: 'Photo de groupe', span: 'col-span-2' },
                                { src: '/assets/nos-formations/intervention-a-la-cinor3-400x250.webp', title: 'CINOR - Échanges', span: '' },
                                { src: '/assets/nos-formations/intervention-a-la-cinor4-400x250.webp', title: 'CINOR - Clôture', span: '' },
                            ].map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`relative overflow-hidden rounded-sm group cursor-pointer ${img.span}`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover aspect-video group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C2E59] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {/* Caption */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white text-xs font-bold uppercase tracking-widest">{img.title}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Testimonial Link */}
                        <div className="mt-12 text-center">
                            <Link
                                to="/temoignages"
                                className="inline-flex items-center gap-3 text-[#BF9B8E] hover:text-white font-bold uppercase tracking-[0.2em] text-xs group transition-colors"
                            >
                                Témoignages de nos clients
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </section>

                    {/* NOS PARTENAIRES FORMATION */}
                    <section id="partenaires" className="scroll-mt-48">
                        <div className="flex items-center gap-6 mb-16">
                            <div className="h-px w-12 bg-[#BF9B8E]" />
                            <h2 className="text-3xl md:text-5xl font-cinzel font-black text-white uppercase tracking-tighter">
                                Nos <span className="text-[#BF9B8E]">Partenaires.</span>
                            </h2>
                        </div>

                        <p className="text-blue-200/60 font-light text-lg mb-12 max-w-2xl">
                            Des collaborations stratégiques avec les acteurs clés de la formation et de la gouvernance locale.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {[
                                { src: '/assets/partenaires-formations/achatpublic.webp', name: 'Achat Public' },
                                { src: '/assets/partenaires-formations/lamyliaisons.webp', name: 'Lamy Liaisons' },
                                { src: '/assets/partenaires-formations/associationmairefrance.png', name: 'Association des Maires de France' },
                                { src: '/assets/partenaires-formations/logo-aelo.webp', name: 'Association des Élus de l\'Opposition' },
                            ].map((partner, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-[#BF9B8E]/30 transition-all group"
                                >
                                    <div className="h-16 md:h-20 flex items-center justify-center">
                                        <img
                                            src={partner.src}
                                            alt={partner.name}
                                            className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                                        />
                                    </div>
                                    <p className="text-white/50 group-hover:text-white text-[10px] font-bold uppercase tracking-widest text-center transition-colors">
                                        {partner.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SUR MESURE */}
                    <section id="surmesure" className="scroll-mt-48">
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

                        {/* CTA Links */}
                        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                to="/agenda"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-sm text-white hover:bg-white/10 hover:border-[#BF9B8E]/30 font-bold uppercase tracking-widest text-xs transition-all group"
                            >
                                Nos prochaines interventions
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button
                                onClick={onOpenContact}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#BF9B8E] text-[#0C2E59] rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white transition-all group"
                            >
                                Prendre rendez-vous pour échanger
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FormationPage;

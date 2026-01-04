import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    CheckSquare,
    Layout,
    PieChart,
    Download,
    BookOpen,
    Layers,
    FileSpreadsheet,
    Image,
    ArrowRight
} from 'lucide-react';

const BoutiquePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const templates = [
        {
            title: "Template Cartographie des Risques",
            type: "Fichier Excel",
            icon: <PieChart className="w-6 h-6" />,
            desc: "Matrice complète pour identifier, coter (brut/net) et prioriser vos risques anticorruption.",
            category: "Templates"
        },
        {
            title: "Matrices de Cotation",
            type: "Fichier Excel/Notion",
            icon: <FileSpreadsheet className="w-6 h-6" />,
            desc: "Grilles prêtes à l'emploi pour évaluer la criticité de vos risques.",
            category: "Templates"
        },
        {
            title: "Checklists de Contrôle",
            type: "Document PDF",
            icon: <CheckSquare className="w-6 h-6" />,
            desc: "Points de contrôle pour sécuriser vos achats publics et procédures.",
            category: "Templates"
        },
        {
            title: "Trames COPIL",
            type: "Document Word",
            icon: <FileText className="w-6 h-6" />,
            desc: "Modèles de comptes-rendus et ordres du jour pour vos comités de pilotage.",
            category: "Templates"
        },
        {
            title: "Registres Types",
            type: "Fichier Excel",
            icon: <Layers className="w-6 h-6" />,
            desc: "Registres cadeaux/invitations, déports, alertes prêts à personnaliser.",
            category: "Templates"
        },
        {
            title: "Fiches Réflexes",
            type: "PDF / Format A4",
            icon: <BookOpen className="w-6 h-6" />,
            desc: "Synthèses visuelles pour adopter les bons réflexes face aux situations à risque.",
            category: "Templates"
        }
    ];

    const guides = [
        {
            title: "Guide Sapin II - Les 8 Piliers",
            type: "Livre Blanc",
            icon: <BookOpen className="w-6 h-6" />,
            desc: "Comprendre les fondamentaux de la loi anti-corruption française.",
            category: "Guides"
        },
        {
            title: "Kit de Démarrage Probité",
            type: "Pack Complet",
            icon: <Layout className="w-6 h-6" />,
            desc: "Tous les essentiels pour structurer votre démarche éthique.",
            category: "Kits"
        },
        {
            title: "Pack Notion/Excel Conformité",
            type: "Templates Digitaux",
            icon: <FileSpreadsheet className="w-6 h-6" />,
            desc: "Espace de travail complet pour piloter votre conformité au quotidien.",
            category: "Kits"
        }
    ];

    const infographies = [
        {
            title: "Infographie Conflit d'Intérêts",
            type: "Visuel HD",
            icon: <Image className="w-6 h-6" />,
            desc: "Schéma pédagogique pour identifier les situations de conflit.",
            category: "Infographies"
        },
        {
            title: "Infographie Parcours de l'Alerte",
            type: "Visuel HD",
            icon: <Image className="w-6 h-6" />,
            desc: "Le circuit complet du signalement interne en un coup d'œil.",
            category: "Infographies"
        }
    ];

    const ProductCard: React.FC<{ product: typeof templates[0], key?: number }> = ({ product }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col hover:border-[#BF9B8E]/50 transition-colors group"
        >
            <div className="bg-[#BF9B8E]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#BF9B8E] mb-6 group-hover:scale-110 transition-transform">
                {product.icon}
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-2">{product.type}</span>
            <h3 className="text-lg font-cinzel font-bold mb-4">{product.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow">{product.desc}</p>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-[#BF9B8E] font-bold text-xs tracking-widest uppercase">Télécharger</span>
                <button className="text-white hover:text-[#BF9B8E] transition-colors">
                    <Download className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20">
            {/* Header */}
            <div className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-12 bg-[#BF9B8E]" />
                    <span className="text-[#BF9B8E] font-mono text-[10px] tracking-[0.5em] uppercase">Outils Gratuits</span>
                </motion.div>
                <h1 className="text-4xl md:text-7xl font-cinzel font-black uppercase mb-6">
                    BOUTIQUE <br /><span className="text-[#BF9B8E]">& RESSOURCES.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl font-serif italic">
                    Accélérez votre conformité avec nos outils industrialisés. Entrée de gamme, génération de leads et crédibilité.
                </p>
            </div>

            {/* Templates Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-white/20 flex-grow"></div>
                    <h2 className="text-2xl font-cinzel font-bold uppercase tracking-widest">Templates</h2>
                    <div className="h-px bg-white/20 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            </section>

            {/* Guides & Kits Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-white/20 flex-grow"></div>
                    <h2 className="text-2xl font-cinzel font-bold uppercase tracking-widest">Guides & Kits</h2>
                    <div className="h-px bg-white/20 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            </section>

            {/* Infographies Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-white/20 flex-grow"></div>
                    <h2 className="text-2xl font-cinzel font-bold uppercase tracking-widest">Infographies</h2>
                    <div className="h-px bg-white/20 flex-grow"></div>
                </div>
                <p className="text-center text-white/50 mb-12 font-serif italic">Réalisées par Christelle</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {infographies.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            </section>

            {/* Lead Gen CTA */}
            <div className="container mx-auto px-6">
                <div className="bg-[#BF9B8E] text-[#0C2E59] p-12 md:p-20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-black uppercase mb-4">Besoin d'un pack sur-mesure ?</h2>
                        <p className="text-lg opacity-80">Nous créons des outils adaptés à la structure spécifique de votre organisation.</p>
                    </div>
                    <button className="whitespace-nowrap bg-[#0C2E59] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3">
                        Consulter un expert <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="absolute top-0 right-0 text-[15rem] font-cinzel font-black opacity-10 -mr-20 -mt-20 leading-none">PRO</div>
                </div>
            </div>
        </div>
    );
};

export default BoutiquePage;

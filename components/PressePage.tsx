import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Video, FileText, Newspaper } from 'lucide-react';

interface Article {
    id: number;
    title: string;
    date: string;
    source: string;
    link: string;
    type: 'article' | 'video' | 'pdf';
}

const articles: Article[] = [
    {
        id: 1,
        title: "Cartographie des risques en commande publique",
        date: "15/10/2025",
        source: "Achat Public",
        link: "https://www.achatpublic.info/actualites/info-du-jour/2025/10/15/commande-publique-cartographie-risques-achat-public#",
        type: 'article'
    },
    {
        id: 2,
        title: "Le parquet français requiert la prison pour Sarkozy dans l'affaire du financement de la Libye",
        date: "25/09/2025",
        source: "Al Jazeera English (YouTube)",
        link: "https://www.youtube.com/watch?v=wlgFCZh1nvs",
        type: 'video'
    },
    {
        id: 3,
        title: "Le marché de la probité, un business qui tourne bien",
        date: "01/04/2025",
        source: "La Gazette des Communes",
        link: "https://www.lagazettedescommunes.com/977501/le-marche-de-la-probite-un-business-qui-tourne-bien",
        type: 'article'
    },
    {
        id: 4,
        title: "Commande publique : Faut-il supprimer le délit de favoritisme ?",
        date: "21/02/2025",
        source: "Le Moniteur (Extrait PDF)",
        link: "#", // Placeholder for local PDF if not available
        type: 'pdf'
    },
    {
        id: 5,
        title: "Ouverture du procès pour soupçons de financement libyen de la campagne de 2007 de Sarkozy",
        date: "07/01/2025",
        source: "Al Jazeera English (YouTube)",
        link: "https://m.youtube.com/watch?v=2cQax7rIBq4",
        type: 'video'
    },
    {
        id: 6,
        title: "Marine Le Pen et son parti d'extrême droite jugés pour détournement présumé de fonds européens",
        date: "30/09/2024",
        source: "Al Jazeera English (YouTube)",
        link: "https://www.youtube.com/watch?app=desktop&v=pQ6JDB7fqI8",
        type: 'video'
    },
    {
        id: 7,
        title: "Affaire des assistants du RN : tout comprendre avant le procès",
        date: "27/09/2024",
        source: "Les Surligneurs",
        link: "https://www.lessurligneurs.eu/affaire-des-assistants-du-rn-tout-comprendre-avant-le-proces/",
        type: 'article'
    },
    {
        id: 8,
        title: "Présent bien intentionné ou cadeau empoisonné ?",
        date: "10/05/2024",
        source: "La Gazette des Communes",
        link: "https://www.lagazettedescommunes.com/927014/present-bien-intentionne-ou-cadeau-empoisonne/",
        type: 'article'
    },
    {
        id: 9,
        title: "Conflits d'intérêts : comment les élus peuvent-ils écarter cette épée de Damoclès ?",
        date: "15/04/2024",
        source: "Ouest France",
        link: "https://www.ouest-france.fr/pays-de-la-loire/nantes-44000/conflits-dinterets-comment-les-elus-peuvent-ils-ecarter-cette-epee-de-damocles-0e208a8e-fa5a-11ee-996f-cb486090b639",
        type: 'article'
    },
    {
        id: 10,
        title: "Alerte interne : le difficile challenge entre la collecte d'informations et le respect du RGPD",
        date: "19/03/2024",
        source: "Actuel Direction Juridique",
        link: "#", // Missing link in provided snippet or requires login
        type: 'article'
    },
    {
        id: 11,
        title: "Maires agressé.es : \"La plus dure violence que j'ai affrontée, c'est la violence d'état\"",
        date: "24/11/2023",
        source: "Arrêt sur Images",
        link: "https://www.arretsurimages.net/emissions/arret-sur-images/maires-agresses-la-plus-dure-violence-que-jai-affrontee-cest-la-violence-detat",
        type: 'video'
    },
    {
        id: 12,
        title: "Le rétablissement du cumul de mandats : l'arbre qui cache la forêt",
        date: "17/11/2023",
        source: "La Gazette des Communes",
        link: "https://www.lagazettedescommunes.com/896828/le-retablissement-du-cumul-de-mandats-larbre-qui-cache-la-foret/",
        type: 'article'
    },
    {
        id: 13,
        title: "Déclarations d’intérêts : transformer le sentiment de contrainte en un puissant levier préventif",
        date: "07/11/2023",
        source: "Acteurs Publics",
        link: "https://acteurspublics.fr/articles/farah-zaoui-declarations-dinterets-transformer-le-sentiment-de-contrainte-en-un-puissant-levier-preventif",
        type: 'article'
    },
    {
        id: 14,
        title: "Déontologue des élus, une mise en place semée d’embûches",
        date: "08/08/2023",
        source: "La Gazette des Communes",
        link: "https://www.lagazettedescommunes.com/881324/deontologue-des-elus-une-mise-en-place-semee-dembuches/",
        type: 'article'
    },
    {
        id: 15,
        title: "La lutte anti-corruption comme mission (interview)",
        date: "20/06/2023",
        source: "La mission compliance de Gattegno",
        link: "https://missivecompliancedegattegno.substack.com/p/mcg-29-la-lutte-anti-corruption-comme",
        type: 'article'
    },
    {
        id: 16,
        title: "La transparence est un droit, et non un privilège",
        date: "05/05/2023",
        source: "Entourages",
        link: "https://www.entourages.media/p/entourages-n82-pierre-maxime-sarron",
        type: 'article'
    },
    {
        id: 17,
        title: "Il faut étendre le périmètre légal des déclarations d’intérêts des responsables publics",
        date: "18/11/2022",
        source: "Acteurs Publics",
        link: "https://acteurspublics.fr/articles/farah-zaoui-il-faut-etendre-le-perimetre-legal-des-declarations-dinterets-des-responsables-publics",
        type: 'article'
    },
    {
        id: 18,
        title: "Conflit d’intérêt : le TA de Rouen en plein cas d’école",
        date: "26/10/2022",
        source: "Achat Public",
        link: "https://www.achatpublic.info/actualites/info-du-jour/2022/08/19/conflit-dinteret-le-ta-de-rouen-en-plein-cas-decole-30341",
        type: 'article'
    }
];

const PressePage: React.FC = () => {
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
                        Revue de <span className="text-[#BF9B8E]">Presse</span>
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
                        Découvrez nos interventions dans la presse spécialisée en éthique et conformité.
                    </motion.p>
                </header>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-[#081d38] border border-white/10 hover:border-[#BF9B8E]/50 p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#BF9B8E]/10"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-[#BF9B8E] text-sm font-mono tracking-widest uppercase">
                                    {article.date}
                                </div>
                                <div className="text-white/30 group-hover:text-[#BF9B8E] transition-colors">
                                    {article.type === 'video' ? <Video size={20} /> : article.type === 'pdf' ? <FileText size={20} /> : <Newspaper size={20} />}
                                </div>
                            </div>

                            <h3 className="text-xl font-cinzel font-bold leading-tight mb-4 group-hover:text-[#BF9B8E] transition-colors flex-grow">
                                {article.title}
                            </h3>

                            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                                    {article.source}
                                </span>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-[#BF9B8E]/10 rounded-full text-[#BF9B8E] hover:bg-[#BF9B8E] hover:text-[#0C2E59] transition-all"
                                >
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-32 text-center bg-[#081d38]/50 p-12 border border-white/5 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-cinzel font-bold mb-6 text-[#BF9B8E]">
                        Ne manquez rien de l'actualité
                    </h2>
                    <p className="text-white/70 mb-8 font-serif italic text-lg">
                        Abonnez-vous à nos réseaux pour suivre toutes nos interventions.
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/company/probitas-conseil/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#BF9B8E] text-white font-bold py-3 px-8 rounded-sm hover:bg-[#ae8a7e] transition-all tracking-widest text-sm uppercase"
                        >
                            Suivre sur LinkedIn
                        </a>
                        <a
                            href="https://twitter.com/Probitas_org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border border-[#BF9B8E] text-[#BF9B8E] font-bold py-3 px-8 rounded-sm hover:bg-[#BF9B8E] hover:text-white transition-all tracking-widest text-sm uppercase"
                        >
                            Suivre sur X
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PressePage;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, ExternalLink, Play, Newspaper, Quote, ArrowRight, X, Calendar, MapPin, Video } from 'lucide-react';

interface PressItemData {
    id: string;
    title: string;
    source: string;
    date: string;
    type: 'video' | 'article';
    link: string;
    description: string;
    image: string;
    longDescription?: string;
}

const PressePage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<PressItemData | null>(null);
    const [filter, setFilter] = useState<'all' | 'video' | 'article'>('all');

    const pressData: PressItemData[] = [
        {
            id: "251015-achatpublic",
            title: "Cartographie des risques en commande publique",
            source: "Achat Public",
            date: "15/10/2025",
            type: "article",
            link: "https://www.achatpublic.info/actualites/info-du-jour/2025/10/15/commande-publique-cartographie-risques-achat-public",
            description: "Une analyse stratégique sur la gestion des risques de probité.",
            longDescription: "Dans cette intervention exclusive pour Achat Public, Probitas détaille les nouvelles méthodologies de cartographie des risques appliquées spécifiquement au secteur de la commande publique.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2025/11/251015_achatpublic.jpg"
        },
        {
            id: "250925-youtube",
            title: "Affaire financement Libye : Le parquet requiert la prison pour Sarkozy",
            source: "Al Jazeera English",
            date: "25/09/2025",
            type: "video",
            link: "https://www.youtube.com/watch?v=wlgFCZh1nvs",
            description: "Analyse des réquisitions dans l'affaire du financement libyen.",
            longDescription: "Probitas apporte son éclairage sur les mécanismes de financement occulte et les conséquences éthiques des réquisitions du parquet national financier.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2025/11/250925_youtube.jpg"
        },
        {
            id: "250415-gazette",
            title: "Le marché de la probité, un business qui tourne bien",
            source: "La Gazette des Communes",
            date: "01/04/2025",
            type: "article",
            link: "https://www.lagazettedescommunes.com/977501/le-marche-de-la-probite-un-business-qui-tourne-bien",
            description: "Enquête sur l'essor du conseil en éthique territoriale.",
            longDescription: "La Gazette interroge l'évolution du métier de déontologue et l'émergence d'un véritable marché de la probité au sein des mairies françaises.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2025/04/250415_la_gazette.jpg"
        },
        {
            id: "250221-moniteur",
            title: "Commande publique : Faut-il supprimer le délit de favoritisme ?",
            source: "Le Moniteur",
            date: "21/02/2025",
            type: "article",
            link: "https://probitas-conseil.fr/wp-content/uploads/2025/02/250221_le_moniteur_6342.pdf",
            description: "Débat juridique sur l'évolution du droit pénal de la commande publique.",
            longDescription: "Analyse critique de la proposition de réforme du délit de favoritisme. Entre simplification administrative et risque d'impunité.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2025/02/250221_le_moniteur_6342.jpg"
        },
        {
            id: "250107-youtube-sarkozy",
            title: "Ouverture du procès pour soupçons de financement libyen (Sarkozy)",
            source: "Al Jazeera English",
            date: "07/01/2025",
            type: "video",
            link: "https://m.youtube.com/watch?v=2cQax7rIBq4",
            description: "Focus sur l'ouverture du procès historique du financement libyen.",
            longDescription: "Probitas décrypte les enjeux de ce procès majeur pour la transparence de la vie politique française sur la scène internationale.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2025/02/250107_youtube2.jpg"
        },
        {
            id: "240930-youtube-lepen",
            title: "Marine Le Pen et le RN jugés pour détournement de fonds",
            source: "Al Jazeera English",
            date: "30/09/2024",
            type: "video",
            link: "https://www.youtube.com/watch?app=desktop&v=pQ6JDB7fqI8",
            description: "Focus sur le procès des assistants parlementaires européens.",
            longDescription: "Intervention sur la chaîne internationale Al Jazeera pour expliquer les rouages du système de détournement présumé de fonds européens par le RN.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2024/10/240930_youtube.jpg"
        },
        {
            id: "240927-surligneurs",
            title: "Affaire des assistants du RN : tout comprendre avant le procès",
            source: "Les Surligneurs",
            date: "27/09/2024",
            type: "article",
            link: "https://www.lessurligneurs.eu/affaire-des-assistants-du-rn-tout-comprendre-avant-le-proces/",
            description: "Analyse juridique complète de l'affaire des assistants du RN.",
            longDescription: "Un dossier pédagogique pour comprendre les charges pèsent sur le parti et les mécanismes de contrôle du Parlement Européen.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2024/10/240927_les_surligneurs.jpg"
        },
        {
            id: "240510-gazette",
            title: "Présent bien intentionné ou cadeau empoisonné ?",
            source: "La Gazette des Communes",
            date: "10/05/2024",
            type: "article",
            link: "https://www.lagazettedescommunes.com/927014/present-bien-intentionne-ou-cadeau-empoisonne/",
            description: "La délicate frontière entre courtoisie et corruption.",
            longDescription: "Probitas analyse les risques liés aux cadeaux et invitations dans le secteur public et propose des repères concrets pour les agents publics.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2024/05/240510_la_gazette.jpg"
        },
        {
            id: "240415-ouest-france",
            title: "Conflits d'intérêts : comment écarter cette épée de Damoclès ?",
            source: "Ouest France",
            date: "15/04/2024",
            type: "article",
            link: "https://www.ouest-france.fr/pays-de-la-loire/nantes-44000/conflits-dinterets-comment-les-elus-peuvent-ils-ecarter-cette-epee-de-damocles-0e208a8e-fa5a-11ee-996f-cb486090b639",
            description: "Guide pour les élus face aux risques de conflits d'intérêts.",
            longDescription: "Une interview sur les mesures de prévention à adopter pour protéger les élus locaux des poursuites pénales involontaires.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2024/05/240415_ouest_france.jpg"
        },
        {
            id: "240319-actuel",
            title: "Alerte interne : entre collecte d'infos et RGPD",
            source: "actuEL Direction Juridique",
            date: "19/03/2024",
            type: "article",
            link: "https://www.actuel-direction-juridique.fr/content/alerte-interne-le-difficile-challenge-entre-la-collecte-dinformations-et-le-respect-du-rgpd",
            description: "Le défi complexe du lanceur d'alerte en entreprise.",
            longDescription: "Comment concilier le devoir d'alerte instauré par la loi Sapin II avec les contraintes strictes du RGPD ?",
            image: "https://probitas-conseil.fr/wp-content/uploads/2024/04/240319_actuel_direction_juridique.jpg"
        },
        {
            id: "231124-arretsurimages",
            title: "Maires agressés : 'La plus dure violence, c'est celle d'État'",
            source: "Arrêt sur Images",
            date: "24/11/2023",
            type: "video",
            link: "https://www.arretsurimages.net/emissions/arret-sur-images/maires-agresses-la-plus-dure-violence-que-jai-affrontee-cest-la-violence-detat",
            description: "Débat sur les violences faites aux élus et le rôle de l'État.",
            longDescription: "Une émission consacrée aux conditions d'exercice du mandat local et aux tensions éthiques croissantes sur le terrain.",
            image: "https://probitas-conseil.fr/wp-content/uploads/2023/11/231124_arretsurimages.jpg"
        }
    ];

    const filteredData = pressData.filter(item => filter === 'all' || item.type === filter);

    return (
        <div className="bg-[#0C2E59] min-h-screen pt-48 pb-40 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-24">

                {/* Editorial Header */}
                <header className="mb-32 relative">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" /> {/* Tiret Doré */}
                            <span className="text-[#BF9B8E] font-bold text-[10px] uppercase tracking-[0.4em]">Revue de Presse</span>
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                        </div>

                        <h1 className="text-7xl md:text-[9vw] font-black tracking-tighter leading-[0.85] text-white uppercase">
                            TOUT LE MONDE <br />
                            <span className="italic font-light text-white/40">EN PARLE.</span>
                        </h1>

                        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-12">
                            <p className="text-xl md:text-2xl text-blue-200/60 font-light max-w-xl leading-snug">
                                Découvrez nos interventions, nos analyses et nos combats pour une culture de l’éthique ancrée dans le réel.
                            </p>

                            <div className="flex bg-[#0C2E59]/50 p-1.5 rounded-full border border-white/10 shadow-sm gap-1 self-start md:self-auto backdrop-blur-sm">
                                {(['all', 'article', 'video'] as const).map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-[#BF9B8E] text-[#0C2E59]' : 'text-white/50 hover:text-white'}`}
                                    >
                                        {f === 'all' ? 'Toutes les archives' : f === 'article' ? 'Articles' : 'Médias / TV'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Press Grid - More spaced and editorial */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    <AnimatePresence mode="popLayout">
                        {filteredData.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: idx * 0.05 }}
                                onClick={() => setSelectedItem(item)}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-8 bg-white/5">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-[#0C2E59]/40 group-hover:bg-[#0C2E59]/0 transition-colors duration-500" />

                                    {item.type === 'video' && (
                                        <div className="absolute top-6 right-6">
                                            <div className="w-12 h-12 bg-[#BF9B8E]/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                                                <Play className="w-5 h-5 text-[#0C2E59] fill-[#0C2E59] ml-0.5" />
                                            </div>
                                        </div>
                                    )}

                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white">
                                        <span className="text-[9px] font-black uppercase tracking-widest bg-[#0C2E59]/80 backdrop-blur px-3 py-1 rounded-full border border-[#BF9B8E]/30 text-[#BF9B8E]">
                                            {item.source}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-[#BF9B8E]">
                                        <span className="text-[10px] font-bold tracking-[0.2em]">{item.date}</span>
                                        <div className="h-px flex-1 bg-[#BF9B8E]/30" />
                                        <div className="text-[#BF9B8E] opacity-60">
                                            {item.type === 'video' ? <Video size={14} /> : <Newspaper size={14} />}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-[#BF9B8E] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-200/60 text-sm font-light leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="pt-4 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#BF9B8E]">Découvrir les détails</span>
                                        <ArrowRight className="w-4 h-4 text-[#BF9B8E]" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Modal Overlay for Details */}
                <AnimatePresence>
                    {selectedItem && (
                        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedItem(null)}
                                className="absolute inset-0 bg-[#0C2E59]/90 backdrop-blur-md"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                                className="relative w-full max-w-5xl bg-[#081d38] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl z-[210] flex flex-col md:flex-row h-[85vh] md:h-auto"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-8 right-8 z-[220] w-12 h-12 bg-[#BF9B8E] text-[#0C2E59] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Left Side: Visual */}
                                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                    <img src={selectedItem.image} alt="" className="w-full h-full object-cover opacity-90" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#081d38] via-transparent to-transparent md:hidden" />
                                    <div className="absolute bottom-8 left-8 text-white md:hidden">
                                        <span className="text-xs font-black uppercase tracking-[0.4em] mb-2 block text-[#BF9B8E]">{selectedItem.source}</span>
                                        <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                                    </div>
                                </div>

                                {/* Right Side: Content */}
                                <div className="flex-1 p-12 md:p-20 flex flex-col justify-center bg-[#081d38]">
                                    <div className="hidden md:flex items-center gap-4 mb-12">
                                        <Calendar className="w-4 h-4 text-[#BF9B8E]" />
                                        <span className="text-xs font-bold text-[#BF9B8E] uppercase tracking-[0.4em]">{selectedItem.date} // {selectedItem.source}</span>
                                    </div>

                                    <h2 className="hidden md:block text-5xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                                        {selectedItem.title}
                                    </h2>

                                    <div className="h-[2px] w-20 bg-[#BF9B8E] mb-8" />

                                    <p className="text-xl md:text-2xl text-blue-200/80 font-light leading-relaxed mb-12">
                                        {selectedItem.longDescription || selectedItem.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <a
                                            href={selectedItem.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-4 bg-[#BF9B8E] text-[#0C2E59] px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-all group"
                                        >
                                            {selectedItem.type === 'video' ? 'Visionner la vidéo' : 'Lire l\'article complet'}
                                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>

                                        <button
                                            onClick={() => setSelectedItem(null)}
                                            className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/20 font-black uppercase tracking-widest text-[10px] text-white/60 hover:text-white hover:border-white transition-all"
                                        >
                                            Retour aux archives
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Probitas Logo / Footer Section */}
                <section className="mt-60 border-t border-white/10 pt-32 text-center">
                    <div className="inline-flex items-center gap-4 mb-12">
                        <div className="w-16 h-16 bg-[#BF9B8E] text-[#0C2E59] flex items-center justify-center rounded-2xl shadow-xl">
                            <span className="text-3xl font-black italic">P</span>
                        </div>
                        <span className="text-4xl font-black tracking-tighter text-white">probitas</span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-16">
                        INSUFFLER LA CULTURE <br />
                        <span className="text-[#BF9B8E]">DE L'ÉTHIQUE.</span>
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-blue-200/50">
                        <div className="flex items-center gap-4">
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">Paris, France</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Youtube className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">@probitas_conseil</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PressePage;

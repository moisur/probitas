import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Clock, Euro, Users, Target, BookOpen,
    CheckCircle, Shield, Calendar, Monitor, ChevronRight,
    Award, Star, FileText, ArrowRight, UserCheck, Accessibility, GraduationCap, Users2
} from 'lucide-react';
import { getFormationBySlug, organisationStats } from '../data/formationsData';
import SEO from './SEO';

interface FormationDetailPageProps {
    onOpenContact: () => void;
}

const FormationDetailPage: React.FC<FormationDetailPageProps> = ({ onOpenContact }) => {
    const { slug } = useParams<{ slug: string }>();
    const formation = slug ? getFormationBySlug(slug) : undefined;

    if (!formation) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0C2E59]">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-white mb-4 uppercase tracking-widest">Formation non trouvée</h1>
                    <Link to="/formations" className="text-[#BF9B8E] hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Retour au catalogue
                    </Link>
                </div>
            </div>
        );
    }

    const isPublic = formation.sector === 'public';

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <>
            <SEO
                title={`${formation.title} - Formation Probitas`}
                description={formation.description}
            />

            <div className="bg-[#0C2E59] min-h-screen pt-32 md:pt-48 pb-40 text-white selection:bg-[#BF9B8E] selection:text-[#0C2E59]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* --- HEADER ÉDITORIAL --- */}
                    <motion.header
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="mb-24 relative"
                    >
                        {/* Breadcrumb & Tags */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-6 mb-8">
                            <Link
                                to="/formations"
                                className="inline-flex items-center text-white/40 hover:text-[#BF9B8E] transition-colors text-xs font-bold uppercase tracking-[0.2em] group w-fit"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Retour Catalogue
                            </Link>

                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                                <span className="text-[#BF9B8E] font-bold text-[10px] uppercase tracking-[0.4em]">
                                    {isPublic ? 'Secteur Public' : 'Secteur Privé'}
                                </span>
                                <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-white uppercase mb-12 max-w-5xl">
                            {formation.title}
                        </motion.h1>

                        {/* Intro Grid */}
                        <div className="grid lg:grid-cols-12 gap-12 items-end">
                            <motion.div variants={itemVariants} className="lg:col-span-7">
                                <p className="text-xl md:text-2xl text-blue-200/60 font-light leading-snug border-l-2 border-[#BF9B8E]/30 pl-6">
                                    {formation.description}
                                </p>
                            </motion.div>

                            {/* Key Stats Strip - Integrated in Header */}
                            <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-4 border border-white/10 rounded-sm">
                                        <div className="flex items-center gap-2 mb-2 text-[#BF9B8E]">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-[9px] uppercase tracking-widest font-bold">Durée</span>
                                        </div>
                                        <span className="text-xl font-bold">{formation.duration}</span>
                                    </div>
                                    <div className="bg-white/5 p-4 border border-white/10 rounded-sm">
                                        <div className="flex items-center gap-2 mb-2 text-[#BF9B8E]">
                                            <Euro className="w-4 h-4" />
                                            <span className="text-[9px] uppercase tracking-widest font-bold">Tarif</span>
                                        </div>
                                        <span className="text-xl font-bold">{formation.price}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.header>

                    {/* --- MAIN CONTENT GRID --- */}
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative">

                        {/* LEFT COLUMN (Content) */}
                        <div className="lg:col-span-8 space-y-24">

                            {/* SECTION: OBJECTIFS & PUBLIC */}
                            <motion.section
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                                className="space-y-12"
                            >
                                {/* Target Audience */}
                                <div className="group">
                                    <div className="flex items-end gap-4 mb-6">
                                        <h2 className="text-3xl font-black text-white uppercase tracking-tight">Public Cible</h2>
                                        <div className="h-px flex-1 bg-white/10 mb-2 group-hover:bg-[#BF9B8E]/50 transition-colors" />
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="shrink-0 mt-1 text-[#BF9B8E]">
                                            <Target size={24} />
                                        </div>
                                        <p className="text-blue-200/70 text-lg font-light leading-relaxed">
                                            {formation.target}
                                        </p>
                                    </div>
                                </div>

                                {/* Objectives */}
                                <div className="group">
                                    <div className="flex items-end gap-4 mb-6">
                                        <h2 className="text-3xl font-black text-white uppercase tracking-tight">Objectifs</h2>
                                        <div className="h-px flex-1 bg-white/10 mb-2 group-hover:bg-[#BF9B8E]/50 transition-colors" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {formation.objectives.map((obj, i) => (
                                            <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/5 hover:border-[#BF9B8E]/30 transition-all rounded-sm">
                                                <span className="text-[#BF9B8E] font-mono text-sm">0{i + 1}</span>
                                                <p className="text-white/80 text-sm leading-relaxed">{obj}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.section>

                            {/* SECTION: PROGRAMME (TIMELINE) */}
                            <motion.section
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                            >
                                <div className="flex items-center gap-4 mb-12">
                                    <BookOpen className="text-[#BF9B8E]" />
                                    <span className="text-[#BF9B8E] font-bold text-[10px] uppercase tracking-[0.4em]">Programme Détaillé</span>
                                </div>

                                <div className="relative border-l border-white/10 ml-3 md:ml-0 space-y-12">
                                    {formation.program.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="relative pl-8 md:pl-12 group"
                                        >
                                            {/* Dot on timeline */}
                                            <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-[#0C2E59] border-2 border-[#BF9B8E] rotate-45 group-hover:bg-[#BF9B8E] transition-colors" />

                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#BF9B8E] transition-colors">
                                                Module {index + 1}
                                            </h3>
                                            <p className="text-blue-200/60 font-light leading-relaxed">
                                                {item}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* SECTION: ACCESSIBILITÉ & MODALITÉS TECHNIQUES */}
                            <motion.section
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                                className="space-y-12"
                            >
                                {/* Accessibilité */}
                                <div className="group">
                                    <div className="flex items-end gap-4 mb-6">
                                        <h2 className="text-3xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                                            <Accessibility className="w-7 h-7 text-[#BF9B8E]" />
                                            Accessibilité
                                        </h2>
                                    </div>
                                    <div className="text-blue-200/70 text-base font-light leading-relaxed bg-white/5 p-6 border border-white/5 rounded-sm">
                                        {formation.accessibility.split('Farah ZAOUI').map((part, i, arr) => (
                                            <span key={i}>
                                                {part}
                                                {i < arr.length - 1 && (
                                                    <a
                                                        href="mailto:farah.zaoui@probitas-conseil.com"
                                                        className="text-[#BF9B8E] hover:underline font-medium"
                                                    >
                                                        Farah ZAOUI
                                                    </a>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Modalités Techniques */}
                                <div className="group">
                                    <div className="flex items-end gap-4 mb-6">
                                        <h2 className="text-3xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                                            <Monitor className="w-7 h-7 text-[#BF9B8E]" />
                                            Modalités Techniques
                                        </h2>
                                        <div className="h-px flex-1 bg-white/10 mb-2 group-hover:bg-[#BF9B8E]/50 transition-colors" />
                                    </div>
                                    <p className="text-blue-200/70 text-base font-light leading-relaxed bg-white/5 p-6 border border-white/5 rounded-sm whitespace-pre-line">
                                        {formation.technicalModalities}
                                    </p>
                                </div>

                                {/* Info Formation Qualifiante */}
                                <div className="bg-gradient-to-r from-[#BF9B8E]/10 to-transparent border-l-4 border-[#BF9B8E] p-6">
                                    <h3 className="text-xl font-black text-white uppercase mb-3 flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5 text-[#BF9B8E]" />
                                        Formation de type « qualifiante »
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                                        Une formation qualifiante vise à développer des compétences opérationnelles immédiates utiles dans le cadre professionnel, mais sans délivrer de certification officielle ou de titre homologué.
                                    </p>
                                    <div className="bg-[#0C2E59]/50 p-4 border border-white/10 rounded-sm">
                                        <p className="text-[#BF9B8E] text-xs font-bold uppercase tracking-wider mb-1">⚠️ Attention</p>
                                        <p className="text-white/50 text-xs leading-relaxed">
                                            Il ne s'agit pas d'une formation « certifiante » enregistrée au RNCP et permettant la délivrance d'une certification reconnue par l'état.
                                        </p>
                                    </div>
                                </div>
                            </motion.section>

                            {/* SECTION: TRAINER & STATS */}
                            <motion.section
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                                className="bg-[#081d38] border border-white/5 p-8 md:p-12 rounded-sm"
                            >
                                <div className="flex flex-col md:flex-row gap-12 items-start">
                                    {/* Trainer */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-16 h-16 bg-[#BF9B8E] rounded-sm flex items-center justify-center text-[#0C2E59] text-2xl font-black">
                                                FZ
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-[#BF9B8E] mb-1">Formatrice Experte</p>
                                                <h3 className="text-2xl font-bold text-white">{formation.trainer}</h3>
                                            </div>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[#BF9B8E] shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-white/90 font-bold text-sm">Méthodologie</p>
                                                    <p className="text-white/50 text-xs leading-relaxed">{formation.methodology}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[#BF9B8E] shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-white/90 font-bold text-sm">Évaluation</p>
                                                    <p className="text-white/50 text-xs leading-relaxed">{formation.evaluation}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {formation.trainerCVLink && (
                                            <a href={formation.trainerCVLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-[#BF9B8E] transition-colors border-b border-white/20 hover:border-[#BF9B8E] pb-1">
                                                Voir le CV Complet <ArrowRight className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>

                                    {/* Vertical Divider (Desktop) */}
                                    <div className="hidden md:block w-px bg-white/10 self-stretch" />

                                    {/* KPI Section - Stats complètes */}
                                    <div className="w-full md:w-1/3 space-y-6">
                                        {/* Taux de satisfaction */}
                                        <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                                            <p className="text-[10px] text-white/50 leading-relaxed mb-2">
                                                Taux de satisfaction global de l'Organisme de Formation en 2025 :
                                            </p>
                                            <div className="text-3xl font-black text-[#BF9B8E]">{organisationStats.satisfactionRate}</div>
                                            <p className="text-[9px] italic text-white/30 mt-1">(mise à jour le {organisationStats.satisfactionRateUpdateDate})</p>
                                        </div>

                                        {/* Taux de recommandation */}
                                        <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                                            <p className="text-[10px] text-white/50 leading-relaxed mb-2">
                                                Taux de recommandation global de l'Organisme de Formation en 2025 :
                                            </p>
                                            <div className="text-3xl font-black text-[#BF9B8E]">{organisationStats.recommendationRate}</div>
                                            <p className="text-[9px] italic text-white/30 mt-1">(mise à jour le {organisationStats.recommendationRateUpdateDate})</p>
                                        </div>

                                        {/* Apprenants & Heures */}
                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                            <div className="text-center">
                                                <div className="text-4xl font-black text-white">{organisationStats.learnersCount2024}</div>
                                                <p className="text-[10px] text-white/50 mt-1">Apprenants en 2024*</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-4xl font-black text-white">{organisationStats.cumulativeHours2024}</div>
                                                <p className="text-[10px] text-white/50 mt-1">heures de formation cumulées stagiaires en 2024*</p>
                                            </div>
                                        </div>

                                        {/* Note BPF */}
                                        <p className="text-[9px] italic text-white/30">*Déclaration BPF {organisationStats.bpfDeclarationYear}</p>
                                    </div>
                                </div>
                            </motion.section>

                        </div>

                        {/* RIGHT COLUMN (Sticky Sidebar) */}
                        <div className="lg:col-span-4 relative">
                            <div className="sticky top-32 space-y-4">

                                {/* CTA Card */}
                                <div className="bg-[#BF9B8E] p-8 rounded-sm shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                        <Calendar size={120} strokeWidth={1} />
                                    </div>

                                    <h3 className="text-[#0C2E59] text-2xl font-black uppercase leading-none mb-6 relative z-10">
                                        Intéressé par <br />cette formation ?
                                    </h3>

                                    <button
                                        onClick={onOpenContact}
                                        className="w-full bg-[#0C2E59] text-white py-4 px-6 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#0C2E59] transition-all relative z-10 flex items-center justify-between group/btn shadow-lg"
                                    >
                                        <span>Demander un devis</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>

                                    <div className="mt-6 pt-6 border-t border-[#0C2E59]/20 relative z-10">
                                        <div className="flex items-center gap-2 text-[#0C2E59]/70 mb-2">
                                            <Users size={16} />
                                            <span className="text-xs font-bold uppercase tracking-wider">Prérequis</span>
                                        </div>
                                        <p className="text-[#0C2E59] text-sm font-medium leading-tight">
                                            {formation.prerequisites}
                                        </p>
                                    </div>
                                </div>

                                {/* Info Card */}
                                <div className="bg-[#081d38] border border-white/10 p-6 rounded-sm space-y-6">
                                    <div>
                                        <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-3">
                                            <Monitor className="w-4 h-4 text-[#BF9B8E]" />
                                            Modalités
                                        </h4>
                                        <p className="text-white/50 text-xs leading-relaxed">
                                            {formation.modalities}
                                        </p>
                                    </div>

                                    <div className="h-px bg-white/5" />

                                    <div>
                                        <h4 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-3">
                                            <Shield className="w-4 h-4 text-[#BF9B8E]" />
                                            Certification
                                        </h4>
                                        <p className="text-white/50 text-xs leading-relaxed mb-4">
                                            Action de formation qualifiante. Attestation de fin de formation délivrée.
                                        </p>
                                        <img src="/assets/certificat-qua006775.webp" alt="Qualiopi" className="h-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                                    </div>

                                    <div className="bg-white/5 p-3 rounded-sm text-[10px] text-white/30 font-mono space-y-1">
                                        <p>REF: {formation.slug.split('-')[0].toUpperCase()}</p>
                                        <p>CRÉÉE LE: {formation.creationDate}</p>
                                        <p>REV: {formation.lastRevisionDate}</p>
                                        <div className="pt-2 mt-2 border-t border-white/10">
                                            <p className="flex items-center gap-1">
                                                <Users2 className="w-3 h-3" />
                                                Réf. Péda: {formation.educationalReferent}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* --- FOOTER CTA STRIP --- */}
                <div className="mt-40 border-t border-white/10 bg-[#081d38]">
                    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8 tracking-tight">
                            Besoin d'un parcours <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF9B8E] to-white">sur-mesure ?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button
                                onClick={onOpenContact}
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#BF9B8E] text-[#0C2E59] font-black uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-all"
                            >
                                Contactez-nous <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/formations"
                                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-sm hover:bg-white/5 transition-all"
                            >
                                Autres formations
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormationDetailPage;
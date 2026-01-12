
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Milestone: React.FC<{
    year: string,
    title: string,
    desc: string,
    subSteps: string[],
    details: string[],
    image: string,
    bgLetter: string,
    icon: string,
    index: number,
    total: number
}> = ({ year, title, desc, subSteps, details, image, bgLetter, icon, index, total }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0.1, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    const x = useTransform(scrollYProgress, [0.1, 0.5], [index % 2 === 0 ? -50 : 50, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity, x }}
            className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-40 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Lettre de fond décorative */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vh] font-black text-white opacity-[0.02] select-none pointer-events-none z-0">
                {bgLetter}
            </span>

            {/* Bloc Texte */}
            <div className={`flex-1 relative z-10 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-[#BF9B8E] font-black text-6xl md:text-8xl opacity-10 absolute -top-12 left-0 right-0 z-0">
                    {year}
                </span>

                <div className="relative z-10 mt-6">
                    <div className="text-4xl text-[#BF9B8E] mb-4 font-serif">
                        {icon}
                    </div>
                    <h4 className="text-2xl md:text-4xl font-cinzel font-bold text-white uppercase tracking-tighter mb-6 leading-none">
                        {title}
                    </h4>

                    <div className={`space-y-6 mb-8 max-w-sm ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                        <p className="text-white/70 text-base font-light leading-relaxed italic border-l-2 border-[#BF9B8E]/20 pl-4">
                            {desc}
                        </p>

                        {/* Sous-étapes narratives */}
                        <div className="space-y-3">
                            {subSteps.map((step, i) => (
                                <p key={i} className="text-white/50 text-sm font-light leading-snug">
                                    <span className="text-[#BF9B8E] font-bold mr-2">0{i + 1}.</span>
                                    {step}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Détails techniques */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {details.map((detail, i) => (
                            <span key={i} className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#BF9B8E] bg-white/5 px-3 py-1.5 rounded border border-white/10 hover:bg-[#BF9B8E] hover:text-[#0C2E59] transition-colors cursor-default">
                                {detail}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Axe Central Original */}
            <div className="relative flex flex-col items-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#0C2E59] border-2 border-[#BF9B8E] z-10 shadow-[0_0_15px_rgba(191,155,142,0.5)]" />
                {index !== total - 1 && (
                    <div className="absolute top-3 w-px h-[calc(100%+10rem)] bg-gradient-to-b from-[#BF9B8E]/50 via-[#BF9B8E]/20 to-transparent z-0" />
                )}
            </div>

            {/* Bloc Image */}
            <div className="flex-1 flex justify-center">
                <motion.div
                    className="relative w-full max-w-[320px] aspect-[4/3] rounded-sm overflow-hidden grayscale contrast-125 border border-white/10 group"
                    whileHover={{ grayscale: 0, transition: { duration: 0.8 } }}
                >
                    <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-[#0C2E59]/30 mix-blend-overlay" />

                    {/* Cadre décoratif au survol */}
                    <div className="absolute inset-4 border border-[#BF9B8E]/0 group-hover:border-[#BF9B8E]/50 transition-all duration-700 scale-95 group-hover:scale-100" />
                </motion.div>
            </div>
        </motion.div>
    );
};

const MissionsTimeline: React.FC = () => {
    const steps = [
        {
            year: "01",
            bgLetter: "S",
            title: "Sensibiliser",
            desc: "La première phase pour impulser un changement de culture profond est d’éveiller l’intérêt du public sur l’importance de lutter contre la corruption. Une sensibilisation continue sur les conséquences néfastes de ce phénomène permet une prise de conscience et de mobiliser la société sur ces enjeux.",
            subSteps: [
                "Changement de paradigme culturel",
                "Prise de conscience des enjeux",
                "Responsabilisation collective"
            ],
            details: ["CULTURE", "IMPACT", "PUBLIC"],
            image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&auto=format&fit=crop",
            icon: ""
        },
        {
            year: "02",
            bgLetter: "P",
            title: "Promouvoir",
            desc: "La transparence peut susciter la résistance des dirigeants qui redoutent une atteinte à leur vie privée. Or, la transparence est surtout un outil de gestion des risques que l’opacité ne permet pas de réduire. Bien utilisée, cette transparence est un levier préventif qui se révèle l’allié indispensable des dirigeants et de leurs équipes. La promotion d’une transparence stratégique est un atout pour la pérennité et la sérénité des organisations.",
            subSteps: [
                "Transparence comme atout",
                "Sécurisation de la prise de décision",
                "Valorisation de l'éthique"
            ],
            details: ["STRATÉGIE", "LEADERSHIP", "VALEUR"],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
            icon: ""
        },
        {
            year: "03",
            bgLetter: "C",
            title: "Clarifier",
            desc: "La bonne compréhension des lois et de la déontologie est un préalable à toute initiative de lutte contre la corruption. Cette clarté établit un cadre solide et compréhensible, source de repères pour les dirigeants, leurs équipes et les parties prenantes. En luttant contre les zones grises et les interprétations ambigües, les mesures anticorruptions sont diffusées avec efficacité au sein des organisations.",
            subSteps: [
                "Cadre normatif précis",
                "Sécurité des procédures",
                "Lisibilité de l'action publique"
            ],
            details: ["CONFORMITÉ", "CLARTÉ", "SÉCURITÉ"],
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
            icon: ""
        },
        {
            year: "04",
            bgLetter: "I",
            title: "Insuffler la culture éthique",
            desc: "Cette culture renvoie à l’ensemble des valeurs, normes, comportements et pratiques adoptés par une organisation pour promouvoir et maintenir des normes éthiques élevées dans ses activités. Elle définit la manière dont les membres de l’organisation se comportent, prennent des décisions et interagissent les uns avec les autres, avec les parties prenantes externes et la société dans son ensemble. Cette exigence permet de prévenir les risques de corruption et d’atteinte à la réputation de l’organisation.",
            subSteps: [
                "Standards d'excellence",
                "Prévention des risques pénaux",
                "Protection de l'image"
            ],
            details: ["ÉTHIQUE", "RÉPUTATION", "EXCELLENCE"],
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
            icon: ""
        },
    ];

    return (
        <section className="py-20 md:py-40 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#BF9B8E] mb-6"
                    >
                        Notre Approche
                    </motion.h2>
                    <p className="text-4xl md:text-6xl font-cinzel font-normal text-white tracking-tight leading-tight max-w-4xl mx-auto">
                        Une méthodologie structurée par <span className="text-[#BF9B8E] italic font-serif">l'exigence.</span>
                    </p>
                </div>

                <div className="relative">
                    {steps.map((step, i) => (
                        <Milestone key={i} {...step} index={i} total={steps.length} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionsTimeline;

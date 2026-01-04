
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Liste des mots clés à mettre en évidence pour chaque section
const HIGHLIGHTS = [
    ["cœur", "réacteur", "causes", "conséquences"],
    ["conformité", "levier", "performance", "sécurité"],
    ["stratégique", "excellence", "opérationnel", "décision"],
    ["rigueur", "bienveillance", "probité", "confiance"]
];

const CONTENT = [
    {
        tag: "L'Origine",
        text: "Après 3 ans dans le cœur du réacteur de la lutte anticorruption, le constat est sans appel. Il ne suffit plus de sanctionner, il faut agir sur les causes profondes autant que sur les conséquences."
    },
    {
        tag: "La Vision",
        text: "Nous refusons la conformité de façade. Notre ambition est de faire de l'éthique un véritable levier de performance et de sécurité juridique pour les décideurs publics."
    },
    {
        tag: "L'Expertise",
        text: "Du conseil stratégique à la formation d'excellence, nous déployons un accompagnement opérationnel sur-mesure pour sécuriser chaque étape de la décision publique."
    },
    {
        tag: "L'Engagement",
        text: "Une approche alliant rigueur juridique et bienveillance humaine, où la probité devient le socle inébranlable d'une confiance durable."
    }
];

const NarrativeBlock: React.FC<{ tag: string, text: string, index: number }> = ({ tag, text, index }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.25"]
    });

    const words = text.split(" ");
    const sectionHighlights = HIGHLIGHTS[index] || [];

    return (
        <div ref={containerRef} className="mb-48 last:mb-0">
            <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                className="text-[#BF9B8E] font-cinzel text-xs tracking-[0.4em] mb-12 uppercase font-bold"
            >
                0{index + 1} // {tag}
            </motion.h3>

            <div className="flex flex-wrap text-3xl md:text-5xl font-serif font-light leading-[1.4] tracking-tight">
                {words.map((word, i) => {
                    const cleanWord = word.replace(/[.,]/g, "");
                    const isHighlighted = sectionHighlights.includes(cleanWord);

                    const start = (i / words.length) * 0.6;
                    const end = start + 0.25;

                    // Animation opacity and color
                    const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                    const y = useTransform(scrollYProgress, [start, end], [20, 0]);
                    // Highlighting: Primary text is white, Highlighted is Rose (#BF9B8E)
                    const targetColor = isHighlighted ? "#BF9B8E" : "#FFFFFF";
                    const color = useTransform(scrollYProgress, [start, end], ["#4B5563", targetColor]); // Start from gray-600
                    const scale = useTransform(scrollYProgress, [start, end], [0.98, 1]);

                    return (
                        <motion.span
                            key={i}
                            style={{ opacity, y, color, scale }}
                            className={`inline-block mr-[0.25em] mb-2 transition-all duration-100 ${isHighlighted
                                ? 'font-medium italic'
                                : ''
                                }`}
                        >
                            {word}
                        </motion.span>
                    );
                })}
            </div>

            {index < 3 && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px w-24 bg-gradient-to-r from-[#BF9B8E] to-transparent mt-20 origin-left"
                />
            )}
        </div>
    );
};

const GenesisSection: React.FC = () => {
    return (
        <section className="py-20 md:py-40 px-6 max-w-5xl mx-auto">
            {CONTENT.map((section, i) => (
                <NarrativeBlock
                    key={i}
                    index={i}
                    tag={section.tag}
                    text={section.text}
                />
            ))}
        </section>
    );
};

export default GenesisSection;

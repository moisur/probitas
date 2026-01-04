import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

const PercentageItem: React.FC<{
    label: string,
    value: number,
    visualWidth: number, // width in percentage (0-100)
    suffix?: string,
    color: string,
    progress: any,
    textColor?: string
}> = ({ label, value, visualWidth, suffix = "", color, progress, textColor = "text-white" }) => {
    const currentPercent = useTransform(progress, [0, 1], [0, value]);
    const [displayValue, setDisplayValue] = useState(0);

    useMotionValueEvent(currentPercent, "change", (latest) => {
        setDisplayValue(Math.round(latest));
    });

    const widthPercent = useTransform(progress, [0, 1], ["0%", `${visualWidth}%`]);

    return (
        <div className="relative border-b border-white/5 overflow-hidden bg-[#0C2E59] group">
            <div className="flex h-32 md:h-40 items-stretch">
                <motion.div
                    className={`h-full flex items-center justify-end px-6 md:px-12 transition-colors duration-500 ${color}`}
                    style={{ width: widthPercent }}
                >
                    <span className={`text-3xl md:text-5xl font-light tracking-tighter whitespace-nowrap ${textColor}`}>
                        {displayValue}{suffix}
                    </span>
                </motion.div>

                <div className="flex-1 flex items-center justify-end px-8 z-10 pointer-events-none">
                    <span className={`text-sm md:text-lg font-bold uppercase tracking-[0.2em] text-right leading-tight max-w-[220px] text-white/40`}>
                        {label}
                    </span>
                </div>
            </div>
        </div>
    );
};

const PercentageShowcase: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    // Data sorted by value ascending
    const data = [
        { label: "ateliers de sensibilisation", value: 13, suffix: "" },
        { label: "départements d'intervention", value: 21, suffix: "" },
        { label: "stagiaires*", value: 340, suffix: "" },
        { label: "heures de formation cumulées*", value: 2407, suffix: "" },
    ];

    // Colors mapping for progressive effect
    const colors = [
        { bg: "bg-white/5", text: "text-white/60" },
        { bg: "bg-white/10", text: "text-white/80" },
        { bg: "bg-[#BF9B8E]/60", text: "text-white" },
        { bg: "bg-[#BF9B8E]", text: "text-[#0C2E59]" }
    ];

    // Logarithmic scale calculation
    // We want the smallest item to be visible (~30%) and largest 100%
    // formula: visual = minWidth + (log(value) - log(min)) / (log(max) - log(min)) * (100 - minWidth)
    const minWidth = 25;
    const logMin = Math.log(data[0].value);
    const logMax = Math.log(data[data.length - 1].value);

    const itemsWithVisuals = data.map((item, i) => {
        const logVal = Math.log(item.value);
        // Normalize log value between 0 and 1
        const normalized = (logVal - logMin) / (logMax - logMin || 1);
        const visualWidth = minWidth + (normalized * (100 - minWidth));

        return { ...item, visualWidth, ...colors[i] };
    });

    const p1Base = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const p1 = useSpring(p1Base, { stiffness: 30, damping: 20 });

    return (
        <div ref={containerRef} className="mt-12 select-none">
            <div className="px-6 py-20 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-cinzel font-black uppercase leading-none tracking-tighter text-white mb-6">
                    Mieux nous connaître<br />
                    <span className="text-[#BF9B8E]">en quelques chiffres</span>
                </h2>
                <p className="text-white/40 text-sm font-mono tracking-widest uppercase">*Déclaration au BPF pour 2024</p>
            </div>

            <div className="border-t border-white/5">
                {itemsWithVisuals.map((item, index) => (
                    <PercentageItem
                        key={index}
                        label={item.label}
                        value={item.value}
                        visualWidth={item.visualWidth}
                        suffix={item.suffix}
                        color={item.bg}
                        textColor={item.text}
                        progress={p1}
                    />
                ))}
            </div>

            <div className="p-8 md:p-12 bg-white/5 border-b border-white/10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#BF9B8E]">L'Impact Probitas</div>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-snug max-w-xl">
                        Un engagement concret sur le terrain pour diffuser la culture de la probité à tous les échelons de la décision publique.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PercentageShowcase;

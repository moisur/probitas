import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import { AnimatedWord } from './AnimatedWord';

const SLIDE_DURATION = 9000;

export const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setProgress(0);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextSlide();
                    return 0;
                }
                return prev + (100 / (SLIDE_DURATION / 100));
            });
        }, 100);

        return () => clearInterval(timer);
    }, [nextSlide]);

    const handleManualNav = (index: number) => {
        if (index === currentIndex) return;
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
        setProgress(0);
    };

    const cardVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 1,
            zIndex: 20,
        }),
        center: {
            zIndex: 20,
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: (direction: number) => ({
            zIndex: 10,
            opacity: 1,
            x: direction < 0 ? '30%' : '-30%',
            scale: 0.95,
            filter: "blur(4px)",
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    return (
        <div className="relative h-full w-full overflow-hidden flex flex-col justify-end">

            {/* Background persistants pour éviter les flashs */}
            <div className="absolute inset-0 z-0 bg-[#0C2E59]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={`card-bg-${currentIndex}`}
                        custom={direction}
                        variants={cardVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0"
                    >
                        <img
                            src={testimonials[currentIndex].imageUrl}
                            alt=""
                            className="w-full h-full object-cover brightness-[0.25] saturate-[0.7]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0C2E59] via-[#0C2E59]/40 to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Flèches Navigation (Desktop) */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between z-50 pointer-events-none hidden lg:flex">
                <button onClick={prevSlide} className="p-3 rounded-sm bg-white/5 hover:bg-white/10 text-white/40 hover:text-[#BF9B8E] transition-all pointer-events-auto backdrop-blur-md border border-white/10 group">
                    <ChevronLeft size={28} />
                </button>
                <button onClick={nextSlide} className="p-3 rounded-sm bg-white/5 hover:bg-white/10 text-white/40 hover:text-[#BF9B8E] transition-all pointer-events-auto backdrop-blur-md border border-white/10 group">
                    <ChevronRight size={28} />
                </button>
            </div>

            <div className="relative z-30 w-full h-full pointer-events-none">

                {/* En-tête de carte (Absolu) */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10 flex flex-col items-start gap-4 pointer-events-auto z-40">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-8 h-[2px] bg-[#BF9B8E]" />
                        <span className="text-[#BF9B8E] font-bold tracking-[0.4em] text-[8px] md:text-[10px] uppercase">
                            Paroles de clients
                        </span>
                    </motion.div>

                    <motion.div
                        key={`quote-${currentIndex}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Quote size={40} strokeWidth={0.5} className="text-[#BF9B8E]/30 md:size-12" />
                    </motion.div>
                </div>

                {/* Corps du texte (Centré Absolu) */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 pb-20 md:p-12 md:pb-24">
                    <div className="w-full max-w-4xl flex flex-col justify-center items-center pointer-events-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`words-container-${currentIndex}`}
                                className="flex flex-wrap items-center justify-center content-center gap-x-1.5 gap-y-2.5 md:gap-y-5 text-center"
                            >
                                {testimonials[currentIndex].words.map((word, idx) => (
                                    <AnimatedWord
                                        key={`${currentIndex}-${idx}`}
                                        word={word}
                                        index={idx}
                                        testimonialIndex={currentIndex}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        <motion.div
                            key={`author-${currentIndex}`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 }}
                            className="mt-8 md:mt-12 flex items-center gap-5 justify-center"
                        >
                            <div className="w-10 h-[1px] bg-[#BF9B8E]/40" />
                            <div className="text-left">
                                <p className="text-lg md:text-2xl text-white font-bold tracking-tight leading-none">
                                    {testimonials[currentIndex].author.split(' – ')[0]}
                                </p>
                                <p className="text-[#BF9B8E] text-[9px] md:text-xs font-black uppercase tracking-[0.2em] mt-1 opacity-70">
                                    {testimonials[currentIndex].author.split(' – ')[1]}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Indicateurs de progrès en bas de carte (Absolu) */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 pointer-events-auto z-40">
                    <div className="flex gap-2 w-full mb-6">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleManualNav(idx)}
                                className="h-[2px] flex-1 bg-white/10 rounded-full overflow-hidden cursor-pointer"
                            >
                                <div
                                    className="h-full bg-[#BF9B8E] shadow-[0_0_10px_rgba(191,155,142,0.6)]"
                                    style={{
                                        width: `${idx === currentIndex ? progress : idx < currentIndex ? 100 : 0}%`,
                                        transition: idx === currentIndex ? 'none' : 'width 0.4s ease-out'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center px-1">
                        <div className="text-[8px] font-black tracking-widest text-[#BF9B8E] uppercase">
                            Expertise 2025
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xl md:text-2xl font-serif italic font-bold text-white/80 leading-none">Probitas</span>
                            <span className="text-[7px] text-[#BF9B8E] uppercase tracking-[0.4em] font-black">Conseil</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { StyledWord } from '../types';

interface AnimatedWordProps {
    word: StyledWord;
    index: number;
    testimonialIndex: number;
}

export const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, index, testimonialIndex }) => {
    const isBold = word.style === 'bold';
    const isItalic = word.style === 'italic';
    const isUnderline = word.style === 'underline';
    const isCircle = word.style === 'circle';

    const variants1: Variants = {
        hidden: { opacity: 0, y: 25, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                delay: index * 0.08,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
            }
        }
    };

    const variants2: Variants = {
        hidden: { opacity: 0, scale: 0.6, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: index * 0.07,
                type: "spring",
                stiffness: 180,
                damping: 15
            }
        }
    };

    const variants3: Variants = {
        hidden: { y: "150%", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: index * 0.06,
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1] as [number, number, number, number]
            }
        }
    };

    const activeVariants = testimonialIndex === 0 ? variants1 : testimonialIndex === 1 ? variants2 : variants3;

    const drawVariants: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                delay: index * 0.1 + 1.2,
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className={`relative inline-flex items-center 
      ${isCircle ? 'mx-3 md:mx-6 my-2' : 'mx-0'}
    `}>
            <motion.span
                variants={activeVariants}
                initial="hidden"
                animate="visible"
                className={`relative inline-block whitespace-nowrap leading-[1.2] tracking-tight
          ${isBold ? 'font-extrabold' : 'font-light'} 
          ${isItalic ? 'italic font-serif' : 'font-sans'}
          ${isCircle ? 'px-4 md:px-10 text-[#BF9B8E]' : 'px-1'}
        `}
                style={{ fontSize: 'clamp(1rem, 4vw, 2.5rem)' }}
            >
                {word.text}

                {isUnderline && (
                    <svg
                        className="absolute -bottom-1 left-0 w-full h-3 overflow-visible pointer-events-none"
                        viewBox="0 0 100 12"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M 2,6 C 25,9 50,4 75,7 C 90,8 98,6 99,6"
                            fill="transparent"
                            stroke="#BF9B8E"
                            strokeWidth="4"
                            strokeLinecap="round"
                            variants={drawVariants}
                        />
                    </svg>
                )}

                {isCircle && (
                    <svg
                        className="absolute -inset-x-3 -inset-y-4 md:-inset-x-6 md:-inset-y-6 w-[calc(100%+24px)] md:w-[calc(100%+48px)] h-[calc(100%+32px)] md:h-[calc(100%+48px)] overflow-visible pointer-events-none z-[-1]"
                        viewBox="0 0 100 40"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M 5,20 C 5,5 95,5 95,20 C 95,35 5,35 7,22 C 8,16 12,12 25,9"
                            fill="transparent"
                            stroke="#BF9B8E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            variants={drawVariants}
                        />
                    </svg>
                )}
            </motion.span>
        </div>
    );
};

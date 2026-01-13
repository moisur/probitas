import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Quote, Plus, X, ArrowDown, ChevronLeft, Send, MessageSquare } from 'lucide-react';

const categories = ["Tous", "Formation", "Coaching", "Sensibilisation"];

interface TestimonialGridProps {
    onOpenContact?: () => void;
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({ onOpenContact }) => {
    const [filter, setFilter] = useState("Tous");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Scroll detection logic for modal
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const isScrolled = target.scrollTop > 10;
        const arrow = document.getElementById('testimonial-scroll-indicator');
        if (arrow) {
            arrow.style.opacity = isScrolled ? '0' : '1';
            arrow.style.pointerEvents = isScrolled ? 'none' : 'auto';
            arrow.style.transform = isScrolled ? 'translateY(10px)' : 'translateY(0)';
        }
    };

    // Reset indicator and check for overflow when opening a new item
    useEffect(() => {
        if (selectedId) {
            const arrow = document.getElementById('testimonial-scroll-indicator');
            if (arrow) {
                setTimeout(() => {
                    const container = document.getElementById('testimonial-modal-content');
                    if (container) {
                        const isScrollable = container.scrollHeight > container.clientHeight;
                        arrow.style.opacity = isScrollable ? '1' : '0';
                        arrow.style.pointerEvents = isScrollable ? 'auto' : 'none';
                        arrow.style.transform = 'translateY(0)';
                    }
                }, 100);
            }
        }
    }, [selectedId]);

    const filteredTestimonials = filter === "Tous"
        ? testimonials
        : testimonials.filter(t => t.category === filter);

    const selectedTestimonial = testimonials.find(t => t.id === selectedId);

    return (
        <div className="w-full">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-8 py-3 rounded-sm text-[10px] font-mono tracking-[0.3em] uppercase transition-all duration-500 border
                            ${filter === cat
                                ? 'bg-[#BF9B8E] border-[#BF9B8E] text-white shadow-lg shadow-[#BF9B8E]/20'
                                : 'bg-transparent border-white/10 text-white/40 hover:border-[#BF9B8E]/40 hover:text-white'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredTestimonials.map((item, index) => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="group relative bg-[#0C2E59] border border-white/5 p-8 md:p-10 rounded-sm hover:border-[#BF9B8E]/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 group-hover:text-[#BF9B8E]/10 transition-colors duration-700 -rotate-12" />

                            {/* Client Image/Logo Placeholder */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-[#06162d] flex items-center justify-center">
                                    {item.logoUrl ? (
                                        <img src={item.logoUrl} alt="" className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#BF9B8E]/20 to-transparent flex items-center justify-center">
                                            <span className="text-[10px] font-mono text-[#BF9B8E]">{item.author.charAt(0)}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-mono text-[#BF9B8E] tracking-widest uppercase mb-1">{item.category}</span>
                                    <h4 className="text-white font-bold text-sm tracking-tight">{item.author.split(' – ')[0]}</h4>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-white/70 text-sm leading-relaxed mb-8 flex-1 italic line-clamp-4">
                                "{item.fullText}"
                            </p>

                            {/* Subtitle / Company */}
                            <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                                <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono">
                                    {item.author.split(' – ')[1]}
                                </span>
                                <button
                                    onClick={() => setSelectedId(item.id.toString())}
                                    className="p-2 bg-white/5 hover:bg-[#BF9B8E] text-white rounded-sm transition-all duration-300 group/btn"
                                >
                                    <Plus size={14} className="group-hover/btn:rotate-90 transition-transform duration-500" />
                                </button>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#BF9B8E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Testimonial Modal (Full View) */}
            {createPortal(
                <AnimatePresence>
                    {selectedId && selectedTestimonial && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-[#06162d]/95 backdrop-blur-xl"
                            />

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-5xl bg-[#081d38] border border-white/10 rounded-sm overflow-hidden shadow-2xl z-[210] flex flex-col md:flex-row max-h-[90vh] md:h-auto"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-8 right-8 z-[220] w-12 h-12 bg-[#BF9B8E] text-[#0C2E59] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl"
                                >
                                    <X size={24} />
                                </button>

                                {/* Left Side: Visual / Logo */}
                                <div className="w-full md:w-2/5 h-64 md:h-auto md:min-h-[500px] relative bg-gradient-to-br from-[#0C2E59] to-[#06162d] flex flex-col items-center justify-center p-12 overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                                    <Quote size={120} strokeWidth={0.5} className="absolute -top-12 -left-12 text-[#BF9B8E]/10 -rotate-12" />

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10 bg-white/5 p-6 flex items-center justify-center mb-8 shadow-2xl relative group">
                                            <div className="absolute inset-0 bg-[#BF9B8E]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            {selectedTestimonial.logoUrl ? (
                                                <img src={selectedTestimonial.logoUrl} alt="" className="w-full h-full object-contain relative z-10" />
                                            ) : (
                                                <span className="text-4xl font-mono text-[#BF9B8E] relative z-10">{selectedTestimonial.author.charAt(0)}</span>
                                            )}
                                        </div>
                                        <span className="text-[10px] font-mono text-[#BF9B8E] tracking-[0.5em] uppercase mb-4">
                                            Client Partenaire
                                        </span>
                                        <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-loose">
                                            {selectedTestimonial.author.split(' – ')[0]}
                                        </h4>
                                        <div className="h-[1px] w-12 bg-[#BF9B8E]/30 my-4" />
                                        <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em]">
                                            {selectedTestimonial.author.split(' – ')[1]}
                                        </p>
                                    </div>

                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden flex items-center justify-center">
                                        <span className="text-[20vw] font-cinzel font-black uppercase tracking-tighter rotate-90">PROBITAS</span>
                                    </div>
                                </div>

                                {/* Right Side: Content */}
                                <div className="flex-1 flex flex-col bg-[#081d38] overflow-hidden">
                                    <div className="flex-1 relative flex flex-col min-h-0 overflow-hidden">
                                        <div
                                            id="testimonial-modal-content"
                                            onScroll={handleScroll}
                                            className="flex-1 overflow-y-auto p-8 md:p-16 md:pb-12 overscroll-contain scrollbar-hide pt-16 md:pt-24"
                                        >
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="h-[1px] w-8 bg-[#BF9B8E]" />
                                                <span className="text-[10px] font-black text-[#BF9B8E] uppercase tracking-[0.4em]">{selectedTestimonial.category}</span>
                                            </div>

                                            <p className="text-xl md:text-2xl lg:text-3xl text-white font-serif italic leading-relaxed mb-12">
                                                "{selectedTestimonial.fullText}"
                                            </p>
                                        </div>

                                        {/* Elevated Gradient Fade */}
                                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#081d38] via-[#081d38]/80 to-transparent pointer-events-none z-10" />

                                        {/* Dynamic Scroll Indicator */}
                                        <div
                                            id="testimonial-scroll-indicator"
                                            className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center justify-center gap-2 text-[#BF9B8E] opacity-0 pointer-events-none transition-all duration-300 ease-out"
                                        >
                                            <span className="text-[9px] font-black uppercase tracking-[0.2em] animate-bounce">Lire la suite</span>
                                            <ArrowDown className="w-3 h-3 animate-bounce" />
                                        </div>
                                    </div>

                                    {/* Sticky Footer */}
                                    <div className="bg-[#081d38] relative z-20 shrink-0 border-t border-white/5">
                                        <div className="p-8 md:pb-12 pt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
                                            <button
                                                onClick={() => {
                                                    setSelectedId(null);
                                                    if (onOpenContact) onOpenContact();
                                                }}
                                                className="inline-flex items-center justify-center gap-4 bg-[#BF9B8E] text-[#0C2E59] px-8 py-4 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-white transition-all group shadow-xl"
                                            >
                                                <MessageSquare size={16} />
                                                Prendre contact
                                                <Plus size={16} className="group-hover:rotate-90 transition-transform" />
                                            </button>

                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm border border-white/20 font-black uppercase tracking-widest text-[10px] text-white/60 hover:text-white hover:border-white transition-all group"
                                            >
                                                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                                Revenir aux témoignages
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Calendar, Video, FileText, ArrowRight, X } from 'lucide-react';
import { blogData, BlogItemData } from '../data/blogData';

const BlogPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<BlogItemData | null>(null);
    const [filter, setFilter] = useState<'all' | 'article' | 'video'>('all');
    const [hoveredFilter, setHoveredFilter] = useState<'all' | 'article' | 'video' | null>(null);

    const filteredData = blogData.filter(item => filter === 'all' || item.type === filter);

    return (
        <div className="bg-[#0C2E59] min-h-screen pt-48 pb-40 text-white" onMouseLeave={() => setHoveredFilter(null)}>
            <div className="max-w-7xl mx-auto px-6 md:px-24">

                {/* Editorial Header */}
                <header className="mb-32 relative">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" /> {/* Tiret Doré */}
                            <span className="text-[#BF9B8E] font-bold text-[10px] uppercase tracking-[0.4em]">Le Blog</span>
                            <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                        </div>

                        <h1 className="text-7xl md:text-[9vw] font-black tracking-tighter leading-[0.85] text-white uppercase">
                            NOS DERNIÈRES <br />
                            <span className="italic font-light text-white/40">ANALYSES.</span>
                        </h1>

                        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-12">
                            <p className="text-xl md:text-2xl text-blue-200/60 font-light max-w-xl leading-snug">
                                Retrouvez ici nos articles de fond, nos réflexions et notre veille juridique sur l'actualité de l'éthique et de la probité.
                            </p>

                            <div className="flex bg-[#0C2E59]/50 p-1.5 rounded-full border border-white/10 shadow-sm gap-1 self-start md:self-auto backdrop-blur-sm relative">
                                {(['all', 'article', 'video'] as const).map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        onMouseEnter={() => setHoveredFilter(f)}
                                        className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors relative z-10 ${filter === f ? 'text-[#0C2E59]' : 'text-white/50 hover:text-white'}`}
                                    >
                                        {filter === f && (
                                            <motion.div
                                                layoutId="activeFilter"
                                                className="absolute inset-0 bg-[#BF9B8E] rounded-full -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        {hoveredFilter === f && filter !== f && (
                                            <motion.div
                                                layoutId="hoverFilter"
                                                className="absolute inset-0 bg-pink-100/10 rounded-full -z-10"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                        {f === 'all' ? 'Tout voir' : f === 'article' ? 'Articles' : 'Vidéos'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Blog Grid */}
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
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-[#BF9B8E]">
                                        <span className="text-[10px] font-bold tracking-[0.2em]">{item.date}</span>
                                        <div className="h-px flex-1 bg-[#BF9B8E]/30" />
                                        <div className="text-[#BF9B8E] opacity-60">
                                            {item.type === 'video' ? <Video size={14} /> : <FileText size={14} />}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-[#BF9B8E] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-200/60 text-sm font-light leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="pt-4 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#BF9B8E]">Lire l'article</span>
                                        <ArrowRight className="w-4 h-4 text-[#BF9B8E]" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Modal Overlay for Details */}
                {createPortal(
                    <AnimatePresence>
                        {selectedItem && (
                            <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
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
                                    className="relative w-full max-w-5xl bg-[#081d38] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl z-[210] flex flex-col md:flex-row max-h-[90vh] md:h-auto"
                                >
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="absolute top-8 right-8 z-[220] w-12 h-12 bg-[#BF9B8E] text-[#0C2E59] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    {/* Left Side: Visual */}
                                    <div className="w-full md:w-1/2 h-64 md:h-auto md:min-h-[500px] relative">
                                        <img src={selectedItem.image} alt="" className="w-full h-full object-cover opacity-90" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#081d38] via-transparent to-transparent md:hidden" />
                                        <div className="absolute bottom-8 left-8 text-white md:hidden">
                                            <span className="text-xs font-black uppercase tracking-[0.4em] mb-2 block text-[#BF9B8E]">{selectedItem.category}</span>
                                            <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                                        </div>
                                    </div>

                                    {/* Right Side: Content */}
                                    <div className="flex-1 p-8 md:p-20 flex flex-col justify-center bg-[#081d38] overflow-y-auto">
                                        <div className="hidden md:flex items-center gap-4 mb-12">
                                            <Calendar className="w-4 h-4 text-[#BF9B8E]" />
                                            <span className="text-xs font-bold text-[#BF9B8E] uppercase tracking-[0.4em]">{selectedItem.date} // {selectedItem.category}</span>
                                        </div>

                                        <h2 className="hidden md:block text-4xl lg:text-5xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                                            {selectedItem.title}
                                        </h2>

                                        <div className="hidden md:block h-[2px] w-20 bg-[#BF9B8E] mb-8" />

                                        <p className="text-lg md:text-xl text-blue-200/80 font-light leading-relaxed mb-12">
                                            {selectedItem.longDescription || selectedItem.description}
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-6 mt-auto md:mt-0">
                                            <button
                                                onClick={() => {
                                                    setSelectedItem(null);
                                                    window.location.hash = `#blog/${selectedItem.id}`;
                                                }}
                                                className="inline-flex items-center justify-center gap-4 bg-[#BF9B8E] text-[#0C2E59] px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-all group"
                                            >
                                                {selectedItem.type === 'video' ? 'Visionner la vidéo' : 'Lire l\'article complet'}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </button>

                                            <button
                                                onClick={() => setSelectedItem(null)}
                                                className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/20 font-black uppercase tracking-widest text-[10px] text-white/60 hover:text-white hover:border-white transition-all"
                                            >
                                                Fermer
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </div>
    );
};

export default BlogPage;


import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, CheckCircle2 } from 'lucide-react';
import { Guide } from '../data/guides';

interface GuideModalProps {
    guide: Guide | null;
    onClose: () => void;
}

const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose }) => {
    if (typeof document === 'undefined') return null;

    return ReactDOM.createPortal(
        <AnimatePresence>
            {guide && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0C2E59]/95 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#F1F0ED] rounded-sm max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-sm transition-colors font-bold"
                        >
                            <X className="w-6 h-6 text-[#0C2E59]" />
                        </button>

                        {/* Image Side */}
                        <div className="md:w-2/5 relative min-h-[300px] md:min-h-[500px]">
                            <img
                                src={guide.imageUrl}
                                alt={guide.name}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0C2E59]/20" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0C2E59] to-transparent">
                                <h3 className="text-3xl font-cinzel font-bold text-white mb-1">{guide.name}</h3>
                                <p className="text-[#BF9B8E] font-serif italic">{guide.role}</p>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="md:w-3/5 p-8 md:p-12 bg-[#F1F0ED] text-[#0C2E59] flex flex-col justify-center">
                            <div className="mb-8">
                                <Quote className="w-10 h-10 text-[#BF9B8E]/20 mb-4" />
                                <p className="font-cinzel text-xl md:text-2xl italic leading-relaxed text-[#0C2E59]">
                                    "{guide.quote}"
                                </p>
                            </div>

                            <div className="h-px w-24 bg-[#BF9B8E]/30 mb-8" />

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-[#BF9B8E] mb-3">Biographie</h4>
                                    <p className="text-[#0C2E59]/80 leading-relaxed font-light text-lg">
                                        {guide.longDescription}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-[#BF9B8E] mb-3">Expertises Clés</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {guide.expertise?.map((exp, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-white border border-[#0C2E59]/10 rounded-sm text-sm text-[#0C2E59]/80 flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-[#BF9B8E]" />
                                                {exp}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default GuideModal;

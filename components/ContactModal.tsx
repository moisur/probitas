
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MessageCircle, ArrowRight, ArrowLeft, CheckCircle2, GraduationCap, Scale, Megaphone, Landmark, ChevronDown, Linkedin, Instagram, Send } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type ContactType = 'formation' | 'conseil' | 'sensibilisation' | 'municipales' | null;

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [contactType, setContactType] = useState<ContactType>(null);
    const [subType, setSubType] = useState<string | null>(null);
    const [formSent, setFormSent] = useState(false);

    const resetModal = () => {
        setStep(1);
        setContactType(null);
        setSubType(null);
        setFormSent(false);
    };

    const handleClose = () => {
        onClose();
        setTimeout(resetModal, 500);
    };

    const categories = [
        { id: 'formation', label: 'Formation', icon: <GraduationCap size={32} /> },
        { id: 'conseil', label: 'Conseil', icon: <Scale size={32} /> },
        { id: 'sensibilisation', label: 'Sensibilisation', icon: <Megaphone size={32} /> },
        { id: 'municipales', label: 'Municipales 2026', icon: <Landmark size={32} /> },
    ];

    const subCategories: Record<string, { label: string; value: string }[]> = {
        formation: [
            { label: 'Public (À la carte)', value: 'public' },
            { label: 'Privé (À la carte)', value: 'prive' },
            { label: 'Sur-mesure (Inter)', value: 'sur-mesure' },
        ],
        conseil: [
            { label: 'Conformité Sapin II', value: 'sapin-2' },
            { label: 'Communication Éthique', value: 'com-ethique' },
        ],
        sensibilisation: [
            { label: 'Ateliers', value: 'ateliers' },
            { label: 'Conférences', value: 'conferences' },
        ],
        municipales: [
            { label: 'Accompagnement Élus', value: 'elus' },
            { label: 'Stratégie de Campagne', value: 'strategie' },
        ],
    };

    const handleCategorySelect = (id: ContactType) => {
        setContactType(id);
        setStep(2);
    };

    const handleSubTypeSelect = (value: string) => {
        setSubType(value);
        setStep(3);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSent(true);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            >
                {/* Backdrop with extreme blur */}
                <div
                    className="absolute inset-0 bg-[#0C2E59]/80 backdrop-blur-2xl"
                    onClick={handleClose}
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-4xl max-h-[90vh] bg-[#0C2E59] border border-white/10 rounded-lg overflow-hidden overflow-y-auto shadow-2xl flex flex-col md:flex-row md:min-h-[600px]"
                >
                    {/* Background layers to allow watermark on both parts */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute left-0 top-0 bottom-0 md:w-1/3 bg-[#BF9B8E]" />
                        <div className="absolute bottom-0 right-0 text-[12rem] font-cinzel font-black opacity-[0.08] -mr-16 -mb-16 leading-none pointer-events-none select-none">
                            PROBITAS
                        </div>
                    </div>

                    {/* Sidebar / Info Panel */}
                    <div className="relative z-10 w-full md:w-1/3 p-6 md:p-12 flex flex-col text-[#0C2E59] bg-[#BF9B8E]">
                        <h2 className="text-2xl md:text-4xl font-cinzel font-black uppercase leading-none mb-4">
                            Parlons <br />
                            <span className="text-white">ENSEMBLE.</span>
                        </h2>
                        <p className="text-sm font-medium opacity-80 mb-12 leading-relaxed">
                            Nous sommes à votre écoute pour structurer votre démarche d'intégrité.
                        </p>

                        <div className="mt-auto space-y-6">
                            <a
                                href="https://wa.me/33652308166?text=Hello%20Farah%20Zaoui%2C%20je%20vous%20ai%20d%C3%A9couvert%20sur%20votre%20site%20internet%20pourrais%20je%20prendre%20rendez%20vous%20%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 hover:translate-x-2 transition-transform"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#0C2E59] flex items-center justify-center text-[#BF9B8E] group-hover:scale-110 transition-transform">
                                    <MessageCircle size={18} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest opacity-60">WhatsApp</p>
                                    <p className="font-bold text-xs">+33 6 52 30 81 66</p>
                                </div>
                            </a>

                            <a
                                href="mailto:contact@probitas-conseil.fr"
                                className="group flex items-center gap-4 hover:translate-x-2 transition-transform"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#0C2E59] flex items-center justify-center text-[#BF9B8E] group-hover:scale-110 transition-transform">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Email</p>
                                    <p className="font-bold text-xs truncate max-w-[150px]">contact@probitas-conseil.fr</p>
                                </div>
                            </a>

                            <div className="pt-6 mt-6 border-t border-[#0C2E59]/10 flex items-center gap-4">
                                <a href="https://www.linkedin.com/in/corruptionexpert/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0C2E59] flex items-center justify-center text-[#BF9B8E] hover:scale-110 transition-transform" title="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                                <a href="https://www.instagram.com/probitas_off/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0C2E59] flex items-center justify-center text-[#BF9B8E] hover:scale-110 transition-transform" title="Instagram">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://substack.com/@farahzaoui" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0C2E59] flex items-center justify-center text-[#BF9B8E] hover:scale-110 transition-transform" title="Substack">
                                    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="relative z-10 flex-1 p-6 md:p-16 flex flex-col overflow-hidden">
                        <button
                            onClick={handleClose}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {!formSent ? (
                            <div className="flex-1 flex flex-col">
                                {/* Navigation / Breadcrumbs */}
                                {step > 1 && (
                                    <button
                                        onClick={() => setStep(step - 1)}
                                        className="flex items-center gap-2 text-[#BF9B8E] text-[10px] font-black uppercase tracking-[0.2em] mb-8 hover:-translate-x-2 transition-transform"
                                    >
                                        <ArrowLeft size={14} /> Retour
                                    </button>
                                )}

                                {/* Step 1: Category */}
                                {step === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex-1"
                                    >
                                        <h3 className="text-xl md:text-2xl font-cinzel font-black uppercase mb-10 tracking-tight">
                                            Quel est l'objet de <br /><span className="text-[#BF9B8E]">votre demande ?</span>
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat.id}
                                                    onClick={() => handleCategorySelect(cat.id as ContactType)}
                                                    className="p-6 rounded-lg bg-[#081d38] text-left hover:bg-[#1a4a8a] hover:text-white transition-all group duration-500 hover:shadow-[0_0_30px_rgba(26,74,138,0.3)]"
                                                >
                                                    <span className="text-[#BF9B8E] group-hover:text-white mb-4 block transition-colors">{cat.icon}</span>
                                                    <p className="font-cinzel font-black uppercase tracking-widest text-xs">{cat.label}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2: Sub-Category */}
                                {step === 2 && contactType && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex-1"
                                    >
                                        <h3 className="text-xl md:text-2xl font-cinzel font-black uppercase mb-10 tracking-tight">
                                            Précisez <br /><span className="text-[#BF9B8E]">votre besoin :</span>
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {subCategories[contactType]?.map((sub) => (
                                                <button
                                                    key={sub.value}
                                                    onClick={() => handleSubTypeSelect(sub.value)}
                                                    className="p-8 rounded-lg bg-[#081d38] border border-white/10 text-left hover:bg-[#1a4a8a] transition-all flex items-center justify-between group hover:border-[#1a4a8a]"
                                                >
                                                    <p className="font-cinzel font-black uppercase tracking-widest text-sm">{sub.label}</p>
                                                    <ArrowRight size={18} className="text-[#BF9B8E] group-hover:translate-x-2 transition-transform" />
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3: Form */}
                                {step === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex-1"
                                    >
                                        <h3 className="text-xl md:text-2xl font-cinzel font-black uppercase mb-8 tracking-tight">
                                            Parlez-nous <br /><span className="text-[#BF9B8E]">de vous :</span>
                                        </h3>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Prénom"
                                                    required
                                                    className="bg-[#081d38] border border-white/10 rounded-lg px-6 py-4 text-sm focus:border-[#BF9B8E] outline-none transition-colors"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Nom"
                                                    required
                                                    className="bg-[#081d38] border border-white/10 rounded-lg px-6 py-4 text-sm focus:border-[#BF9B8E] outline-none transition-colors"
                                                />
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="Email professionnel"
                                                required
                                                className="w-full bg-[#081d38] border border-white/10 rounded-lg px-6 py-4 text-sm focus:border-[#BF9B8E] outline-none transition-colors"
                                            />
                                            <div className="relative">
                                                <select
                                                    className="w-full bg-[#081d38] border border-white/10 rounded-lg px-6 py-4 text-sm focus:border-[#BF9B8E] outline-none transition-colors text-white appearance-none cursor-pointer"
                                                    required
                                                >
                                                    <option value="" disabled selected className="bg-[#081d38]">Vous êtes...</option>
                                                    <option value="public" className="bg-[#081d38]">Secteur Public</option>
                                                    <option value="prive" className="bg-[#081d38]">Secteur Privé</option>
                                                    <option value="elu" className="bg-[#081d38]">Élu</option>
                                                </select>
                                                <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#BF9B8E] pointer-events-none" />
                                            </div>
                                            <textarea
                                                placeholder="Comment pouvons-nous vous aider ?"
                                                rows={4}
                                                className="w-full bg-[#081d38] border border-white/10 rounded-lg px-6 py-4 text-sm focus:border-[#BF9B8E] outline-none transition-colors resize-none"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full bg-[#BF9B8E] text-[#0C2E59] font-black uppercase tracking-[0.3em] py-5 rounded-sm text-xs hover:bg-[#DDC5BB] transition-all shadow-xl shadow-[#BF9B8E]/10 flex items-center justify-center gap-3 group"
                                            >
                                                Envoyer la demande
                                                <Mail size={16} />
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </div>
                        ) : (
                            /* Success State */
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 flex flex-col items-center justify-center text-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-[#BF9B8E]/20 flex items-center justify-center mb-8">
                                    <CheckCircle2 size={48} className="text-[#BF9B8E]" />
                                </div>
                                <h3 className="text-3xl font-cinzel font-black uppercase mb-4 tracking-tight">
                                    Message <br /><span className="text-[#BF9B8E]">Envoyé.</span>
                                </h3>
                                <p className="text-white/60 max-w-xs leading-relaxed mb-12">
                                    Merci pour votre confiance. Nous reviendrons vers vous dans les plus brefs délais.
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="px-10 py-4 border border-[#BF9B8E] text-[#BF9B8E] font-black uppercase tracking-widest text-[10px] hover:bg-[#BF9B8E] hover:text-[#0C2E59] transition-all rounded-sm"
                                >
                                    Fermer
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactModal;

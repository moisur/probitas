import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        captcha: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.captcha) {
            setError('Veuillez remplir les champs obligatoires.');
            return;
        }
        if (formData.captcha !== '24') {
            setError('Le captcha est incorrect.');
            return;
        }
        setIsSubmitted(true);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-sm p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF9B8E]/10 rounded-full blur-3xl -mr-16 -mt-16" />

                {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                        <CheckCircle className="w-20 h-20 text-[#BF9B8E] mb-6" />
                        <h4 className="text-3xl font-bold mb-4 font-cinzel">Message envoyé !</h4>
                        <p className="text-white/60">
                            Merci pour votre message. Nous reviendrons vers vous très prochainement.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-8 text-[#BF9B8E] hover:underline transition-all"
                        >
                            Envoyer un autre message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#BF9B8E] mb-2">Nom *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-[#BF9B8E] focus:outline-none transition-colors"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#BF9B8E] mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-[#BF9B8E] focus:outline-none transition-colors"
                                    placeholder="votre@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#BF9B8E] mb-2">Téléphone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-[#BF9B8E] focus:outline-none transition-colors"
                                placeholder="06 00 00 00 00"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#BF9B8E] mb-2">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-[#BF9B8E] focus:outline-none transition-colors"
                                placeholder="En quoi pouvons-nous vous aider ?"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end gap-6">
                            <div className="flex-1">
                                <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#BF9B8E] mb-2">Captcha: 11 + 13 = ? *</label>
                                <input
                                    type="text"
                                    name="captcha"
                                    value={formData.captcha}
                                    onChange={handleChange}
                                    className="w-32 bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-[#BF9B8E] focus:outline-none transition-colors"
                                    placeholder="Réponse"
                                />
                            </div>
                            <button
                                type="submit"
                                className="md:w-64 bg-[#BF9B8E] hover:bg-[#d9b6a9] text-[#0C2E59] font-bold py-4 rounded-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl"
                            >
                                <Send className="w-5 h-5" />
                                ENVOYER
                            </button>
                        </div>

                        {error && <p className="text-red-400 text-sm">{error}</p>}

                        <p className="text-[10px] text-white/40 text-center uppercase tracking-widest mt-4">
                            En cliquant sur « ENVOYER », j'accepte la politique de confidentialité.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

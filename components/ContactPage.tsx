import React, { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, Twitter, Linkedin, ChevronLeft, Send, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

const ContactPage: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        captcha: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        const tl = gsap.timeline();
        tl.fromTo('.contact-header',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        ).fromTo('.contact-content',
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
            "-=0.4"
        );
    }, []);

    const handleBack = () => {
        window.location.hash = '';
    };

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
        // Simple captcha check (11 + 13 = 24 in legacy)
        if (formData.captcha !== '24') {
            setError('Le captcha est incorrect.');
            return;
        }

        // Simulate API call
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-[#BF9B8E] hover:text-white transition-colors mb-8 group"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Retour à l'accueil
                </button>

                <header className="contact-header mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact</h1>
                    <h2 className="text-2xl md:text-3xl font-light text-[#BF9B8E] italic tracking-wide">
                        Insufflons ensemble, plus d'éthique dans VOTRE histoire !
                    </h2>
                </header>

                <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Form Section */}
                    <div className="bg-white/5 backdrop-blur-md rounded-sm p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF9B8E]/10 rounded-full blur-3xl -mr-16 -mt-16" />

                        <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
                        <p className="text-white/60 mb-8">
                            Complétez ce formulaire et nous vous contacterons sous 24h (jours ouvrés).
                        </p>

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
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#BF9B8E] mb-2">Captcha: 11 + 13 = ? *</label>
                                    <input
                                        type="text"
                                        name="captcha"
                                        value={formData.captcha}
                                        onChange={handleChange}
                                        className="w-24 bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-[#BF9B8E] focus:outline-none transition-colors"
                                        placeholder="Réponse"
                                    />
                                </div>

                                {error && <p className="text-red-400 text-sm">{error}</p>}

                                <button
                                    type="submit"
                                    className="w-full bg-[#BF9B8E] hover:bg-[#d9b6a9] text-[#0C2E59] font-bold py-4 rounded-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl"
                                >
                                    <Send className="w-5 h-5" />
                                    ENVOYER
                                </button>
                                <p className="text-[10px] text-white/40 text-center uppercase tracking-widest mt-4">
                                    En cliquant sur « ENVOYÉ », j'accepte la politique de confidentialité.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Info Section */}
                    <div className="space-y-12 h-full flex flex-col justify-center">
                        <div className="space-y-4">
                            <span className="text-[#BF9B8E] font-mono text-sm tracking-[0.3em] uppercase">Nos coordonnées</span>
                            <div className="flex items-center gap-4 text-2xl font-light hover:text-[#BF9B8E] transition-colors group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#BF9B8E]/10 transition-colors">
                                    <Mail className="w-5 h-5 text-[#BF9B8E]" />
                                </div>
                                <a href="mailto:contact@probitas-conseil.fr">contact@probitas-conseil.fr</a>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-sm p-8 border border-white/10">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-sm bg-[#BF9B8E]/20 flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-8 h-8 text-[#BF9B8E]" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Réserver un appel</h4>
                                    <p className="text-white/60 text-sm mb-6">
                                        Accédez directement à notre agenda et choisissez le meilleur moment pour échanger ensemble.
                                    </p>
                                    <button
                                        onClick={onOpenContact}
                                        className="inline-flex items-center gap-2 text-[#BF9B8E] font-bold hover:underline group"
                                    >
                                        Choisir un créneau
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <span className="text-[#BF9B8E] font-mono text-sm tracking-[0.3em] uppercase block">Suivez-nous</span>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/company/probitas-conseil/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center hover:bg-[#BF9B8E] hover:text-[#0C2E59] transition-all group"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://twitter.com/Probitas_org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center hover:bg-[#BF9B8E] hover:text-[#0C2E59] transition-all group"
                                >
                                    <Twitter className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

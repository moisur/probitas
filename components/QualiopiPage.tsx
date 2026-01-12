import React, { useEffect } from 'react';
import { CheckCircle, ExternalLink, GraduationCap, Calendar } from 'lucide-react';

const QualiopiPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-cinzel text-white">
                        CERTIFICATION QUALIOPI
                    </h1>
                    <div className="w-24 h-1 bg-[#BF9B8E] mx-auto mb-8"></div>
                    <h2 className="text-xl md:text-3xl text-[#BF9B8E] font-serif leading-relaxed">
                        PROBITAS est certifié QUALIOPI pour ses actions de formation
                    </h2>
                </header>

                {/* Certificate Verification Section */}
                <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-12 mb-16 text-center space-y-12">
                    <div className="max-w-md mx-auto">
                        <img
                            src="/assets/certificat-qua006775.webp"
                            alt="Qualiopi Probitas"
                            className="w-full h-auto rounded-sm shadow-2xl mb-8"
                        />
                    </div>
                    <div>
                        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                            La certification qualité a été délivrée au titre de la catégorie d'action suivante : <strong>ACTIONS DE FORMATION</strong>.
                        </p>
                        <p className="text-white/70 mb-8">
                            Vous pouvez vérifier l'authenticité de notre certificat sur le site de l'ICPF.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <a
                                href="https://certif-icpf.org/search?query=Probitas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#BF9B8E] text-[#0C2E59] font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                            >
                                Vérifier le certificat <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="text-center">
                    <h3 className="text-2xl md:text-4xl font-bold mb-8 font-cinzel">
                        Intéressé.e par l'une de nos formations ?
                    </h3>
                    <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                        Nos programmes s'adaptent à vos besoins et sont déployés en présentiel, en ligne ou en e-learning.
                        Contactez notre équipe et définissons ensemble une formation sur mesure pour votre organisation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <a
                            href="#formation"
                            className="group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all"
                        >
                            <GraduationCap className="w-10 h-10 text-[#BF9B8E] mb-4 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-lg mb-2">Catalogue de formations</span>
                            <span className="text-sm text-white/50">Découvrir nos programmes</span>
                        </a>

                        <a
                            href="https://meet.brevo.com/farah-zaoui/echangeons-formation-"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all"
                        >
                            <Calendar className="w-10 h-10 text-[#BF9B8E] mb-4 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-lg mb-2">Prendre rendez-vous</span>
                            <span className="text-sm text-white/50">Échanger sur vos besoins</span>
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default QualiopiPage;

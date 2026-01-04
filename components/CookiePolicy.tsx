
import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy: React.FC = () => {
    return (
        <div className="min-h-screen pt-40 pb-20 bg-[#0C2E59]">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-xl p-12 md:p-20 border border-white/10 rounded-sm shadow-2xl"
                >
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-6xl font-cinzel font-black text-white uppercase leading-none mb-4">
                            Politique de <br />
                            <span className="text-[#BF9B8E]">cookies (UE)</span>
                        </h1>
                        <p className="text-[#BF9B8E] font-mono text-xs tracking-[0.3em] uppercase">
                            Dernière mise à jour : 26 juillet 2025
                        </p>
                    </div>

                    <div className="space-y-12 text-white/70 font-light leading-relaxed">
                        <section>
                            <p className="text-lg italic font-serif text-white/90">
                                Cette politique de cookies s’applique aux citoyens et aux résidents permanents légaux de l’Espace Économique Européen et de la Suisse.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6">1. Introduction</h2>
                            <p>
                                Notre site web, <a href="https://probitas-conseil.fr" className="text-white hover:underline">https://probitas-conseil.fr</a> (ci-après : « le site web ») utilise des cookies et autres technologies liées (par simplification, toutes ces technologies sont désignées par le terme « cookies »). Des cookies sont également placés par des tierces parties que nous avons engagées. Dans le document ci-dessous, nous vous informons de l’utilisation des cookies sur notre site web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6">2. Que sont les cookies ?</h2>
                            <p>
                                Un cookie est un petit fichier simple envoyé avec les pages de ce site web et stocké par votre navigateur sur le disque dur de votre ordinateur ou d’un autre appareil. Les informations qui y sont stockées peuvent être renvoyées à nos serveurs ou aux serveurs des tierces parties concernées lors d’une visite ultérieure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6">3. Que sont les scripts ?</h2>
                            <p>
                                Un script est un élément de code utilisé pour que notre site web fonctionne correctement et de manière interactive. Ce code est exécuté sur notre serveur ou sur votre appareil.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6">4. Qu’est-ce qu’une balise invisible ?</h2>
                            <p>
                                Une balise invisible (ou balise web) est un petit morceau de texte ou d’image invisible sur un site web, utilisé pour suivre le trafic sur un site web. Pour ce faire, diverses données vous concernant sont stockées à l’aide de balises invisibles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6">5. Cookies</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-white font-bold mb-2">5.1 Cookies techniques ou fonctionnels</h3>
                                    <p>Certains cookies assurent le fonctionnement correct de certaines parties du site web et la prise en compte de vos préférences en tant qu’internaute. Nous pouvons déposer ces cookies sans votre consentement.</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">5.2 Cookies statistiques</h3>
                                    <p>Nous utilisons des cookies statistiques afin d’optimiser l’expérience des internautes sur notre site web. Nous demandons votre permission pour placer des cookies statistiques.</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">5.3 Cookies de marketing/suivi</h3>
                                    <p>Les cookies de marketing/suivi sont utilisés pour créer des profils d’utilisateurs afin d’afficher de la publicité ou de suivre l’utilisateur sur ce site web ou sur plusieurs sites web.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6">6. Cookies placés</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono tracking-wider">
                                <div className="p-4 border border-white/10">WordPress (Fonctionnel)</div>
                                <div className="p-4 border border-white/10">Wordfence (Fonctionnel)</div>
                                <div className="p-4 border border-white/10">Google Fonts</div>
                                <div className="p-4 border border-white/10">Google reCAPTCHA</div>
                                <div className="p-4 border border-white/10">Twitter / LinkedIn</div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6">7. Votre Consentement</h2>
                            <p>
                                Lorsque vous visitez notre site web pour la première fois, nous vous montrerons une fenêtre contextuelle avec une explication sur les cookies. Dès que vous cliquez sur « Enregistrer les préférences », vous nous autorisez à utiliser les catégories de cookies et d’extensions que vous avez sélectionnés.
                            </p>
                        </section>

                        <section className="pt-12 border-t border-white/10">
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6">10. Coordonnées</h2>
                            <address className="not-italic space-y-2">
                                <p>SARL Probitas</p>
                                <p>60 rue François 1er – 75008 Paris</p>
                                <p>France</p>
                                <p>Email : <a href="mailto:contact@probitas-conseil.fr" className="text-white hover:underline">contact@probitas-conseil.fr</a></p>
                            </address>
                        </section>

                        <div className="pt-20 text-center">
                            <a
                                href="#hero"
                                className="inline-block bg-[#BF9B8E] text-white px-12 py-5 font-black uppercase tracking-[0.4em] text-[10px] rounded-sm hover:scale-105 transition-transform"
                            >
                                Retour à l'accueil
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CookiePolicy;

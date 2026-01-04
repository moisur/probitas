import React from 'react';
import { motion } from 'framer-motion';

const LegalNotice = () => {
    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => window.location.hash = ''}
                    className="flex items-center gap-2 text-[#BF9B8E] hover:text-white transition-colors mb-12 group"
                >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Retour à l'accueil</span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h1 className="font-cinzel text-5xl md:text-6xl mb-16 text-[#BF9B8E]">Mentions Légales</h1>

                    <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
                        <section>
                            <p className="mb-6">
                                En vigueur au 01/01/2025. Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l'<b>"Utilisateur"</b>, du site https://probitas-conseil.fr, ci-après le <b>"Site"</b>, les présentes mentions légales.
                            </p>
                            <p>
                                La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-cinzel text-2xl text-[#BF9B8E] border-b border-[#BF9B8E]/20 pb-2">ARTICLE 1 - L&apos;EDITEUR</h2>
                            <p>
                                L&apos;édition du Site est assurée par Probitas SARL unipersonnelle au capital de 1000 euros, immatriculée au Registre du Commerce et des Sociétés de PARIS sous le numéro 921044699 dont le siège social est situé au 60 RUE FRANCOIS 1er - 75008 PARIS.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Numéro de téléphone : 06 52 30 81 66</li>
                                <li>Adresse e-mail : contact@probitas-conseil.fr</li>
                                <li>N° de TVA intracommunautaire : FR63921044699</li>
                                <li>Directrice de la publication : ZAOUI Farah</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-cinzel text-2xl text-[#BF9B8E] border-b border-[#BF9B8E]/20 pb-2">ARTICLE 2 - L&apos;HEBERGEUR</h2>
                            <p>
                                L&apos;hébergeur du Site est la société IONOS SARL, dont le siège social est situé au 7 place de la gare - BP 70109 - 57200 SARREGUEMINES.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Numéro de téléphone : 09 70 80 89 11</li>
                                <li>Adresse mail : info@ionos.fr</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-cinzel text-2xl text-[#BF9B8E] border-b border-[#BF9B8E]/20 pb-2">ARTICLE 3 - ACCES AU SITE</h2>
                            <p>
                                Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.
                            </p>
                            <p>
                                En cas de modification, interruption ou suspension du Site, l&apos;Editeur ne saurait être tenu responsable.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-cinzel text-2xl text-[#BF9B8E] border-b border-[#BF9B8E]/20 pb-2">ARTICLE 4 - COLLECTE DES DONNEES ET PROPRIETE</h2>
                            <p>
                                Le Site assure à l&apos;Utilisateur une collecte et un traitement d&apos;informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés.
                            </p>
                            <p>
                                L&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition de ses données personnelles par mail à l&apos;adresse email contact@probitas-conseil.fr.
                            </p>
                            <p>
                                Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires.
                            </p>
                            <p>
                                Les images et illustrations présentes sur le Site sont soit des images personnelles non cessibles, soit des images libres de droit issues d&apos;Unsplash ou Pngtree.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-cinzel text-2xl text-[#BF9B8E] border-b border-[#BF9B8E]/20 pb-2">ARTICLE 5 - CADRE JURIDIQUE SOCIETE CONSEIL</h2>
                            <p>
                                Le conseil proposé est stratégique et se situe ainsi dans le strict respect du monopole du conseil juridique et de la rédaction d’actes juridiques dont disposent les avocats avec lesquels le cabinet collabore régulièrement (article 54 de la Loi n° 71-1130 du 31 décembre 1971 portant réforme de certaines professions judiciaires et juridiques).
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LegalNotice;

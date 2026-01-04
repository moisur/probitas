
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
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
                            <span className="text-[#BF9B8E]">confidentialité</span>
                        </h1>
                        <p className="text-white/40 italic font-serif text-lg">
                            Le site web probitas-conseil.fr est détenu par Farah ZAOUI, qui est contrôleur de vos données personnelles.
                        </p>
                    </div>

                    <div className="space-y-12 text-white/70 font-light leading-relaxed">
                        <section>
                            <p>
                                Nous avons adopté cette politique de confidentialité, qui détermine la manière dont nous traitons les informations collectées par probitas-conseil.fr, qui fournit également les raisons pour lesquelles nous devons collecter certaines données personnelles vous concernant. Par conséquent, vous devez lire cette politique de confidentialité avant d’utiliser le site web probitas-conseil.fr.
                            </p>
                            <p className="mt-4">
                                Nous prenons soin de vos données personnelles et nous nous engageons à en garantir la confidentialité et la sécurité.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6 tracking-widest">Les informations personnelles que nous collectons :</h2>
                            <p>
                                Lorsque vous visitez probitas-conseil.fr, nous recueillons automatiquement certaines informations sur votre appareil, notamment des informations sur votre navigateur web, votre adresse IP, votre fuseau horaire et certains des cookies installés sur votre appareil. En outre, lorsque vous naviguez sur le site, nous recueillons des informations sur les pages web ou les produits individuels que vous consultez, sur les sites web ou les termes de recherche qui vous ont renvoyé au site et sur la manière dont vous interagissez avec le site. Nous désignons ces informations collectées automatiquement par le terme « informations sur les appareils ». En outre, nous pourrions collecter les données personnelles que vous nous fournissez (y compris, mais sans s’y limiter, le nom, le prénom, l’adresse, les informations de paiement, etc.) lors de l’inscription afin de pouvoir exécuter le contrat.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6 tracking-widest">Pourquoi traitons-nous vos données ?</h2>
                            <p>
                                Notre priorité absolue est la sécurité des données des clients et, à ce titre, nous ne pouvons traiter que des données minimales sur les utilisateurs, uniquement dans la mesure où cela est absolument nécessaire pour maintenir le site web. Les informations collectées automatiquement sont utilisées uniquement pour identifier les cas potentiels d’abus et établir des informations statistiques concernant l’utilisation du site web. Ces informations statistiques ne sont pas autrement agrégées de manière à identifier un utilisateur particulier du système.
                            </p>
                            <p className="mt-4">
                                Vous pouvez visiter le site web sans nous dire qui vous êtes ni révéler d’informations, par lesquelles quelqu’un pourrait vous identifier comme un individu spécifique et identifiable. Toutefois, si vous souhaitez utiliser certaines fonctionnalités du site web, ou si vous souhaitez recevoir notre lettre d’information ou fournir d’autres détails en remplissant un formulaire, vous pouvez nous fournir des données personnelles, telles que votre e-mail, votre prénom, votre nom, votre ville de résidence, votre organisation, votre numéro de téléphone.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6 tracking-widest">Vos droits :</h2>
                            <p>Si vous êtes un résident européen, vous disposez des droits suivants liés à vos données personnelles :</p>
                            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                                <li>Le droit d’être informé.</li>
                                <li>Le droit d’accès.</li>
                                <li>Le droit de rectification.</li>
                                <li>Le droit à l’effacement.</li>
                                <li>Le droit de restreindre le traitement.</li>
                                <li>Le droit à la portabilité des données.</li>
                                <li>Le droit d’opposition.</li>
                                <li>Les droits relatifs à la prise de décision automatisée et au profilage.</li>
                            </ul>
                            <p className="mt-4">
                                Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonnées ci-dessous.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6 tracking-widest">Sécurité de l’information :</h2>
                            <p>
                                Nous sécurisons les informations que vous fournissez sur des serveurs informatiques dans un environnement contrôlé et sécurisé, protégé contre tout accès, utilisation ou divulgation non autorisés. Nous conservons des garanties administratives, techniques et physiques raisonnables pour nous protéger contre tout accès, utilisation, modification et divulgation non autorisés des données personnelles sous son contrôle et sa garde.
                            </p>
                        </section>

                        <section className="pt-12 border-t border-white/10">
                            <h2 className="text-[#BF9B8E] font-cinzel font-bold text-xl uppercase mb-6 tracking-widest">Informations de contact :</h2>
                            <p>
                                Si vous souhaitez nous contacter pour comprendre davantage la présente politique ou si vous souhaitez nous contacter concernant toute question relative aux droits individuels et à vos informations personnelles, vous pouvez envoyer un courriel à <a href="mailto:contact@probitas-conseil.fr" className="text-white hover:underline">contact@probitas-conseil.fr</a>
                            </p>
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

export default PrivacyPolicy;

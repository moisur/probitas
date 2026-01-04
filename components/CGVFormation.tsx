import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, ChevronLeft } from 'lucide-react';
import gsap from 'gsap';

const CGVFormation: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline();
        tl.fromTo('.legal-content',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );
    }, []);

    const handleBack = () => {
        window.location.hash = '';
    };

    return (
        <div className="min-h-screen bg-[#0C2E59] text-white pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-[#BF9B8E] hover:text-white transition-colors mb-8 group"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Retour à l'accueil
                </button>

                <div className="legal-content space-y-12">
                    <header className="border-b border-white/10 pb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions Générales de Formation PROBITAS</h1>
                    </header>

                    <section className="space-y-6 text-white/80 leading-relaxed">
                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">1. OBJET</h2>
                        <p>
                            Les présentes Conditions Générales de Vente ("<strong>CGV</strong>") définissent, avec le Bulletin d'inscription, les conditions et les modalités de réalisation des formations proposées par PROBITAS et listées dans le catalogue de formation (la/les « <strong>Formation(s)</strong> »), et les droits et obligations de PROBITAS et du Bénéficiaire, que ce dernier agisse en tant que professionnel ou particulier (la/les « <strong>Partie(s)</strong> »).
                        </p>
                        <p>
                            Les CGV constituent, avec le Bulletin d'inscription, l'intégralité du contrat (ci-après le "<strong>Contrat</strong>") qui régit les relations entre PROBITAS et le Bénéficiaire pour la réalisation des Formations. La signature par le Bénéficiaire du Bulletin d'inscription entraîne l'acceptation pleine et entière des CGV. En cas de contradiction, le Bulletin d'inscription prévaut sur les CGV. Le Contrat prévaut sur tout autre document émanant des Parties.
                        </p>
                        <p>
                            PROBITAS est enregistré comme organisme de formation auprès de la Direccte (Direction régionale des entreprises de la concurrence, de la consommation, du travail et de l'emploi) et certifié par Qualiopi organisme de formation au titre de la catégorie d'action suivante : actions de formation au sens de l'article L.6313-1 du code de travail.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">2. COMMANDE ET INSCRIPTION</h2>
                        <p>
                            Les Formations sont décrites, à titre indicatif, dans le catalogue des formations. Le Bénéficiaire choisit librement la Formation. Il s'assure et garantit que la Formation choisie est conforme à ses besoins et, le cas échéant, à ceux des Participants dont il réalise l'inscription.
                        </p>
                        <p>
                            Pour chaque Formation dispensée par PROBITAS, un nombre minimum et maximum de Participants est admis ; les inscriptions pour la session cessent d'être retenues quand le nombre maximum de Participants est atteint.
                        </p>
                        <p>
                            <strong className="text-blue-400">Pour les professionnels :</strong> le Bénéficiaire demande un devis personnalisé et remplit le Bulletin d'inscription correspondant à la Formation choisie et procède au paiement d'un acompte prévu au Bulletin d'inscription. La commande correspondant à l'inscription est réputée ferme à la réception par PROBITAS du Bulletin d'inscription signé par le Bénéficiaire, et du paiement de l'acompte prévu.
                        </p>
                        <p>
                            <strong className="text-orange-400">Pour les particuliers :</strong> le Bénéficiaire s'inscrit en ligne en remplissant le Bulletin d'inscription correspondant à la Formation choisie et en acceptant les CGV. Le Bénéficiaire dispose alors d'un délai de dix (10) jours pour se rétracter par lettre recommandée avec accusé de réception. À l'issue de ce délai de dix (10) jours, et sauf rétractation, le Bénéficiaire reçoit un lien de paiement d'un acompte d'un montant équivalent à 30 % du montant total du Contrat, permettant de confirmer son inscription définitive. L'inscription est réputée ferme à compter du paiement de l'acompte.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">3. DÉROULEMENT DE LA FORMATION</h2>
                        <p>
                            <strong className="text-blue-400">Pour les professionnels :</strong> Il appartient au Bénéficiaire de s'assurer de l'inscription des Participants et de leur présence effective à la Formation et, le cas échéant, avec des outils tels que précisés dans le Programme de formation.
                        </p>
                        <p>
                            <strong className="text-orange-400">Pour les particuliers :</strong> il appartient au Bénéficiaire se s'assurer de sa bonne inscription et de sa présence à la Formation et, le cas échéant, avec des outils tels que précisés dans le Programme de formation.
                        </p>
                        <p>
                            PROBITAS se réserve le droit :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Le cas échéant, d'exclure le Participant si le Bénéficiaire professionnel n'a pas transmis le Bulletin d'inscription signé et en l'absence du complet paiement du prix dans les délais prévus au Bulletin d'inscription par le Bénéficiaire ;</li>
                            <li>d'exclure de toute Formation, et ce à tout moment, tout Participant dont le comportement gênerait le bon déroulement de la formation et/ou manquerait gravement aux présentes CGV ;</li>
                            <li>de refuser toute inscription de la part d'un Bénéficiaire pour motif légitime et non discriminatoire.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">4. ANNULATION – REMPLACEMENT - REPORT</h2>
                        <p className="italic">PAR LE BÉNÉFICIAIRE</p>
                        <p>
                            L'annulation ou le report de la Formation par le Bénéficiaire sont possibles à condition d'en informer PROBITAS au moins dix (10) jours avant la date prévue. Aucun remboursement de l'acompte payé par le Bénéficiaire ne sera réalisé par PROBITAS.
                        </p>
                        <p>
                            Le report est possible sans frais sur une autre session de formation prévue par PROBITAS pendant une durée d'un an.
                        </p>
                        <p>
                            En deçà de dix (10) jours aucun remboursement ni report ne sera possible et les sommes prévues au titre de la Formation seront dues en totalité.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">5. DROIT DE RÉTRACTATION</h2>
                        <p>
                            Un droit de rétractation de 14 jours à compter de la signature du Bulletin d'inscription est ouvert UNIQUEMENT SI le Bulletin d'inscription est signé hors établissement et dès lors que (1) l'objet de la Formation n'entre pas dans le champ de l'activité principale du Bénéficiaire et que (2) le nombre de ses salariés employés est inférieur ou égal à cinq ou (iii) que le Bénéficiaire est un particulier.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">6. PRIX PAIEMENT</h2>
                        <p>
                            Les conditions tarifaires sont stipulées au Bulletin d'inscription. Les prix sont forfaitaires et sont indiqués HT et TTC, selon le taux de TVA en vigueur.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">7. RESPONSABILITÉ ET ASSURANCE</h2>
                        <p>
                            PROBITAS est tenu à une obligation générale de moyen sans obligation de résultat ou de moyens renforcé. PROBITAS ne peut être tenue responsable en cas d'erreur du Bénéficiaire par exemple sur les informations complétées par le Bénéficiaire au Bulletin d'inscription.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">8. PROPRIÉTÉ INTELLECTUELLE</h2>
                        <p>
                            Le matériel pédagogique, quel qu'en soit la forme et le support (papier, électronique, numérique, oral, etc.), est protégé par la propriété intellectuelle.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">9. DONNÉES PERSONNELLES</h2>
                        <p>
                            Pour toute information sur la collecte et le traitement de vos données personnelles par PROBITAS, vous pouvez consulter notre <a href="#confidentialite" className="text-[#BF9B8E] hover:underline">Politique de Confidentialité</a>.
                        </p>

                        <h2 className="text-2xl font-semibold text-[#BF9B8E]">10. DROIT APPLICABLE - LITIGES</h2>
                        <p>
                            Le Contrat et les CGV sont régis par le droit français. En cas de litige, les Parties s'efforceront de trouver une solution amiable avant de porter le différend devant les tribunaux compétents.
                        </p>
                    </section>

                    <footer className="pt-12 border-t border-white/10 text-white/60 text-sm italic">
                        Dernière mise à jour : 26 Décembre 2025
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default CGVFormation;

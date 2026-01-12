
import React from 'react';
import { motion } from 'framer-motion';

const CommunicationPage: React.FC = () => {
  const stats = [
    { label: "Visibilité", value: "+20 interviews médias" },
    { label: "Croissance", value: "Missions à 5 chiffres" },
    { label: "Impact", value: "+25 formations / an" },
    { label: "Réseau", value: "+200 recherches / semaine" }
  ];

  return (
    <div className="min-h-screen pt-32 bg-white">
      <section className="relative py-40 text-[#0C2E59] overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-[1px] bg-[#BF9B8E] mb-12"
            />
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-cinzel font-black leading-[0.9] uppercase mb-12 break-words">
              COMMUNICATION ÉTHIQUE <br />& <span className="text-[#BF9B8E]">SITUATIONS SENSIBLES</span>
            </h2>
            <p className="text-2xl md:text-3xl font-serif italic text-[#0C2E59]/80 leading-snug max-w-2xl">
              Devenez remarquable grâce à une communication experte et stratégique.
            </p>
            <button className="mt-12 bg-[#0C2E59] text-white px-10 py-5 font-bold uppercase tracking-widest text-xs">
              Discutons !
            </button>
          </div>

          {/* LinkedIn Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-40">
            <div className="space-y-10 text-lg font-light leading-relaxed text-[#0C2E59]/70">
              <div>
                <p className="font-bold text-[#0C2E59] text-xl mb-4">J’ai une bonne et une mauvaise nouvelle à vous annoncer :</p>
                <p>La plateforme n’a jamais été aussi utilisée pour se démarquer. En 2024, LinkedIn comporte 29 millions d’utilisateurs.</p>
              </div>

              <div className="bg-[#BF9B8E]/5 p-10 border-l-4 border-[#BF9B8E]">
                <p className="font-bold text-[#0C2E59] mb-4">⇒ Il devient difficile de faire sa place.</p>
                <p>Si votre présence se résume à mettre à jour votre CV ou poster une jurisprudence tous les 36 du mois...</p>
                <p className="mt-4 font-black text-[#BF9B8E] uppercase tracking-wider">⇒ Vous avez un boulevard pour vous démarquer.</p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800"
                className="w-full shadow-2xl rounded-sm"
                alt="LinkedIn Coaching"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="mb-40">
            <h3 className="text-center text-3xl font-cinzel font-black uppercase mb-20 tracking-widest">Comment ? Étape par étape</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                "Optimiser votre profil LinkedIn",
                "Le transformer en tunnel de vente",
                "Créer du contenu d'expertise",
                "Développer votre storytelling",
                "Convertir vos lecteurs"
              ].map((step, i) => (
                <div key={i} className="bg-[#0C2E59] text-white p-8 flex flex-col items-center text-center">
                  <span className="text-[#BF9B8E] font-serif italic text-3xl mb-4">0{i + 1}</span>
                  <p className="text-[10px] font-mono uppercase tracking-widest">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials snippet */}
          <div className="bg-[#f4f4f2] p-12 md:p-24 rounded-sm text-center">
            <h3 className="text-3xl font-cinzel font-black uppercase mb-8">Prêt, feu, partez : discutons !</h3>
            <button className="bg-[#BF9B8E] text-white px-16 py-6 font-black uppercase tracking-[0.4em] text-xs shadow-xl shadow-[#BF9B8E]/30 hover:scale-105 transition-transform">
              Réserver un créneau
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunicationPage;

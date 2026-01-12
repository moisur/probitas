
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb, MessageSquare, Heart, RefreshCcw, Search, Compass, Share2, Quote } from 'lucide-react';
import MissionsTimeline from './MissionsTimeline';
import AboutSection from './AboutSection';
import GuideModal from './GuideModal';
import { Guide } from '../data/guides';

const AboutPage: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const [selectedGuide, setSelectedGuide] = React.useState<Guide | null>(null);
  return (
    <div className="min-h-screen bg-[#F1F0ED] text-[#0C2E59]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
            alt="Bureau Probitas"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F1F0ED]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <span className="text-[#BF9B8E] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Découvrir probitas</span>
              <h1 className="text-5xl md:text-7xl font-cinzel font-bold tracking-tighter">
                À PROPOS DE <span className="text-[#BF9B8E] italic font-serif">PROBITAS</span>
              </h1>
              <div className="h-px w-24 bg-[#BF9B8E] mx-auto mt-8 opacity-50" />
            </div>

            <div className="pt-8">
              <Quote className="w-8 h-8 text-[#BF9B8E]/30 mx-auto mb-6" />
              <p className="text-xl md:text-3xl font-serif italic leading-relaxed text-[#0C2E59]">
                « Plus vous trouverez de raison dans un homme, plus vous trouverez en lui de probité. »
              </p>
              <p className="text-[#BF9B8E] font-cinzel tracking-widest text-xs uppercase mt-4">
                Denis DIDEROT (1713 - 1784)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Farah Zaoui Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Farah Zaoui - Fondatrice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#BF9B8E]/10 -z-10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold leading-tight">
              Au service de la lutte contre la <span className="text-[#BF9B8E]">corruption</span>
            </h2>
            <div className="space-y-6 text-lg text-[#0C2E59]/80 leading-relaxed font-light">
              <p>
                <strong>Farah Zaoui</strong> est une juriste de formation spécialisée en droit des collectivités territoriales, diplômée de l’Université Paris II Panthéon-Assas.
              </p>
              <p>
                À la suite de ses études, elle a été recrutée dans une <strong>célèbre association de lutte contre la corruption</strong>. Grâce à cette expérience de terrain, elle a pu traiter des centaines d’alertes anticorruption provenant de la France entière.
              </p>
              <p>
                Elle a coordonné le contentieux national de l’association et formé les référents locaux bénévoles au droit de l'éthique publique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Naissance Section */}
      <section className="py-24 px-6 bg-[#0C2E59] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold leading-tight">
              Naissance de <span className="text-[#BF9B8E]">probitas</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
              <p>
                Après 3 ans dans le coeur du réacteur de la lutte contre la corruption en France, Farah Zaoui a décidé de créer sa <strong>société de conseil</strong> afin d’aider les dirigeants publics comme privés à la diffusion de la culture de l’éthique dans leurs services.
              </p>
              <p>
                Son but est d'agir sur les <strong>causes de la corruption</strong> plutôt que sur ses conséquences.
              </p>
              <p>
                En juin 2023, elle a été nommée <strong>référente déontologue des élus</strong> d’<em>Est Ensemble</em>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-square bg-[#BF9B8E]/5 rounded-sm border border-[#BF9B8E]/20 p-8 flex flex-col justify-center items-center text-center space-y-6">
              <Shield className="w-20 h-20 text-[#BF9B8E]" />
              <p className="text-2xl font-cinzel italic tracking-tight">"Réconcilier éthique et performance durable."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missions Section */}
      <div className="bg-[#0C2E59] border-t border-white/5">
        <MissionsTimeline />
      </div>

      {/* Valeurs Section */}
      <section className="py-32 px-6 bg-[#BF9B8E]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#BF9B8E] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Notre ADN</span>
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold">Nos <span className="text-[#BF9B8E]">Valeurs</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "",
                title: "Empathie",
                desc: "Nous reconnaissons les émotions que le sujet de la corruption peut provoquer chez nos clients pour mieux comprendre leurs besoins et les aider à surmonter leurs difficultés."
              },
              {
                icon: "",
                title: "Adaptabilité",
                desc: "L’univers de la compliance connaît des changements rapides. Nous accueillons avec facilité ces évolutions et restons en veille constante sur les nouveaux outils, méthodes et actualités du secteur pour fournir à nos clients les meilleurs prestations."
              },
              {
                icon: "",
                title: "Nuance",
                desc: "L’anticorruption n’est pas un sujet neutre. Nous évitons les généralisations hâtives car nous admettons la complexité des situations, des opinions et des problématiques de terrain rencontrées par chacun."
              },
              {
                icon: "",
                title: "Créativité",
                desc: "Nous cultivons la pensée créative ce qui nous permet de trouver des solutions innovantes et de nous améliorer constamment."
              },
              {
                icon: "",
                title: "Communication",
                desc: "Nous favorisons l’expression claire, l’écoute active et la transmission d’informations sans ambiguïté."
              }
            ].map((valeur, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white border border-[#0C2E59]/5 hover:border-[#BF9B8E]/30 transition-all text-center space-y-6 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#0C2E59] rounded-full flex items-center justify-center mb-4 text-2xl text-[#BF9B8E] font-serif select-none">
                  {valeur.icon}
                </div>
                <h3 className="text-xl font-cinzel font-bold">{valeur.title}</h3>
                <p className="text-sm text-[#0C2E59]/70 leading-relaxed text-justify">{valeur.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vos Guides */}
      <AboutSection onOpenGuideModal={(guide) => setSelectedGuide(guide)} />

      {/* Guide Details Modal */}
      <GuideModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />

      {/* CTAs */}
      <section className="py-32 px-6 bg-[#0C2E59] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold">Prêt à sécuriser votre <span className="text-[#BF9B8E] italic font-serif">organisation</span> ?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
            <button
              onClick={() => window.location.hash = '#formation'}
              className="px-8 py-4 bg-[#BF9B8E] text-[#0C2E59] font-bold uppercase tracking-widest text-sm hover:bg-[#A68679] transition-all"
            >
              Découvrir nos formations
            </button>
            <button
              onClick={() => window.location.hash = '#presse'}
              className="px-8 py-4 border border-white/20 hover:border-[#BF9B8E] transition-all font-bold uppercase tracking-widest text-sm"
            >
              Espace Presse
            </button>
          </div>
        </div>
      </section>
    </div >
  );
};

export default AboutPage;

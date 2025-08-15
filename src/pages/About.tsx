import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Users, Award, Target, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import CardGlass from '../components/ui/CardGlass'
import NeonButton from '../components/ui/NeonButton'
import { team, clients } from '../data/mockData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const [currentClientIndex, setCurrentClientIndex] = useState(0)
  const { ref: teamRef, controls: teamControls } = useScrollAnimation()
  const { ref: valuesRef, controls: valuesControls } = useScrollAnimation()
  const { ref: processRef, controls: processControls } = useScrollAnimation()

  const values = [
    {
      icon: Award,
      title: 'Excellence technique',
      description: 'Nous utilisons les technologies les plus avancées pour créer des expériences 3D exceptionnelles qui repoussent les limites du possible.'
    },
    {
      icon: Users,
      title: 'Collaboration étroite',
      description: 'Votre succès est notre priorité. Nous travaillons main dans la main avec vos équipes pour concrétiser votre vision.'
    },
    {
      icon: Target,
      title: 'Résultats mesurables',
      description: 'Chaque projet est conçu pour générer un impact réel sur votre business avec des KPIs clairs et des objectifs définis.'
    },
    {
      icon: Heart,
      title: 'Passion créative',
      description: 'Notre équipe d\'artistes et développeurs partage la même passion pour l\'innovation et la beauté du code.'
    }
  ]

  const processSteps = [
    {
      title: 'Découverte',
      description: 'Nous analysons vos besoins, votre marché et définissons ensemble les objectifs de votre projet 3D.',
      duration: '1-2 semaines'
    },
    {
      title: 'Prototypage',
      description: 'Création de prototypes interactifs pour valider les concepts et l\'expérience utilisateur.',
      duration: '1-3 semaines'
    },
    {
      title: 'Production',
      description: 'Développement complet avec tests continus, optimisations performances et intégrations.',
      duration: '4-12 semaines'
    }
  ]

  const nextClient = () => {
    setCurrentClientIndex((prev) => (prev + 1) % Math.ceil(clients.length / 3))
  }

  const prevClient = () => {
    setCurrentClientIndex((prev) => (prev - 1 + Math.ceil(clients.length / 3)) % Math.ceil(clients.length / 3))
  }

  const visibleClients = clients.slice(currentClientIndex * 3, (currentClientIndex + 1) * 3)

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="À propos de nous"
            subtitle="Une équipe passionnée dédiée à transformer vos idées en expériences 3D d'exception"
            centered
          />
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CardGlass className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Notre histoire
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Fondée en 2019 par des passionnés de 3D et de développement web, 
                <span className="text-emerald-400 font-semibold"> Pixels 3D</span> est née 
                de la conviction que la technologie 3D pouvait révolutionner l'expérience client dans le digital.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Aujourd'hui, nous sommes fiers d'accompagner les plus grandes marques de luxe, 
                constructeurs automobiles et leaders industriels dans leur transformation 3D. 
                Notre expertise technique couplée à notre vision créative nous permet de livrer 
                des projets qui marquent et convertissent.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Avec plus de <span className="text-emerald-400 font-semibold">50 projets livrés</span> 
                et un taux de satisfaction client de <span className="text-emerald-400 font-semibold">98%</span>, 
                nous continuons d'innover pour rester à la pointe de la technologie 3D web.
              </p>
            </CardGlass>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Notre équipe"
            subtitle="Des experts passionnés qui donnent vie à vos projets les plus ambitieux"
            centered
            className="mb-16"
          />

          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <CardGlass className="text-center p-8 group">
                  <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-emerald-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </CardGlass>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Nos valeurs"
            subtitle="Les principes qui guident notre travail et nos relations avec nos clients"
            centered
            className="mb-16"
          />

          <motion.div
            ref={valuesRef}
            initial="hidden"
            animate={valuesControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <CardGlass className="p-6 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-400/10 rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </CardGlass>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Notre processus"
            subtitle="Une méthode éprouvée en 3 étapes pour garantir la réussite de vos projets"
            centered
            className="mb-16"
          />

          <motion.div
            ref={processRef}
            initial="hidden"
            animate={processControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
            className="relative"
          >
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400/20 via-emerald-400 to-emerald-400/20 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                  }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mx-auto lg:mb-6">
                    <div className="w-12 h-12 bg-emerald-400 text-black rounded-full flex items-center justify-center font-bold text-lg relative z-10">
                      {index + 1}
                    </div>
                  </div>
                  
                  <CardGlass className="p-8 text-center pt-12 lg:pt-8">
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>
                    <div className="inline-flex items-center text-sm text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                      <span>{step.duration}</span>
                    </div>
                  </CardGlass>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Nos partenaires"
            subtitle="Les marques qui nous font confiance pour leurs projets 3D les plus stratégiques"
            centered
            className="mb-16"
          />

          <CardGlass className="p-8">
            <div className="flex items-center justify-between">
              <button
                onClick={prevClient}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentClientIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center justify-center space-x-12 flex-1"
                >
                  {visibleClients.map((client, index) => (
                    <motion.div
                      key={client.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <button
                onClick={nextClient}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Suivant"
              >
                <ChevronRight className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentClientIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentClientIndex === index ? 'bg-emerald-400' : 'bg-gray-600'
                  }`}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
          </CardGlass>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600/10 via-transparent to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CardGlass className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Rejoignez l'aventure 3D
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Vous partagez notre passion pour l'innovation ? Vous souhaitez créer 
                des expériences 3D qui marquent ? Parlons de votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <NeonButton size="lg" icon={ArrowRight}>
                    Démarrer mon projet
                  </NeonButton>
                </Link>
                <NeonButton 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.alert('Page carrières à venir (non implémentée dans cette démo)')}
                >
                  Nous rejoindre
                </NeonButton>
              </div>
            </CardGlass>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
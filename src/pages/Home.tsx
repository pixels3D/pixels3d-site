import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Box, Settings, Zap, Star } from 'lucide-react'
import HeroPremium from '../components/ui/HeroPremium'
import { SectionMetrics, SectionPartners } from '../components/ui/Sections'
import GlowCard from '../components/ui/GlowCard'
import { projects } from '../data/mockData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home() {
  const { ref: pillarsRef, controls: pillarsControls } = useScrollAnimation()
  const { ref: casesRef, controls: casesControls } = useScrollAnimation()

  const pillars = [
    {
      icon: Box,
      title: 'Imagerie 3D',
      description: 'Visuels photoréalistes qui transforment vos produits en œuvres d\'art numériques.'
    },
    {
      icon: Settings,
      title: 'Configurateurs',
      description: 'Applications interactives permettant la personnalisation en temps réel.'
    },
    {
      icon: Zap,
      title: 'WebGL',
      description: 'Expériences 3D immersives haute performance dans le navigateur.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroPremium />

      {/* Metrics Section */}
      <SectionMetrics />

      {/* Pillars Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
              Nos expertises
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Trois domaines de compétence pour donner vie à vos projets les plus ambitieux
            </p>
          </div>

          <motion.div
            ref={pillarsRef}
            initial="hidden"
            animate={pillarsControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <GlowCard className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-400/10 rounded-2xl flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
              Études de cas
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez comment nous avons transformé les défis de nos clients en succès mesurables
            </p>
          </div>

          <motion.div
            ref={casesRef}
            initial="hidden"
            animate={casesControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {projects.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <Link to={`/work/${project.id}`}>
                  <GlowCard className="overflow-hidden group cursor-pointer">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{project.client}</span>
                        <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </GlowCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link to="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Voir tous nos projets</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <SectionPartners />

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600/10 via-transparent to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à donner vie à vos idées ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discutons de votre projet et découvrons ensemble comment la 3D peut 
              transformer votre business et captiver vos clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Découvrir notre portfolio</span>
                </motion.button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>Devis gratuit sous 48h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>Support technique inclus</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>Garantie de satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Box, Settings, Zap, Star, CheckCircle } from 'lucide-react'
import Hero3D from '../components/3d/Hero3D'
import NeonButton from '../components/ui/NeonButton'
import CardGlass from '../components/ui/CardGlass'
import SectionHeader from '../components/ui/SectionHeader'
import { projects, clients } from '../data/mockData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Home() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation()
  const { ref: pillarsRef, controls: pillarsControls } = useScrollAnimation()
  const { ref: casesRef, controls: casesControls } = useScrollAnimation()
  const { ref: clientsRef, controls: clientsControls } = useScrollAnimation()

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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-blue-900/20" />
        
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        >
          {/* Text Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              Pixels 3D
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Nous transformons vos idées en{' '}
              <span className="text-emerald-400 font-semibold">expériences 3D</span>{' '}
              immersives et performantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NeonButton size="lg" icon={ArrowRight}>
                <Link to="/contact">Demander un devis</Link>
              </NeonButton>
              <NeonButton variant="secondary" size="lg">
                <Link to="/work">Voir nos réalisations</Link>
              </NeonButton>
            </div>
          </motion.div>

          {/* 3D Viewer */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
            className="h-96 lg:h-[500px]"
          >
            <Hero3D className="w-full h-full" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Nos expertises"
            subtitle="Trois domaines de compétence pour donner vie à vos projets les plus ambitieux"
            centered
            className="mb-16"
          />

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
                <CardGlass className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-400/10 rounded-2xl flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                </CardGlass>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Études de cas"
            subtitle="Découvrez comment nous avons transformé les défis de nos clients en succès mesurables"
            centered
            className="mb-16"
          />

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
                  <CardGlass className="overflow-hidden group cursor-pointer">
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
                  </CardGlass>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link to="/work">
              <NeonButton variant="secondary" icon={ArrowRight}>
                Voir tous nos projets
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={clientsRef}
            initial="hidden"
            animate={clientsControls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              Marques de luxe, constructeurs automobiles et leaders de l'industrie : 
              nous sommes fiers de les accompagner dans leur transformation digitale 3D.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto mx-auto opacity-60 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
                <NeonButton size="lg" icon={ArrowRight}>
                  Demander un devis gratuit
                </NeonButton>
              </Link>
              <Link to="/work">
                <NeonButton variant="secondary" size="lg">
                  Découvrir notre portfolio
                </NeonButton>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Devis gratuit sous 48h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Support technique inclus</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Garantie de satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
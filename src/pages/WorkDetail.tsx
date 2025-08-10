import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, ExternalLink, Award, Users, Clock, TrendingUp } from 'lucide-react'
import GlowCard from '../components/ui/GlowCard'
import { projects } from '../data/mockData'

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  const project = projects.find(p => p.id === slug)
  
  if (!project) {
    return <Navigate to="/work" replace />
  }

  const metricIcons = {
    'Conversion Rate': TrendingUp,
    'Temps de session': Clock,
    'Satisfaction': Award,
    'Leads qualifiés': Users,
    'Temps passé': Clock,
    'Taux de rebond': TrendingUp,
    'Ventes en ligne': TrendingUp,
    'Retours produits': TrendingUp,
    'Engagement': Users
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/work" 
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux projets</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500">{project.year}</span>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="btn-secondary inline-flex items-center space-x-2 text-sm px-4 py-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Voir la démo</span>
                </button>
                <button 
                  onClick={() => window.alert('Lien vers le projet en live (non implémenté dans la démo)')}
                  className="btn-secondary inline-flex items-center space-x-2 text-sm px-4 py-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Voir en live</span>
                </button>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {project.description}
            </p>
            <div className="text-sm text-gray-400">
              <span className="font-semibold">Client :</span> {project.client}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlowCard className="relative aspect-video overflow-hidden group cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVideoPlaying(true)}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.button>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Résultats obtenus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(project.metrics).map(([metric, value], index) => {
                const IconComponent = metricIcons[metric as keyof typeof metricIcons] || Award
                return (
                  <motion.div
                    key={metric}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <GlowCard className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-emerald-400/10 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div className="text-3xl font-bold text-emerald-400 mb-2">{value}</div>
                      <div className="text-gray-400">{metric}</div>
                    </GlowCard>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies & Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <GlowCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Technologies utilisées</h3>
                <div className="space-y-3">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="text-gray-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <GlowCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Fonctionnalités clés</h3>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlowCard className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Inspiré par ce projet ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Créons ensemble une expérience 3D sur-mesure qui générera 
                des résultats exceptionnels pour votre business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="btn-primary text-lg px-8 py-4">
                    Discuter de mon projet
                  </button>
                </Link>
                <Link to="/services">
                  <button className="btn-secondary text-lg px-8 py-4">
                    Voir nos services
                  </button>
                </Link>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative max-w-4xl w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Démo vidéo non disponible
                </h3>
                <p className="text-gray-400 mb-6">
                  Cette fonctionnalité sera disponible avec les vraies données du projet.
                </p>
                <button onClick={() => setIsVideoPlaying(false)} className="btn-primary">
                  Fermer
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-white text-lg">&times;</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
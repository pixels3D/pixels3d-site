import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, ArrowRight, ExternalLink, Play } from 'lucide-react'
import GlowCard from '../components/ui/GlowCard'
import { projects } from '../data/mockData'

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedYear, setSelectedYear] = useState('Toutes')
  const [isLoading, setIsLoading] = useState(false)

  const categories = ['Tous', ...Array.from(new Set(projects.map(p => p.category)))]
  const years = ['Toutes', ...Array.from(new Set(projects.map(p => p.year))).sort().reverse()]

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'Tous' || project.category === selectedCategory
    const yearMatch = selectedYear === 'Toutes' || project.year === selectedYear
    return categoryMatch && yearMatch
  })

  const handleFilterChange = (category: string, year: string) => {
    setIsLoading(true)
    setSelectedCategory(category)
    setSelectedYear(year)
    
    // Simulate loading for smooth UX
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            Nos réalisations
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez notre portfolio de projets 3D qui ont marqué leur secteur et généré des résultats exceptionnels pour nos clients
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlowCard className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Filter className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-semibold">Filtres</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Catégorie
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleFilterChange(category, selectedYear)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-emerald-400 text-black'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Année
                </label>
                <div className="flex flex-wrap gap-2">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => handleFilterChange(selectedCategory, year)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedYear === year
                          ? 'bg-emerald-400 text-black'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center py-24">
              <div className="w-12 h-12 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${selectedYear}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.length === 0 ? (
                  <div className="col-span-full text-center py-24">
                    <div className="text-6xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Aucun projet trouvé
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Essayez de modifier vos filtres pour découvrir d'autres réalisations.
                    </p>
                    <button
                      onClick={() => handleFilterChange('Tous', 'Toutes')}
                      className="btn-secondary"
                    >
                      Réinitialiser les filtres
                    </button>
                  </div>
                ) : (
                  filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <GlowCard className="overflow-hidden group cursor-pointer">
                        <Link to={`/work/${project.id}`}>
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="flex space-x-3">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                  <Play className="w-5 h-5 text-white ml-0.5" />
                                </div>
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                  <ExternalLink className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-4 left-4">
                              <span className="text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                                {project.category}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4">
                              <span className="text-xs text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                                {project.year}
                              </span>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                              {project.description}
                            </p>
                            
                            {/* Metrics Preview */}
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm text-gray-500">{project.client}</span>
                              <div className="flex space-x-3 text-xs">
                                {Object.entries(project.metrics).slice(0, 1).map(([key, value]) => (
                                  <div key={key} className="text-center">
                                    <div className="text-emerald-400 font-bold">{value}</div>
                                    <div className="text-gray-500">{key}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.slice(0, 2).map(tech => (
                                  <span key={tech} className="text-xs bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded">
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > 2 && (
                                  <span className="text-xs text-gray-500">
                                    +{project.technologies.length - 2}
                                  </span>
                                )}
                              </div>
                              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </GlowCard>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* CTA */}
      {!isLoading && filteredProjects.length > 0 && (
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <GlowCard className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Votre projet mérite le même traitement premium
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discutons de vos objectifs et créons ensemble une expérience 3D 
                qui marquera vos utilisateurs et boostera vos conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4">
                    <span>Lancer mon projet</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="btn-secondary text-lg px-8 py-4">
                    Découvrir nos services
                  </button>
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>
      )}
    </div>
  )
}
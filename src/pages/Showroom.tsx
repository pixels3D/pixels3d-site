import React, { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Zap, Sparkles } from 'lucide-react'

// Lazy load heavy components
const GlassMorph = React.lazy(() => import('../components/showroom/A_Tendance/GlassMorph'))
const GradientLiquid = React.lazy(() => import('../components/showroom/A_Tendance/GradientLiquid'))
const GlitchText = React.lazy(() => import('../components/showroom/A_Tendance/GlitchText'))
const Particles3D = React.lazy(() => import('../components/showroom/A_Tendance/Particles3D'))
const HologramSim = React.lazy(() => import('../components/showroom/A_Tendance/HologramSim'))
const Minimalist = React.lazy(() => import('../components/showroom/A_Tendance/Minimalist'))
const ParallaxLayers = React.lazy(() => import('../components/showroom/A_Tendance/ParallaxLayers'))
const KineticType = React.lazy(() => import('../components/showroom/A_Tendance/KineticType'))
const SacredGeometry = React.lazy(() => import('../components/showroom/A_Tendance/SacredGeometry'))

const Portal3D = React.lazy(() => import('../components/showroom/B_Prestige/Portal3D'))
const Scene3D = React.lazy(() => import('../components/showroom/B_Prestige/Scene3D'))
const InteractiveHologram = React.lazy(() => import('../components/showroom/B_Prestige/InteractiveHologram'))
const MorphingWave = React.lazy(() => import('../components/showroom/B_Prestige/MorphingWave'))
const AnimatedFractals = React.lazy(() => import('../components/showroom/B_Prestige/AnimatedFractals'))
const XRSimulation = React.lazy(() => import('../components/showroom/B_Prestige/XRSimulation'))

type Theme = 'dark' | 'light' | 'neon'

export default function Showroom() {
  const [theme, setTheme] = useState<Theme>('dark')

  const tendanceEffects = [
    { id: 'glassmorph', title: 'Glassmorphism Animé', component: GlassMorph, description: 'Cartes transparentes avec reflets dynamiques' },
    { id: 'gradient-liquid', title: 'Gradient Liquide', component: GradientLiquid, description: 'Dégradés fluides réactifs à la souris' },
    { id: 'glitch-text', title: 'Glitch Subtil', component: GlitchText, description: 'Effet glitch RGB doux et élégant' },
    { id: 'particles-3d', title: 'Particules 3D', component: Particles3D, description: 'Points 3D interactifs et performants' },
    { id: 'hologram-sim', title: 'Hologramme Simulé', component: HologramSim, description: 'Effet scanline avec bloom CSS' },
    { id: 'minimalist', title: 'Minimalisme Extrême', component: Minimalist, description: 'Typographie forte et grille parfaite' },
    { id: 'parallax-layers', title: 'Parallax Layers', component: ParallaxLayers, description: 'Couches animées au scroll' },
    { id: 'kinetic-type', title: 'Typographie Cinétique', component: KineticType, description: 'Lettres qui se déforment' },
    { id: 'sacred-geometry', title: 'Géométrie Sacrée', component: SacredGeometry, description: 'Motifs mandalas animés' }
  ]

  const prestigeEffects = [
    { id: 'portal-3d', title: 'Portail 3D Interactif', component: Portal3D, description: 'Portail dimensionnel avec particules' },
    { id: 'scene-3d', title: 'Scène 3D Orbitale', component: Scene3D, description: 'Objet 3D avec éclairage premium' },
    { id: 'interactive-hologram', title: 'Hologramme 3D', component: InteractiveHologram, description: 'Panneau holographique interactif' },
    { id: 'morphing-wave', title: 'Vague Morphing WebGL', component: MorphingWave, description: 'Surface déformée par shader' },
    { id: 'animated-fractals', title: 'Fractales Animées', component: AnimatedFractals, description: 'Patterns fractals génératifs' },
    { id: 'xr-simulation', title: 'Simulation XR', component: XRSimulation, description: 'Interface casque XR simulée' }
  ]

  const SkeletonCard = () => (
    <div className="skeleton flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-violet-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Chargement...</p>
      </div>
    </div>
  )

  return (
    <div className={`pt-20 ${theme === 'light' ? 'bg-white text-black' : theme === 'neon' ? 'bg-black' : ''}`}>
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-violet-400" />
              <span className="text-violet-400 font-medium text-sm uppercase tracking-wider">
                Showroom Interactif
              </span>
            </motion.div>

            <h1 className="section-title">
              Effets Visuels Premium
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Découvrez notre palette d'effets visuels tendance et haut de gamme. 
              Chaque effet est optimisé pour les performances et l'accessibilité.
            </p>

            {/* Theme Switcher */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="text-sm text-gray-400">Thème :</span>
              {(['dark', 'light', 'neon'] as Theme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`nav-pill ${theme === t ? 'nav-active' : 'hover:bg-white/5'}`}
                >
                  {t === 'dark' && '🌙'}
                  {t === 'light' && '☀️'}
                  {t === 'neon' && '⚡'}
                  <span className="ml-1 capitalize">{t}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section A - Effets Tendance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-12">
            <Palette className="w-8 h-8 text-violet-400" />
            <h2 className="subtle-title">Effets Tendance</h2>
            <span className="badge">9 effets</span>
          </div>

          <div className="grid3">
            {tendanceEffects.map((effect, index) => (
              <motion.div
                key={effect.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card hover:border-violet-500/30 group"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{effect.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{effect.description}</p>
                </div>

                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-900/50">
                  <Suspense fallback={<SkeletonCard />}>
                    <effect.component />
                  </Suspense>
                </div>

                <button className="btn-ghost w-full group-hover:bg-violet-500/10 group-hover:border-violet-500/30 group-hover:text-violet-300">
                  Je veux ce style
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section B - Effets Prestige */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-violet-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-12">
            <Zap className="w-8 h-8 text-cyan-400" />
            <h2 className="subtle-title">Effets Haut de Gamme</h2>
            <span className="badge bg-cyan-500/10 text-cyan-300 border-cyan-500/20">6 effets</span>
          </div>

          <div className="space-y-16">
            {prestigeEffects.map((effect, index) => (
              <motion.div
                key={effect.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="min-h-screen flex items-center"
              >
                <div className="w-full">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{effect.title}</h3>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">{effect.description}</p>
                    <button className="btn bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-violet-500/25">
                      Je veux ce style
                    </button>
                  </div>

                  <div className="aspect-video max-w-6xl mx-auto rounded-2xl overflow-hidden bg-gray-900/50 border border-white/10">
                    <Suspense fallback={<SkeletonCard />}>
                      <effect.component />
                    </Suspense>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card p-12 border-violet-500/20 bg-gradient-to-br from-violet-950/20 to-cyan-950/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à intégrer ces effets ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contactez-nous pour discuter de l'intégration de ces effets visuels 
              dans votre projet et créer une expérience unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-lg px-8 py-4">
                Demander un devis
              </button>
              <button className="btn-ghost text-lg px-8 py-4">
                Voir nos réalisations
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
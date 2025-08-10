import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import RadiantButton from './RadiantButton'

// Lazy load Hero3D for better performance
const Hero3D = React.lazy(() => import('../3d/Hero3D'))

export default function HeroPremium() {
  const { ref, controls } = useScrollAnimation()
  const navigate = useNavigate()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Text Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
          className="text-center lg:text-left"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">
              Agence Premium 3D
            </span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              Pixels 3D
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
            }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
          >
            Nous transformons vos idées en{' '}
            <span className="text-emerald-400 font-semibold">expériences 3D</span>{' '}
            immersives qui captivent vos clients et boostent vos conversions.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <RadiantButton
              onClick={() => navigate('/contact')}
              className="text-lg"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </RadiantButton>
            
            <RadiantButton
              onClick={() => navigate('/work')}
              className="text-lg bg-transparent border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white"
              hoverAlpha={0.2}
              hoverRadius={700}
              haloColor="#7c3aed"
            >
              <span>Voir nos réalisations</span>
            </RadiantButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9 } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>50+ projets livrés</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>98% satisfaction client</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>Support technique inclus</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Viewer */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
          }}
          className="h-96 lg:h-[600px] relative"
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center glass rounded-2xl">
                <div className="text-center">
                  <div className="w-12 h-12 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-400">Chargement de l'expérience 3D...</p>
                </div>
              </div>
            }
          >
            <Hero3D className="w-full h-full" />
          </Suspense>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
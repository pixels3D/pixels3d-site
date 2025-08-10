import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import AnimatedCounter from './AnimatedCounter'
import GlowCard from './GlowCard'
import { clients } from '../../data/mockData'

export function SectionMetrics() {
  const { ref, controls } = useScrollAnimation()

  const metrics = [
    {
      icon: TrendingUp,
      value: 340,
      suffix: '%',
      label: 'Augmentation conversions',
      description: 'En moyenne sur nos configurateurs 3D'
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Projets livrés',
      description: 'Depuis notre création en 2019'
    },
    {
      icon: Award,
      value: 98,
      suffix: '%',
      label: 'Satisfaction client',
      description: 'Taux de recommandation'
    },
    {
      icon: Clock,
      value: 48,
      suffix: 'h',
      label: 'Délai de réponse',
      description: 'Pour un devis détaillé'
    }
  ]

  return (
    <section className="section-padding container-padding bg-zinc-950/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4"
          >
            Des résultats qui parlent
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Nos solutions 3D génèrent des impacts mesurables sur le business de nos clients
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
              }}
            >
              <GlowCard className="text-center p-8 h-full">
                <div className="w-16 h-16 mx-auto mb-6 bg-emerald-400/10 rounded-2xl flex items-center justify-center">
                  <metric.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{metric.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionPartners() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section className="section-padding container-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
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

          <GlowCard className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300 group"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto mx-auto opacity-60 group-hover:opacity-100 transition-opacity filter group-hover:brightness-110"
                  />
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  )
}
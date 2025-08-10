import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Settings, Zap, ChevronDown, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import CardGlass from '../components/ui/CardGlass'
import NeonButton from '../components/ui/NeonButton'
import { services, faqs } from '../data/mockData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation()
  const { ref: faqRef, controls: faqControls } = useScrollAnimation()

  const iconMap = {
    Box,
    Settings,
    Zap
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Nos services"
            subtitle="Trois expertises complémentaires pour transformer vos idées en expériences 3D premium qui captivent et convertissent"
            centered
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={servicesRef}
            initial="hidden"
            animate={servicesControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              
              return (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className="h-full"
                >
                  <CardGlass className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 mx-auto mb-6 bg-emerald-400/10 rounded-3xl flex items-center justify-center">
                        <IconComponent className="w-10 h-10 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-8">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        {service.priceRange}
                      </div>
                      <div className="text-sm text-gray-500">
                        Délais : {service.timeline}
                      </div>
                    </div>

                    {/* Scope */}
                    <div className="mb-8 flex-1">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                        Périmètre d'intervention
                      </h4>
                      <ul className="space-y-2">
                        {service.scope.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Box className="w-5 h-5 text-emerald-400 mr-2" />
                        Livrables inclus
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link to="/contact" className="block">
                        <NeonButton className="w-full" icon={ArrowRight}>
                          Demander un devis
                        </NeonButton>
                      </Link>
                    </div>
                  </CardGlass>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Notre processus"
            subtitle="Une approche méthodique en 3 étapes pour garantir le succès de votre projet"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Analyse & Conception",
                description: "Nous analysons vos besoins, définissons les objectifs et créons les maquettes détaillées de votre solution 3D.",
                features: ["Audit technique", "Wireframes 3D", "Prototype interactif", "Validation UX/UI"]
              },
              {
                step: "02", 
                title: "Développement & Intégration",
                description: "Notre équipe développe votre solution avec les technologies les plus avancées, en respectant les standards de performance.",
                features: ["Code optimisé", "Tests continus", "Intégrations API", "Responsive design"]
              },
              {
                step: "03",
                title: "Livraison & Support", 
                description: "Nous livrons votre projet clés en main avec formation, documentation technique et support dédié.",
                features: ["Formation équipes", "Documentation complète", "Support 3 mois", "Maintenance continue"]
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <CardGlass className="p-8 text-center relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-emerald-400 text-black rounded-full flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{process.description}</p>
                    <ul className="space-y-2 text-left">
                      {process.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardGlass>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={faqRef}
            initial="hidden"
            animate={faqControls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="text-center mb-16">
              <HelpCircle className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Questions fréquentes
              </h2>
              <p className="text-xl text-gray-400">
                Retrouvez les réponses aux questions les plus posées par nos clients.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <CardGlass key={index} className="overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-400 transition-transform flex-shrink-0 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardGlass>
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
            <CardGlass className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt à transformer votre vision en réalité 3D ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nos experts vous accompagnent de la conception à la mise en production. 
                Obtenez votre devis personnalisé sous 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/contact">
                  <NeonButton size="lg" icon={ArrowRight}>
                    Obtenir un devis gratuit
                  </NeonButton>
                </Link>
                <Link to="/work">
                  <NeonButton variant="secondary" size="lg">
                    Voir nos réalisations
                  </NeonButton>
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Devis détaillé sous 48h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>3 mois de support inclus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Code source fourni</span>
                </div>
              </div>
            </CardGlass>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
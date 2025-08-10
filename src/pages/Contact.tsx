import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Clock, CheckCircle, Upload, AlertCircle } from 'lucide-react'
import { createLead } from '../lib/supabase'
import GlowCard from '../components/ui/GlowCard'

interface FormData {
  name: string
  email: string
  budget: string
  message: string
  honeypot?: string // Anti-spam field
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const budgetOptions = [
    '< 5 000€',
    '5 000€ - 15 000€',
    '15 000€ - 50 000€',
    '50 000€ - 100 000€',
    '100 000€ - 250 000€',
    '> 250 000€'
  ]

  const onSubmit = async (data: FormData) => {
    // Check honeypot (anti-spam)
    if (data.honeypot) {
      console.log('Spam detected')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      await createLead({
        name: data.name,
        email: data.email,
        budget: data.budget,
        message: data.message
      })
      
      setSubmitStatus('success')
      reset()
    } catch (error: any) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(error.message || 'Une erreur est survenue lors de l\'envoi')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@pixels3d.com',
      href: 'mailto:contact@pixels3d.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 1 23 45 67 89',
      href: 'tel:+33123456789'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: '15 Rue de la Paix, 75001 Paris',
      href: 'https://maps.google.com/?q=15+Rue+de+la+Paix+75001+Paris'
    },
    {
      icon: Clock,
      label: 'Horaires',
      value: 'Lun-Ven 9h-18h',
      href: null
    }
  ]

  const trustIndicators = [
    { label: 'Réponse sous 48h', value: '100%' },
    { label: 'Projets livrés à temps', value: '98%' },
    { label: 'Clients satisfaits', value: '98%' },
    { label: 'Support technique', value: '3 mois' }
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Prêt à transformer votre vision en réalité 3D ? Discutons de votre projet et obtenez un devis personnalisé sous 48h.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlowCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Parlez-nous de votre projet
                </h3>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-lg"
                  >
                    <div className="flex items-center space-x-2 text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Message envoyé avec succès !</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">
                      Nous vous répondrons sous 48h avec un devis détaillé.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-400/10 border border-red-400/20 rounded-lg"
                  >
                    <div className="flex items-center space-x-2 text-red-400">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-medium">Erreur d'envoi</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">
                      {errorMessage}
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field (hidden) */}
                  <input
                    type="text"
                    {...register('honeypot')}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        {...register('name', { 
                          required: 'Le nom est requis',
                          minLength: { value: 2, message: 'Minimum 2 caractères' }
                        })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                        placeholder="Jean Dupont"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'L\'email est requis',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Format d\'email invalide'
                          }
                        })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                        placeholder="jean@entreprise.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget envisagé *
                    </label>
                    <select
                      {...register('budget', { required: 'Veuillez sélectionner un budget' })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez votre budget</option>
                      {budgetOptions.map(option => (
                        <option key={option} value={option} className="bg-gray-900">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-red-400">{errors.budget.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      {...register('message', { 
                        required: 'La description du projet est requise',
                        minLength: { value: 20, message: 'Minimum 20 caractères' }
                      })}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors resize-none"
                      placeholder="Décrivez votre projet, vos objectifs, votre cible, les fonctionnalités souhaitées..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* File Upload (UI only) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Fichiers complémentaires (optionnel)
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-emerald-400/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm mb-1">
                        Glissez vos fichiers ici ou cliquez pour parcourir
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, images, cahier des charges (max 10MB)
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </div>
                    ) : (
                      'Envoyer ma demande'
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez notre{' '}
                    <a href="/legal#privacy" className="text-emerald-400 hover:underline">
                      politique de confidentialité
                    </a>
                  </p>
                </form>
              </GlowCard>
            </motion.div>
          </div>

          {/* Contact Info & Trust */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlowCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-10 h-10 bg-emerald-400/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-white hover:text-emerald-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GlowCard className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Pourquoi nous choisir ?
                </h3>
                <div className="space-y-4">
                  {trustIndicators.map((indicator, index) => (
                    <motion.div
                      key={indicator.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-300 text-sm">{indicator.label}</span>
                      <span className="text-emerald-400 font-semibold">{indicator.value}</span>
                    </motion.div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <GlowCard className="p-6 text-center">
                <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Temps de réponse garanti
                </h3>
                <p className="text-3xl font-bold text-emerald-400 mb-2">48h</p>
                <p className="text-sm text-gray-400">
                  Nous nous engageons à vous répondre avec un devis détaillé sous 48h ouvrées.
                </p>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
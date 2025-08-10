import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import NeonButton from '../components/ui/NeonButton'
import CardGlass from '../components/ui/CardGlass'

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <CardGlass className="p-12">
          <div className="text-9xl font-bold text-emerald-400/20 mb-6">404</div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page introuvable
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée. 
            Peut-être qu'un lien est défectueux ou que l'URL a changé ?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/">
              <NeonButton size="lg" icon={Home}>
                Retour à l'accueil
              </NeonButton>
            </Link>
            <Link to="/work">
              <NeonButton variant="secondary" size="lg" icon={Search}>
                Voir nos projets
              </NeonButton>
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Ou retournez à la page précédente :</p>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors mt-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Page précédente</span>
            </button>
          </div>
        </CardGlass>
      </motion.div>
    </div>
  )
}
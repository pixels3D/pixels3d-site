import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlowCard from '../components/ui/GlowCard'

export default function Legal() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            Informations légales
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Mentions légales, politique de confidentialité et conditions générales d'utilisation
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlowCard className="p-12">
            <div className="text-6xl mb-6">⚖️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Page en construction
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nous finalisons actuellement nos mentions légales et notre politique de confidentialité. 
              Pour toute question juridique, contactez-nous directement.
            </p>
            <Link to="/contact">
              <button className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4">
                <span>Nous contacter</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </GlowCard>
        </div>
      </section>
    </div>
  )
}
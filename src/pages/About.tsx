import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GlowCard from '../components/ui/GlowCard'

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            À propos de nous
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Une équipe passionnée dédiée à transformer vos idées en expériences 3D d'exception
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlowCard className="p-12">
            <div className="text-6xl mb-6">👥</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Page en construction
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nous préparons une présentation complète de notre équipe et de notre histoire. 
              Restez connectés !
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
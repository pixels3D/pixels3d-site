import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Box className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold">Pixels 3D</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Nous transformons vos idées en expériences 3D immersives. 
              Spécialistes en WebGL, configurateurs et imagerie 3D premium.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>15 Rue de la Paix, 75001 Paris</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@pixels3d.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Accueil
              </Link>
              <Link to="/work" className="block text-gray-400 hover:text-white transition-colors">
                Réalisations
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                À propos
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <nav className="space-y-2">
              <Link to="/legal#mentions" className="block text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/legal#privacy" className="block text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link to="/legal#cgu" className="block text-gray-400 hover:text-white transition-colors">
                CGU
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Pixels 3D. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
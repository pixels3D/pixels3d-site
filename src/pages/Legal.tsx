import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Eye, FileText } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import CardGlass from '../components/ui/CardGlass'

export default function Legal() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to section if hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Informations légales"
            subtitle="Mentions légales, politique de confidentialité et conditions générales d'utilisation"
            centered
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#mentions"
            className="flex items-center space-x-2 px-6 py-3 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Mentions légales</span>
          </a>
          <a
            href="#privacy"
            className="flex items-center space-x-2 px-6 py-3 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>Confidentialité</span>
          </a>
          <a
            href="#cgu"
            className="flex items-center space-x-2 px-6 py-3 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20 transition-colors"
          >
            <Shield className="w-4 h-4" />
            <span>CGU</span>
          </a>
        </div>

        {/* Mentions légales */}
        <motion.section
          id="mentions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CardGlass className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Mentions légales</h2>
            </div>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Éditeur du site</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Pixels 3D SAS</strong><br />
                  Capital social : 50 000 €<br />
                  Siège social : 15 Rue de la Paix, 75001 Paris, France<br />
                  RCS Paris 123 456 789<br />
                  SIRET : 123 456 789 00012<br />
                  TVA : FR12 123456789
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Directeur de la publication</h3>
                <p className="text-gray-300">
                  Alexandre Dubois, Président<br />
                  Email : contact@pixels3d.com<br />
                  Téléphone : +33 1 23 45 67 89
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Hébergement</h3>
                <p className="text-gray-300">
                  Ce site est hébergé par Netlify, Inc.<br />
                  2325 3rd Street, Suite 296<br />
                  San Francisco, CA 94107, États-Unis<br />
                  <a href="https://www.netlify.com" className="text-emerald-400 hover:underline">
                    www.netlify.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Propriété intellectuelle</h3>
                <p className="text-gray-300 leading-relaxed">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) 
                  est la propriété exclusive de Pixels 3D SAS, sauf mention contraire. Toute reproduction, 
                  représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                  quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                </p>
              </div>
            </div>
          </CardGlass>
        </motion.section>

        {/* Politique de confidentialité */}
        <motion.section
          id="privacy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CardGlass className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Politique de confidentialité</h2>
            </div>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Collecte des données</h3>
                <p className="text-gray-300 leading-relaxed">
                  Nous collectons les données personnelles que vous nous transmettez volontairement 
                  via nos formulaires de contact : nom, prénom, email, téléphone, entreprise, 
                  et tout autre information que vous choisissez de partager dans vos messages.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Utilisation des données</h3>
                <p className="text-gray-300 leading-relaxed">
                  Vos données personnelles sont utilisées exclusivement pour :
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-3">
                  <li>Répondre à vos demandes et questions</li>
                  <li>Vous faire parvenir des devis personnalisés</li>
                  <li>Assurer le suivi de nos échanges commerciaux</li>
                  <li>Vous informer de nos actualités (avec votre consentement)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Conservation et sécurité</h3>
                <p className="text-gray-300 leading-relaxed">
                  Vos données sont conservées pendant 3 ans maximum à compter du dernier contact. 
                  Elles sont stockées de manière sécurisée sur des serveurs européens (Supabase) 
                  et ne sont jamais transmises à des tiers sans votre consentement explicite.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Vos droits RGPD</h3>
                <p className="text-gray-300 leading-relaxed">
                  Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, 
                  de suppression, de portabilité et d'opposition concernant vos données personnelles. 
                  Pour exercer ces droits, contactez-nous à{' '}
                  <a href="mailto:rgpd@pixels3d.com" className="text-emerald-400 hover:underline">
                    rgpd@pixels3d.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookies</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement 
                  du site. Aucun cookie de tracking ou publicitaire n'est utilisé sans votre consentement.
                </p>
              </div>
            </div>
          </CardGlass>
        </motion.section>

        {/* CGU */}
        <motion.section
          id="cgu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CardGlass className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Conditions générales d'utilisation</h2>
            </div>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Objet</h3>
                <p className="text-gray-300 leading-relaxed">
                  Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation 
                  du site web pixels3d.com édité par Pixels 3D SAS. L'accès et l'utilisation du site 
                  impliquent l'acceptation pleine et entière de ces CGU.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Services proposés</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pixels 3D propose des services de création d'expériences 3D, de développement 
                  d'applications WebGL, et de création de configurateurs web. Les informations 
                  présentes sur le site sont données à titre indicatif et peuvent évoluer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Responsabilité</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pixels 3D s'efforce de fournir des informations exactes et à jour sur son site. 
                  Cependant, nous ne saurions garantir l'exactitude, la complétude et l'actualité 
                  des informations diffusées. L'utilisateur utilise le site sous sa propre responsabilité.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Propriété intellectuelle</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tous les éléments du site (textes, images, sons, vidéos, marques, logos, etc.) 
                  sont protégés par le droit d'auteur et/ou le droit des marques. Toute reproduction, 
                  même partielle, est strictement interdite sans autorisation préalable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Modification des CGU</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pixels 3D se réserve le droit de modifier ces CGU à tout moment. 
                  Les modifications entrent en vigueur dès leur publication sur le site. 
                  Il appartient à l'utilisateur de consulter régulièrement la dernière version.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Droit applicable</h3>
                <p className="text-gray-300 leading-relaxed">
                  Les présentes CGU sont soumises au droit français. En cas de litige, 
                  et après échec d'une solution amiable, compétence est attribuée aux 
                  tribunaux compétents de Paris, France.
                </p>
              </div>
            </div>
          </CardGlass>
        </motion.section>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CardGlass className="p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Questions sur nos mentions légales ?
            </h3>
            <p className="text-gray-400 mb-6">
              Notre équipe est à votre disposition pour toute question concernant 
              nos conditions d'utilisation ou notre politique de confidentialité.
            </p>
            <a
              href="mailto:legal@pixels3d.com"
              className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>legal@pixels3d.com</span>
            </a>
          </CardGlass>
        </motion.div>
      </div>
    </div>
  )
}
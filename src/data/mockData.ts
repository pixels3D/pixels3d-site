export const projects = [
  {
    id: 'luxury-watch-configurator',
    title: 'Configurateur de Montre de Luxe',
    category: 'Configurateur',
    year: '2024',
    client: 'Swiss Time',
    description: 'Configurateur 3D temps réel pour personnaliser montres de luxe',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    video: 'https://player.vimeo.com/video/demo',
    metrics: {
      'Conversion Rate': '+340%',
      'Temps de session': '+280%',
      'Satisfaction': '98%'
    },
    technologies: ['React Three Fiber', 'WebGL', 'TypeScript', 'Tailwind CSS'],
    features: ['Rendu temps réel', 'Export PDF', 'Partage social']
  },
  {
    id: 'automotive-showcase',
    title: 'Showroom Automobile Virtuel',
    category: 'WebGL',
    year: '2024',
    client: 'Premium Motors',
    description: 'Expérience immersive pour découvrir véhicules en 3D',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
    video: 'https://player.vimeo.com/video/demo',
    metrics: {
      'Leads qualifiés': '+250%',
      'Temps passé': '+180%',
      'Taux de rebond': '-45%'
    },
    technologies: ['Three.js', 'GLTF', 'React', 'Node.js'],
    features: ['Vue 360°', 'Configuration couleurs', 'Réalité augmentée']
  },
  {
    id: 'jewelry-catalog',
    title: 'Catalogue Bijouterie 3D',
    category: 'Imagerie 3D',
    year: '2023',
    client: 'Atelier Gold',
    description: 'Rendu photoréaliste de collections de bijoux',
    image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
    video: 'https://player.vimeo.com/video/demo',
    metrics: {
      'Ventes en ligne': '+420%',
      'Retours produits': '-60%',
      'Engagement': '+190%'
    },
    technologies: ['Blender', 'Cycles', 'WebGL', 'Progressive Web App'],
    features: ['Zoom extrême', 'Matériaux PBR', 'Mode AR']
  }
]

export const services = [
  {
    id: 'imagerie-3d',
    title: 'Imagerie 3D',
    description: 'Création de visuels 3D photoréalistes pour vos produits',
    scope: ['Modélisation 3D', 'Rendu photoréaliste', 'Animation produit', 'Optimisation web'],
    deliverables: ['Modèles 3D optimisés', 'Rendus haute résolution', 'Animations MP4/WebM', 'Assets WebGL'],
    timeline: '2-6 semaines',
    priceRange: '2 500€ - 15 000€',
    icon: 'Box'
  },
  {
    id: 'configurateurs',
    title: 'Configurateurs Web',
    description: 'Applications interactives pour personnaliser vos produits en temps réel',
    scope: ['Interface utilisateur', 'Rendu temps réel', 'Configuration avancée', 'Intégration e-commerce'],
    deliverables: ['Application web complète', 'Panel admin', 'API configuration', 'Documentation technique'],
    timeline: '4-12 semaines',
    priceRange: '8 000€ - 50 000€',
    icon: 'Settings'
  },
  {
    id: 'webgl-development',
    title: 'Développement WebGL',
    description: 'Expériences 3D immersives et performantes dans le navigateur',
    scope: ['Architecture 3D', 'Optimisation performances', 'Responsive design', 'Progressive enhancement'],
    deliverables: ['Application WebGL complète', 'Code source documenté', 'Tests de performance', 'Guide de maintenance'],
    timeline: '6-16 semaines',
    priceRange: '12 000€ - 80 000€',
    icon: 'Zap'
  }
]

export const team = [
  {
    name: 'Alexandre Dubois',
    role: 'Directeur Créatif & Fondateur',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: '10 ans d\'expérience en 3D et WebGL. Passionné par l\'innovation visuelle.'
  },
  {
    name: 'Sarah Martin',
    role: 'Développeuse WebGL Senior',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Experte Three.js et React Three Fiber. Architecture de solutions complexes.'
  },
  {
    name: 'Thomas Chen',
    role: 'Artiste 3D & Animateur',
    image: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Spécialiste rendu photoréaliste et animation. Formé aux Gobelins.'
  }
]

export const clients = [
  { name: 'Louis Vuitton', logo: 'https://via.placeholder.com/120x60/ffffff/000000?text=LVMH' },
  { name: 'Rolex', logo: 'https://via.placeholder.com/120x60/ffffff/000000?text=ROLEX' },
  { name: 'Ferrari', logo: 'https://via.placeholder.com/120x60/ffffff/000000?text=FERRARI' },
  { name: 'Cartier', logo: 'https://via.placeholder.com/120x60/ffffff/000000?text=CARTIER' },
  { name: 'Hermès', logo: 'https://via.placeholder.com/120x60/ffffff/000000?text=HERMES' },
  { name: 'Chanel', logo: 'https://via.placeholder.com/120x60/ffffff/000000?text=CHANEL' }
]

export const faqs = [
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Les délais varient selon la complexité du projet : 2-6 semaines pour l\'imagerie 3D, 4-12 semaines pour les configurateurs, 6-16 semaines pour le développement WebGL complet.'
  },
  {
    question: 'Proposez-vous un support technique ?',
    answer: 'Oui, nous incluons 3 mois de support technique gratuit, puis proposons des contrats de maintenance personnalisés.'
  },
  {
    question: 'Travaillez-vous avec tous types d\'entreprises ?',
    answer: 'Nous nous spécialisons dans le luxe, l\'automobile et l\'industrie, mais restons ouverts à tout projet innovant nécessitant de la 3D web de qualité.'
  },
  {
    question: 'Vos solutions sont-elles responsives ?',
    answer: 'Absolument. Toutes nos créations sont optimisées pour mobile, tablette et desktop avec des performances élevées sur tous les appareils.'
  },
  {
    question: 'Puis-je avoir une estimation gratuite ?',
    answer: 'Oui ! Contactez-nous avec votre projet et nous vous fournirons une estimation détaillée sous 48h.'
  }
]
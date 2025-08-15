# Pixels 3D - Site vitrine premium

Site vitrine ultra-épuré pour l'agence Pixels 3D, spécialisée en imagerie 3D, configurateurs web et développement WebGL.

## 🚀 Technologies

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **3D**: React Three Fiber + Drei (WebGL)
- **Routing**: React Router DOM
- **Backend**: Supabase (BaaS)
- **Formulaires**: React Hook Form
- **Déploiement**: Netlify/Vercel

## 📦 Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd pixels-3d

# Installer les dépendances
npm install

# Configurer l'environnement
cp .env.example .env
# Éditer .env avec vos clés Supabase

# Démarrer en développement
npm run dev
```

## 🔧 Configuration

### Variables d'environnement

```bash
# .env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SITE_URL=https://pixels3d.com
```

### Supabase Setup

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Exécuter le script SQL dans `supabase/migrations/create_leads_table.sql`
3. Configurer RLS (Row Level Security) selon les politiques définies
4. Ajouter les clés dans `.env`

## 🏗️ Build & Déploiement

### Build local
```bash
npm run build
npm run preview
```

### Déploiement Netlify
```bash
# Build automatique via Git
# ou manuel :
npm run build
# Upload du dossier dist/
```

### Déploiement Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🧪 Comment tester

### Tests manuels (Checklist)

#### Navigation
- [ ] Logo redirige vers l'accueil
- [ ] Menu desktop fonctionne
- [ ] Menu mobile responsive 
- [ ] Toutes les pages se chargent
- [ ] Liens footer opérationnels
- [ ] 404 pour routes inexistantes

#### Page d'accueil (/)
- [ ] Animation 3D se charge
- [ ] Fallback si WebGL indisponible
- [ ] Hero responsive
- [ ] CTAs fonctionnels
- [ ] Sections défilent smooth

#### Portfolio (/work)
- [ ] Grille projets s'affiche
- [ ] Filtres catégorie/année
- [ ] Hover states cards
- [ ] Navigation vers détails
- [ ] États vides gérés

#### Détail projet (/work/:slug)
- [ ] Données projet correctes
- [ ] Métriques affichées
- [ ] Technologies listées
- [ ] Modal vidéo (placeholder)
- [ ] Bouton retour

#### Services (/services)
- [ ] Cards services
- [ ] Accordéon FAQ
- [ ] Processus étapes
- [ ] CTAs vers contact

#### À propos (/about)
- [ ] Équipe affichée
- [ ] Carousel partenaires
- [ ] Animations scroll
- [ ] Valeurs présentées

#### Contact (/contact)
- [ ] Formulaire validation
- [ ] Upload fichier (UI)
- [ ] Soumission → success/error
- [ ] Honeypot anti-spam
- [ ] Responsive mobile

#### Légal (/legal)
- [ ] Navigation anchors
- [ ] Sections complètes
- [ ] Liens externes

#### Technique
- [ ] Health check `/healthz`
- [ ] SEO meta tags
- [ ] OpenGraph cards
- [ ] Favicon correct
- [ ] Lighthouse > 90/100

### Tests responsive

#### Mobile (< 768px)
- [ ] Menu hamburger
- [ ] Hero adapté
- [ ] Grilles 1 colonne
- [ ] Formulaire stack
- [ ] CTAs centrés

#### Tablet (768-1024px)
- [ ] Grilles 2 colonnes
- [ ] Navigation adaptée
- [ ] Espacement correct

#### Desktop (> 1024px)  
- [ ] Layout complet
- [ ] Animations fluides
- [ ] Hover states
- [ ] Performance optimale

### Tests performance

#### Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms  
- [ ] CLS < 0.1
- [ ] TTFB < 600ms

#### Optimisations
- [ ] Images lazy loading
- [ ] Code splitting routes
- [ ] Bundle analysis
- [ ] 3D assets optimisés

## 📁 Structure du projet

```
src/
├── components/
│   ├── common/          # Layout, Navbar, Footer
│   ├── 3d/             # Composants Three.js
│   └── ui/             # Composants réutilisables
├── pages/              # Pages routes
├── hooks/              # Hooks personnalisés  
├── data/               # Mock data & types
├── lib/                # Utilitaires (Supabase)
└── styles/             # CSS global

public/                 # Assets statiques
supabase/               # Migrations SQL
docs/                   # Documentation (routes.md, api.md)
```

## 🛡️ Sécurité

- **RLS Supabase**: Policies strictes sur `leads`
- **Validation**: React Hook Form + sanitization
- **Honeypot**: Protection anti-spam formulaires
- **HTTPS**: Enforced en production
- **Headers**: Security headers configurés

## 📈 Analytics & Monitoring

- **Health check**: `/healthz` endpoint
- **Error boundaries**: Catch errors React
- **Console logs**: Dev vs prod
- **Performance**: Web Vitals tracking
- **Forms**: Validation errors tracked

## 🔄 Maintenance

### Updates régulières
```bash
npm update
npm audit
```

### Monitoring Supabase
- Logs base de données
- Limites API respectées
- Backups réguliers

### Performance 
- Bundle size analysis
- 3D assets optimization
- Image compression

## 📞 Support

- **Email**: dev@pixels3d.com
- **Documentation**: `docs/` folder
- **Issues**: Suivi via GitHub

---

**Version**: 1.0.0  
**Dernière mise à jour**: 11 janvier 2025

Site prêt pour la production avec toutes les fonctionnalités demandées et une architecture évolutive.
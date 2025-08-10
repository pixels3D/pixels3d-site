# Pixels 3D - Site vitrine premium

Site vitrine ultra-épuré pour l'agence Pixels 3D, spécialisée en imagerie 3D, configurateurs web et développement WebGL. Architecture premium avec React 18, Three.js et animations Framer Motion.

## 🚀 Technologies

- **Frontend**: React 18.3.1 + TypeScript + Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1 + Framer Motion 12.23.12
- **3D**: React Three Fiber 8.18.0 + Drei 9.122.0 + Three.js 0.152.2
- **Routing**: React Router DOM 7.8.0 (BrowserRouter)
- **Backend**: Supabase 2.54.0 (BaaS)
- **Formulaires**: React Hook Form + validation
- **Utils**: clsx, @use-gesture/react 10.2.0
- **Déploiement**: Netlify (--legacy-peer-deps)

## 📦 Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd pixels-3d

# Installer les dépendances
npm install --legacy-peer-deps

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
VITE_SUPABASE_URL=https://iurzditxjpwzkzfdnuql.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SITE_URL=https://pixels3d.netlify.app
```

**IMPORTANT**: Les clés Supabase sont déjà configurées dans `netlify.toml` pour le déploiement automatique.

### Supabase Setup

La base de données est déjà configurée avec la table `leads` :

```sql
-- Table pour les demandes de contact
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  budget text NOT NULL,
  message text NOT NULL,
  file_url text,
  created_at timestamptz DEFAULT now()
);

-- RLS activé avec policies pour insert public et select auth
```

## 🏗️ Build & Déploiement

### Build local
```bash
npm install --legacy-peer-deps
npm run build
npm run preview
```

### Déploiement Netlify
```bash
# Automatique via Git (recommandé)
git push origin main

# Ou déploiement manuel
npm run build --legacy-peer-deps
# Upload du dossier dist/ sur Netlify
```

### Variables d'environnement Netlify
```bash
# Configurées dans netlify.toml
VITE_SUPABASE_URL=https://iurzditxjpwzkzfdnuql.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NODE_VERSION=20
NPM_FLAGS=--legacy-peer-deps
```

## 🧪 Comment tester

### Tests automatisés
```bash
# Lancer les tests (à implémenter)
npm run test

# Vérifier le build
npm run build && npm run preview

# Analyser les performances
npm run lighthouse
```

### Tests manuels

#### Navigation
- [ ] Logo redirige vers l'accueil
- [ ] Menu desktop fonctionne
- [ ] Menu mobile responsive 
- [ ] Toutes les pages se chargent
- [ ] Liens footer opérationnels
- [ ] 404 pour routes inexistantes

#### Page d'accueil (/)
- [ ] **HeroPremium** → Texte animé + 3D à droite
- [ ] **Hero3D** → Bouteille 3D avec transmission material
- [ ] **BackgroundFX** → Étoiles animées + halos flottants
- [ ] **SectionMetrics** → Compteurs animés (340%, 50+, 98%, 48h)
- [ ] **SectionPartners** → Logos clients avec hover effects
- [ ] **Responsive** → Mobile/tablet/desktop
- [ ] **Fallback WebGL** → Message + placeholder si WebGL off

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

#### Contact (/contact)
- [ ] **React Hook Form** → Validation complète
- [ ] **Champs requis** → Nom, email, budget, message
- [ ] **Upload UI** → Drag & drop placeholder
- [ ] **Honeypot** → Protection anti-spam
- [ ] **Supabase** → Insertion dans table leads
- [ ] **États** → Loading, success, error avec messages
- [ ] **Contact info** → Email, téléphone, adresse cliquables
- [ ] **Trust indicators** → Métriques de confiance

#### Technique
- [ ] **Health check** → `/healthz` retourne JSON status
- [ ] **SEO** → Title, description, keywords
- [ ] **OpenGraph** → Facebook/LinkedIn preview
- [ ] **Twitter Cards** → Twitter preview  
- [ ] **Favicon** → favicon.png 32x32
- [ ] **Social image** → pixels3d-social.png 1200x630
- [ ] **Performance** → Lighthouse > 90/100

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
- [ ] **Layout complet** → Toutes fonctionnalités
- [ ] **Animations Framer** → < 400ms, respect prefers-reduced-motion
- [ ] **Hover states** → Cards, boutons, logos
- [ ] **3D performance** → 60fps, orbit controls
- [ ] **Background FX** → Étoiles + halos animés

### Tests performance

#### Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms  
- [ ] CLS < 0.1
- [ ] TTFB < 600ms

#### Optimisations
- [ ] **Lazy loading** → Hero3D avec Suspense
- [ ] **Code splitting** → Routes automatique
- [ ] **Bundle** → Vite optimizations
- [ ] **3D** → Transmission materials optimisés
- [ ] **Animations** → GPU accelerated
- [ ] **Images** → Pexels CDN

## 📁 Structure du projet

```
src/
├── components/
│   ├── common/          # Layout, Navbar, Footer
│   ├── 3d/             # Hero3D (Canvas + Scene)
│   ├── effects/        # BackgroundFX (étoiles + halos)
│   └── ui/             # HeroPremium, GlowCard, AnimatedCounter, Sections
├── pages/              # Pages routes
├── hooks/              # useScrollAnimation
├── data/               # Mock data & types
├── lib/                # Utilitaires (Supabase)
└── index.css           # Tailwind + custom CSS

public/                 # favicon.png, pixels3d-social.png
netlify.toml            # Config déploiement
```

## 🎨 Design System

### Couleurs
- **Primary**: #00ff88 (emerald-400)
- **Secondary**: #ff3366 (pink-500)
- **Accent**: #00ccff (cyan-400)
- **Dark**: #0a0a0a (noir profond)
- **Glass**: white/5 + backdrop-blur

### Composants
- **GlowCard**: Glass morphism + neon glow
- **AnimatedCounter**: Compteurs avec easing
- **HeroPremium**: Hero avec 3D lazy loading
- **BackgroundFX**: Canvas étoiles + halos CSS

### Animations
- **Durée**: < 400ms (respect prefers-reduced-motion)
- **Easing**: easeOut, easeInOut
- **Stagger**: 0.1-0.3s entre éléments
- **Scroll**: useScrollAnimation hook

## 🛡️ Sécurité

- **RLS Supabase**: Insert public, select auth only
- **Validation**: React Hook Form + règles strictes
- **Honeypot**: Champ caché anti-spam
- **Sanitization**: Validation côté client + serveur
- **HTTPS**: Netlify force SSL
- **Headers**: Security headers dans netlify.toml

## 📈 Analytics & Monitoring

- **Health check**: `/healthz` → JSON status + uptime
- **Error handling**: Try/catch + fallbacks 3D
- **Console**: Logs développement
- **Performance**: Core Web Vitals
- **Forms**: États success/error + retry

## 🔄 Maintenance

### Updates régulières
```bash
npm update --legacy-peer-deps
npm audit
npm run build # Vérifier compatibilité
```

### Versions épinglées (CRITICAL)
```json
{
  "@react-three/fiber": "^8.18.0",
  "@react-three/drei": "^9.122.0", 
  "three": "^0.152.2",
  "@use-gesture/react": "^10.2.0",
  "framer-motion": "^12.23.12",
  "react": "^18.3.1"
}
```

### Monitoring Supabase
- **Dashboard**: Supabase logs + métriques
- **Quotas**: API calls monitoring
- **RLS**: Policies leads table
- **Backup**: Automatique Supabase

### Performance 
- **Bundle**: Vite analyzer
- **3D**: Transmission materials + LOD
- **Images**: Pexels CDN + lazy loading
- **Animations**: GPU acceleration

## 🧪 Scripts de test

### Health Check
```bash
curl https://pixels3d.netlify.app/healthz
# Retourne: {"status":"OK","timestamp":"...","version":"1.0.0",...}
```

### Test formulaire
```bash
# Test Supabase connection
curl -X POST https://iurzditxjpwzkzfdnuql.supabase.co/rest/v1/leads \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","budget":"5000€","message":"Test message"}'
```

### Performance
```bash
# Lighthouse CI (à installer)
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage
```

## 📞 Support

- **Email**: contact@pixels3d.com
- **Documentation**: README.md + routes.md + api.md
- **Health**: /healthz endpoint

---

**Version**: 1.0.0  
**Dernière mise à jour**: 11 janvier 2025  
**React**: 18.3.1 (OBLIGATOIRE - ne pas upgrader vers React 19)

✅ **Site prêt pour la production** avec architecture premium, 3D interactive, formulaire Supabase, SEO complet et performances optimisées.
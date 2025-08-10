# Tests Manuels - Checklist Clic-par-Clic

## 🎯 Checklist complète de validation

### 🏠 PAGE D'ACCUEIL (/)

#### Header & Navigation
- [ ] **Logo Pixels 3D** → Clique → Reste sur accueil
- [ ] **Menu "Accueil"** → Active (surligné emerald)
- [ ] **Menu "Réalisations"** → Clique → Redirige `/work`
- [ ] **Menu "Services"** → Clique → Redirige `/services`  
- [ ] **Menu "À propos"** → Clique → Redirige `/about`
- [ ] **Menu "Contact"** → Clique → Redirige `/contact`
- [ ] **Menu mobile** (< 768px) → Hamburger s'ouvre/ferme
- [ ] **Scroll page** → Header devient transparent/opaque

#### Hero Section 3D
- [ ] **Viewer 3D** → Se charge (spinner puis modèle 3D)
- [ ] **Fallback WebGL** → Si WebGL off, affiche message + placeholder
- [ ] **Animation 3D** → Rotation automatique + orbit controls
- [ ] **Bouton "Demander un devis"** → Redirige `/contact`
- [ ] **Bouton "Voir nos réalisations"** → Redirige `/work`
- [ ] **Responsive mobile** → 3D adapté, boutons stackés

#### Sections
- [ ] **Scroll indicator** → Animation haut-bas en boucle
- [ ] **Expertise cards** → Animation apparition au scroll
- [ ] **Cards hover** → Effet survol + translation Y
- [ ] **Études de cas** → 3 projets avec images, hover scale
- [ ] **Clients logos** → 6 logos, grayscale → couleur au hover
- [ ] **CTA final** → Boutons vers contact + portfolio

---

### 💼 PORTFOLIO (/work)

#### Filtres
- [ ] **Filtre "Tous"** → Active par défaut, affiche tous projets
- [ ] **Filtre "Configurateur"** → Clique → Affiche uniquement configurateurs
- [ ] **Filtre "WebGL"** → Clique → Affiche uniquement WebGL
- [ ] **Filtre "Imagerie 3D"** → Clique → Affiche uniquement imagerie
- [ ] **Filtre année "2024"** → Clique → Affiche projets 2024
- [ ] **Filtre année "2023"** → Clique → Affiche projets 2023
- [ ] **Combinaison filtres** → Ex: "Configurateur" + "2024"
- [ ] **Réinitialiser** → Revient à "Tous" + "Toutes"

#### Grille projets
- [ ] **Cards projets** → 3 projets visibles par défaut
- [ ] **Hover card** → Image scale, overlay avec icônes play/link
- [ ] **Clic sur projet** → Redirige `/work/luxury-watch-configurator`
- [ ] **Loading state** → Spinner pendant changement filtre
- [ ] **Empty state** → Message si aucun résultat
- [ ] **Responsive** → 3 cols desktop, 2 cols tablet, 1 col mobile

#### Navigation
- [ ] **Breadcrumb implicite** → URL change selon projet
- [ ] **CTA final** → "Lancer mon projet" → `/contact`

---

### 📋 DÉTAIL PROJET (/work/:slug)

#### Navigation & Header
- [ ] **URL valide** → `/work/luxury-watch-configurator` fonctionne
- [ ] **URL invalide** → `/work/projet-inexistant` → Redirect `/work`
- [ ] **Bouton "Retour aux projets"** → Redirige `/work`
- [ ] **Tags** → Catégorie + année affichés
- [ ] **Boutons "Voir la démo"** → Modal placeholder vidéo
- [ ] **Bouton "Voir en live"** → Alert "lien vers projet live"

#### Contenu
- [ ] **Titre + description** → Données correctes du projet
- [ ] **Image principale** → Hover → Overlay + bouton play
- [ ] **Métriques** → 3 KPIs avec icônes + animations
- [ ] **Technologies** → Liste avec puces emerald
- [ ] **Fonctionnalités** → Liste avec puces emerald
- [ ] **CTA final** → "Discuter de mon projet" → `/contact`

#### Modal vidéo
- [ ] **Clic bouton play** → Modal s'ouvre
- [ ] **Placeholder vidéo** → Message "démo non disponible"
- [ ] **Bouton fermer** → Modal se ferme
- [ ] **Clic background** → Modal se ferme
- [ ] **Escape key** → Modal se ferme

---

### 🛠️ SERVICES (/services)

#### Cards services
- [ ] **3 services** → Imagerie 3D, Configurateurs, WebGL
- [ ] **Prix affichés** → Fourchettes correctes
- [ ] **Délais affichés** → Durées estimées
- [ ] **Périmètre** → Listes à puces avec icônes
- [ ] **Livrables** → Listes détaillées
- [ ] **CTA cards** → "Demander un devis" → `/contact`

#### Processus
- [ ] **3 étapes** → Numérotées avec cards glassmorphism
- [ ] **Animations scroll** → Apparition décalée
- [ ] **Contenus détaillés** → Scope + features par étape

#### FAQ
- [ ] **Questions listées** → 5 FAQs avec accordéon
- [ ] **Clic question** → Accordéon s'ouvre/ferme
- [ ] **Chevron rotation** → Animation 180° ouvert/fermé
- [ ] **Une seule ouverte** → Ferme les autres automatiquement
- [ ] **Responsive** → Stack mobile, grid desktop

---

### 👥 À PROPOS (/about)

#### Histoire
- [ ] **Section histoire** → Card avec texte fondation
- [ ] **Chiffres clés** → 50 projets, 98% satisfaction
- [ ] **Animation apparition** → Au scroll

#### Équipe
- [ ] **3 membres** → Photos + rôles + descriptions
- [ ] **Photos hover** → Scale + overlay emerald
- [ ] **Responsive** → 3 cols → 1 col mobile

#### Valeurs
- [ ] **4 valeurs** → Avec icônes + descriptions
- [ ] **Grid responsive** → 4 → 2 → 1 colonnes
- [ ] **Animations** → Stagger au scroll

#### Processus
- [ ] **3 étapes** → Avec timeline visuelle
- [ ] **Numérotation** → Cercles emerald connectés
- [ ] **Durées** → Badges avec timing

#### Carousel partenaires
- [ ] **6 logos clients** → Affichage par groupes de 3
- [ ] **Bouton précédent** → Navigue groupe précédent
- [ ] **Bouton suivant** → Navigue groupe suivant
- [ ] **Dots indicateurs** → Montrent page active
- [ ] **Clic dot** → Navigation directe
- [ ] **Hover logos** → Grayscale → couleur

---

### 📧 CONTACT (/contact)

#### Formulaire
- [ ] **Champ nom** → Requis, validation min 2 caractères
- [ ] **Champ email** → Requis, validation format email
- [ ] **Select budget** → 6 options + validation requise
- [ ] **Textarea message** → Requis, min 20 caractères
- [ ] **Upload fichier** → UI functional, types acceptés listés

#### Validation
- [ ] **Soumission vide** → Erreurs affichées en rouge
- [ ] **Email invalide** → Message erreur spécifique
- [ ] **Message trop court** → Validation min caractères
- [ ] **Honeypot** → Champ caché pour anti-spam

#### Soumission
- [ ] **Bouton submit** → Loading spinner pendant envoi
- [ ] **Succès** → Message vert + reset formulaire
- [ ] **Erreur** → Message rouge + formulaire conservé
- [ ] **Désactivation** → Bouton disabled pendant envoi

#### Informations contact
- [ ] **Email** → Clic → Ouvre client mail
- [ ] **Téléphone** → Clic → Compose numéro
- [ ] **Adresse** → Clic → Ouvre Google Maps
- [ ] **Temps réponse** → Card avec horaires
- [ ] **Trust indicators** → 4 métriques de confiance

---

### ⚖️ LÉGAL (/legal)

#### Navigation sections
- [ ] **Boutons navigation** → Mentions, Confidentialité, CGU
- [ ] **Ancres URL** → `/legal#mentions`, `/legal#privacy`, `/legal#cgu`
- [ ] **Scroll automatique** → Vers section avec hash URL
- [ ] **Smooth scrolling** → Animation fluide

#### Contenu
- [ ] **Mentions légales** → Société, SIRET, contact
- [ ] **Politique confidentialité** → RGPD, cookies, droits
- [ ] **CGU** → Conditions utilisation, propriété intellectuelle
- [ ] **Contact légal** → Email spécialisé `legal@pixels3d.com`

---

### 🔧 PAGES TECHNIQUES

#### Health Check (/healthz)
- [ ] **URL accessible** → `/healthz` répond
- [ ] **JSON formaté** → Status, timestamp, services
- [ ] **Statut OK** → Tous services opérationnels
- [ ] **Headers** → Content-Type: application/json

#### 404 Page
- [ ] **URL inexistante** → `/page-qui-existe-pas` → 404
- [ ] **Design cohérent** → Style du site maintenu
- [ ] **Navigation** → Boutons "Accueil" et "Projets"
- [ ] **Bouton retour** → Historique navigateur

---

### 📱 RESPONSIVE DESIGN

#### Mobile (< 768px)
- [ ] **Menu hamburger** → S'ouvre/ferme correctement
- [ ] **Hero 3D** → Adapté petite taille
- [ ] **Grilles** → Toutes en 1 colonne
- [ ] **Formulaire** → Champs stackés
- [ ] **CTAs** → Boutons pleine largeur
- [ ] **Textes** → Tailles adaptées, lisibles
- [ ] **Espacements** → Cohérents petits écrans

#### Tablet (768-1024px)
- [ ] **Grilles** → 2 colonnes appropriées
- [ ] **Navigation** → Desktop maintenu
- [ ] **Images** → Proportions correctes
- [ ] **Formulaires** → Mix 1-2 colonnes selon champs

#### Desktop (> 1024px)
- [ ] **Layout complet** → Toutes fonctionnalités
- [ ] **Hover states** → Tous effets actifs
- [ ] **Animations** → Fluides et optimisées
- [ ] **Performance** → Chargement rapide

---

### ⚡ PERFORMANCE & ACCESSIBILITÉ

#### Core Web Vitals
- [ ] **LCP** → < 2.5s (largest contentful paint)
- [ ] **FID** → < 100ms (first input delay)
- [ ] **CLS** → < 0.1 (cumulative layout shift)
- [ ] **Lighthouse** → Score > 90 toutes catégories

#### Accessibilité
- [ ] **Contraste couleurs** → Suffisant tout backgrounds
- [ ] **Navigation clavier** → Tab fonctionnel
- [ ] **Screen readers** → Aria-labels présents
- [ ] **Focus visible** → Contours sur éléments
- [ ] **Alt text** → Images décrites
- [ ] **Headings hierarchy** → H1-H6 logique

#### SEO
- [ ] **Meta tags** → Title, description, keywords
- [ ] **OpenGraph** → Facebook/LinkedIn preview
- [ ] **Twitter Cards** → Twitter preview
- [ ] **Sitemap** → `/sitemap.xml` accessible
- [ ] **Robots** → `/robots.txt` configuré
- [ ] **Favicon** → Icône visible onglet

---

## ✅ Validation finale

### Checklist de livraison
- [ ] Tous les tests ci-dessus passent
- [ ] Aucun lien mort ou bouton non-fonctionnel
- [ ] Toutes les pages chargent correctement
- [ ] Formulaires soumettent avec succès/erreur
- [ ] 3D fonctionne avec fallback
- [ ] Responsive sur tous breakpoints
- [ ] Performance Lighthouse > 90
- [ ] SEO et meta tags configurés
- [ ] Base de données Supabase connectée
- [ ] Variables d'environnement configurées

### Scripts de validation
```bash
# Build production
npm run build

# Test local
npm run preview

# Lighthouse CI
npm run lighthouse

# Test links
npm run test:links
```

**Temps estimé de test complet**: 45-60 minutes  
**Fréquence**: À chaque release majeure + avant déploiement

Site prêt pour la production ! 🚀
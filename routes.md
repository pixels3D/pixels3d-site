# Routes Map - Pixels 3D

## Structure complète des routes

### Pages principales
- `/` - Page d'accueil avec hero 3D, expertises, études de cas, clients
- `/work` - Portfolio avec filtres (catégorie, année) et grille de projets
- `/work/:slug` - Page détail d'un projet avec métriques, technologies, features
- `/services` - Services détaillés, processus, FAQ accordéon
- `/about` - Équipe, histoire, valeurs, processus, carousel partenaires
- `/contact` - Formulaire de contact avec upload, validation, intégration Supabase
- `/legal` - Mentions légales, confidentialité, CGU (sections ancres)

### Pages techniques
- `/healthz` - Endpoint santé JSON (statut services, uptime, version)
- `/404` - Page d'erreur avec navigation retour

### Routes dynamiques
- `/work/:slug` - Détails projet (ex: `/work/luxury-watch-configurator`)
- `/legal#mentions` - Section mentions légales
- `/legal#privacy` - Section confidentialité  
- `/legal#cgu` - Section CGU

## Navigation
- Header sticky avec logo animé
- Menu desktop + hamburger mobile responsive
- Footer avec liens, contact, réseaux
- Breadcrumbs sur pages détail
- Boutons "Retour" contextuels

## États des pages
- Loading states avec spinners
- Empty states avec illustrations
- Error boundaries avec messages
- Success confirmations (formulaires)
- 404 avec suggestions navigation

## Redirections
- Routes invalides → `/404`
- Projets inexistants → `/work` 
- Sections légales inexistantes → `/legal`

Toutes les routes sont fonctionnelles avec composants dédiés et gestion des états.
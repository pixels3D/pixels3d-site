# API Endpoints - Pixels 3D

## Intégration Supabase

### Configuration
- **Base URL**: `VITE_SUPABASE_URL` (à configurer)
- **Anon Key**: `VITE_SUPABASE_ANON_KEY` (à configurer)
- **Client**: `@supabase/supabase-js` singleton

### Endpoints REST

#### POST /rest/v1/leads
**Création d'un lead (formulaire contact)**

```json
// Request body
{
  "name": "Jean Dupont",
  "email": "jean@entreprise.com", 
  "budget": "15 000€ - 50 000€",
  "message": "Description détaillée du projet...",
  "file_url": "optional-file-url.pdf"
}

// Response 201
{
  "id": "uuid",
  "name": "Jean Dupont",
  "email": "jean@entreprise.com",
  "budget": "15 000€ - 50 000€", 
  "message": "Description détaillée du projet...",
  "file_url": "optional-file-url.pdf",
  "created_at": "2025-01-11T10:00:00Z"
}
```

**Headers requis:**
- `Authorization: Bearer ANON_KEY`
- `Content-Type: application/json`
- `apikey: ANON_KEY`

### Sécurité RLS

#### Table `leads`
- **Insert**: Public (formulaire contact)
- **Select**: Authenticated users only (admin)
- **Update/Delete**: Disabled

### Structure base de données

```sql
leads (
  id: uuid PRIMARY KEY,
  name: text NOT NULL,
  email: text NOT NULL,
  budget: text NOT NULL,
  message: text NOT NULL, 
  file_url: text NULL,
  created_at: timestamptz DEFAULT now()
)
```

### Client-side integration

```typescript
import { createLead } from './lib/supabase'

// Usage dans formulaires
try {
  const lead = await createLead({
    name: formData.name,
    email: formData.email,
    budget: formData.budget,
    message: formData.message,
    file_url: uploadedFileUrl
  })
  // Success handling
} catch (error) {
  // Error handling
}
```

### Health Check

#### GET /healthz
**Endpoint de santé**

```json
// Response 200
{
  "status": "OK",
  "timestamp": "2025-01-11T10:00:00Z",
  "version": "1.0.0",
  "uptime": 3600,
  "services": {
    "database": "connected",
    "api": "operational", 
    "cdn": "operational"
  }
}
```

### Fallbacks & Mock Data

En l'absence de vraie configuration Supabase:
- Données mock dans `src/data/mockData.ts`
- Formulaire simule envoi avec délai
- Messages d'erreur appropriés
- Logs en console pour debug

### Variables d'environnement

```bash
# .env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SITE_URL=https://pixels3d.com
```

Toutes les intégrations API sont prêtes pour la production avec gestion d'erreurs complète.
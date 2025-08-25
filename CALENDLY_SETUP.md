# Configuración de Calendly para DNXT

## 🚀 Configuración Rápida

### 1. Crear archivo `.env.local`

Renombra el archivo `env.local.example` a `.env.local` y completa con tus credenciales reales:

```bash
# Calendly Configuration
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-usuario/tu-tipo-de-cita
CALENDLY_API_KEY=tu_api_key_aqui
CALENDLY_USER_URI=tu_user_uri_aqui

# Opcional: Webhook Secret
CALENDLY_WEBHOOK_SECRET=tu_webhook_secret_aqui
```

### 2. Obtener tu URL de Calendly

1. Ve a [calendly.com](https://calendly.com) y inicia sesión
2. Crea un nuevo tipo de evento o usa uno existente
3. Copia la URL del evento (ej: `https://calendly.com/tu-usuario/consulta-diamantes`)
4. Pégala en `NEXT_PUBLIC_CALENDLY_URL`

### 3. Obtener API Key (Opcional)

Para funcionalidades avanzadas:

1. Ve a [Calendly API Keys](https://calendly.com/app/admin/integrations/api-keys)
2. Crea una nueva API key
3. Copia la key y pégala en `CALENDLY_API_KEY`

### 4. Obtener User URI (Opcional)

Para obtener información del usuario:

1. Ve a tu perfil de Calendly
2. Copia tu User URI (ej: `https://api.calendly.com/users/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`)
3. Pégala en `CALENDLY_USER_URI`

## 🔧 Uso del Componente

### Uso Básico

```tsx
import CalendlyButton from '@/components/CalendlyButton';

// Botón primario (por defecto)
<CalendlyButton />

// Botón secundario
<CalendlyButton variant="secondary" />

// Con URL personalizada
<CalendlyButton calendlyUrl="https://calendly.com/tu-usuario/consulta-especial" />
```

### Personalización

```tsx
// Con clases CSS personalizadas
<CalendlyButton 
  className="w-full md:w-auto" 
  variant="primary" 
/>

// Con URL específica para este botón
<CalendlyButton 
  calendlyUrl="https://calendly.com/tu-usuario/consulta-diamantes"
  variant="secondary" 
/>
```

## 🌐 Funcionalidades

### ✅ Implementado
- **Redirección directa**: Abre Calendly en nueva ventana/tab
- **Internacionalización**: Soporte para PT/EN/ES
- **Variantes de estilo**: Primary y Secondary
- **Configuración centralizada**: Variables de entorno
- **Accesibilidad**: aria-label traducido

### 🚧 Futuras Implementaciones
- **Modal integrado**: Calendly dentro de la web
- **Sincronización**: Obtener eventos disponibles
- **Webhooks**: Notificaciones de citas confirmadas
- **Analytics**: Seguimiento de conversiones

## 📱 Responsive Design

El componente se adapta automáticamente a:
- **Mobile**: Botón de ancho completo
- **Tablet**: Botón con padding optimizado
- **Desktop**: Botón con hover effects

## 🔒 Seguridad

- **Variables públicas**: Solo `NEXT_PUBLIC_CALENDLY_URL` es visible en el cliente
- **API Keys**: Las credenciales sensibles están en variables de servidor
- **HTTPS**: Calendly requiere conexiones seguras

## 🎨 Estilos

### Variantes Disponibles

```css
/* Primary (por defecto) */
.bg-gold hover:bg-gold/90 text-dark-dark

/* Secondary */
.bg-transparent hover:bg-white/5 border border-gold/30 hover:border-gold text-white hover:text-gold
```

### Personalización CSS

```css
/* Sobrescribir estilos */
.calendly-button-custom {
  @apply px-12 py-4 text-xl;
}
```

## 🚀 Despliegue

### Netlify
1. Añade las variables de entorno en Settings > Environment Variables
2. Solo `NEXT_PUBLIC_CALENDLY_URL` debe ser pública
3. Las demás variables son privadas

### Vercel
1. Añade las variables en Project Settings > Environment Variables
2. Marca `NEXT_PUBLIC_CALENDLY_URL` como pública
3. Las demás como privadas

## 📞 Soporte

Si tienes problemas:
1. Verifica que la URL de Calendly sea correcta
2. Confirma que las variables de entorno estén configuradas
3. Revisa la consola del navegador para errores
4. Contacta al equipo de desarrollo

---

**Nota**: Este componente está diseñado para ser simple y efectivo. Para funcionalidades avanzadas, considera usar la [API oficial de Calendly](https://developer.calendly.com/). 
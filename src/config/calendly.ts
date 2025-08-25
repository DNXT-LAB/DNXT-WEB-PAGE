// Calendly Configuration
export const CALENDLY_CONFIG = {
  // URL pública de tu Calendly (debe empezar con https://calendly.com/)
  PUBLIC_URL: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-calendly-link',
  
  // API Key para integraciones avanzadas (opcional)
  API_KEY: process.env.CALENDLY_API_KEY,
  
  // User URI para obtener información del usuario (opcional)
  USER_URI: process.env.CALENDLY_USER_URI,
  
  // Webhook secret para verificación (opcional)
  WEBHOOK_SECRET: process.env.CALENDLY_WEBHOOK_SECRET,
  
  // Configuración del modal
  MODAL: {
    width: '100%',
    height: '600px',
    maxWidth: '1024px',
    maxHeight: '700px'
  }
};

// Función para abrir Calendly
export const openCalendly = (url?: string) => {
  const calendlyUrl = url || CALENDLY_CONFIG.PUBLIC_URL;
  
  // Abrir en nueva ventana/tab
  window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
};

// Función para abrir Calendly en modal (para implementaciones futuras)
export const openCalendlyModal = (url?: string) => {
  const calendlyUrl = url || CALENDLY_CONFIG.PUBLIC_URL;
  
  // Aquí se puede implementar la lógica del modal
  // Por ahora, redirige directamente
  openCalendly(calendlyUrl);
};

// Función para obtener eventos disponibles (para implementaciones futuras)
export const getCalendlyEvents = async () => {
  if (!CALENDLY_CONFIG.API_KEY) {
    console.warn('Calendly API key not configured');
    return [];
  }
  
  try {
    // Implementar llamada a la API de Calendly
    // https://developer.calendly.com/api-docs/
    return [];
  } catch (error) {
    console.error('Error fetching Calendly events:', error);
    return [];
  }
}; 
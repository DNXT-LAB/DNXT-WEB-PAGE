"use client"

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageProvider';
import { openCalendly, CALENDLY_CONFIG } from '@/config/calendly';

interface CalendlyButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  calendlyUrl?: string;
}

export default function CalendlyButton({ 
  className = '', 
  variant = 'primary',
  calendlyUrl 
}: CalendlyButtonProps) {
  const { t } = useLanguage();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleCalendlyClick = () => {
    // Usar la función centralizada para abrir Calendly
    openCalendly(calendlyUrl);
  };

  const baseClasses = "px-8 py-3 rounded-lg transition-all duration-300 font-bold text-lg lg:text-xl";
  
  const variantClasses = variant === 'primary' 
    ? "bg-gold hover:bg-gold/90 text-dark-dark" 
    : "bg-transparent hover:bg-white/5 border border-gold/30 hover:border-gold text-white hover:text-gold";

  return (
    <>
      <button
        onClick={handleCalendlyClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
        aria-label={t('cta.book')}
      >
        {t('cta.book')}
      </button>

      {/* Modal de Calendly (opcional - se puede implementar más adelante) */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl h-[600px] bg-white rounded-lg">
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-800 text-2xl"
            >
              ×
            </button>
            <iframe
              src={calendlyUrl || CALENDLY_CONFIG.PUBLIC_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly"
            />
          </div>
        </div>
      )}
    </>
  );
} 
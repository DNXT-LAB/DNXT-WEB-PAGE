"use client"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';

export default function Compete2030() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom">
          {/* Imagen principal */}
          <div className="flex justify-center mb-12">
            <Image 
              src="/images/compete.png" 
              alt="COMPETE 2030 - European Union Initiative" 
              width={1000} 
              height={200}
              className="max-w-full h-auto"
            />
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight font-poppins text-center mb-8 text-gold">
            {t('compete.title')}
          </h2>

          {/* Subtítulo */}
          <h4 className="text-2xl md:text-3xl font-semibold font-poppins mb-6 text-center text-white">
            {t('compete.subtitle')}
          </h4>

          {/* Información del proyecto */}
          <div className="max-w-4xl mx-auto space-y-4 text-gray-300 font-poppins">
            <p><strong>{t('compete.project.designation')}</strong> {t('compete.project.designation.text')}</p>
            
            <p><strong>{t('compete.project.objective')}</strong> {t('compete.project.objective.text')}</p>
            
            <p><strong>{t('compete.project.beneficiary')}</strong> {t('compete.project.beneficiary.text')}</p>
            
            <p><strong>{t('compete.project.code')}</strong> {t('compete.project.code.text')}</p>

            <div className="flex flex-col sm:flex-row lg:gap-2 text-left">
                <span><strong>DNXT COMPETE 2030:</strong></span>
                <a
                href="/Ficha_de_OperacaoA4_COMPETE-2030.pdf"
                download
                className="text-blue-500 underline hover:text-blue-400 transition-colors"
                aria-label={`${t('compete.download')} PDF Dnxt compete 2030`}
                >
                Ficha_de_OperacaoA4_COMPETE-2030
                </a>
            </div>
          </div>

          {/* Detalles financieros */}
          <div className="max-w-4xl mx-auto mt-12">
            <h4 className="text-2xl md:text-3xl font-semibold font-poppins mb-6 text-center text-gold">
              {t('compete.financial.title')}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-300 font-poppins">
                <p><strong>{t('compete.financial.totalCost')}</strong> 834 541,43 €</p>
                <p><strong>{t('compete.financial.eligibleCost')}</strong> 834 541,43 €</p>
              </div>
              <div className="space-y-4 text-gray-300 font-poppins">
                <p><strong>{t('compete.financial.euSupport')}</strong> 634 470,90 €</p>
                <p><strong>{t('compete.financial.euCoFinancing')}</strong> 76%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 
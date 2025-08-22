"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageProvider';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section id="dnxt-token" className="py-24 bg-dark-dark">
          <div className="container-custom">
            <div className="section-heading mt-8" ref={ref}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                {t('services.title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('services.subtitle')}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left column - Platform Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="token-info"
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 hover:text-gold/90 transition-colors duration-300">{t('services.overview')}</h3>
                <p className="text-diamond-dark mb-4">
                  {t('services.overview.text')}
                </p>
                <ul className="mt-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-gold">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-medium">{t('services.precisionCutting')}</span>
                      <p className="text-diamond-dark">{t('services.precisionCutting.desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-gold">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-medium">{t('services.reCutting')}</span>
                      <p className="text-diamond-dark">{t('services.reCutting.desc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-gold">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-medium">{t('services.repair')}</span>
                      <p className="text-diamond-dark">{t('services.repair.desc')}</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Right column - Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="token-benefits"
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 hover:text-gold/90 transition-colors duration-300">{t('services.keyFeatures')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-dark rounded-lg border border-gold/10 hover:border-gold/30 transition-all">
                    <h4 className="text-gold text-lg mb-3">{t('services.forOwners')}</h4>
                    <ul className="text-diamond-dark space-y-2">
                      <li>• {t('services.forOwners.b1')}</li>
                      <li>• {t('services.forOwners.b2')}</li>
                      <li>• {t('services.forOwners.b3')}</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-dark rounded-lg border border-gold/10 hover:border-gold/30 transition-all">
                    <h4 className="text-gold text-lg mb-3">{t('services.forJewelers')}</h4>
                    <ul className="text-diamond-dark space-y-2">
                      <li>• {t('services.forJewelers.b1')}</li>
                      <li>• {t('services.forJewelers.b2')}</li>
                      <li>• {t('services.forJewelers.b3')}</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 py-8 px-6 bg-dark-darker rounded-lg border border-gold/20">
                  <h4 className="text-gold text-lg mb-3">{t('services.whyChoose')}</h4>
                  <ul className="text-diamond-dark space-y-2">
                    <li>• <strong>{t('services.whyChoose.european')}</strong> – {t('services.whyChoose.european.desc')}</li>
                    <li>• <strong>{t('services.whyChoose.technology')}</strong> – {t('services.whyChoose.technology.desc')}</li>
                    <li>• <strong>{t('services.whyChoose.transparency')}</strong> – {t('services.whyChoose.transparency.desc')}</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div className='flex items-center justify-center mt-[100px] lg:mt-[70px]'>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-gold hover:bg-transparent hover:bg-white/5 border border-gold/30 hover:border-gold text-black hover:text-white rounded-lg transition-all duration-300"
              >
                <button className='text-lg lg:text-xl font-bold'>{t('cta.book')}</button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
} 
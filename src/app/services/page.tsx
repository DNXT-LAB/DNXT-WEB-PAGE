"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalendlyButton from '@/components/CalendlyButton';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
                DNXT <span className="text-gold">Services</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                A premium diamond cutting and restoration atelier in Porto, Portugal
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
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 hover:text-gold/90 transition-colors duration-300">Service Overview</h3>
                <p className="text-diamond-dark mb-4">
                  DNXT provides expert diamond cutting, re-cutting, and repair services for clients looking for a trusted and transparent alternative to Antwerp and India. Our atelier combines advanced technology with meticulous craftsmanship to maximize the beauty, brilliance, and value of every diamond.
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
                      <span className="text-white font-medium">Precision Cutting</span>
                      <p className="text-diamond-dark">Transform rough diamonds into polished masterpieces with exceptional proportions, symmetry, and brilliance.</p>
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
                      <span className="text-white font-medium">Re-Cutting & Upgrading</span>
                      <p className="text-diamond-dark">Modernize outdated cuts to enhance light performance, brilliance, and market value</p>
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
                      <span className="text-white font-medium">Diamond Repair</span>
                      <p className="text-diamond-dark">Restore chipped or damaged diamonds without compromising quality, maintaining the highest possible carat retention.</p>
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
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 hover:text-gold/90 transition-colors duration-300">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-dark rounded-lg border border-gold/10 hover:border-gold/30 transition-all">
                    <h4 className="text-gold text-lg mb-3">For Diamond Owners</h4>
                    <ul className="text-diamond-dark space-y-2">
                      <li>• Expert cutting for rough diamonds</li>
                      <li>• Re-cutting to improve old or outdated cuts</li>
                      <li>• Professional repair for damaged stones</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-dark rounded-lg border border-gold/10 hover:border-gold/30 transition-all">
                    <h4 className="text-gold text-lg mb-3">For Jewelers</h4>
                    <ul className="text-diamond-dark space-y-2">
                      <li>• Reliable European-based atelier</li>
                      <li>• Advanced cutting and polishing technology</li>
                      <li>• Personalized handling and secure process</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 py-8 px-6 bg-dark-darker rounded-lg border border-gold/20">
                  <h4 className="text-gold text-lg mb-3">Why Choose DNXT?</h4>
                  <ul className="text-diamond-dark space-y-2">
                    <li>• <strong>European Alternative</strong> – Trusted cutting services in Porto, Portugal</li>
                    <li>• <strong>Cutting-Edge Technology</strong> – Precision tools for superior results</li>
                    <li>• <strong>Full Transparency</strong> – From consultation to delivery, no hidden steps</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            {/* Calendly Button */}
            <div className='flex items-center justify-center mt-[100px] lg:mt-[70px]'>
              <CalendlyButton variant="primary" />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
} 
"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function DnxtToken() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="dnxt-token" className="py-24 bg-dark-dark">
      <div className="container-custom">
        <div className="section-heading" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            DNXT <span className="text-gold">PLATFORM</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A comprehensive digital ecosystem for diamond investment, trading, and asset management
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
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 hover:text-gold/90 transition-colors duration-300">Platform Overview</h3>
            <p className="text-diamond-dark mb-4">
              The DNXT Platform merges cutting-edge blockchain infrastructure with the intrinsic value of tokenized diamonds to deliver a next-generation Real-World Asset (RWA) marketplace. Designed for security, transparency, and scalability, the platform facilitates real-time trading, on-chain asset management, and direct ownership of diamond-backed digital tokens for both retail and institutional participants.
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start">
                <div className="mt-1 mr-3 text-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="text-white font-medium">Secure Trading Environment</span>
                  <p className="text-diamond-dark">Institutional-grade security protocols, on-chain auditability, and real-time verification ensure trustless, transparent, and compliant transactions.</p>
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
                  <span className="text-white font-medium">Market Intelligence</span>
                  <p className="text-diamond-dark">AI-driven analytics and dynamic pricing models offer deep market insights and risk assessment tools, empowering data-informed investment strategies.</p>
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
                <h4 className="text-gold text-lg mb-3">For Investors</h4>
                <ul className="text-diamond-dark space-y-2">
                  <li>• Direct access to fully collateralized RWA tokens</li>
                  <li>• Fractional ownership of physical diamonds</li>
                  <li>• Real-time portfolio valuation and automated rebalancing</li>
                </ul>
              </div>
              <div className="p-6 bg-dark rounded-lg border border-gold/10 hover:border-gold/30 transition-all">
                <h4 className="text-gold text-lg mb-3">For Traders</h4>
                <ul className="text-diamond-dark space-y-2">
                  <li>• Advanced DeFi-style trading infrastructure</li>
                  <li>• On-chain order routing and settlement</li>
                  <li>• Robust liquidity management with tokenized asset pools</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-dark-darker rounded-lg border border-gold/20">
              <h4 className="text-gold text-lg mb-3">Platform Benefits</h4>
              <p className="text-diamond-dark">
                The DNXT Platform redefines diamond investing by enabling the tokenization of authenticated physical assets with verifiable provenance. Through seamless integration with Web3 tools, secure custodial services, and an intuitive trading interface, DNXT empowers users to participate in the RWA economy — making hard assets like diamonds liquid, divisible, and globally accessible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
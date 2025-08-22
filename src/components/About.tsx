"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-dark-dark">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-gold">DNXT</span>
            </motion.h2>
            <p className="text-diamond-dark max-w-3xl mx-auto text-lg">
              Merging cutting-edge manufacturing technology with blockchain integration for the future of diamonds
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Mission Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative p-8 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(202,165,97,0.1)] border border-gold/10 shadow-[0_0_30px_rgba(202,165,97,0.05)] hover:border-gold/20"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-deeper via-[#141414] to-dark-dark"></div>
              
              {/* Geometric Patterns */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,100" stroke="currentColor" strokeWidth="0.1" className="text-gold/20"/>
                    <path d="M100,0 L0,100" stroke="currentColor" strokeWidth="0.1" className="text-gold/20"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-gold to-transparent mr-4"></div>
                  <h3 className="text-2xl font-bold text-gold">Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To revolutionize the diamond industry by building a secure, transparent, and decentralized digital platform that enables the tokenization of real-world diamonds through blockchain, CVC, and ZeroID technologies. Our mission is to democratize access to diamond investment by ensuring traceability, authenticity, and ethical sourcing across the entire value chain.
                </p>
              </div>
            </motion.div>

            {/* Vision Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="group relative p-8 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(202,165,97,0.1)] border border-gold/10 shadow-[0_0_30px_rgba(202,165,97,0.05)] hover:border-gold/20"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-bl from-dark-deeper via-[#141414] to-dark-dark"></div>
              
              {/* Geometric Patterns */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-48 h-48 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rotate-90">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,100" stroke="currentColor" strokeWidth="0.1" className="text-gold/20"/>
                    <path d="M100,0 L0,100" stroke="currentColor" strokeWidth="0.1" className="text-gold/20"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-gold to-transparent mr-4"></div>
                  <h3 className="text-2xl font-bold text-gold">Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To become the global leader in real-world asset (RWA) tokenization, setting a new technological standard in the diamond sector. We aim to reshape how diamonds are valued, traded, and owned by delivering a future-proof, inclusive, and sustainable marketplace that bridges the physical and digital worlds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-dark overflow-hidden">
      {/* Video Background with darker overlay for better text contrast */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Foating Diamond.mp4" type="video/mp4" />
      </video>

      {/* Stronger gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]"></div>

      {/* Content container with increased max-width for bold presence */}
      <div className="container-custom relative z-[10] px-6 lg:px-8">
        <div className="max-w-[90%] mx-auto lg:max-w-[1200px] text-center lg:text-left">
          {/* Headline with increased size and impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.1] tracking-tight mb-8">
              Shaping the <br className="hidden lg:block" />
              <span className="text-gold">Future</span> of <br className="hidden lg:block" />
              Diamonds
            </h1>
            
            <p className="text-[clamp(1.125rem,1.5vw,1.25rem)] text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-12">
            DNXT is revolutionizing the diamond industry through fully automated polishing, RWA tokenization, and blockchain integration.
            </p>

            {/* CTA buttons with updated styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                href="#technology" 
                className="px-8 py-4 bg-gold hover:bg-gold/90 text-dark-dark font-medium rounded-lg transition-all duration-300 text-lg w-full sm:w-auto text-center"
              >
                Our Technology
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-transparent hover:bg-white/5 border border-gold/30 hover:border-gold text-white font-medium rounded-lg transition-all duration-300 text-lg w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-dark to-transparent z-[2]"></div>
    </section>
  );
} 
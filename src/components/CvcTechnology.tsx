"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CvcTechnology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const technologies = [
    {
      number: "01",
      title: "Precision Grading Lab",
      description: "Our advanced laboratory leverages AI-driven tools and expert gemologists to deliver unmatched accuracy in diamond grading, ensuring trust and transparency for investors and collectors."
    },
    {
      number: "02",
      title: "CVC Protocol",
      subtitle: "(Continuous Verifiable Connectivity)",
      description: "This protocol ensures each diamond's identity is permanently verifiable on-chain, enabling tamper-proof traceability from the mine to the metaverse."
    },
    {
      number: "03",
      title: "Digital Twin Engine",
      description: "Each diamond is paired with a unique, metadata-rich digital twin, stored on blockchain to preserve its history, ownership, and certification across digital ecosystems."
    },
    {
      number: "04",
      title: "VaultLink Storage",
      description: "A hybrid custody system that combines biometric-secured physical vaults with smart contract-based access for 24/7 visibility and maximum asset protection."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="technology" className="tech-section py-24 relative overflow-hidden bg-dark-dark">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[100px]"></div>
      </div>

      <div className="container-custom">
        <div className="section-heading" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-gold">Technology</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Cutting-edge solutions designed to revolutionize the diamond industry
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="tech-grid"
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="tech-card"
            >
              <span className="tech-card-number">{tech.number}</span>
              
              <div className="tech-card-header">
                <h3 className="tech-card-title">
                  {tech.title}
                  {tech.subtitle && (
                    <span className="block text-sm text-gold/80 mt-1 font-normal">
                      {tech.subtitle}
                    </span>
                  )}
                </h3>
              </div>
              
              <p className="tech-card-description">{tech.description}</p>
              
              {/* Decorative elements */}
              <div className="tech-card-line"></div>
              <div className="tech-card-line"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
} 
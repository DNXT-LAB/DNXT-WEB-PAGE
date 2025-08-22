"use client"

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const ProcessStep = ({ step, isEven }: { step: any, isEven: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect for video
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  // Text animation variants
  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? 50 : -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Content Container */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
        >
          {/* Text Content */}
          <motion.div 
            className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : ''} px-6 py-12 lg:py-8`}
          >
            <motion.span 
              variants={itemVariants}
              className="text-gold/60 text-sm tracking-wider mb-2 block hover:text-gold transition-colors duration-300"
            >
              STEP {step.number}
            </motion.span>
            
            <motion.h3 
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-bold text-white mb-6 hover:text-gold/90 transition-colors duration-300"
            >
              {step.title}
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg mb-8"
            >
              {step.description}
            </motion.p>
            
            <motion.ul className="space-y-4">
              {step.bulletPoints.map((point: string, index: number) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 group"
                >
                  <span className="text-gold mt-1 group-hover:scale-110 transition-transform duration-300">•</span>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Video */}
          <motion.div 
            className={`flex items-center justify-center ${isEven ? 'lg:order-1' : ''} px-6 py-8 -mt-8`}
            variants={itemVariants}
          >
            <motion.video
              style={{ y: videoY }}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[600px] aspect-video object-contain rounded-[1.5rem] lg:rounded-[2rem] bg-dark-darker shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <source src={
                step.number === 1 ? "/videos/Scanning Process.mp4" :
                step.number === 2 ? "/videos/Laser cutting.mp4" :
                step.number === 3 ? "/videos/Automatic Polishing.mp4" :
                step.number === 4 ? "/videos/Tokenization.mp4" :
                `/videos/step-${step.number}.mp4`
              } type="video/mp4" />
            </motion.video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const steps = [
    {
      number: 1,
      title: "Scanning, Planning, and Mapping with AI Tech",
      description: "High-resolution 3D scanning systems, powered by AI and computer vision, analyze the rough diamond to determine the optimal cut strategy. This maximizes yield, clarity, and value, minimizing human error and material loss.",
      bulletPoints: [
        "AI algorithms simulate thousands of cutting plans in milliseconds",
        "Deep imaging identifies inclusions, strain lines, and growth patterns",
        "Optimization engines prioritize value extraction (carat, cut, clarity)"
      ],
      icon: "/images/scan-diamond.svg"
    },
    {
      number: 2,
      title: "Laser Sawing and Cutting",
      description: "Industrial-grade lasers are used to make precise cuts based on the AI-generated mapping. This stage ensures structural integrity and maximizes potential for ideal light performance in the final product.",
      bulletPoints: [
        "Laser cutting minimizes mechanical stress and breakage",
        "Seamless integration with AI planning for automated execution",
        "Real-time control systems adapt to micro-variations in the material"
      ],
      icon: "/images/cut-diamond.svg"
    },
    {
      number: 3,
      title: "Automatic Polishing with AI-Driven Sensors",
      description: "A robotic polishing arm, guided by real-time sensor feedback and intelligent algorithms, shapes facets with micrometer precision. Machine learning models maintain uniform polishing quality at scale.",
      bulletPoints: [
        "Robotic arms ensure uniform symmetry and angle accuracy",
        "Feedback loops using vibration and torque",
        "Consistency across batches regardless of operator variability"
      ],
      icon: "/images/polish-diamond.svg"
    },
    {
      number: 4,
      title: "Diamond Tokenization",
      description: "Once polished and certified, the diamond is digitized via tokenization. Each stone is linked to a cryptographic token (NFT) with traceable metadata, enabling secure, verifiable ownership and trading.",
      bulletPoints: [
        "Blockchain-backed NFTs store cut, carat, clarity, and provenance data",
        "Integration with IoT for Continuous Verifiable Connectivity (CVC)",
        "Enables liquidity, fractional ownership, and global market access"
      ],
      icon: "/images/redeem-diamond.svg"
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-dark-dark">
      {/* Section Header */}
      <div className="container-custom py-20">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={headerVariants}
            className="text-4xl md:text-5xl font-bold mb-4 hover:scale-[1.02] transition-transform duration-300"
          >
            Manufacturing <span className="text-gold">Process</span>
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-diamond-dark max-w-3xl mx-auto text-lg"
          >
            DNXT integrates precision engineering with IA to deliver diamonds of exceptional quality and verifiable authenticity.
          </motion.p>
        </motion.div>
      </div>

      {/* Process Steps */}
      <div className="relative">
        {steps.map((step, index) => (
          <ProcessStep key={step.number} step={step} isEven={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
} 
"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 border-b border-gold/10 ${
        scrolled 
          ? 'bg-dark-dark/95 backdrop-blur-md py-3' 
          : 'bg-dark-dark/85 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <span className="sr-only">DNXT</span>
              <Image 
                src="/images/DNXT logo sin fondo.png" 
                alt="DNXT Logo" 
                width={48} 
                height={48}
                className="mr-2"
              />
              <span className="text-xl font-bold text-white">DNXT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex flex-row gap-8">
              {[
                { href: '/#home', label: 'Home' },
                { href: '/#about', label: 'About' },
                { href: '/#how-it-works', label: 'Manufacturing Process' },
                { href: '/#dnxt-token', label: 'DNXT PLATFORM' },
                { href: '/services', label: 'Services' },
                { href: '/compete2030', label: 'COMPETE 2030' },
                { href: '/contact', label: 'Contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white hover:text-gold text-sm uppercase font-medium tracking-wide py-2 transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Overlay */}
          <nav 
            className={`
              lg:hidden
              ${menuOpen 
                ? 'block fixed inset-0 w-full h-screen right-0 bg-gradient-to-b from-black/95 via-black/95 to-black/80 backdrop-blur-[40px] backdrop-saturate-200 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] z-[9999] overflow-y-auto border-l border-white/10' 
                : 'hidden'
              }
            `}
          >
            {/* Mobile nav header with logo and close button */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/20">
              <Link href="/" className="flex items-center">
                <div className="flex items-center">
                  <span className="sr-only">DNXT</span>
                  <Image 
                    src="/images/DNXT logo sin fondo.png" 
                    alt="DNXT Logo" 
                    width={48} 
                    height={48}
                    className="mr-2"
                  />
                  <span className="text-xl font-bold text-white">DNXT</span>
                </div>
              </Link>
              <button 
                onClick={() => setMenuOpen(false)}
                className="text-white p-2 hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <div className="w-7 flex flex-col justify-between h-[21px]">
                  <span className="block h-0.5 bg-current rotate-45 translate-y-[9.5px]"></span>
                  <span className="block h-0.5 bg-current opacity-0"></span>
                  <span className="block h-0.5 bg-current -rotate-45 -translate-y-[9.5px]"></span>
                </div>
              </button>
            </div>

            {/* Mobile nav links */}
            <ul className="flex flex-col gap-0 mt-8">
              {[
                { href: '/#home', label: 'Home' },
                { href: '/#about', label: 'About' },
                { href: '/#how-it-works', label: 'Manufacturing Process' },
                { href: '/#dnxt-token', label: 'DNXT PLATFORM' },
                { href: '/services', label: 'Services' },
                { href: '/compete2030', label: 'COMPETE 2030' },
                { href: '/contact', label: 'Contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white hover:text-gold text-sm uppercase font-medium tracking-wide py-4 px-6 block transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className={`lg:hidden relative z-50 p-2 ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-7 flex flex-col justify-between h-[21px]">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[9.5px]' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9.5px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
} 
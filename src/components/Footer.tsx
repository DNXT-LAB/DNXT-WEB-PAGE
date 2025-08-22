"use client"

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark-dark text-white  pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="w-full md:col-span-1">
            <div className="flex items-center mb-6">
              <Image 
                src="/images/DNXT logo sin fondo.png" 
                alt="DNXT Logo" 
                width={56} 
                height={56}
                className="mr-3"
              />
              <span className="text-sm uppercase font-medium tracking-wide text-white">
                DNXT
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
              <h3 className="text-gold font-medium mb-4">Socials</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://x.com/DiamondNxt1" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-gold transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/dnxtio/posts/?feedView=all" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-gold transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/diamondnxt/" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-gold transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gold font-medium mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#how-it-works" className="text-gray-400 hover:text-gold transition-colors">
                    Manufacturing Process
                  </Link>
                </li>
                <li>
                  <Link href="/#technology" className="text-gray-400 hover:text-gold transition-colors">
                    Our Technology
                  </Link>
                </li>
                <li>
                  <Link href="/#dnxt-token" className="text-gray-400 hover:text-gold transition-colors">
                    DNXT Platform
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:col-span-1">
            <h3 className="text-gold font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-400">
                  Rua dos Três Lagares, Antiga Praça Municipal do Fundão,<br />
                  Incubadora A Praça, 6230-421 Fundão, Portugal.
                </span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-gray-400">+351 925 287 726</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-gray-400">info@diamondnxt.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row md:justify-between items-start gap-6 md:gap-0">
        <Image
                src="/images/funds.png"
                alt="Founds"
                width={400}
                height={400}
                className="object-cover"
              />
            <div className="text-gray-500 text-sm mt-2 ml-4">
              &copy;{new Date().getFullYear()} DNXT. All rights reserved.
            </div>
          <div className="flex items-start justify-start gap-3 md:mb-5 ml-4">
            <Link href="/privacy" className="text-gray-500 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 
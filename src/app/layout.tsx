import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'DNXT | Tokenized Diamond Investment Platform',
  description: 'DNXT is a premier platform for tokenized diamond investment, bringing together blockchain technology and traditional diamond assets.',
  keywords: 'diamond investment, tokenized assets, blockchain, NFT, diamond trading, CVC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        
        <Script id="animation-observer" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Set up the Intersection Observer
              const fadeElements = document.querySelectorAll('.fade-in, .stagger-fade-in');
              
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                  }
                });
              }, {
                threshold: 0.1
              });
              
              fadeElements.forEach(element => {
                observer.observe(element);
              });
              
              // Subtle parallax effect for elements with .parallax class
              const parallaxElements = document.querySelectorAll('.parallax');
              
              window.addEventListener('scroll', function() {
                parallaxElements.forEach(element => {
                  const scrollPosition = window.pageYOffset;
                  const elementPosition = element.getBoundingClientRect().top + scrollPosition;
                  const distance = (scrollPosition - elementPosition) * 0.1;
                  
                  if (scrollPosition > elementPosition - window.innerHeight && 
                      scrollPosition < elementPosition + element.offsetHeight) {
                    element.style.transform = \`translateY(\${distance}px)\`;
                  }
                });
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
} 
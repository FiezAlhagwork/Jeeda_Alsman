/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import StaggeredMenu from "./components/StaggeredMenu";
import Services from "./components/Services";
import InfiniteTicker from "./components/InfiniteTicker";
import Process from "./components/Process";
import Pricing from "./components/Pricing";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Services', ariaLabel: 'View our services', link: '#services' },
  { label: 'Process', ariaLabel: 'Our process', link: '#process' },
  { label: 'Pricing', ariaLabel: 'Our pricing', link: '#pricing' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={['#000000', '#a51223']}
        logoText="JEDDA"
        accentColor="#a51223"
        isFixed={true}
      />
      <Hero />
      <Services />
      <InfiniteTicker />
      <Process />
      <Pricing />
      
    
      <footer className="py-24 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h2 className="text-6xl font-black mb-8">JEDDA</h2>
            <p className="text-white/50 max-w-xs">
              Crafting digital experiences that blend high-fashion aesthetics with technical precision.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-white/30">Social</span>
              <a href="#" className="hover:text-white/70 transition-colors">Instagram</a>
              <a href="#" className="hover:text-white/70 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white/70 transition-colors">Twitter</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-white/30">Contact</span>
              <a href="mailto:hello@reem.com" className="hover:text-white/70 transition-colors">hello@reem.com</a>
              <a href="#" className="hover:text-white/70 transition-colors">Book a Call</a>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between text-xs text-white/20 uppercase tracking-widest">
          <span>© 2026 Jedda Portfolio</span>
          <span>Built with AI Studio</span>
        </div>
      </footer>
    </main>
  );
}

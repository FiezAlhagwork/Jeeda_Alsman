import { useEffect, useRef } from "react";
import gsap from "gsap";

interface JeedaLoaderProps {
  onComplete: () => void;
  key?: string | number;
}

export default function JeedaLoader({ onComplete }: JeedaLoaderProps) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Final fade out of the entire loader
          gsap.to(scope.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: onComplete
          });
        }
      });

      // Initial state: paths are visible but stroke is hidden
      // We use a large strokeDasharray to ensure we can hide the entire path
      gsap.set(".jeeda-path", { 
        strokeDasharray: 1000, 
        strokeDashoffset: 1000,
        fill: "transparent",
        stroke: "#a1a1a1" // Initial gray color
      });

      // 1. Draw the paths with the red color
      tl.to(".jeeda-path", {
        strokeDashoffset: 0,
        duration: 2.5,
        stroke: "#a51223", // Brand red
        ease: "power3.inOut",
        stagger: 0.2
      })
      // 2. Fill the letters with red
      .to(".jeeda-path", {
        fill: "#a51223",
        duration: 0.8,
        ease: "power2.inOut",
      }, "-=1")
      // 3. Glow and pulse effect
      .fromTo(".glow-layer", 
        { opacity: 0, scale: 0.8 },
        { opacity: 0.5, scale: 1.2, duration: 1.5, repeat: 1, yoyo: true, ease: "sine.inOut" },
        "-=0.5"
      );
    }, scope);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={scope} 
      className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-[9999]"
      role="status"
      aria-live="polite"
      aria-label="Loading Jeeda experience"
    >
      <div className="relative flex flex-col items-center">
        {/* Glow Layer */}
        <div className="glow-layer absolute inset-0 blur-3xl bg-[#a51223]/30 rounded-full scale-150 opacity-0" />
        
        <svg 
          width="400" 
          height="120" 
          viewBox="0 0 500 150" 
          className="relative z-10 drop-shadow-[0_0_30px_rgba(165,18,35,0.6)]"
        >
          {/* J */}
          <path 
            className="jeeda-path stroke-[4px] fill-none" 
            d="M80,30 L80,100 Q80,130 50,130" 
          />
          {/* e */}
          <path 
            className="jeeda-path stroke-[4px] fill-none" 
            d="M160,100 Q160,70 130,70 Q100,70 100,100 Q100,130 130,130 Q160,130 160,110 M100,100 L160,100" 
          />
          {/* e */}
          <path 
            className="jeeda-path stroke-[4px] fill-none" 
            d="M240,100 Q240,70 210,70 Q180,70 180,100 Q180,130 210,130 Q240,130 240,110 M180,100 L240,100" 
          />
          {/* d */}
          <path 
            className="jeeda-path stroke-[4px] fill-none" 
            d="M320,130 Q290,130 290,100 Q290,70 320,70 Q350,70 350,100 L350,30 L350,130" 
          />
          {/* a */}
          <path 
            className="jeeda-path stroke-[4px] fill-none" 
            d="M430,130 L430,70 Q430,70 420,70 Q390,70 390,100 Q390,130 420,130 Q430,130 430,130 L430,100" 
          />
        </svg>

        {/* Loading Text */}
        <div className="mt-8 overflow-hidden">
          <span className="block text-[#a1a1a1] text-[10px] uppercase tracking-[0.4em] font-medium animate-pulse">
            Initializing Experience
          </span>
        </div>
      </div>
    </div>
  );
}

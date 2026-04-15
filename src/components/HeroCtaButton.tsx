import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { animateWithGsap } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);

type HeroCtaButtonProps = {
  label?: string;
};

export default function HeroCtaButton({ label = "Start Your Project" }: HeroCtaButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    if (!btnRef.current) return;
    animateWithGsap(
      btnRef.current,
      { opacity: 1, y: 0, duration: 0.7, delay: 0.7, ease: "power3.out" },
      { start: "top 85%", },
    );
  }, []);

  return (
    <button
      type="button"
      ref={btnRef}
      onMouseEnter={() => btnRef.current && gsap.to(btnRef.current, { scale: 1.02, duration: 0.2, ease: "power2.out" })}
      onMouseLeave={() => btnRef.current && gsap.to(btnRef.current, { scale: 1, duration: 0.2, ease: "power2.out" })}
      onMouseDown={() => btnRef.current && gsap.to(btnRef.current, { scale: 0.98, duration: 0.1, ease: "power2.out" })}
      onMouseUp={() => btnRef.current && gsap.to(btnRef.current, { scale: 1.02, duration: 0.1, ease: "power2.out" })}
      className="group flex items-center gap-6 px-3 py-2 border-2 border-white rounded-full bg-white/5 backdrop-blur-sm hover:bg-white hover:text-obsidian transition-colors duration-200 opacity-0 translate-y-16"
    >
      <span className="text-md font-medium">{label}</span>
      <div className="w-7 h-7 rounded-full bg-white group-hover:bg-obsidian/10 text-black flex items-center justify-center transition-colors duration-200">
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </button>
  );
}

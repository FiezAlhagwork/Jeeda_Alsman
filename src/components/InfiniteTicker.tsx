import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Layout,
  MessageSquare,
  Search,
  Zap,
  Figma,
  Smartphone
} from "lucide-react";

const skills = [
  { label: "Website Design", icon: Layout },
  { label: "Custom Code", icon: Code2 },
  { label: "SEO Optimization", icon: Search },
  { label: "AI Automations", icon: Cpu },
  { label: "UI/UX Design", icon: Figma },
  { label: "Mobile Responsive", icon: Smartphone },
  { label: "WhatsApp Bots", icon: MessageSquare },
  { label: "Performance", icon: Zap },
  { label: "Digital Strategy", icon: Globe },
  { label: "Webflow Expert", icon: Layers },
];

export default function InfiniteTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    // Create the infinite loop animation
    const animation = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 10,
      ease: "none",
    });

    // Pause/Resume on viewport entry/exit
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animation.play();
        } else {
          animation.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (tickerRef.current) {
      observer.observe(tickerRef.current);
    }

    // Interactive behavior: slow down on hover
    const handleMouseEnter = () => {
      gsap.to(animation, { timeScale: 0.2, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(animation, { timeScale: 1, duration: 0.5 });
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animation.kill();
      observer.disconnect();
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate skills for seamless looping
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full bg-[#0A0A0A] pb-8  ">
      <div
        ref={tickerRef}
        className="relative max-w-7xl mx-auto px-10 md:px-20  overflow-hidden  "
      >
        {/* Masking Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-4 whitespace-nowrap will-change-transform "
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-5 py-4 rounded-full bg-[#111111] border border-white/5 select-none"
            >
              <skill.icon className="w-4 h-4 text-[#A1A1AA] " />
              <span className="text-md font-medium text-[#FFFFFF99] tracking-tight">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

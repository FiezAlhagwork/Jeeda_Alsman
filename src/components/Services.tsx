import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Smartphone, Compass, Bot, ArrowUpRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useGSAP } from "@gsap/react";
import HeroCtaButton from "./HeroCtaButton";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Design & Development",
    description: "Get a unique website built by a hybrid designer-developer. I combine modern aesthetics with robust coding and advanced SEO to create a fast, sales-focused digital experience.",
    icon: Layout,
  },
  {
    title: "UI/UX Design",
    description: "Elevate your user experience. I design intuitive, high-converting interfaces for web and mobile apps that strengthen your brand value.",
    icon: Smartphone,
  },
  {
    title: "Strategic Consultations",
    description: "Get clarity on your next digital move. Whether it's a website audit, a redesign roadmap, or brainstorming custom AI workflows, I provide actionable insights tailored to your goals.",
    icon: Compass,
  },
  {
    title: "AI Automations",
    description: "Streamline your operations. I build custom AI chatbots and smart n8n workflows to automate your marketing and repetitive tasks.",
    icon: Bot,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%",
        },
      });

      // Button animation
      gsap.from(buttonRef.current, {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      });

      // Cards animation
      gsap.from(".service-card", {
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2
            ref={headerRef}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-2xl"
          >
            How I Can Help Your Business
          </h2>
          <HeroCtaButton label="Get in Touch" />
        </div>

        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

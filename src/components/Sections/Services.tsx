import { useRef } from "react";
import { gsap } from "gsap";
import ServiceCard from "../ui/ServiceCard";
import { useGSAP } from "@gsap/react";
import Button from "../ui/Button";
import { animateFromToWithGsap, animateWithGsapForm } from "../../utils/animations";
import { services } from "@/src/data";


export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    animateWithGsapForm(headerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out"
    }, { start: "top 85%", },);

    // Button animation
    animateWithGsapForm(buttonRef.current, {
      opacity: 0,
      x: 30,
      duration: 1,
      ease: "power3.out"
    },
      {
        start: "top 75%",
      },
    );

    const cards = cardsContainerRef.current?.children;
    if (!cards) return;

    const elements = Array.from(cards) as HTMLElement[];

    animateFromToWithGsap(
      elements,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        stagger: 0.4,
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2
            ref={headerRef}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-2xl"
          >
            How I Can Help Your Business
          </h2>
          <Button label="Get in Touch" />
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

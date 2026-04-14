import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Palette, Rocket, CheckCircle2, Heart } from "lucide-react";
import ProcessStepCard from "./ProcessStepCard";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "Step 1",
    title: "Get in Touch",
    description:
      "Reach out through our contact page. Fill out the form or book a call to discuss your project, goals, and needs in even greater detail.",
    icon: MessageSquare,
  },
  {
    number: "Step 2",
    title: "Grab Your Designs",
    description:
      "Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals and bring your ideas to life seamlessly.",
    icon: Palette,
  },
  {
    number: "Step 3",
    title: "Kickstart Development",
    description:
      "I expertly transform your designs into a powerful, scalable solution, fully ready to launch and optimized for performance, usability, and growth.",
    icon: Rocket,
  },
  {
    number: "Step 4",
    title: "Launch & Support",
    description:
      "And finally, we launch! I'll be there to ensure everything runs smoothly and provide ongoing support as your business grows.",
    icon: CheckCircle2,
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const pinWrapper = pinWrapperRef.current;
      const track = cardsTrackRef.current;
      const container = cardsContainerRef.current;
      const titleEl = titleRef.current;
      const pillEl = pillRef.current;

      if (!pinWrapper || !track || !container) return () => { };

      const ctx = gsap.context(() => {
        if (titleEl) {
          gsap.from(titleEl, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleEl,
              start: "top 85%",
            },
          });
        }

        const getScrollDistance = () =>
          Math.max(0, track.scrollWidth - container.clientWidth);

        gsap.set(track, { x: 0 });

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pinWrapper,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        if (pillEl) {
          gsap.to(pillEl, {
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
          });
        }
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-6 md:pb-0">
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter">
            Process is Everything
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Simple, streamlined process is what gets you results
          </p>
        </div>
      </div>

      {/* Wrapper: ScrollTrigger pin target (desktop / tablet only via matchMedia) */}
      <div
        ref={pinWrapperRef}
        className="relative w-full md:flex md:items-start py-16"
      >
        {/* Container: clips horizontal overflow on larger screens */}
        <div
          ref={cardsContainerRef}
          className="w-full overflow-visible md:overflow-hidden"
        >
          <div
            ref={cardsTrackRef}
            className="flex flex-col gap-6 px-6 md:px-10 md:flex-row md:flex-nowrap md:w-max md:gap-8"
          >
            {steps.map((step, index) => (
              <ProcessStepCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10 pt-12 flex justify-center">
        <div
          ref={pillRef}
          className="inline-flex flex-col items-center gap-2 px-16 py-4 rounded-2xl bg-[#111111] border-t border-[#1F2937] text-center"
        >
          <div className="flex items-center gap-2 text-xl font-medium">
            <Heart className="w-5 h-5 text-white" aria-hidden />
            <span>I am with you in every step</span>
          </div>
          <span className="text-sm text-zinc-500">
            alongside you at each step for seamless experience
          </span>
        </div>
      </div>
    </section>
  );
}

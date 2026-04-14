import { useRef } from "react";
import { gsap } from "gsap";
import HeroCtaButton from "./HeroCtaButton";
import { useGSAP } from "@gsap/react";
import { animateWithGsap, animateWithGsapForm } from "../utils/animations";



export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the massive background text
      animateWithGsap(textRef.current, { y: -50 }, { start: "top 85%", end: "bottom top", scrub: 1.5 });
      animateWithGsap(imageRef.current, { scale: 1.15  }, { start: "top 85%", end: "bottom top", scrub: 1.5 });

      // Text reveal animation
      if (descriptionRef.current) {
        const text = descriptionRef.current.innerText;
        descriptionRef.current.innerHTML = text
          .split(" ")
          .map(word => `<span class="inline-block overflow-hidden"><span class="word inline-block">${word}</span></span>`)
          .join(" ");

        animateWithGsapForm(".word", {
          y: "100%",
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
          delay: 0.5,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-start px-8 md:px-[8%] overflow-hidden"
    >
      {/* Background Image Container */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0"
      >


        <div className=" absolute inset-0 z-10 " />
        <div className=" absolute inset-0 z-10 " />
        <img
          src="/photo_2026-04-09_19-20-03.jpg"
          alt="jeeda Portrait"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[222px] md:max-w-sm  max-lg:mt-40">
        <p
          ref={descriptionRef}
          className="text-md md:text-xl font-medium text-white leading-[1.2] mb-4 text-balance "
        >
          I design and build high converting websites and save your time with AI automations
        </p>

        <HeroCtaButton  />
      </div>

      {/* Massive Background Text */}

      <h1
        ref={textRef}
        className="absolute bottom-0  left-1/2 -translate-x-1/2 md:text-[17vw] sm:text-[35vw] text-[30vw] font-black leading-none text-white/90 select-none z-30 pointer-events-none tracking-tighter whitespace-nowrap"
      >
        Jeeda
      </h1>


    </section>
  );
}

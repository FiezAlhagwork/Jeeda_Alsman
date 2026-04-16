import { useRef } from "react";
import Button from "../ui/Button";
import { useGSAP } from "@gsap/react";
import { animateWithGsap, animateWithGsapForm } from "../../utils/animations";




export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    animateWithGsap(textRef.current, { y: -50 }, { start: "top 85%", end: "bottom top", scrub: 2 });
    animateWithGsap(imageRef.current, { scale: 1.15 }, { start: "top 85%", end: "bottom top", scrub: 2 });
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
  }, { scope: containerRef });

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
        <img
          src="/photo_2026-04-09_19-20-03.jpg"
          alt="jeeda Portrait"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          width="1920"
          height="1080"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[222px] md:max-w-sm  max-lg:mt-40">
        <p
          ref={descriptionRef}
          className="text-md md:text-xl font-medium text-white leading-[1.2] mb-4 text-balance "
        >
          I design and craft stunning visuals and boost your brand with creative graphic design        </p>

        <Button />
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

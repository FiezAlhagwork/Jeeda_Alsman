
import { useRef } from "react";
import { gsap } from "gsap";
import Button from "../ui/Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // 1. صورة الخلفية - parallax
    gsap.to(
      imageRef.current,
      {
        scale: 1.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      }
    );

    if (descriptionRef.current) {
      gsap.from(descriptionRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        stagger: 0,
        ease: "power4.out",
        delay: 0.3,

      });
    }

    // 3. Jeeda - scale من 0 لـ 1 عند فتح الصفحة
    gsap.from(textRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.3
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-start px-8 md:px-[8%] overflow-hidden"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <img
          src="/photo_2026-04-16_12-33-37.jpg"
          alt="jeeda Portrait"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          width="1920"
          height="1080"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[222px] md:max-w-sm max-lg:mt-40">
        <p
          ref={descriptionRef}
          className="text-md md:text-xl font-medium text-white leading-[1.2] mb-4 text-balance"
        >
          I design and craft stunning visuals and boost your brand with creative graphic design
        </p>
        <Button />
      </div>

      {/* Massive Background Text */}
      <h1
        ref={textRef}
        style={{ transformOrigin: "center bottom" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 md:text-[17vw] sm:text-[35vw] text-[30vw] font-black leading-none text-white/90 select-none z-30 pointer-events-none tracking-tighter whitespace-nowrap will-change-transform"
      >
        Jeeda
      </h1>
    </section>
  );
}

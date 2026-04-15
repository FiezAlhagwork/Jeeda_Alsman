import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useGSAP } from "@gsap/react";
import { clientsData } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Cards Animation
      gsap.from(".category-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".categories-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="categories" className="py-32 px-6 md:px-10 bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Projects
          </h2>
          <p className="text-zinc-400  text-lg md:text-xl  leading-relaxed">
            Explore my work by category. Each project is a unique blend of strategy,
            creativity, and technical excellence.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid grid grid-cols-1 lg:grid-cols-2  gap-8 lg:gap-12">
          {clientsData.map((category) => (
            <Link
              key={category.id}
              to={`/projects/${category.id}`}
              className="category-card group relative aspect-4/5 md:aspect-16/10 overflow-hidden rounded-[32px] bg-zinc-900 cursor-pointer"
            >
              {/* Composite Image Preview */}
              <div className="absolute inset-0 p-8 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                  {category.type === "branding" && (
                    <div className="relative w-full h-full">
                      <img src={category.previewImages[0]} className="absolute top-0 left-0 md:w-1/2 w-3/4   h-full object-cover rounded-2xl shadow-2xl z-10" alt="" referrerPolicy="no-referrer" />
                      <img src={category.previewImages[1]} className="absolute top-4 md:right-8 -right-6 md:w-[50%] md:h-[70%] w-1/2 h-1/2 object-cover rounded-2xl shadow-2xl z-20 border-4 border-zinc-900" alt="" referrerPolicy="no-referrer" />
                      <img src={category.previewImages[2]} className="absolute md:-bottom-15 bottom-4 right-2 w-1/3 md:h-[60%] h-[40%] object-cover rounded-2xl shadow-2xl z-30 border-4 border-zinc-900" alt="" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  {category.type === "social" && (
                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                      {category.previewImages.map((img, i) => (
                        <img key={i} src={img} className="w-full h-full object-cover rounded-2xl shadow-xl" alt="" referrerPolicy="no-referrer" />
                      ))}
                    </div>
                  )}
                  {category.type === "logos" && (
                    <div className="grid grid-cols-3 gap-4 w-full h-full">
                      {category.previewImages.map((img, i) => (
                        <div key={i} className="bg-zinc-800 rounded-2xl flex items-center justify-center p-4 shadow-lg">
                          <img src={img} className="w-full h-full object-contain mix-blend-lighten opacity-80" alt="" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                  )}
                  {category.type === "posters" && (
                    <div className="relative w-full h-full flex items-center justify-center gap-6">
                      <img src={category.previewImages[0]} className="w-[60%] md:h-full  h-[60%] object-cover rounded-2xl shadow-2xl -rotate-6 transform translate-x-4" alt="" referrerPolicy="no-referrer" />
                      <img src={category.previewImages[1]} className="w-[60%] md:h-full  h-[60%] object-cover rounded-2xl shadow-2xl rotate-6 transform -translate-x-4" alt="" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  {(category.type === "uiux" || category.type === "motion") && (
                    <div className="grid grid-cols-1 gap-4 w-full h-full">
                      {category.previewImages.map((img, i) => (
                        <img key={i} src={img} className="w-full h-full object-cover rounded-2xl shadow-xl" alt="" referrerPolicy="no-referrer" />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-40">
                <div className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Projects <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Info Overlay (Always visible but styled) */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-linear-to-t from-black/80 via-black/40 to-transparent z-30">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-sm uppercase tracking-[0.3em] text-[#ffffff] font-bold mb-2 block">
                      {category.projectCount} Projects
                    </span>
                    <h3 className="text-xl md:text-5xl font-black tracking-tighter">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Zap, Check, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Starter Kit",
    icon: Globe,
    description: "Perfect for startups and small businesses looking to establish a strong digital presence.",
    price: "Custom",
    features: [
      "Custom UI/UX Design",
      "Responsive Web Development",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Support",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    icon: Zap,
    description: "Advanced solutions for growing brands that need high-performance digital products.",
    price: "Custom",
    features: [
      "Everything in Starter Kit",
      "Advanced AI Automations",
      "Custom CMS Integration",
      "Performance Optimization",
      "Priority Support",
      "Strategic Consultation",
    ],
    highlight: true,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".pricing-card", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-24 bg-[#000000] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter">
            Flexible Pricing for Every Stage
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Whether you're launching an MVP or scaling a brand, I have a plan for you. 
            Don't let budget stop you. Let's chat and find a solution to bring your project to life.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative p-10 rounded-[32px] border ${
                plan.highlight 
                  ? "bg-white text-black border-white" 
                  : "bg-[#0D0D0D] text-white border-white/10"
              } transition-transform duration-500 hover:scale-[1.02]`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-3 rounded-2xl ${plan.highlight ? "bg-black/5" : "bg-white/5"}`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <span className={`text-sm uppercase tracking-widest font-bold ${plan.highlight ? "text-black/40" : "text-white/40"}`}>
                    Starting at
                  </span>
                  <p className="text-2xl font-black">{plan.price}</p>
                </div>
              </div>

              <h3 className="text-3xl font-black mb-4 tracking-tight">{plan.name}</h3>
              <p className={`mb-8 text-sm leading-relaxed ${plan.highlight ? "text-black/60" : "text-zinc-400"}`}>
                {plan.description}
              </p>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlight ? "bg-black text-white" : "bg-white text-black"
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                plan.highlight 
                  ? "bg-black text-white hover:bg-black/90" 
                  : "bg-white text-black hover:bg-white/90"
              }`}>
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

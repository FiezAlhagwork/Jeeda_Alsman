import { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { clientsData } from "../data";

export default function ClientPage() {
  const { clientId } = useParams<{ clientId: string }>();
  const navigate = useNavigate();
  const client = clientsData.find((c) => c.id === clientId);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!client) {
      navigate("/");
      return;
    }

    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".header-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".project-card", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.25,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [client, navigate]);

  if (!client) return null;

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">
            Back to Projects
          </span>
        </Link>

        <div className="header-content mb-24">
          <span className="text-xs uppercase tracking-[0.4em] text-[#a51223] font-bold mb-4 block">
            Client Case Study
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
            {client.name}
          </h1>
        </div>

        {client.projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {client.projects.map((project) => (
              <div
                key={project.id}

                className="project-card group relative  overflow-hidden rounded-[12px] bg-zinc-900 block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-xs uppercase tracking-widest text-[#a51223] font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-white border-b border-white w-fit pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


import type { LucideIcon } from "lucide-react";

export type ProcessStepCardProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ProcessStepCard({
  number,
  title,
  description,
  icon: Icon,
}: ProcessStepCardProps) {
  return (
    <div className="step-card  group relative shrink-0 w-full md:w-[min(100vw-5rem,28rem)] p-8 rounded-3xl bg-[#171717] border-t border-[#1F2937] hover:border-white/20 transition-colors duration-300">
      <div className="mb-6">
        <Icon className="w-8 h-8 text-white" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold mb-4 tracking-tight">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-8 pb-8 border-b-[0.1px] border-gray-600">
        {description}
      </p>

      <div className="">
        <span className="text-[12px] uppercase tracking-[0.2em] border border-gray-500 py-2 px-4 rounded-2xl text-white font-bold ">
          {number}
        </span>
      </div>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";

export type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className=" group relative p-10 rounded-[24px] bg-[#111111] border-t border-[#1F2937] h-fit  ">
      <div className="mb-4 flex gap-4 items-center">
        <Icon className="w-6 h-6 text-white font-semibold" aria-hidden />
        <h3 className="text-lg md:text-xl font-bold tracking-tight">{title}</h3>
      </div>

      <p className="text-gray-300 leading-relaxed text-[16px] md:text-[17px]">{description}</p>
    </div>
  );
}

import { type ChangeEvent, type ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

type IconTextInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  icon: IconComponent;
};

export default function TextInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  icon: Icon,
}: IconTextInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase tracking-widest text-zinc-500 ml-2"
      >
        {label}
      </label>

      <div className="relative">
        {
          Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
        }


        <input
          id={id}
          required={required}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#a51223] transition-colors"
        />
      </div>
    </div>
  );
}


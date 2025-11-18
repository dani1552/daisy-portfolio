import { HiPlus } from "react-icons/hi";

interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="value-card relative bg-[var(--color-bg-card)] rounded-lg p-6 flex flex-col justify-between min-h-[140px] text-left">
      <div>
        <h3 className="text-white font-bold text-2xl">{title}</h3>
        <p className="text-white/80 font-medium text-sm">{description}</p>
      </div>
      <div className="absolute bottom-4 right-4">
        <HiPlus className="text-white text-2xl" />
      </div>
    </div>
  );
}

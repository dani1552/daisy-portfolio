import { HiPlus } from "react-icons/hi";

interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="value-card relative bg-[var(--color-bg-card)] rounded-lg p-4 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[200px] text-left">
      <div>
        <h3 className="text-white font-bold text-[clamp(1.25rem,2vw,1.75rem)]">
          {title}
        </h3>
        <p className="text-white/80 font-medium text-[clamp(0.875rem,1.2vw,1rem)]">
          {description}
        </p>
      </div>
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
        <HiPlus className="text-white text-[clamp(1.1rem,2.5vw,1.75rem)] sm:text-[clamp(1.25rem,2vw,1.75rem)]" />
      </div>
    </div>
  );
}

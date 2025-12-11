import type { StackItem } from "@/types/skills";

interface StackItemProps {
  stack: StackItem;
}

export default function StackItem({ stack }: StackItemProps) {
  return (
    <div
      key={stack.name}
      className="flex items-start gap-3 sm:gap-4 text-left border-b border-zinc-800 pb-3 sm:pb-4 last:border-b-0 last:pb-0"
    >
      <img
        src={stack.logo}
        alt={`${stack.name} logo`}
        className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-0.5 sm:mt-1"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">{stack.name}</h3>
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
          {stack.description}
        </p>
      </div>
    </div>
  );
}

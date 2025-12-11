interface ArrowIconProps {
  direction: "left" | "right";
  muted?: boolean;
}

export default function ArrowIcon({ direction, muted = false }: ArrowIconProps) {
  return (
    <span
      aria-hidden
      className={`block w-2.5 h-2.5 sm:w-3 sm:h-3 border-t-[2.5px] sm:border-t-[3px] border-r-[2.5px] sm:border-r-[3px] ${
        muted ? "border-white/30" : "border-white"
      }`}
      style={{
        transform: direction === "left" ? "rotate(-135deg)" : "rotate(45deg)",
      }}
    />
  );
}

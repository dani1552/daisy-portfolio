import ValueCard from "./ValueCard";

const VALUES = [
  {
    title: "Growth",
    description: "주도적인 성장",
  },
  {
    title: "Challenge",
    description: "끊임없는 도전",
  },
  {
    title: "Detail",
    description: "완성도와 세심함",
  },
] as const;

export default function ValueCards() {
  return (
    <div className="value-cards-container flex flex-col sm:flex-row gap-4 w-full">
      {VALUES.map((value) => (
        <div key={value.title} className="flex-1">
          <ValueCard title={value.title} description={value.description} />
        </div>
      ))}
    </div>
  );
}

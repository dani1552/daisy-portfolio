import ValueCard from "./ValueCard";
import { VALUES } from "../../constants/values";

export default function ValueCards() {
  return (
    <div className="value-cards-container max-w-2xl flex flex-row gap-3 sm:gap-4 w-full">
      {VALUES.map((value) => (
        <div key={value.slug} className="flex-1 min-w-0">
          <ValueCard
            slug={value.slug}
            title={value.title}
            description={value.description}
          />
        </div>
      ))}
    </div>
  );
}

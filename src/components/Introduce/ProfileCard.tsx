import { CONTACTS, SOCIALS } from "@/constants/introduce";
import React from "react";

export default function ProfileCard() {
  return (
    <div>
      <div>
        <p className="font-bold text-[clamp(0.95rem,2.1vw,1.4rem)] sm:text-[clamp(1.1rem,1.1vw,1.5rem)]">
          김다은 (Daeun Kim)
        </p>
      </div>
      <dl className="grid grid-cols-[auto_auto] gap-x-1.5 gap-y-0.5 text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.95rem,1.05vw,1.05rem)] text-white/90 sm:grid-cols-[74px_auto]">
        {CONTACTS.map((item) => (
          <React.Fragment key={item.label}>
            <dt className="font-bold text-white">{item.label}</dt>
            <dd className="font-normal text-white">{item.value}</dd>
          </React.Fragment>
        ))}
      </dl>
      <div className="flex gap-1.5 sm:gap-2.5 pt-1.5 sm:pt-2.5">
        {SOCIALS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-[clamp(2rem,4vw,3rem)] w-[clamp(2rem,4vw,3rem)] sm:h-[clamp(2.2rem,3vw,3rem)] sm:w-[clamp(2.2rem,3vw,3rem)] items-center justify-center rounded-xl sm:rounded-2xl bg-white/5 p-1.5 transition hover:bg-white/20"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="h-[clamp(0.95rem,1.8vw,2.2rem)] w-[clamp(0.95rem,1.8vw,2.2rem)] sm:h-[clamp(1.1rem,1.4vw,2.2rem)] sm:w-[clamp(1.1rem,1.4vw,2.2rem)] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

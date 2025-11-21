import { useLayoutEffect, useRef } from "react";

const NAV_ITEMS = [
  { id: "introduce", label: "Introduce" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
] as const;

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const updateHeaderHeight = () => {
      const height = headerElement.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });

    resizeObserver.observe(headerElement);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-20 w-full border-white/10 bg-background/80 backdrop-blur-lg backdrop-saturate-150"
    >
      <div className="mx-auto flex h-[clamp(42px,4vw,56px)] w-full max-w-screen-xl items-center justify-center px-2 sm:px-3">
        <nav className="flex items-center justify-center gap-2 sm:gap-5 md:gap-7 lg:gap-8 text-[clamp(0.6rem,1.2vw,0.9rem)] font-black uppercase tracking-[0.12em] sm:tracking-[0.16em] text-white whitespace-nowrap">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className="no-underline text-white transition-opacity hover:opacity-80"
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (!element) return;
                const headerHeight = parseInt(
                  getComputedStyle(document.documentElement).getPropertyValue(
                    "--header-height",
                  ) || "0",
                );
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

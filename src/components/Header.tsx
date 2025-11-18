import { useLayoutEffect, useRef } from "react";

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
      <div className="mx-auto flex h-[clamp(60px,8vw,80px)] w-full max-w-screen-xl items-center justify-center px-4 sm:px-6">
        <nav className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 text-[clamp(0.7rem,1.8vw,1.125rem)] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white whitespace-nowrap">
          <a
            className="no-underline text-white transition-opacity hover:opacity-80"
            href="#introduce"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("introduce");
              if (element) {
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
              }
            }}
          >
            Introduce
          </a>
          <a
            className="no-underline text-white transition-opacity hover:opacity-80"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="no-underline text-white transition-opacity hover:opacity-80"
            href="#projects"
          >
            Project
          </a>
          <a
            className="no-underline text-white transition-opacity hover:opacity-80"
            href="#experience"
          >
            Experience
          </a>
        </nav>
      </div>
    </header>
  );
}

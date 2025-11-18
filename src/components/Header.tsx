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
      <div className="mx-auto flex h-[clamp(60px,8vw,80px)] w-full max-w-screen-xl items-center justify-center px-6">
        <nav className="flex flex-wrap items-center justify-center gap-12 text-sm font-black uppercase tracking-[0.2em] text-white sm:text-base md:text-lg">
          <a className="no-underline text-white" href="#about">
            About me
          </a>
          <a className="no-underline text-white" href="#skills">
            Skills
          </a>
          <a className="no-underline text-white" href="#projects">
            Project
          </a>
          <a className="no-underline text-white" href="#experience">
            Experience
          </a>
        </nav>
      </div>
    </header>
  );
}

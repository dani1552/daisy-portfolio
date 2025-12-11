import { useEffect } from "react";

export default function useHideLessMoreText(isMounted: boolean) {
  useEffect(() => {
    if (!isMounted) return;

    const hideLessMoreText = () => {
      const wrapper = document.querySelector(".github-calendar-wrapper");
      if (!wrapper) return;

      const svg = wrapper.querySelector("svg");
      if (!svg) return;

      const textElements = svg.querySelectorAll("text");
      textElements.forEach((text) => {
        const textContent = text.textContent?.trim() || "";
        if (
          textContent === "Less" ||
          textContent === "More" ||
          textContent === "Mo" ||
          textContent === "Le" ||
          textContent.toLowerCase().includes("less") ||
          textContent.toLowerCase().includes("more")
        ) {
          text.style.display = "none";
          text.style.visibility = "hidden";
          text.style.opacity = "0";
          text.style.fontSize = "0";
          text.setAttribute("display", "none");
          const parent = text.parentElement;
          if (parent && parent.tagName === "g") {
            parent.style.display = "none";
            parent.style.visibility = "hidden";
            parent.style.opacity = "0";
          }
        }
      });

      const allGroups = svg.querySelectorAll("g");
      allGroups.forEach((group) => {
        const texts = group.querySelectorAll("text");
        const hasLessMore = Array.from(texts).some((text) => {
          const content = text.textContent?.trim() || "";
          return (
            content === "Less" ||
            content === "More" ||
            content.toLowerCase().includes("less") ||
            content.toLowerCase().includes("more")
          );
        });

        if (hasLessMore) {
          group.style.display = "none";
          group.style.visibility = "hidden";
          group.style.opacity = "0";
          group.setAttribute("display", "none");
          group.querySelectorAll("*").forEach((child) => {
            (child as HTMLElement).style.display = "none";
            (child as HTMLElement).style.visibility = "hidden";
            (child as HTMLElement).style.opacity = "0";
          });
        }

        const paths = group.querySelectorAll("path, polygon, line");
        paths.forEach((path) => {
          try {
            const svgPath = path as unknown as SVGGraphicsElement;
            if (svgPath && "getBBox" in svgPath) {
              const bbox = (svgPath as { getBBox: () => DOMRect }).getBBox();
              if (
                bbox.width < 30 &&
                bbox.height < 30 &&
                bbox.width > 0 &&
                bbox.height > 0
              ) {
                path.setAttribute("display", "none");
                path.setAttribute(
                  "style",
                  "display: none; visibility: hidden; opacity: 0;",
                );
                const parentGroup = path.closest("g");
                if (parentGroup && parentGroup !== group) {
                  const groupTexts = parentGroup.querySelectorAll("text");
                  const hasOnlyArrow =
                    groupTexts.length === 0 ||
                    Array.from(groupTexts).every((t) => {
                      const content = t.textContent?.trim() || "";
                      return (
                        content === "Less" ||
                        content === "More" ||
                        content.toLowerCase().includes("less") ||
                        content.toLowerCase().includes("more")
                      );
                    });
                  if (hasOnlyArrow) {
                    parentGroup.setAttribute("display", "none");
                    parentGroup.setAttribute(
                      "style",
                      "display: none; visibility: hidden; opacity: 0;",
                    );
                  }
                }
              }
            }
          } catch (error) {
            console.warn("getBBox 오류: ", error);
          }
        });
      });

      const clickableElements = svg.querySelectorAll(
        "[style*='cursor'], [style*='pointer']",
      );
      clickableElements.forEach((el) => {
        const style = (el as HTMLElement).style.cssText || "";
        if (style.includes("pointer") || style.includes("cursor")) {
          const texts = (el as Element).querySelectorAll("text");
          const hasLessMore = Array.from(texts).some((text) => {
            const content = text.textContent?.trim() || "";
            return (
              content === "Less" ||
              content === "More" ||
              content.toLowerCase().includes("less") ||
              content.toLowerCase().includes("more")
            );
          });
          if (hasLessMore) {
            (el as HTMLElement).style.display = "none";
            (el as HTMLElement).style.visibility = "hidden";
            (el as HTMLElement).style.opacity = "0";
          }
        }
      });
    };

    const timer1 = setTimeout(hideLessMoreText, 100);
    const timer2 = setTimeout(hideLessMoreText, 300);
    const timer3 = setTimeout(hideLessMoreText, 500);

    const observer = new MutationObserver(hideLessMoreText);
    const wrapper = document.querySelector(".github-calendar-wrapper");
    if (wrapper) {
      observer.observe(wrapper, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      observer.disconnect();
    };
  }, [isMounted]);
}

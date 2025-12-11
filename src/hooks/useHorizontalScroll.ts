import { useEffect, useState, useRef } from "react";

export function useHorizontalScroll(scrollRatio = 0.9) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateEdgeState = () => {
    const node = scrollRef.current;
    if (!node) return;
    const { scrollLeft, scrollWidth, clientWidth } = node;
    setIsAtStart(scrollLeft <= 1);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const scroll = (direction: "prev" | "next") => {
    if ((direction === "prev" && isAtStart) || (direction === "next" && isAtEnd)) {
      return;
    }
    const node = scrollRef.current;
    if (!node) return;
    const scrollAmount = node.clientWidth * scrollRatio;
    node.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
    requestAnimationFrame(updateEdgeState);
  };

  useEffect(() => {
    updateEdgeState();
    const node = scrollRef.current;
    if (!node) return;

    node.addEventListener("scroll", updateEdgeState);
    window.addEventListener("resize", updateEdgeState);

    return () => {
      node.removeEventListener("scroll", updateEdgeState);
      window.removeEventListener("resize", updateEdgeState);
    };
  }, []);

  return {
    scrollRef,
    isAtStart,
    isAtEnd,
    scroll,
  };
}

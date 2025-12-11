import { useState, useLayoutEffect, useRef } from "react";

export function useTabContainerHeight() {
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const allTabsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useLayoutEffect(() => {
    const measureHeights = () => {
      if (allTabsRef.current.size === 0) return;

      let maxHeight = 0;
      allTabsRef.current.forEach((element) => {
        if (element) {
          const height = element.scrollHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        }
      });

      if (maxHeight > 0) {
        setContainerHeight(maxHeight);
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(measureHeights);
    });
  }, []);

  const registerTabRef = (key: string) => (el: HTMLDivElement | null) => {
    if (el) {
      allTabsRef.current.set(key, el);
    } else {
      allTabsRef.current.delete(key);
    }
  };

  return {
    containerHeight,
    registerTabRef,
  };
}

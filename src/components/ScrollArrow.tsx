import { useEffect, useState } from "react";

export default function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverHeader, setIsOverHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // 첫 화면을 벗어나면 화살표 숨김
      setIsVisible(scrollPosition < windowHeight * 0.5);
    };

    // 마우스 움직임에 따라 위치 업데이트
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // 헤더 영역인지 확인
      const header = document.querySelector("header");
      if (header) {
        const headerRect = header.getBoundingClientRect();
        const isInHeaderArea =
          e.clientY >= headerRect.top &&
          e.clientY <= headerRect.bottom &&
          e.clientX >= headerRect.left &&
          e.clientX <= headerRect.right;
        setIsOverHeader(isInHeaderArea);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: windowHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`mouse-scroll-cursor ${isVisible ? "visible" : "hidden"} ${
        isOverHeader ? "over-header" : ""
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
      onClick={handleClick}
    >
      <div className="mouse-scroll-text">Scroll</div>
    </div>
  );
}

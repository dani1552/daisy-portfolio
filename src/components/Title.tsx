import {
  TypingText,
  TypingTextCursor,
} from "@/components/animate-ui/primitives/texts/typing";
import ScrollArrow from "@/components/ScrollArrow";

interface TypingTextDemoProps {
  delay: number;
  holdDelay: number;
  loop: boolean;
  cursor: boolean;
}

const TypingTextDemo = ({ delay, holdDelay, loop, cursor }: TypingTextDemoProps) => {
  const typingDuration = 90;
  const erasingDuration = 45;
  return (
    <TypingText
      key={`${delay}-${holdDelay}-${loop}-${cursor}`}
      delay={delay}
      holdDelay={holdDelay}
      duration={typingDuration}
      eraseDuration={erasingDuration}
      className="whitespace-pre-line break-keep text-[clamp(1rem,4vw,2.3rem)] leading-[clamp(1.5rem,4.5vw,8rem)] font-semibold text-white sm:text-[clamp(1.4rem,3vw,2.7rem)] sm:leading-[clamp(2rem,3.2vw,2.6rem)] md:text-[clamp(1.8rem,2.3vw,3.25rem)] md:leading-[clamp(2.6rem,3vw,4.5rem)]"
      text={`안녕하세요 ,\n한\u00A0줄의\u00A0UI도\u00A0비즈니스\u00A0임팩트를\u00A0줄\u00A0수\u00A0있어야\u00A0한다고\u00A0믿는\n프론트엔드 개발자 김다은입니다`}
      loop={loop}
    >
      {cursor && (
        <TypingTextCursor
          className="ml-2 inline-flex align-middle rounded-full !w-[2px] !h-8 sm:!w-[3px] sm:!h-10 md:!w-[4px] md:!h-12"
          style={{
            backgroundColor: "var(--color-pink)",
            borderRadius: "50px",
            transform: "translateY(-0.1em)",
          }}
        />
      )}
    </TypingText>
  );
};

export default function Title() {
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-transparent px-4 sm:px-6 py-12 sm:py-16"
      style={{
        height: "calc(100dvh - var(--header-height, 0px))",
        minHeight: "calc(100dvh - var(--header-height, 0px))",
      }}
    >
      <div className="max-w-6xl mx-auto text-left flex-1 flex items-center w-full">
        <TypingTextDemo delay={0.001} holdDelay={2000} loop cursor />
      </div>
      <div className="h-32 sm:h-40 md:h-48 flex-shrink-0"></div>
      <ScrollArrow />
    </section>
  );
}

import {
  TypingText,
  TypingTextCursor,
} from "@/components/animate-ui/primitives/texts/typing";

interface TypingTextDemoProps {
  delay: number;
  holdDelay: number;
  loop: boolean;
  cursor: boolean;
}

const TypingTextDemo = ({ delay, holdDelay, loop, cursor }: TypingTextDemoProps) => {
  return (
    <TypingText
      key={`${delay}-${holdDelay}-${loop}-${cursor}`}
      delay={delay}
      holdDelay={holdDelay}
      className="whitespace-pre-line break-keep text-[clamp(1.2rem,3.8vw,2.3rem)] leading-[clamp(1.8rem,4vw,2.2rem)] font-semibold text-white sm:text-[clamp(1.4rem,3vw,2.7rem)] sm:leading-[clamp(2rem,3.2vw,2.6rem)] md:text-[clamp(1.8rem,2.3vw,3.25rem)] md:leading-[clamp(2.6rem,3vw,3.6rem)]"
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
    <section className="flex min-h-[50vh] items-center justify-center bg-transparent px-6 py-16">
      <div className="w-full max-w-6xl text-left">
        <TypingTextDemo delay={0.01} holdDelay={1} loop cursor />
      </div>
    </section>
  );
}

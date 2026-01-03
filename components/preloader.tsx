"use client";

import {
  motion,
  AnimatePresence,
  useAnimate,
  useInView,
  stagger,
} from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// --- DIGIT COMPONENT ---
// Handles the vertical slide animation (0 -> 1 -> ... -> 9)
// The "overflow-hidden" ensures we only see the current number
const Digit = ({ value }: { value: string }) => (
  <div className="relative h-[1em] w-[0.6em] overflow-hidden inline-block text-center align-top">
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // "Rabbit" snappy easing
        className="absolute inset-0 flex items-center justify-center"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  </div>
);

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Logic: Count from 0 to 100
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Quartic Ease Out for a robotic, mechanical stop
      const ease = 1 - Math.pow(1 - progress, 4);

      const currentCount = Math.floor(0 + (100 - 0) * ease);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 500);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  // Format count to always be 2 or 3 digits (e.g., "00", "99", "100")
  const digits = count.toString().split("");

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      // USING YOUR VARIABLES:
      // Background -> --primary (#161719)
      // Text -> --primary-foreground (White)
      className="fixed inset-0 z-[50] flex flex-col justify-between p-6 md:p-12 bg-foreground text-primary-foreground font-sans overflow-hidden"
    >
      {/* --- TOP ROW: Grid Layout typical of Rabbit OS --- */}
      <div className="grid grid-cols-4 w-full gap-4 text-xs font-medium uppercase tracking-tight border-b border-primary-foreground/20 pb-6 md:pb-12">
        {/* 1. Brand / Status */}
        <div className="flex flex-col">
          <div className="flex flex-col">
            <TypewriterEffect
              className="text-muted-foreground text-xs md:text-sm font-normal font-mono  text-left md:leading-[0.8] md:-my-2"
              delay={0}
              words={[{ text: "System" }]}
            />

            <TypewriterEffect
              className="text-background text-xs md:text-sm font-normal font-mono  text-left md:leading-[0.8] md:-my-2"
              delay={0.1}
              words={[{ text: "Booting" }]}
            />
          </div>
        </div>

        {/* 2. Empty or Info */}
        <div className="flex flex-col">
          <TypewriterEffect
            className="text-muted-foreground text-xs md:text-sm font-normal font-mono  text-left md:leading-[0.8] md:-my-2"
            words={[{ text: "Boot" }]}
            delay={0.2}
          />

          <TypewriterEffect
            className="text-background text-xs md:text-sm font-normal font-mono  text-left md:leading-[0.8] md:-my-2"
            delay={0.3}
            words={[{ text: "XJ-900" }]}
          />
        </div>
      </div>

      {/* --- CENTER: BIG COUNTER --- */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="relative flex items-baseline leading-none tracking-tighter">
          {/* The Number */}
          <span className="text-[25vw] md:text-[20rem] font-medium text-primary-foreground flex tracking-tighter leading-[0.6] items-center flex">
            {digits.map((digit, index) => (
              <Digit key={`${index}-${digit}`} value={digit} />
            ))}
            <span className="text-muted-foreground">%</span>
          </span>
        </div>
      </div>

      {/* --- BOTTOM ROW --- */}
      <div className="grid grid-cols-4 w-full gap-4 text-xs font-medium uppercase tracking-tight gap-2 md:gap-0 border-t border-primary-foreground/20 pt-6 md:mb-12 mb-6 md:h-fit h-12">
        {/* Intro */}
        <div className="col-span-2 flex flex-col gap-1 w-full h-fit">
          <TypewriterEffect
            className="text-muted-foreground text-xs md:text-sm font-normal font-mono  text-left md:leading-[0.8] md:-my-2"
            delay={0.4}
            words={[{ text: "ACTIONS" }]}
          />

          <TypewriterEffect
            className="text-background text-xs md:text-sm font-normal font-mono  text-left md:leading-[0.8] md:-my-2"
            delay={0.5}
            words={[{ text: "INITIALIZING" }]}
          />
        </div>

        {/* Date / Copyright */}
        <div className="col-start-4 flex flex-col gap-1 text-right w-full">
          <TypewriterEffect
            className="text-muted-foreground text-xs md:text-sm font-normal font-mono  text-left md:leading-[0.8] md:-my-2"
            delay={0.6}
            words={[{ text: "SESSION" }]}
          />
          <TypewriterEffect
            className="text-background text-xs md:text-sm font-normal font-mono  text-left md:leading-[0.8] md:-my-2"
            delay={0.7}
            words={[{ text: `${new Date().getFullYear()}— V.1.0` }]}
          />
        </div>
      </div>
    </motion.div>
  );
}

export const TypewriterEffect = ({
  words,
  delay,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  delay: number;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.1,
          delay: stagger(0.025, { startDelay: delay }),
          ease: "easeInOut",
        },
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`hidden`, word.className, className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className,
      )}
    >
      {renderWords()}
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={cn(``, word.className)}>
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
    </div>
  );
};

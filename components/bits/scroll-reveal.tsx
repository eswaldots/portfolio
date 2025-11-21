import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ForwardedRef, useRef, useState } from "react";

function ScrollReveal({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef(null);
  const words = children.split(" ");
  const [indexState, setIndexState] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Change 'end end' to 'end start' to extend the scroll range
  });

  const opacityIndex = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, words.length]
  );

  useMotionValueEvent(opacityIndex, "change", (latest) => {
    setIndexState(latest);
  });

  return (
    <motion.p className={className} ref={ref}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            "text-muted-foreground transition-colors duration-100 ease-in-out",
            index <= indexState && "text-foreground"
          )}
        >
          {" "}
          {word}{" "}
        </span>
      ))}
    </motion.p>
  );
}

export { ScrollReveal };

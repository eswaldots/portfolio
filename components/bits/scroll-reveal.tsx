import { cn } from "@/lib/utils";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import { ForwardedRef, RefObject, useRef, useState } from "react";

function ScrollReveal({
  children,
  className,
  externalRef
}: {
  children: string;
  className?: string;
  externalRef?: RefObject<null | HTMLDivElement>
}) {
  const ref = useRef(null);
  const words = children.split(" ");
  const [indexState, setIndexState] = useState(0);

  const { scrollYProgress } = useScroll({
    target: externalRef ?? ref,
    offset: ["start end", "end start"], // Change 'end end' to 'end start' to extend the scroll range
  });

  const opacityIndex = useTransform(
    scrollYProgress,
    [0, 0.7],
    [0, words.length]
  );

  useMotionValueEvent(opacityIndex, "change", (latest) => {
    setIndexState(latest);
  });

  return (
    <motion.p className={className} ref={ref}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={cn(
            "text-muted-foreground transition-colors", index <= indexState && "text-foreground"
          )}
        >
          {" "}
          {word}{" "}
        </motion.span>
      ))}
    </motion.p>
  );
}

export { ScrollReveal };

import { cn } from "@/lib/utils";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { RefObject, useRef } from "react";

function ScrollReveal({
  children,
  className,
  externalRef,
}: {
  children: string;
  className?: string;
  externalRef?: RefObject<null | HTMLDivElement>;
}) {
  const ref = useRef(null);
  const words = children.split(" ");
  
  const { scrollYProgress } = useScroll({
    target: externalRef ?? ref,
    offset: ["start end", "end start"],
  });

  return (
    <motion.p className={className} ref={ref}>
      {words.map((word, index) => {
        const start = (index / words.length) * 0.7; 
        const end = start + (1 / words.length) * 0.1;
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const color = useTransform(
            scrollYProgress, 
            [start, end], 
            ["var(--muted-foreground)", "var(--foreground)"]
        );

        return (
          <motion.span
            key={index}
            style={{ color }}
            className={cn("transition-colors")}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.p>
  );
}

export { ScrollReveal };

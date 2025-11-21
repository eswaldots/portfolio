"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import DecryptedText from "./bits/encrypted-text";
import { useRef } from "react";

function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    console.log(progress);
  });

  return (
    <motion.div
      ref={ref}
      className="z-20 bg-foreground w-screen h-[300vh] py-[25vh] font-mono gap-6 px-6 sm:px-20 relative"
    >
      <div className="flex flex-col gap-8 sticky top-[25vh] items-center overflow-hidden">
        <span className="text-muted-foreground uppercase text-lg tracking-tight">
          Sobre mi
        </span>
        <DecryptedText
          text="Hola, soy Aaron, un desarrollador fullstack apasionado por crear experiencias visuales cautivadoras y construir sistemas robustos y seguros de alto calibre."
          animateOn="view"
          sequential
          revealDirection="start"
          encryptedClassName="text-muted-foreground"
          parentClassName="text-4xl sm:text-6xl leading-[1.1] font-medium tracking-tight text-background"
        />
      </div>
    </motion.div>
  );
}

export { About };

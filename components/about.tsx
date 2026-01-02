"use client";

import { useRef } from "react";
import { ScrollReveal } from "./bits/scroll-reveal";

const content =
  "I'm Aaron, a full-stack developer on a mission to build robust and visually appealing products. My expertise ranges from creating memorable user experiences to engineering secure and scalable systems, transforming complex ideas into elegant and efficient solutions.";

function About() {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="h-[200vh] relative w-full flex justify-center items-start bg-background"
    >
      <div className="sticky top-0 h-screen flex items-center px-6 md:px-4">
        <ScrollReveal
          externalRef={ref}
          className="text-4xl md:text-[4vw] text-foreground font-sans tracking-tight leading-[1.2] text-left max-w-6xl"
        >
          {content}
        </ScrollReveal>
      </div>
    </div>
  );
}

export { About };

"use client";

import { useRef } from "react";
import { ScrollReveal } from "./bits/scroll-reveal";

const content =
  "Hola, soy Aaron, desarrollador fullstack. Me especializo en crear experiencias visuales memorables y en la ingeniería de sistemas seguros y escalables. Convierto la complejidad en soluciones elegantes y eficientes.";

function About() {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="h-[300vh] relative w-full flex justify-center items-start bg-background rounded-t-4xl"
    >
      <div className="sticky top-0 h-screen flex items-center px-4">
        <ScrollReveal
          externalRef={ref}
          className="text-6xl text-foreground font-sans tracking-tight leading-[1.2] text-left max-w-5xl font-medium"
        >
          {content}
        </ScrollReveal>
      </div>
    </div>
  );
}

export { About };

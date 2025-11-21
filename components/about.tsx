"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "./bits/scroll-reveal";

function About() {
  return (
    <motion.div className="z-20 w-screen h-screen py-[25vh] gap-6 px-6 sm:px-20 relative">
      <div className="flex flex-col gap-12 items-start">
        <h1 className="uppercase tracking-tighter font-semibold font-sans text-lg">
          Sobre mi
        </h1>

        <ScrollReveal className="text-5xl tracking-tighter font-semibold leading-[1.2] font-sans">
          Hola, soy Aaron, un desarrollador fullstack apasionado por crear
          experiencias visuales cautivadoras y construir sistemas robustos y
          seguros de alto calibre.
        </ScrollReveal>
      </div>
    </motion.div>
  );
}

export { About };

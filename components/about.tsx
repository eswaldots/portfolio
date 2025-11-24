"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "./bits/scroll-reveal";

const content = "Hola, soy Aaron, un desarrollador fullstack apasionado por crear experiencias visuales cautivadoras y construir sistemas robustos y seguros de alto calibre."

function About() {
  return (
    <motion.div className="z-20 w-screen h-screen py-[25vh] my-22 gap-6 px-6 sm:px-20 relative">
      <div className="flex flex-col gap-12 items-start text-left">

        <ScrollReveal className="text-4xl sm:text-8xl tracking-tighter font-semibold leading-[1.2] font-sans">
          {content}
        </ScrollReveal>

        {/* <Link href="/about"> */}
        {/*   <motion.button */}
        {/*     initial={{ backgroundColor: "var(--background)", color: "var(--foreground)" }} */}
        {/*     whileHover={{ backgroundColor: "var(--primary)", color: "var(--background)" }} */}
        {/*     transition={{ type: "spring", damping: 15, stiffness: 300 }} */}
        {/*     className="py-5 font-mono font-normal tracking-tighter text-lg rounded-full border shadow-xs  dark:border-foreground  inline-flex items-center justify-center gap-2 whitespace-nowrap h-10 px-6 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-foreground"> */}
        {/*     Más sobre mí */}
        {/*     <ArrowRight /> */}
        {/*   </motion.button> */}
        {/**/}
        {/* </Link> */}
      </div>
    </motion.div>
  );
}

export { About };

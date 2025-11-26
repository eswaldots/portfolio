"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "./bits/scroll-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const content =
  "Hola, soy Aaron, desarrollador fullstack. Me especializo en crear experiencias visuales memorables y en la ingeniería de sistemas seguros y escalables. Convierto la complejidad en soluciones elegantes y eficientes.";

function About() {
  return (
    <motion.div className="z-20 w-screen py-[25vh] my-22 gap-6 px-6 sm:px-20 relative">
      <div className="flex flex-col gap-12 items-start text-left">
        <ScrollReveal className="text-4xl sm:text-8xl tracking-tighter font-semibold leading-[1.2] font-sans">
          {content}
        </ScrollReveal>

        <Button
          className="text-sm sm:text-base rounded-full font-mono tracking-tighter border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          asChild
          variant="outline"
          size="lg"
        >
          <Link href="/resume">Más sobre mi</Link>
        </Button>
      </div>
    </motion.div>
  );
}

export { About };

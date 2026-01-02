"use client";

import { motion } from "motion/react";
import { TextAnimate } from "./ui/text-animate";

function Hero() {
  return (
    <main className="bg-primary w-screen h-screen flex flex-col justify-center sm:justify-center sm:px-20 px-6 py-12 sm:pt-22 pt-28 sm:py-22 font-sans relative overflow-hidden">
      <div className="mt-auto text-center z-20">
        <div className="overflow-y-hidden my-4">
          <TextAnimate
            by="character"
            animation="slideDown"
            once={false}
            className="text-primary-foreground font-sans tracking-tighter font-medium text-[11.5vw] leading-[1.1] md:text-center text-left"
          >
            Creative developer
          </TextAnimate>
        </div>

        <motion.div
          className="flex flex-row items-end w-fit gap-3 mx-auto"
          animate={{ opacity: [0, 1], transition: { delay: 0.9 } }}
        >
          <div className="overflow-y-hidden">
            <TextAnimate
              by="line"
              animation="slideDown"
              once={false}
              className="font-thin tracking-tighter text-primary-foreground tracking-tighter text-sm md:text-center text-left md:text-xl font-mono uppercase"
            >
              I’m experienced web and ux/ui designer, who design memorable web
              experiences for brands OF ALL SIZES
            </TextAnimate>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export { Hero };

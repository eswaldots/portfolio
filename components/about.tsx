"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { ArrowDown } from "lucide-react";

// --- Text Content ---
const content =
  "I'm Aaron, a full-stack developer on a mission to build robust and visually appealing products. My expertise ranges from creating memorable user experiences to engineering secure and scalable systems, transforming complex ideas into elegant and efficient solutions.";

// --- Component: Word with Opacity Scroll Effect ---
const ScrollWord = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]); // Stays visible at 0.15 opacity, goes to 1

  return (
    <span className="relative inline-block mr-[0.2em] lg:mr-[0.25em]">
      <motion.span
        style={{ opacity }}
        className="text-foreground transition-colors duration-200"
      >
        {children}
      </motion.span>
    </span>
  );
};

// --- Component: The Scroll Reveal Text Wrapper ---
const ScrollRevealText = ({
  children,
  targetRef,
}: {
  children: string;
  targetRef: React.RefObject<any>;
}) => {
  const words = children.split(" ");
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // Animation starts when top hits top, ends when bottom hits bottom
  });

  return (
    <p className="flex flex-wrap text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] md:leading-[1.2]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <ScrollWord key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </ScrollWord>
        );
      })}
    </p>
  );
};

// --- Main Page Component ---
function About() {
  const containerRef = useRef(null);

  return (
    <div className="bg-background min-h-screen font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Background Grain/Noise */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-foreground mix-blend-overlay"></div>

      <div
        ref={containerRef}
        className="relative w-full h-[300vh] flex flex-col items-center"
        // Increased height to 300vh to make the reading speed more comfortable
      >
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Brutalist Grid Layout */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none px-4 md:px-12 border-x border-border/40">
            {/* Left Sidebar Info */}
            <div className="hidden md:flex col-span-2 border-r border-border/40 flex-col justify-between py-12">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"></span>
              <div className="flex flex-col gap-2 font-mono text-[10px] text-muted-foreground">
                <span>SCROLL TO READ</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "backOut",
                  }}
                >
                  <ArrowDown size={14} />
                </motion.div>
              </div>
            </div>

            {/* Right Sidebar Decoration */}
            <div className="hidden md:block col-start-12 col-span-1 border-l border-border/40 relative">
              <div className="absolute top-1/2 -translate-y-1/2 -right-3 rotate-90 origin-center whitespace-nowrap font-mono text-[10px] text-muted-foreground opacity-50">
                AARON AVILA ©2026
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] z-10 px-4 md:px-0">
            {/* Decorative Label above text */}
            <div className="mb-8 md:mb-12 overflow-hidden">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                [ 02 — Bio ]
              </span>
            </div>

            {/* The Scroll Reveal Component */}
            <ScrollRevealText targetRef={containerRef}>
              {content}
            </ScrollRevealText>

            {/* Footer Decoration below text */}
            <div className="mt-12 md:mt-20 h-[1px] w-full bg-border/50 flex items-center justify-between">
              <div className="w-2 h-2 bg-primary rounded-full -mt-[1px]"></div>
              <div className="w-2 h-2 bg-primary rounded-full -mt-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { About };

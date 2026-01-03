"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { ArrowDown } from "lucide-react";

// --- Text Content ---
const content =
  "I’m Aaron, a Full-Stack Developer dedicated to bridging the gap between sophisticated engineering and intuitive design. I don’t just write code; I engineer secure, scalable systems that deliver seamless user experiences. My goal is to transform your complex requirements into elegant, high-performance solutions.";

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
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative inline-block mr-[0.2em] lg:mr-[0.25em]">
      <motion.span
        style={{ opacity }}
        // Performance: 'will-change-opacity' ayuda al navegador a optimizar la animación
        className="text-foreground transition-colors duration-200 will-change-opacity"
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
  targetRef: React.RefObject<any>; // O HTMLElement si prefieres tipado estricto
}) => {
  // Performance: useMemo evita que el split se ejecute en cada render
  const words = useMemo(() => children.split(" "), [children]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    // ACCESIBILIDAD/SEO:
    // Usamos aria-label para que los screen readers lean la frase completa de corrido,
    // ignorando los spans individuales gracias a aria-hidden en los hijos (o comportamiento nativo).
    <p
      className="flex flex-wrap text-3xl font-normal md:text-5xl md:font-medium tracking-tight leading-[1.25] md:leading-[1.25]"
      aria-label={children}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          // Aria-hidden para que el lector no lea palabra por palabra con pausas
          <span key={i} aria-hidden="true">
            <ScrollWord progress={scrollYProgress} range={[start, end]}>
              {word}
            </ScrollWord>
          </span>
        );
      })}
    </p>
  );
};

// --- Main Page Component ---
function About() {
  const containerRef = useRef(null);

  return (
    // Semántica: Usamos <section> en lugar de <div>
    <section
      id="about-bio"
      className="bg-background min-h-screen font-sans selection:bg-primary selection:text-primary-foreground relative"
    >
      {/* SEO: Título oculto para estructura de documento */}
      <h2 className="sr-only">About Aaron Avila - Professional Bio</h2>

      {/* Background Grain/Noise */}
      {/* Performance: Cambiado de fixed a absolute para evitar repaints globales innecesarios */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 bg-foreground mix-blend-overlay"
        aria-hidden="true"
      ></div>

      <div
        ref={containerRef}
        className="relative w-full h-[300vh] flex flex-col items-center"
      >
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Brutalist Grid Layout - Aria-hidden porque es decorativo */}
          <div
            className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none px-4 md:px-12 border-x border-border/40"
            aria-hidden="true"
          >
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
            <div className="mb-8 md:mb-12 overflow-hidden" aria-hidden="true">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                [ 02 — Bio ]
              </span>
            </div>

            {/* The Scroll Reveal Component */}
            <ScrollRevealText targetRef={containerRef}>
              {content}
            </ScrollRevealText>

            {/* Footer Decoration below text */}
            <div
              className="mt-12 md:mt-20 h-[1px] w-full bg-border/50 flex items-center justify-between"
              aria-hidden="true"
            >
              <div className="w-2 h-2 bg-primary rounded-full -mt-[1px]"></div>
              <div className="w-2 h-2 bg-primary rounded-full -mt-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };

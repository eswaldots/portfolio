"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react"; // Eliminados Pause y Play
import { motion } from "motion/react";
import { useRef, useState } from "react";

// --- UI Components ---

const RevealText = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <div className={`overflow-hidden inline-block align-bottom ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay }}
        className="block"
      >
        {children}
      </motion.span>
    </div>
  );
};

// --- "PROFILE" Card Component (Replaces Spotify Style) ---
const ProfileCard = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 aspect-[4/5] flex flex-col border border-border bg-card shadow-2xl relative group overflow-hidden"
    >
      {/* Top Section: Typography */}
      <div className="h-[30%] bg-background flex flex-col items-center justify-center border-b border-border z-20 relative">
        <span className="font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1 md:mb-2">
          THIS IS
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-center leading-none">
          Aaron Avila
        </h1>
      </div>

      {/* Bottom Section: Image */}
      <div className="h-[70%] relative bg-muted overflow-hidden">
        {/* Usamos un gris neutro o tu color primario, eliminamos la referencia a album cover */}
        <div className="absolute inset-0 bg-cover bg-center bg-zinc-900 group-hover:scale-105 transition-all duration-700 ease-in-out" />

        {/* Optional: Overlay text on image */}
        <div className="absolute bottom-4 left-4 text-white/50 text-[10px] tracking-widest uppercase">
          [ REF: 001-DEV ]
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---

export default function AboutPage() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="bg-background text-foreground min-h-screen font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground"
    >
      {/* Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 bg-foreground mix-blend-overlay"></div>

      {/* --- Header Section --- */}
      <header className="pt-32 pb-16 px-6 md:px-12 border-b border-border">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 text-muted-foreground font-mono text-xs mb-4">
            <span>01</span>
            <span className="w-12 h-[1px] bg-border"></span>
            <span>OVERVIEW</span>
          </div>
          <RevealText className="text-[10vw] md:text-[8vw] leading-[0.85] font-medium tracking-tighter uppercase text-foreground">
            Digital
          </RevealText>
          <div className="flex items-center gap-4">
            <RevealText
              delay={0.1}
              className="text-[10vw] md:text-[8vw] leading-[0.85] font-medium tracking-tighter uppercase text-muted-foreground"
            >
              Architect
            </RevealText>
          </div>
        </div>
      </header>

      {/* --- Narrative Grid --- */}
      <section className="w-full relative border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          {/* Left: The Profile Card */}
          <div className="lg:col-span-5 border-r border-border p-8 md:p-12 bg-secondary/30 flex items-center justify-center relative">
            <div className="sticky top-24 w-full">
              <ProfileCard />
              <div className="mt-4 flex justify-between font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                <span>Full Stack Developer</span>
                <span>Est. 2026</span>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-background">
            <h2 className="font-mono text-xs text-primary mb-8 tracking-widest uppercase">
              ● The Mission
            </h2>

            <div className="space-y-8 text-sm md:text-2xl leading-relaxed font-light text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">
                  Precision meets performance.
                </span>{" "}
                In a digital landscape cluttered with noise, I build clarity.
                Effective design isn't just decoration; it's the result of
                calculating user needs and executing with technical rigor.
              </p>
              <p>
                I a multidisciplinary developer bridging the gap between
                aesthetic vision and engineering constraints. My approach is
                systematic: I deconstruct complex problems to build scalable,
                intuitive interfaces.
              </p>
              <p>
                From the architecture of the database to the fluidity of the
                animations, every layer is crafted with intent.
              </p>
            </div>

            <div className="mt-16 py-8 border-y border-border gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  CORE DISCIPLINES
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {[
                    "System Design",
                    "UI Engineering",
                    "Performance",
                    "Backend development",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-border px-2 py-1 rounded-sm bg-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Capabilities Section --- */}
      <section className="py-24 px-6 md:px-12 bg-background border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <span className="font-mono text-xs px-2 py-1 rounded-full uppercase text-muted-foreground">
              [ Capabilities ]
            </span>
          </div>

          <div className="col-span-1 md:col-span-3 grid grid-cols-1 gap-12">
            {[
              {
                title: "Product Design",
                desc: "Establishing the visual language. I design systems that ensure consistency, accessibility, and brand coherence across all touchpoints.",
              },
              {
                title: "Frontend Engineering",
                desc: "Translating vision into reality. I build responsive, high-performance interfaces using modern frameworks and best practices.",
              },
              {
                title: "Full-Stack Solutions",
                desc: "The backbone of the product. Architecting secure databases and scalable APIs that power seamless user experiences.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group border-t border-border pt-8 hover:pl-4 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowDownRight className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="max-w-lg text-muted-foreground text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer CTA --- */}
      <footer className="h-[60vh] md:h-[70vh] flex flex-col justify-between bg-primary text-primary-foreground p-6 md:p-12 relative overflow-hidden mt-0">
        <div className="flex justify-between w-full font-mono text-xs tracking-widest z-10">
          <span className="uppercase">Availability: Open</span>
          <span>aaronvendedor@gmail.com</span>
        </div>

        <div className="z-10 relative">
          <h2 className="text-[12vw] leading-[0.8] font-medium tracking-tighter mb-4">
            Let&apos;s Build
          </h2>
          <div className="flex items-center gap-4 md:gap-12">
            <h2 className="text-[12vw] leading-[0.8] font-medium tracking-tighter">
              The Future
            </h2>
            <div className="w-[10vw] h-[10vw] bg-background rounded-full flex items-center justify-center text-foreground hover:scale-125 transition-transform duration-500 cursor-pointer shadow-2xl">
              <ArrowRight className="w-1/2 h-1/2 -rotate-45" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

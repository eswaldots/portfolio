"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

// --- UI Components (Locales) ---

const RevealText = ({
  children,
  delay = 0,
  className = "",
  priority = false, // Nuevo prop para forzar animación inmediata
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  priority?: boolean;
}) => {
  return (
    <div className={`overflow-hidden inline-block align-bottom ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        // Si es prioritario (título), anima siempre. Si no, espera al scroll.
        animate={priority ? { y: 0 } : undefined}
        whileInView={!priority ? { y: 0 } : undefined}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay }}
        className="block will-change-transform"
      >
        {children}
      </motion.span>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 aspect-[4/5] flex flex-col border border-border bg-card shadow-2xl relative group overflow-hidden"
    >
      {/* Top Section */}
      <div className="h-[30%] bg-background flex flex-col items-center justify-center border-b border-border z-20 relative">
        <span className="font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1 md:mb-2">
          THIS IS
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-center leading-none">
          Aaron Avila
        </h2>
      </div>

      {/* Bottom Section: Image */}
      <div className="h-[70%] relative bg-primary overflow-hidden">
        {/*<Image
          src="/profile.jpg"
          alt="Aaron Avila - Creative Developer Portrait"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority // LCP Optimization
        /> */}
        <div className="absolute bottom-4 left-4 text-white/50 text-[10px] tracking-widest uppercase z-10">
          [ REF: 001-DEV ]
        </div>
      </div>
    </motion.div>
  );
};

// --- Main View Component ---

export default function AboutView() {
  return (
    <main className="bg-background text-foreground min-h-screen font-sans overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Texture Overlay */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 bg-foreground mix-blend-overlay"
        aria-hidden="true"
      ></div>

      {/* --- Header Section --- */}
      <header className="pt-32 pb-16 px-6 md:px-12 border-b border-border">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 text-muted-foreground font-mono text-xs mb-4">
            <span>01</span>
            <span className="w-12 h-[1px] bg-border"></span>
            <span>OVERVIEW</span>
          </div>

          <h1 className="flex flex-col items-start w-full">
            {/* CORRECCIÓN: Agregamos priority={true} para asegurar que se vea de inmediato */}
            <RevealText
              priority
              className="text-[10vw] md:text-[8vw] leading-[0.85] font-medium tracking-tighter uppercase text-foreground"
            >
              Digital
            </RevealText>
            <RevealText
              priority
              delay={0.1}
              className="text-[10vw] md:text-[8vw] leading-[0.85] font-medium tracking-tighter uppercase text-muted-foreground"
            >
              Architect
            </RevealText>
          </h1>
        </div>
      </header>

      {/* --- Narrative Grid --- */}
      <section
        className="w-full relative border-b border-border"
        aria-label="Biography"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          <div className="lg:col-span-5 border-r border-border p-8 md:p-12 bg-secondary/30 flex items-center justify-center relative">
            <div className="sticky top-24 w-full">
              <ProfileCard />
              <div className="mt-4 flex justify-between font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                <span>Full Stack Developer</span>
                <span>Est. 2026</span>
              </div>
            </div>
          </div>

          <article className="lg:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-background">
            <h3 className="font-mono text-xs text-primary mb-8 tracking-widest uppercase">
              ● The Mission
            </h3>

            <div className="space-y-8 text-sm md:text-2xl leading-relaxed font-light text-muted-foreground">
              <p>
                <strong className="text-foreground font-medium">
                  Precision meets performance.
                </strong>{" "}
                In a digital landscape cluttered with noise, I build clarity.
                Effective design isn&apos;t just decoration; it&apos;s the
                result of calculating user needs and executing with technical
                rigor.
              </p>
              <p>
                I am a multidisciplinary developer bridging the gap between
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
                <ul className="flex flex-wrap gap-2 mt-1 list-none p-0">
                  {[
                    "System Design",
                    "UI Engineering",
                    "Performance",
                    "Backend development",
                  ].map((tag) => (
                    <li
                      key={tag}
                      className="text-xs border border-border px-2 py-1 rounded-sm bg-background"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* --- Capabilities Section --- */}
      <section
        className="py-24 px-6 md:px-12 bg-background border-b border-border"
        aria-label="Services"
      >
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
                desc: "Establishing the visual language. I design systems that ensure consistency, accessibility, and brand coherence.",
              },
              {
                title: "Frontend Engineering",
                desc: "Translating vision into reality. I build responsive, high-performance interfaces using modern frameworks.",
              },
              {
                title: "Full-Stack Solutions",
                desc: "Architecting secure databases and scalable APIs that power seamless user experiences.",
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
                  <ArrowDownRight
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </div>
                <p className="max-w-lg text-muted-foreground text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="h-[60vh] md:h-[70vh] flex flex-col justify-between bg-primary text-primary-foreground p-6 md:p-12 relative overflow-hidden mt-0">
        <div className="flex justify-between w-full font-mono text-xs tracking-widest z-10">
          <span className="uppercase">Availability: Open</span>
          <a href="mailto:aaronvendedor@gmail.com" className="hover:underline">
            aaronvendedor@gmail.com
          </a>
        </div>

        <div className="z-10 relative">
          <span className="text-[12vw] leading-[0.8] font-medium tracking-tighter mb-4 block">
            Let&apos;s Build
          </span>
          <div className="flex items-center gap-4 md:gap-12">
            <span className="text-[12vw] leading-[0.8] font-medium tracking-tighter block">
              The Future
            </span>
            <div className="w-[10vw] h-[10vw] bg-background rounded-full flex items-center justify-center text-foreground hover:scale-125 transition-transform duration-500 cursor-pointer shadow-2xl">
              <ArrowRight
                className="w-1/2 h-1/2 -rotate-45"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

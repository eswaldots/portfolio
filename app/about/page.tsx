"use client";

import { ArrowDownRight, ArrowRight, Pause, Play } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";

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

// --- "THIS IS" Card Component (Spotify Style) ---
const ThisIsCard = () => {
  const [isPlaying, setIsPlaying] = useState(true);

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
          This Is
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground text-center leading-none">
          Aaron Avila
        </h1>
      </div>

      {/* Bottom Section: Image */}
      <div className="h-[70%] relative bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" />

        {/* Creative Touch: Audio Visualizer Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-12 flex items-end justify-center gap-1 pb-4 mix-blend-difference z-10 px-12 opacity-80">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-white"
              animate={{
                height: isPlaying ? [10, Math.random() * 40 + 10, 10] : 4,
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05,
              }}
            />
          ))}
        </div>

        {/* Play Button Interaction */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-20"
        >
          {isPlaying ? (
            <Pause size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" className="ml-0.5" />
          )}
        </button>
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
            <span>PROFILE</span>
          </div>
          <RevealText className="text-[10vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase text-foreground">
            The Creative
          </RevealText>
          <div className="flex items-center gap-4">
            <RevealText
              delay={0.1}
              className="text-[10vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase text-muted-foreground"
            >
              Mindset
            </RevealText>
          </div>
        </div>
      </header>

      {/* --- Narrative Grid with "This Is" Card --- */}
      <section className="w-full relative border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          {/* Left: The "Spotify-Style" Card */}
          <div className="lg:col-span-5 border-r border-border p-8 md:p-12 bg-secondary/30 flex items-center justify-center relative">
            <div className="sticky top-24 w-full">
              <ThisIsCard />
              <div className="mt-4 flex justify-between font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                <span>Generative Playlist</span>
                <span>Est. 2026</span>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-background">
            <h2 className="font-mono text-xs text-primary mb-8 tracking-widest uppercase">
              ● The Narrative
            </h2>

            <div className="space-y-8 text-lg md:text-2xl leading-relaxed font-light text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">
                  Like a perfectly curated playlist,
                </span>{" "}
                great design requires rhythm, balance, and unexpected moments of
                brilliance.
              </p>
              <p>
                I am Aaron Avila, a multidisciplinary designer bridging the gap
                between aesthetic vision and technical excellence. My work is
                not just visual; it's experiential. I compose digital journeys
                that feel intuitive yet memorable.
              </p>
              <p>
                From the opening track of strategy to the final master of
                development, I ensure every pixel hits the right note.
              </p>
            </div>

            <div className="mt-16 py-8 border-y border-border grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  TOP GENRES
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Brutalism", "Minimalism", "Swiss Style"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-border px-2 py-1 rounded-sm bg-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  TOTAL STREAMS
                </span>
                <span className="text-xl font-bold">40+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Capabilities Section --- */}
      <section className="py-24 px-6 md:px-12 bg-background border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <span className="font-mono text-xs border border-border px-2 py-1 rounded-full uppercase bg-secondary text-secondary-foreground">
              [ Tracks / Services ]
            </span>
          </div>

          <div className="col-span-1 md:col-span-3 grid grid-cols-1 gap-12">
            {[
              {
                title: "Art Direction",
                desc: "Setting the visual tone. Typography, layout, and photography that speaks louder than lyrics.",
              },
              {
                title: "Web Experience",
                desc: "Creating the stage. Award-winning interfaces that guide users through the performance.",
              },
              {
                title: "Development",
                desc: "The engineering. Clean, performant code that ensures the show runs without a glitch.",
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
        <div className="flex justify-between w-full font-mono text-xs uppercase tracking-widest z-10">
          <span>On Repeat</span>
          <span>hello@aaronavila.com</span>
        </div>

        <div className="z-10 relative">
          <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter mb-4">
            Let&apos;s Make
          </h2>
          <div className="flex items-center gap-4 md:gap-12">
            <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter">
              A Hit
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

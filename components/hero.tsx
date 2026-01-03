"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import Link from "next/link";

// --- Utility: Masked Reveal Animation ---
const RevealText = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay }}
    >
      {children}
    </motion.div>
  </div>
);

// --- Utility: Animated Separator ---
const LineSeparator = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay }}
    className="w-full h-[1px] bg-border origin-left"
  />
);

const scrolltoHash = function (elementId: string) {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};

function Hero() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      {/* 1. Texture & Atmosphere (Anti-Slop) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-foreground mix-blend-overlay z-10" />

      {/* 2. Brutalist Grid Background */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none z-0">
        {[...Array(13)].map((_, i) => (
          <div
            key={i}
            className="border-r border-border/40 h-full w-full hidden md:block first:border-l"
          />
        ))}
      </div>

      {/* 3. Main Content Layer */}
      <div className="relative z-20 h-full flex flex-col justify-between px-4 pt-28 pb-10 md:px-12 md:pb-12">
        {/* Top Meta-Data Row */}
        <div className="flex justify-between items-start font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
          <div className="flex flex-col gap-1">
            <RevealText delay={1.2}>[ Status: Active ]</RevealText>
            <RevealText delay={1.3}>Based in Venezuela</RevealText>
          </div>
          <div className="text-right hidden sm:block">
            <RevealText delay={1.4}>Design + Engineering</RevealText>
            <RevealText delay={1.5}>©2026</RevealText>
          </div>
        </div>

        {/* Massive Typography Section */}
        <div className="flex flex-col justify-center flex-1 gap-4 md:gap-0 mt-8 md:mt-0">
          {/* Row 1: "CREATIVE" */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
            <span className="font-mono text-xs text-primary hidden md:block">
              (001)
            </span>
            <h1 className="text-[13vw] md:text-[11vw] leading-[0.85] font-medium tracking-tighter uppercase text-foreground mix-blend-exclusion">
              <RevealText delay={0.2}>Creative</RevealText>
            </h1>
            <div className="hidden md:block h-[1px] flex-1 bg-foreground mt-12 opacity-20"></div>
          </div>

          {/* Row 2: "DEVELOPER" (Asymmetric Layout) */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full relative">
            {/* The "Manifesto" / Subtext - Purposefully placed off-center */}
            <div className="order-2 md:order-1 max-w-sm mt-6 md:mt-0 md:mb-4 md:ml-12">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed text-balance"
                >
                  An experienced web and UI/UX designer crafting memorable
                  digital experiences for brands{" "}
                  <span className="text-foreground font-semibold">
                    OF ALL SIZES
                  </span>
                  .
                </motion.p>
              </div>
            </div>

            {/* The Big Text */}
            <h1 className="text-[13vw] md:text-[11vw] leading-[0.85] font-medium tracking-tighter uppercase text-right order-1 md:order-2 self-end">
              <RevealText delay={0.4}>Developer</RevealText>
            </h1>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex justify-between items-end w-full">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
              onClick={() => {
                scrolltoHash("work");
              }}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors cursor-pointer group"
            >
              <ArrowRight
                size={20}
                className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
              />
            </motion.div>
            <div className="hidden md:block overflow-hidden">
              <RevealText
                delay={1.7}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
              >
                See Projects
              </RevealText>
            </div>
          </div>

          <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground flex flex-col items-end gap-1">
            <LineSeparator delay={1.8} />
            <RevealText delay={2.0}>Scroll to Explore</RevealText>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Hero };

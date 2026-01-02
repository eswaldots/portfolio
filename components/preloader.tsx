"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

// --- DIGIT COMPONENT ---
// Handles the vertical slide animation (0 -> 1 -> ... -> 9)
// The "overflow-hidden" ensures we only see the current number
const Digit = ({ value }: { value: string }) => (
  <div className="relative h-[1em] w-[0.6em] overflow-hidden inline-block text-center align-top">
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // "Rabbit" snappy easing
        className="absolute inset-0 flex items-center justify-center"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  </div>
);

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Logic: Count from 0 to 100
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Quartic Ease Out for a robotic, mechanical stop
      const ease = 1 - Math.pow(1 - progress, 4);

      const currentCount = Math.floor(0 + (100 - 0) * ease);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 500);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  // Format count to always be 2 or 3 digits (e.g., "00", "99", "100")
  const digits = count.toString().padStart(2, "0").split("");

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      // USING YOUR VARIABLES:
      // Background -> --primary (#161719)
      // Text -> --primary-foreground (White)
      className="fixed inset-0 z-[50] flex flex-col justify-between p-6 md:p-12 bg-primary text-primary-foreground font-sans overflow-hidden"
    >
      {/* --- TOP ROW: Grid Layout typical of Rabbit OS --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 text-xs font-medium uppercase tracking-tight border-b border-primary-foreground/20 pb-6">
        {/* 1. Brand / Status */}
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground">System</span>
          <div className="flex items-center gap-2">
            {/* Accent Color using --destructive for the "Rabbit Orange" look */}
            <div className="w-2 h-2 bg-destructive animate-pulse" />
            <span>Booting...</span>
          </div>
        </div>

        {/* 2. Empty or Info */}
        <div className="hidden md:flex flex-col gap-2">
          <span className="text-muted-foreground">Ref</span>
          <span>XJ-900</span>
        </div>
      </div>

      {/* --- CENTER: BIG COUNTER --- */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="relative flex items-baseline leading-none tracking-tighter">
          {/* The Number */}
          <span className="text-[25vw] md:text-[20rem] font-medium text-primary-foreground flex">
            {digits.map((digit, index) => (
              <Digit key={`${index}-${digit}`} value={digit} />
            ))}
          </span>

          {/* The Percent Sign - Colored with --destructive */}
          <span className="text-[4vw] md:text-[4rem] text-destructive absolute top-4 -right-8 md:-right-16 font-bold">
            %
          </span>
        </div>
      </div>

      {/* --- BOTTOM ROW --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4 text-xs font-medium uppercase tracking-tight border-t border-primary-foreground/20 pt-6">
        {/* Intro */}
        <div className="md:col-span-2 flex flex-col gap-1">
          <span className="text-muted-foreground">Action</span>
          <span>Loading Modules / Assets</span>
        </div>

        {/* Date / Copyright */}
        <div className="md:col-start-4 flex flex-col gap-1 md:text-right">
          <span className="text-muted-foreground">Session</span>
          <span>{new Date().getFullYear()} — V.1.0</span>
        </div>
      </div>

      {/* --- BACKGROUND GRID TEXTURE (Subtle) --- */}
      {/* Uses --primary-foreground with very low opacity to create a grid on the dark background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--primary-foreground) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </motion.div>
  );
}

"use client";

import { ReactNode, useEffect, useState } from "react";
import "lenis/dist/lenis.css";
import { AnimatePresence, motion } from "motion/react";
import Preloader from "@/components/preloader";
import ReactLenis from "lenis/react";
import { Header } from "@/components/header";
import { useUIStore } from "@/store/ui-store";

export default function LayoutView({ children }: { children: ReactNode }) {
  const { isLoading, setIsLoading } = useUIStore();

  // Optional: Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);
  return (
    <>
      <ReactLenis options={{ wheelMultiplier: 0.7 }} />
      <main>
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        <motion.div
          key={isLoading ? "loading-state" : "loaded-state"}
          className={isLoading ? "opacity-0" : "opacity-100"}
        >
          <Header />
          {children}
        </motion.div>
      </main>
    </>
  );
}

"use client";

import { ReactNode, useEffect, useState } from "react";
import "lenis/dist/lenis.css";
import { AnimatePresence } from "motion/react";
import Preloader from "@/components/preloader";
import ReactLenis from "lenis/react";
import { Header } from "@/components/header";

export default function LayoutView({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

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

        {/* 
          We render the content immediately but it's hidden under the z-index of the preloader.
          Alternatively, you can only render it (!isLoading && ...) 
          if you want to delay the DOM paint.
      */}
        {!isLoading && (
          <div className={isLoading ? "h-screen overflow-hidden" : ""}>
            <Header />
            {children}
          </div>
        )}
      </main>
    </>
  );
}


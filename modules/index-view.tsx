"use client";

import { Header } from "@/components/header";
import ReactLenis, { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
import "lenis/dist/lenis.css";

export default function LayoutView({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <>
      <main className="relative min-h-screen bg-transparent [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ReactLenis
          root
          ref={lenisRef}
          options={{
            wheelMultiplier: 0.8,
            smoothWheel: true,
            lerp: 0.1,
            duration: 1.2,
          }}
        />
        <Header key="header" />
        {children}
      </main>
    </>
  );
}

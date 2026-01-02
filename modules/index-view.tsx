"use client";

import { Header } from "@/components/header";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
import "lenis/dist/lenis.css";

export default function LayoutView({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="relative min-h-screen bg-transparent [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ReactLenis
          root
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


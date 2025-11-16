"use client";

import { Hero } from "@/components/hero";
import Initial from "@/components/initial";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <>
      <ReactLenis root />

      <Initial />
      <Hero />
    </>
  );
}

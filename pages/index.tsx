"use client";

import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import ReactLenis, { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef } from "react";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
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
    <Fragment key={"home"}>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Hero key={"hero"} />
      <About />
      <Experience />
      {/* <Projects /> */}
    </Fragment>
  );
}

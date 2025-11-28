"use client";

import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Background, useBackgroundStore } from "@/lib/store";
import { useInView } from "motion/react";
import { useEffect, useEffectEvent, useRef } from "react";

export default function Home() {
  const cardRef = useRef(null);

  const { setBackground } = useBackgroundStore((e) => e.actions);

  const set = useEffectEvent((option: Background) => {
    setBackground(option);
  });

  const isCardInView = useInView(cardRef, {
    amount: 0.2,
    margin: "600px 0px 0px 0px",
  });

  useEffect(() => {
    if (isCardInView) {
      set("white");
    } else {
      set("dark");
    }
  }, [isCardInView]);

  return (
    <div className="z-20 bg-primary [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div
        className="relative h-screen"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 h-screen w-full">
          <Hero key={"hero"} />
        </div>
      </div>

      <div
        ref={cardRef}
        className="shadow-2xl rounded-t-4xl bg-background rounded-b-4xl"
      >
        <About />
        <Experience />
      </div>

      <div
        className="relative h-screen"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 h-screen w-full">
          <Footer />
        </div>
      </div>

      {/* <Projects /> */}
    </div>
  );
}

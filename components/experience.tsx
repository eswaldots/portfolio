import { motion } from "motion/react";
import { TextAnimate } from "./ui/text-animate";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import Lenis from "lenis";

function Experience() {
  const scrollWrapper = useRef(null);
  const scrollContent = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollWrapper.current || undefined,
      content: scrollContent.current || undefined,
      orientation: "horizontal",
      gestureOrientation: "horizontal",
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-screen h-screen font-sans px-6 sm:px-20 mt-16 py-12 space-y-16 rounded-b-3xl">
      <div className="w-full max-w-5xl mx-auto space-y-16">
        <div className="overflow-y-hidden">
          <TextAnimate animation="slideUp" by="line" className="text-3xl sm:text-[10rem] whitespace-nowrap w-full tracking-tight font-medium text-primary">
            Trabajos
          </TextAnimate>
        </div>
        <div className="rounded-xl bg-secondary h-[36rem] w-[32rem]">
        </div>
      </div>



    </div>
  );
}

export { Experience };

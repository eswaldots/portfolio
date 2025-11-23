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
    <div className="w-screen h-screen font-sans px-6 sm:px-20 pb-[100vh] py-12 space-y-16 rounded-b-3xl">
      <div className="w-full flex items-center overflow-y-hidden h-fit">
        <TextAnimate animation="slideUp" by="line" className="text-3xl sm:text-[8.8vw] whitespace-nowrap w-full uppercase tracking-tighter font-semibold text-primary">
          Trabajos recientes
        </TextAnimate>
      </div>

      <div
        ref={scrollWrapper}
        className="relative w-[400vh] overflow-x-auto hide-scrollbar"
      >
        <div ref={scrollContent} className="flex gap-12">
          <motion.div whileInView={{ opacity: 1 }} transition={{ type: "spring" }} viewport={{ amount: 0.5 }} initial={{ opacity: 0 }} className="w-[100vw] bg-secondary rounded-xl p-8 h-[80vh] flex flex-col justify-end items-start relative gap-2 overflow-hidden">
            <div className="m-auto flex items-center gap-6">
              <Image src="/booster.png" alt="booster" width={2000} height={2000} className="size-48 rounded-4xl shadow-sm z-50" />
            </div>


            <div className="space-y-2">
              <p className="tracking-tighter text-muted-foreground">Fullstack developer</p>
              <p className="tracking-tighter text-3xl font-medium">Booster AI</p>
            </div>
          </motion.div>

          <motion.div whileInView={{ opacity: 1 }} transition={{ type: "spring" }} viewport={{ amount: 0.5 }} initial={{ opacity: 0 }} className="w-[100vw] bg-secondary rounded-xl p-8 h-[80vh] flex flex-col justify-end items-start relative gap-2 overflow-hidden">
            <div className="m-auto flex items-center gap-6">
              <Image src="/booster.png" alt="booster" width={2000} height={2000} className="size-48 rounded-4xl shadow-sm z-50" />
            </div>


            <div className="space-y-2">
              <p className="tracking-tighter text-muted-foreground">Fullstack developer</p>
              <p className="tracking-tighter text-3xl font-medium">Booster AI</p>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}

export { Experience };

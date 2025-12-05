import { TextAnimate } from "@/components/ui/text-animate";
import { useBackgroundStore } from "@/lib/store";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function Page() {
  const { setBackground } = useBackgroundStore((e) => e.actions);

  useEffect(() => {
    setBackground("dark");
  }, [setBackground]);

  return (
    <>
      <div className="w-screen bg-primary flex items-center flex-col justify-center gap-48 pb-[25vh] px-20">
        <motion.main className="grid place-content-center w-full py-[10vh] rounded-[3rem] bg-white relative mt-[15vh]">
          <div className="flex flex-col gap-12 items-center text-center">
            <div className="overflow-y-hidden">
              <TextAnimate
                by="character"
                animation="slideUp"
                duration={0.5}
                className="font-extrabold tracking-widest text-8xl font-sans"
                once
              >
                THIS IS
              </TextAnimate>
            </div>

            <motion.div className="size-[40vh] bg-black z-10"></motion.div>

            <div className="overflow-y-hidden z-10">
              <TextAnimate
                by="character"
                animation="slideUp"
                once
                className="text-black z-10 font-semibold tracking-tight font-sans text-8xl"
                delay={0.6}
              >
                Aaron Avila
              </TextAnimate>
            </div>
          </div>

          <div className="w-full h-1/2 absolute bottom-0 bg-orange-500 rounded-b-[3rem]"></div>
        </motion.main>
        <main className=" flex flex-col justify-center">
          <div className="overflow-y-hidden py-3">
            <TextAnimate
              by="character"
              animation="slideUp"
              className="font-medium tracking-tight text-9xl font-sans text-primary-foreground"
              once
            >
              Aaron is a a designer, storyteller, and thinker. He has gift for
              finding
            </TextAnimate>
          </div>

          <div className="overflow-y-hidden">
            <TextAnimate
              by="character"
              animation="slideUp"
              className="font-medium tracking-tight text-9xl font-sans text-primary-foreground"
              once
            >
              meaning and using it to transform
            </TextAnimate>
          </div>

          <div className="overflow-y-hidden">
            <TextAnimate
              by="character"
              animation="slideUp"
              className="font-medium tracking-tight text-9xl font-sans text-primary-foreground"
              once
            >
              brands and products.
            </TextAnimate>
          </div>
        </main>

        <div className="flex items-start justify-between w-full">
          <div className="gap-24 grid">
            <p className="text-primary-foreground font-sans text-4xl leading-[1.25] max-w-[45vw]">
              Today, design plays one of the most important roles in a company’s
              growth. It’s a powerful tool that will help highlight a company’s
              strengths, enhance connections with its audience, increase brand
              loyalty, and set it apart from competitors. (Value) (Approach) I
              believe that quality is always valued more than quantity. Every
              detail counts. I work closely with my clients, diving deep into
              each task to focus on what really matters and turn the best ideas
              into real solutions that will bring maximum benefit.
            </p>
            <p className="text-primary-foreground font-sans text-4xl leading-[1.25] max-w-[45vw]">
              From the ground up, I define, design, and launch work that shapes
              a brand&apos;s future. The more ambitious the brand, the better.
            </p>
          </div>

          <div className="rounded-3xl h-[80vh] w-[40vw] bg-muted-foreground"></div>
        </div>
        <main className="w-full">
          <div className="w-full bg-orange-500 rounded-3xl flex items-center p-16 justify-between group hover:bg-orange-600 transition-colors">
            <div className="overflow-y-hidden">
              <TextAnimate
                by="character"
                animation="slideUp"
                className="font-medium tracking-tight text-9xl font-sans text-primary-foreground"
                once
              >
                Work with me
              </TextAnimate>
            </div>

            <ArrowRight className="text-primary-foreground size-24 group-hover:-translate-x-8 transition-all" />
          </div>
        </main>
      </div>
    </>
  );
}

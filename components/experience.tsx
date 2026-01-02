import { TextAnimate } from "./ui/text-animate";
import { motion, useInView } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import TypewriterTitle from "./kokonutui/type-writer";
import { useRef } from "react";

function Experience() {
  const boosterRef = useRef(null);
  const isBoosterInView = useInView(boosterRef);

  return (
    <motion.div className="max-w-screen w-full font-sans px-6 sm:px-20 mt-16 py-12 space-y-64 relative">
      <div className="w-full grid">
        <div className="overflow-y-hidden">
          <TextAnimate
            animation="slideUp"
            by="character"
            className="text-3xl sm:text-[10rem] whitespace-nowrap w-full tracking-tight text-primary"
          >
            Work
          </TextAnimate>
        </div>
      </div>

      <motion.div className="flex items-center justify-between">
        <div className="space-y-6">
          <div className="overflow-y-hidden" ref={boosterRef}>
            {isBoosterInView && (
              <TypewriterTitle
                hideCursorOnComplete={true}
                className="text-muted-foreground text-sm font-mono mr-auto tracking-tight h-9"
                sequences={[
                  {
                    text: "[PROJECT_01 // 2025]",
                    deleteAfter: false,
                  },
                ]}
              />
            )}
            <h1 className="text-3xl tracking-tight text-primary font-medium">
              Booster AI
            </h1>
          </div>

          <p className="text-base text-muted-foreground max-w-sm font-mono leading-[1] tracking-tight uppercase font-light">
            Software to repair crypto miners with AI
          </p>

          <Button
            className="font-mono shadow-none border-primary hover:text-primary-foreground hover:bg-primary font-normal text-sm rounded-full tracking-tight"
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="https://miner.repair" target="_blank">
              VISIT_PROJECT
            </Link>
          </Button>
        </div>

        <motion.div className="w-[50vw] h-[90vh] bg-primary flex items-end justify-end">
          <div className="rounded-tl-xl w-[30vw] bg-primary-foreground h-[50vh]"></div>
        </motion.div>
      </motion.div>

      <div className="pt-16 flex items-start w-full justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
        >
          <div className="size-[30vw] bg-muted-foreground relative">
            <Image
              src={"/fashion.webp"}
              alt="Link"
              width={800}
              height={800}
              className="size-[30vw] object-cover object-top"
            />

            <motion.div
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center cursor-pointer"
            >
              <h1 className="z-10 text-white tracking-tight text-4xl font-medium font-sans">
                Avila Beauty
              </h1>
              <p className="text-white text-lg tracking-tight">
                Changing the novelty
              </p>

              <Button
                className="my-4 text-sm tracking-tight rounded-full font-mono font-light"
                disabled
                size="lg"
              >
                COMING SOON
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="pt-96"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.7 }}
        >
          <div className="h-[40vw] w-[30vw] bg-muted-foreground relative overflow-y-hidden">
            {/* Removed expensive backdrop-blur-lg */}
            <div className="absolute z-10 inset-0 bg-black/20" />
            <Image
              src={"/weather.jpg"}
              alt="Link"
              width={800}
              height={800}
              className="absolute inset-0 object-cover blur-[2px]" // Static blur is cheaper
            />

            <motion.div
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center cursor-pointer"
            >
              <h1 className="z-10 text-white tracking-tight text-4xl font-medium font-sans">
                Weathify
              </h1>
              <p className="text-white text-lg tracking-tight">
                Change your wallpaper with the weather
              </p>

              <Button
                className="my-4 text-sm tracking-tight rounded-full font-mono font-light"
                disabled
                size="lg"
              >
                COMING SOON
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export { Experience };

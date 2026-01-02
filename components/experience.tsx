import { TextAnimate } from "./ui/text-animate";
import { motion, useInView } from "motion/react";
import posthog from "posthog-js";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import TypewriterTitle from "./kokonutui/type-writer";
import { useRef } from "react";

function Experience() {
  const boosterRef = useRef(null);
  const isBoosterInView = useInView(boosterRef);

  return (
    <motion.div className="max-w-screen w-full font-sans px-6 sm:px-20 mt-16 py-12 md:space-y-64 relative">
      <div className="w-full grid">
        <div className="overflow-y-hidden">
          <TextAnimate
            animation="slideUp"
            by="character"
            className="text-8xl md:text-[10rem] whitespace-nowrap w-full tracking-tight text-primary md:mb-0 mb-12"
          >
            Work
          </TextAnimate>
        </div>
      </div>

      <motion.div className="flex items-center justify-between md:flex-row flex-col-reverse">
        <div className="space-y-4 md:space-y-6 md:w-fit w-full">
          <div className="overflow-y-hidden space-y-0" ref={boosterRef}>
            {isBoosterInView && (
              <TypewriterTitle
                hideCursorOnComplete={true}
                className="text-muted-foreground text-sm font-mono mr-auto tracking-tight h-9"
                sequences={[
                  {
                    text: "[PROJECT_01 // 2026]",
                    deleteAfter: false,
                  },
                ]}
              />
            )}
            <h1 className="text-3xl tracking-tight text-primary font-medium">
              Booster AI
            </h1>

            <p className="md:text-base text-sm text-muted-foreground max-w-sm font-mono leading-[1] tracking-tight uppercase font-light leading-relaxed my-3">
              Software to repair crypto miners with AI
            </p>
          </div>

          <Button
            className="font-mono shadow-none border-primary hover:text-primary-foreground hover:bg-primary font-normal text-sm rounded-full tracking-tight"
            size="lg"
            variant="outline"
            asChild
          >
            <Link
              href="https://miner.repair"
              target="_blank"
              onClick={() =>
                posthog.capture("clicked_project_link", {
                  project: "Booster AI",
                  url: "https://miner.repair",
                })
              }
            >
              VISIT_PROJECT
            </Link>
          </Button>
        </div>

        <motion.div className="w-full md:w-[50vw] md:px-0 px-6 h-[50vh] md:mb-0 mb-8 md:rounded-none rounded-xl md:h-[90vh] bg-primary flex items-center justify-center md:items-end md:justify-end">
          <div className="md:rounded-tl-xl w-full rounded-3xl md:rounded-none md:w-[30vw] bg-primary-foreground h-[25vh] md:h-[50vh]"></div>
        </motion.div>
      </motion.div>

      <div className="pt-16 flex md:flex-row flex-col items-start justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          className="md:w-fit w-full"
        >
          <div className="w-full md:rounded-none rounded-xl  h-[50vh] md:size-[30vw] bg-muted-foreground relative">
            <Image
              src={"/fashion.webp"}
              alt="Link"
              width={800}
              height={800}
              className="size-full md:size-[30vw] object-cover object-top md:rounded-none rounded-xl"
            />

            <div className="transition-opacity opacity-0 hover:opacity-100 absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center cursor-pointer">
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
            </div>
          </div>

          <div className="space-y-4 mt-6 md:space-y-6 md:hidden w-full">
            <div className="overflow-y-hidden space-y-0">
              <TypewriterTitle
                hideCursorOnComplete={true}
                className="text-muted-foreground text-sm font-mono mr-auto tracking-tight h-9"
                sequences={[
                  {
                    text: "[PROJECT_02 // 2025]",
                    deleteAfter: false,
                  },
                ]}
              />
              <h1 className="text-3xl tracking-tight text-primary font-medium">
                Avila Beauty
              </h1>

              <p className="md:text-base text-sm text-muted-foreground max-w-sm font-mono leading-[1] tracking-tight uppercase font-light leading-relaxed my-3">
                Changing the novelty
              </p>

              <Button
                className="font-mono shadow-none border-primary hover:text-primary-foreground hover:bg-primary font-normal text-sm rounded-full tracking-tight"
                size="lg"
                disabled={true}
                variant="outline"
                asChild
              >
                COMING SOON
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="pt-6 md:pt-96 md:w-fit w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.7 }}
        >
          <div className="md:rounded-none rounded-xl md:h-[40vw] w-full h-[50vh] md:w-[30vw] bg-muted-foreground relative overflow-y-hidden">
            {/* Removed expensive backdrop-blur-lg */}
            <div className="absolute z-10 inset-0 bg-black/20" />
            <Image
              src={"/weather.jpg"}
              alt="Link"
              width={800}
              height={800}
              className="absolute inset-0 object-cover blur-[2px]" // Static blur is cheaper
            />

            <div className="transition-opacity opacity-0 hover:opacity-100 absolute inset-0 bg-black/50 z-50 flex flex-col items-center justify-center cursor-pointer">
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
            </div>
          </div>

          <div className="space-y-4 mt-6 md:space-y-6 md:hidden w-full">
            <div className="overflow-y-hidden space-y-0">
              <TypewriterTitle
                hideCursorOnComplete={true}
                className="text-muted-foreground text-sm font-mono mr-auto tracking-tight h-9"
                sequences={[
                  {
                    text: "[PROJECT_03 // 2026]",
                    deleteAfter: false,
                  },
                ]}
              />
              <h1 className="text-3xl tracking-tight text-primary font-medium">
                Weathify
              </h1>

              <p className="md:text-base text-sm text-muted-foreground max-w-sm font-mono leading-[1] tracking-tight uppercase font-light leading-relaxed my-3">
                Change your wallpaper with the weather
              </p>

              <Button
                className="font-mono shadow-none border-primary hover:text-primary-foreground hover:bg-primary font-normal text-sm rounded-full tracking-tight"
                size="lg"
                disabled={true}
                variant="outline"
                asChild
              >
                COMING SOON
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export { Experience };

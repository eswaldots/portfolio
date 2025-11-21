import Link from "next/link";
import { TextAnimate } from "./ui/text-animate";

function Hero() {
  return (
    <main className="sticky top-0 z-10 bg-background w-screen h-screen flex flex-col justify-between sm:justify-end sm:px-20 px-6 py-12 sm:pt-22 pt-28 sm:py-22 font-sans">
      <div className="overflow-y-hidden h-fit sm:py-0 py-1">
        <TextAnimate
          animation="slideUp"
          delay={0.1}
          by="line"
          className="sm:hidden block w-px text-2xl leading-none font-medium tracking-tighter"
        >
          Fullstack developer
        </TextAnimate>
      </div>

      <div className="w-full flex justify-start sm:justify-end h-fit items-center overflow-y-hidden sm:py-0 sm:my-6 my-0">
        <TextAnimate
          animation="slideUp"
          by="line"
          className="text-6xl sm:text-9xl font-semibold tracking-tighter"
        >
          Aaron Avila
        </TextAnimate>
      </div>

      <div className="overflow-y-hidden my-6 h-fit sm:block hidden">
        <Link href="mailto:aaronvendedor@gmail.com" className="h-fit">
          <TextAnimate
            animation="slideUp"
            delay={0.1}
            by="line"
            className="cursor-pointer underline text-sm tracking-tighter w-fit"
          >
            aaronvendedor@gmail.com
          </TextAnimate>
        </Link>
      </div>

      <div className="flex sm:justify-between items-start w-full">
        <div className="flex flex-col w-full items-start sm:block hidden">
          <div className="overflow-y-hidden">
            <TextAnimate
              animation="slideUp"
              delay={0.2}
              by="line"
              className=" leading-none text-5xl max-w-sm font-medium tracking-tighter"
            >
              Fullstack developer
            </TextAnimate>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-12 sm:max-w-sm sm:items-end items-start max-w-full">
          <div className="overflow-y-hidden">
            <TextAnimate
              animation="slideUp"
              delay={0.3}
              by="line"
              className="leading-0 text-lg sm:text-xl font-medium tracking-tighter"
            >
              *(ezwal)
            </TextAnimate>
          </div>

          <div className="overflow-y-hidden overflow-x-hidden">
            <TextAnimate
              animation="slideUp"
              delay={0.4}
              by="line"
              className="sm:text-end text-sm sm:text-sm max-w-xs leading-normal tracking-tight"
            >
              Aaron Avila es un ingeniero de software especializado en
              desarrollar y diseñar experiencias digitales unicas.
            </TextAnimate>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Hero };

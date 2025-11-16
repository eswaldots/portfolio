import Link from "next/link"
import { TextAnimate } from "./ui/text-animate"

function Hero() {
  return (
    <main className="w-screen h-screen flex flex-col justify-between sm:justify-end sm:px-24 px-6 py-12 sm:py-32">
      <div className="overflow-y-hidden h-fit sm:py-0 py-1">
        <TextAnimate animation="slideUp" delay={0.10} by="line" className="sm:hidden block w-px text-2xl leading-none font-semibold tracking-tighter">Fullstack developer</TextAnimate>
      </div>

      <div className="w-full flex justify-start sm:justify-end h-fit items-center overflow-y-hidden sm:py-0 sm:my-32 my-0">
        <TextAnimate animation="slideUp" by="line" className="text-6xl sm:text-9xl font-bold tracking-tighter">Aaron Avila</TextAnimate>
      </div>


      <div className="overflow-y-hidden my-6 h-fit sm:block hidden">
        <Link href="mailto:aaronvendedor@gmail.com" className="h-fit">
          <TextAnimate animation="slideUp" delay={0.10} by="line" className="underline after:w-0 hover:cursor-pointer text-base tracking-tighter">aaronvendedor@gmail.com</TextAnimate>
        </Link>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <div className="overflow-y-hidden">
            <TextAnimate animation="slideUp" delay={0.20} by="line" className="sm:block hidden leading-none text-5xl max-w-sm font-semibold tracking-tighter">Fullstack developer</TextAnimate>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-12 max-w-sm sm:items-end items-start">
          <div className="overflow-y-hidden">
            <TextAnimate animation="slideUp" delay={0.30} by="line" className="leading-0 text-lg sm:text-xl font-medium tracking-tighter">*(ezwal)</TextAnimate>
          </div>

          <div className="overflow-y-hidden overflow-x-hidden">
            <TextAnimate animation="slideUp" delay={0.40} by="line" className="sm:text-end text-sm sm:text-base max-w-xs leading-normal tracking-tight">Aaron Avila es un ingeniero de software especializado en desarrollar y diseñar experiencias digitales unicas. Actualmente enfocado en aprender nuevas tecnologías. </TextAnimate>
          </div>
        </div>

      </div>
    </main>
  )
}

export { Hero }

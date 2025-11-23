import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "motion/react"

function Header() {
  const initialDelay = 1;

  return (
    <motion.header
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", delay: initialDelay, damping: 30, stiffness: 100 }}
      className="flex items-center justify-between absolute w-screen top-0 left-0 font-sans px-6 py-6 sm:py-20 sm:px-20 z-40">
      <Link href="/" className="tracking-tight text-base after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-[width] duration-75 ease-in-out after:h-px after:bg-foreground pb-px cursor-pointer relative overflow-y-hidden">
        <h1 className="font-mono">
          INICIO
        </h1>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/resume" className="tracking-tight text-base after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-[width] duration-75 ease-in-out after:h-px after:bg-foreground pb-px cursor-pointer relative overflow-y-hidden">
          <h1 className="font-mono">
            RESUME
          </h1>
        </Link>

        <Button className="bg-primary rounded-full text-base font-normal tracking-tighter font-mono hover:text-primary hover:bg-background border border-primary" size="lg" asChild>
          <Link href="mailto:aaronvendedor@gmail.com">
            Contactame
          </Link>
        </Button>
      </div>
    </motion.header>
  )
}

export { Header }

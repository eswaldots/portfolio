import Link from "next/link";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Menu, XIcon } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useBackgroundStore } from "@/lib/store";
import { cn } from "@/lib/utils";

function AnimatedLink({ children, href }: { children: string; href: string }) {
  const words = children.split("");
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={
        "max-w-96 bg-black w-full items-center justify-center text-white font-mono uppercase tracking-normal font-light relative flex items-baseline gap-2 flex-row relative px-0"
      }
    >
      <div
        className={cn("inline-block overflow-hidden relative transition-all")}
      >
        <div className="flex">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-1-${i}`}
              initial={{ y: 0 }}
              animate={{ y: isHover ? "-100%" : "0%" }}
              transition={{
                duration: 0.3,
                delay: i * 0.02,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              style={{ display: "inline-block" }} // Crucial: Must be inline-block
            >
              {word === " " ? "\u00A0" : word}
            </motion.span>
          ))}
        </div>

        {/* Second Layer (Sliding in from bottom) */}
        <div className="flex absolute inset-0">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-2-${i}`}
              initial={{ y: "100%" }}
              animate={{ y: isHover ? "0%" : "100%" }}
              transition={{
                duration: 0.3,
                delay: i * 0.02,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              style={{ display: "inline-block" }} // Crucial: Must be inline-block
            >
              {word === " " ? "\u00A0" : word}
            </motion.span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function Header() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const close = useEffectEvent(() => setIsOpen(false));

  useEffect(() => {
    close();
  }, [pathname]);

  const background = useBackgroundStore((e) => e.background);

  return (
    <motion.header className="flex items-center justify-end sm:justify-between fixed w-full max-w-screen top-0 left-0 font-sans px-6 py-6 sm:py-20 sm:px-20 z-20 mix-blend-difference">
      {!isMobile && (
        <Link
          href="/"
          className={cn(
            "font-sans transition-colors text-xl cursor-pointer relative overflow-y-hidden text-white",
          )}
        >
          Aaron Avila
        </Link>
      )}
      <div
        className={cn(
          "flex items-center gap-12",
          background === "dark" ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {!isMobile && <AnimatedLink href="/resume">RESUME</AnimatedLink>}

        {!isMobile && <AnimatedLink href="/about">ABOUT</AnimatedLink>}

        {/* <Button className="bg-primary rounded-full text-sm sm:text-base font-normal tracking-tighter font-mono hover:text-primary hover:bg-background border border-primary" size={isMobile ? "default" : "lg"} asChild> */}
        {/*   <Link href="mailto:aaronvendedor@gmail.com"> */}
        {/*     Contactame */}
        {/*   </Link> */}
        {/* </Button> */}

        {isMobile && (
          <motion.button
            onClick={() => {
              setIsOpen(true);
              lenis?.stop();
            }}
            layoutId="burger"
            key="burger"
          >
            <Menu className="size-6 text-primary" strokeWidth={1.5} />
          </motion.button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-screen h-screen bg-transparent backdrop-blur-2xl"
          >
            <motion.button
              onClick={() => {
                lenis?.start();
                setIsOpen(false);
              }}
              layoutId="burger"
              key="burger"
            >
              <XIcon
                className="size-6 absolute top-8 right-6"
                strokeWidth={1.5}
              />
            </motion.button>

            <div className="p-6 py-32 grid gap-2">
              <div className="overflow-y-hidden">
                <Link href="/">
                  <motion.p
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    className="text-4xl tracking-tighter font-medium"
                    transition={{ type: "spring", damping: 20, stiffness: 150 }}
                  >
                    Inicio
                  </motion.p>
                </Link>
              </div>
              <div className="overflow-y-hidden">
                <Link href="/resume">
                  <motion.p
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    className="text-4xl tracking-tighter font-medium"
                    transition={{
                      type: "spring",
                      delay: 0.1,
                      damping: 20,
                      stiffness: 150,
                    }}
                  >
                    Resume
                  </motion.p>
                </Link>
              </div>

              <motion.div
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.2,
                  damping: 20,
                  stiffness: 150,
                }}
                className="w-fit"
              >
                <Button
                  className="bg-primary w-fit my-12 rounded-full text-base font-normal tracking-tighter font-mono hover:text-primary hover:bg-background border border-primary"
                  size="lg"
                  asChild
                >
                  <Link href="mailto:aaronvendedor@gmail.com">Contactame</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export { Header };

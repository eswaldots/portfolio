import Link from "next/link";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Menu, XIcon } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { TextAnimate } from "./ui/text-animate";
import { useBackgroundStore } from "@/lib/store";
import { cn } from "@/lib/utils";

function Header() {
  const initialDelay = 0.5;
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
    <motion.header
      // initial={{ y: -200, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{
      //   type: "spring", delay: initialDelay, damping: 30, stiffness: 150,
      //   ease: [0.76, 0, 0.24, 1]
      // }}
      className="flex items-center justify-end sm:justify-between fixed w-full max-w-screen top-0 left-0 font-sans px-6 py-6 sm:py-20 sm:px-20 z-20"
    >
      {!isMobile && (
        <Link
          href="/"
          className={cn(
            "transition-colors tracking-tight text-xl after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-[width] duration-75 ease-in-out after:h-px after:bg-primary-foreground pb-px cursor-pointer relative overflow-y-hidden",
            background === "dark"
              ? "text-primary-foreground"
              : "text-foreground"
          )}
        >
          <TextAnimate
            className="font-sans"
            once
            delay={initialDelay}
            animation="slideUp"
            by="line"
          >
            Aaron
          </TextAnimate>
        </Link>
      )}
      <div
        className={cn(
          "flex items-center gap-6",
          background === "dark" ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {!isMobile && (
          <Link
            href="/resume"
            className={cn(
              "text-sm after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-[width] duration-75 ease-in-out after:h-px after:bg-primary-foreground pb-px cursor-pointer relative overflow-y-hidden"
            )}
          >
            <TextAnimate
              className="font-sans"
              once
              delay={initialDelay}
              animation="slideUp"
              by="line"
            >
              Resume
            </TextAnimate>
          </Link>
        )}

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

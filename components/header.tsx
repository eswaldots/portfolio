import Link from "next/link";
import posthog from "posthog-js";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Menu, XIcon } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useBackgroundStore } from "@/lib/store";
import { cn } from "@/lib/utils";

function AnimatedLink({
  children,
  href,
  onClick,
}: {
  children: string;
  href: string;
  onClick?: () => void;
}) {
  const words = children.split("");
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      className={
        "max-w-96 bg-black w-full items-center justify-center text-white font-mono uppercase tracking-normal font-light relative flex items-baseline gap-2 flex-row relative px-0 "
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

  const close = useEffectEvent(() => {
    lenis?.start();

    setIsOpen(false);
  });

  useEffect(() => {
    close();
  }, [pathname]);

  const background = useBackgroundStore((e) => e.background);

  return (
    <>
      <motion.header className="fixed max-w-screen top-0 left-0 font-sans z-20 w-full  mix-blend-difference">
        <nav className="flex items-center justify-between w-full px-6 py-6 sm:py-20 sm:px-20">
          <Link
            href="/"
            onClick={() =>
              posthog.capture("clicked_navigation_home", { location: "header" })
            }
            className={cn(
              "font-sans transition-colors text-xl cursor-pointer relative overflow-y-hidden text-white z-50",
            )}
          >
            Aaron Avila
          </Link>
          <div
            className={cn(
              "flex items-center gap-12",
              background === "dark"
                ? "text-primary-foreground"
                : "text-foreground",
            )}
          >
            {!isMobile && (
              <AnimatedLink
                href="/resume"
                onClick={() =>
                  posthog.capture("clicked_navigation_resume", {
                    location: "header",
                  })
                }
              >
                RESUME
              </AnimatedLink>
            )}

            {!isMobile && (
              <AnimatedLink
                href="/about"
                onClick={() =>
                  posthog.capture("clicked_navigation_about", {
                    location: "header",
                  })
                }
              >
                ABOUT
              </AnimatedLink>
            )}

            {/* <Button className="bg-primary rounded-full text-sm sm:text-base font-normal tracking-tighter font-mono hover:text-primary hover:bg-background border border-primary" size={isMobile ? "default" : "lg"} asChild> */}
            {/*   <Link href="mailto:aaronvendedor@gmail.com"> */}
            {/*     Contactame */}
            {/*   </Link> */}
            {/* </Button> */}

            <AnimatePresence>
              {isMobile && !isOpen && (
                <motion.button
                  onClick={() => {
                    setIsOpen(true);
                    lenis?.stop();
                    posthog.capture("opened_mobile_menu");
                  }}
                  key="burgerclo"
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white font-mono tracking-wide font-thin"
                >
                  MENU
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100vh" }}
            exit={{ y: "100vh" }}
            animate={{ y: "0vh" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-screen h-screen bg-background z-30 font-sans flex flex-col"
          >
            <motion.button
              onClick={() => {
                lenis?.start();
                setIsOpen(false);
              }}
              key="burgercloes"
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 font-mono tracking-wide font-thin"
            >
              [ CLOSE ]
            </motion.button>

            <div className="p-6 py-32 grid gap-5">
              <div className="overflow-y-hidden">
                <Link
                  href="/"
                  onClick={() =>
                    posthog.capture("clicked_navigation_home", {
                      location: "mobile_menu",
                    })
                  }
                >
                  <motion.span
                    className="text-5xl tracking-tighter font-medium inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    Home
                  </motion.span>
                </Link>
              </div>
              <div className="overflow-y-hidden">
                <Link
                  href="/about"
                  onClick={() =>
                    posthog.capture("clicked_navigation_about", {
                      location: "mobile_menu",
                    })
                  }
                >
                  <motion.span
                    className="text-5xl tracking-tight font-medium inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.7,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    Resume
                  </motion.span>
                </Link>
              </div>

              <div className="overflow-y-hidden">
                <Link
                  href="/about"
                  onClick={() =>
                    posthog.capture("clicked_navigation_about", {
                      location: "mobile_menu",
                    })
                  }
                >
                  <motion.span
                    className="text-5xl tracking-tight font-medium inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    About
                  </motion.span>
                </Link>
              </div>
            </div>

            <div className="mt-auto px-4 max-w-screen w-full pb-6 flex flex-col gap-4">
              <motion.div
                className="w-full text-center my-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <div className="mx-auto text-xl font-medium">
                  +58 4120196456
                </div>
                <div className="mx-auto text-xl font-medium">
                  aaronvendedor@gmail.com
                </div>
              </motion.div>
              <motion.div className="flex justify-between items-center">
                <Link
                  href="https://linkedin.com/in/aaron-avila-b57919329"
                  className="font-mono font-thin"
                  onClick={() =>
                    posthog.capture("clicked_linkedin_link", {
                      location: "mobile_menu",
                    })
                  }
                >
                  [ LINKEDIN ]
                </Link>

                <Link
                  href="https://github.com/eswaldots"
                  className="font-mono font-thin"
                  onClick={() =>
                    posthog.capture("clicked_github_link", {
                      location: "mobile_menu",
                    })
                  }
                >
                  [ GITHUB ]
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { Header };

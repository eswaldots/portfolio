import { Header } from "@/components/header";
import Terminal from "@/components/terminal";
import Head from "next/head";
import { AnimatePresence, motion } from "motion/react";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AppProps } from "next/app";
import ReactLenis from "lenis/react";

const interFont = Inter({
  variable: "--font-inter",
});

const jebrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
});

export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <>
      <Head>
        <title>Aaron Avila</title>
        <meta name="description" content="Generado por Aaron Avila" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="196x196" />
      </Head>
      <div
        className={`${interFont.variable} ${jebrainsMonoFont.variable} relative`}
      >
        <Header key="header" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={router.asPath}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
                y: 48,
                filter: "blur(18px)",
              },
              enter: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
              exit: {
                opacity: 0,
                y: -40,
                filter: "blur(16px)",
                transition: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                },
              },
            }}
            className="relative min-h-screen overflow-hidden bg-transparent no-scrollbar"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none fixed inset-0 z-40"
              variants={{
                initial: {
                  scaleY: 1,
                  opacity: 0.65,
                  transformOrigin: "top",
                },
                enter: {
                  scaleY: 0,
                  opacity: 0,
                  transformOrigin: "top",
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.32, 1],
                    delay: 0.05,
                  },
                },
                exit: {
                  scaleY: 1.04,
                  opacity: 0.75,
                  transformOrigin: "bottom",
                  transition: {
                    duration: 0.65,
                    ease: [0.4, 0, 0.2, 1],
                  },
                },
              }}
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08), transparent 55%), linear-gradient(120deg, rgba(2, 6, 23, 0.95), rgba(15, 23, 42, 0.92))",
              }}
            />
            <ReactLenis root>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative z-10"
              >
                <Component {...pageProps} />
              </motion.div>
            </ReactLenis>
          </motion.main>
        </AnimatePresence>

        <Terminal key="terminal" />

      </div>
    </>
  );
}

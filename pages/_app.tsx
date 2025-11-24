import { Header } from "@/components/header";
import Terminal from "@/components/terminal";
import Head from "next/head";
import { AnimatePresence, motion } from "motion/react";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AppProps } from "next/app";
import ReactLenis from "lenis/react";
import { useEffect, useState } from "react";

const interFont = Inter({
  variable: "--font-inter",
});

const jebrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
});

export default function App({ Component, pageProps, router }: AppProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000)
  }, [])

  return (
    <>
      <Head>
        <title>Aaron Avila</title>
        <meta name="description" content="Generado por Aaron Avila" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="424x424" />
      </Head>
      <div
        className={`${interFont.variable} ${jebrainsMonoFont.variable} relative`}
      >
        <Header key="header" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={router.asPath}
            className="relative min-h-screen overflow-hidden bg-transparent no-scrollbar"
          >
            <ReactLenis root>
              {/* <motion.div */}
              {/*   initial={{ opacity: 0 }} */}
              {/*   animate={{ opacity: 1 }} */}
              {/*   exit={{ opacity: 0 }} */}
              {/*   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} */}
              {/*   className="relative z-10" */}
              {/* > */}
              {isVisible && <Component {...pageProps} />}
              {/* </motion.div> */}
            </ReactLenis>
          </motion.main>
        </AnimatePresence>

        <Terminal key="terminal" />

      </div>
    </>
  );
}

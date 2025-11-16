import { Header } from '@/components/header';
import Head from 'next/head'
import { AnimatePresence, motion } from 'motion/react'
import "./globals.css"
import { Inter, JetBrains_Mono } from 'next/font/google'
import { AppProps } from 'next/app';

const interFont = Inter({
  variable: "--font-inter"
})

const jebrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono"
})

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Aaron Avila</title>
        <meta name="description" content="Generado por Aaron Avila" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/icon" type="image/png" sizes="32x32" /> */}
      </Head>
      <div className={`${interFont.variable} ${jebrainsMonoFont.variable} relative min-h-screen overflow-hidden`}>
        <Header key="header" />
        <AnimatePresence mode='sync' initial={false}>
          <motion.div
            key={router.asPath}
            style={{ position: "absolute", inset: 0 }}
            initial={{ y: "100%", zIndex: 2 }}
            animate={{ y: 0, zIndex: 2 }}
            exit={{ y: "-10%", opacity: 0.6, zIndex: 1 }}
            transition={{ type: "spring", damping: 24, stiffness: 160 }}
          >
            <Component {...pageProps} />
            {/* <Terminal /> */}
          </motion.div>

        </AnimatePresence>


      </div>
    </>
  )
}


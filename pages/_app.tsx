import { Header } from '@/components/header';
import { AnimatePresence } from 'motion/react'

export default function App({ Component, pageProps, router }: PageProps) {
  return (
    <div className='main'>
      <Header />
      <AnimatePresence mode='wait'>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}


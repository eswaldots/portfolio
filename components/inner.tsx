"use client"

import { motion, Variant } from 'motion/react';
import Link from 'next/link';
import { slide, opacity, perspective } from './anim';
import { ReactNode } from 'react';
import { Header } from './header';

const anim = (variants: Variant) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants
  }
}

export default function Inner({ children }: { children: ReactNode }) {
  return (
    <div className='inner'>
      <motion.div className='slide' {...anim(slide)} />
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <Header />
          {
            children
          }
        </motion.div>
      </motion.div>
    </div>
  )
}

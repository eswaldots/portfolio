"use client";

import { Fragment, ReactNode } from "react";
import ReactLenis from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Inner from "@/components/inner";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <Fragment key={pathname}>
          <Inner>
            {/* <ReactLenis root /> */}
            {children}
          </Inner>

        </Fragment>
      </AnimatePresence>
    </>
  )
}

"use client";

import { motion } from "motion/react";

export default function Initial() {
  return (
    <motion.div
      initial={{
        opacity: 1,
        zIndex: 50
      }}
      animate={{
        opacity: 0,
        zIndex: 0
      }}
      transition={{
        delay: 1,
      }}
      className="absolute inset-0 bg-primary grid place-content-center"
    >
      <div className="overflow-y-hidden">
        <motion.p
          initial={{
            y: 0,
          }}
          animate={{
            y: -20,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: "spring",
            damping: 30, stiffness: 100
          }}
          className="text-primary-foreground font-sans tracking-tight py-0 my-0">Aaron Avila (C) © 2025 - All registered</motion.p>
      </div>
    </motion.div>
  );
}

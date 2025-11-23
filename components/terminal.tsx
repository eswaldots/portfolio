"use client";

import { motion } from "motion/react";
import TypewriterTitle from "./kokonutui/type-writer";

export default function Initial() {
  return (
    <motion.div
      initial={{
        backgroundColor: "var(--foreground)",
        clipPath: "circle(150% at 50% 50%)",
      }}
      animate={{
        clipPath: "circle(0% at 50% 50%)",
      }}
      transition={{
        delay: 5.2,
      }}
      className="fixed top-0 left-0 z-50 w-screen h-screen font-mono text-sm sm:text-lg bg-primary *:tracking-tight font-semibold"
    >
      <div className="p-6 grid">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 justify-start">
            <h1 className="text-primary-foreground">[ezwal@archlinux ~]$</h1>
            <TypewriterTitle
              sequences={[{ text: "cd Dev/portfolio", pauseAfter: 1 }]}
              autoLoop={false}
              hideCursorOnComplete={true}
            />
          </div>
        </div>

        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          transition={{ delay: 2 }}
          className="flex flex-col"
        >

          <div className="flex items-center gap-3 justify-start">
            <h1 className="text-primary-foreground">[ezwal@archlinux portfolio]$</h1>
            <TypewriterTitle
              startDelay={3000}
              sequences={[{ text: "pnpm dev", pauseAfter: 1 }]}
              autoLoop={false}
              hideCursorOnComplete={true}
            />
          </div>
        </motion.div>

        <div className="my-6">
          <motion.div
            className="text-background"
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{ delay: 4 }}
          >
            &gt; portfolio@0.1.0 dev /home/ezwal/Dev/portfolio
          </motion.div>

          <motion.div
            className="text-background"
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{ delay: 4.2 }}
          >
            &gt; next dev
          </motion.div>
        </div>

        <motion.div
          className="text-primary-foreground indent-6 mb-6"
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          transition={{ delay: 4.5 }}
        >
          <strong className="text-[#d3869b]">▲ Next.js 16.0.3</strong>{" "}
          (Turbopack)
          <div>
            <h1>
              - Local:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;http://localhost:3000
            </h1>

            <h1>- Network:&nbsp;&nbsp;&nbsp;&nbsp;http://192.168.1.102:3000</h1>
          </div>
        </motion.div>

        <div className="indent-3">
          <motion.div
            className="text-background"
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{ delay: 4.6 }}
          >
            ✓ Starting...
          </motion.div>

          <motion.div
            className="text-background"
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{ delay: 4.7 }}
          >
            ✓ Ready in 473ms
          </motion.div>

          <motion.div
            className="text-background indent-3"
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{ delay: 4.8 }}
          >
            ○ Compiling / ...
          </motion.div>

          <motion.div
            className="text-background indent-3"
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{ delay: 5 }}
          >
            <strong>GET</strong> / 200 in 4.3s{" "}
            <span className="opacity-50">(compile: 4.0s, render: 287ms)</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

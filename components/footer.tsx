"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

// --- Magnetic Button Component ---
const MagneticButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    x.set(clientX - center.x);
    y.set(clientY - center.y);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="relative"
    >
      <Link
        href={href}
        className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary-foreground text-primary flex items-center justify-center text-sm md:text-lg font-medium tracking-tight uppercase hover:scale-110 transition-transform duration-500 ease-[0.76,0,0.24,1]"
      >
        {children}
      </Link>
    </motion.div>
  );
};

// --- Minimal Link Component ---
const MinimalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="group relative overflow-hidden inline-block">
      <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-full ease-[0.76,0,0.24,1]">
        <span className="font-sans text-xl md:text-2xl tracking-tight text-primary-foreground">
          {children}
        </span>
        <span className="font-sans text-xl md:text-2xl tracking-tight text-primary-foreground absolute top-full left-0">
          {children}
        </span>
      </div>
    </Link>
  );
};

function Footer() {
  return (
    <div className="font-sans bg-primary text-primary-foreground h-screen w-full flex flex-col justify-between px-6 py-8 md:px-16 md:py-16 relative overflow-hidden selection:bg-background selection:text-foreground">
      {/* --- Section 1: The Hook (Clean & Direct) --- */}
      <div className="flex flex-col flex-grow justify-center items-center relative z-10">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          {/* Masked Reveal Title */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-[12vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter"
            >
              Have an idea?
            </motion.h2>
          </div>

          {/* Magnetic CTA */}
          <MagneticButton href="mailto:aaronvendedor@gmail.com">
            Get in touch
          </MagneticButton>
        </div>
      </div>

      {/* --- Section 2: Bottom Bar (Spatial & Organized) --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-12 md:gap-0 z-10">
        {/* Column: Info */}
        <div className="flex flex-col gap-4 md:gap-2">
          <span className="font-mono text-xs uppercase tracking-widest opacity-50 mb-2">
            [ CONTACT ]
          </span>
          <MinimalLink href="mailto:aaronvendedor@gmail.com">
            aaronvendedor@gmail.com
          </MinimalLink>
          <span className="font-sans text-lg opacity-70">+58 412 019 6456</span>
        </div>

        {/* Column: Navigation */}
        <div className="flex flex-col gap-4 md:gap-2 md:text-right">
          <span className="font-mono text-xs uppercase tracking-widest opacity-50 mb-2">
            [ MENU ]
          </span>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <MinimalLink href="/work">Work</MinimalLink>
            <MinimalLink href="/about">About</MinimalLink>
            <MinimalLink href="/resume">Resume</MinimalLink>
          </div>
        </div>

        {/* Column: Socials */}
        <div className="flex flex-col gap-4 md:gap-2 md:text-right">
          <span className="font-mono text-xs uppercase tracking-widest opacity-50 mb-2">
            [ SOCIALS ]
          </span>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <MinimalLink href="https://linkedin.com">LinkedIn</MinimalLink>
            <MinimalLink href="https://github.com">Github</MinimalLink>
            <MinimalLink href="https://twitter.com">Twitter</MinimalLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };

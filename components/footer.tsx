"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// --- Magnetic Button Component ---
const MagneticButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseEnter = () => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = rectRef.current;
    const center = { x: left + width / 2, y: top + height / 2 };
    x.set(clientX - center.x);
    y.set(clientY - center.y);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="relative will-change-transform"
    >
      <Link
        href={href}
        className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary-foreground text-primary flex items-center justify-center text-sm md:text-lg font-medium tracking-tight uppercase hover:scale-110 transition-transform duration-500 ease-[0.76,0,0.24,1]"
        aria-label="Send me an email"
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
  isExternal = false,
}: {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}) => {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden inline-block"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span className="sr-only">{children}</span>
      <div
        className="flex flex-col transition-transform duration-500 group-hover:-translate-y-full ease-[0.76,0,0.24,1]"
        aria-hidden="true"
      >
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
    <footer className="font-sans bg-primary text-primary-foreground min-h-screen w-full flex flex-col justify-between px-6 pt-24 pb-32 md:px-16 md:py-16 relative overflow-hidden selection:bg-background selection:text-foreground">
      {/* --- Section 1: The Hook --- */}
      <div className="flex flex-col flex-grow justify-center items-center relative z-10 mb-20 md:mb-0">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          {/* --- ANIMACIÓN RESTAURADA --- */}
          {/* El div overflow-hidden crea el efecto de "máscara" */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "99%" }} // Empieza oculto hacia abajo
              whileInView={{ y: 0 }} // Sube a su posición original
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              viewport={{ once: true }}
              className="text-[12vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter will-change-transform"
            >
              Have an idea?
            </motion.h2>
          </div>

          <MagneticButton href="mailto:aaronvendedor@gmail.com">
            Get in touch
          </MagneticButton>
        </div>
      </div>

      {/* --- Section 2: Bottom Bar --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-12 md:gap-0 z-10 items-end">
        {/* Contact */}
        <div className="col-span-1 md:col-span-4 flex flex-col items-start gap-1">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-50 mb-3 md:mb-4">
            [ CONTACT ]
          </span>
          <address className="not-italic flex flex-col gap-1 items-start">
            <MinimalLink href="mailto:aaronvendedor@gmail.com">
              aaronvendedor@gmail.com
            </MinimalLink>
            <a
              href="tel:+584120196456"
              className="font-sans text-lg md:text-xl opacity-70 mt-1 hover:opacity-100 transition-opacity"
            >
              +58 412 019 6456
            </a>
          </address>
        </div>

        {/* Navigation */}
        <div className="col-span-1 md:col-span-4 flex flex-col items-start md:items-center">
          <nav
            className="flex flex-col items-start md:items-center gap-1"
            aria-label="Footer Navigation"
          >
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-50 mb-3 md:mb-4 w-full text-left md:text-center">
              [ MENU ]
            </span>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 items-start md:items-center list-none p-0 m-0">
              <li>
                <MinimalLink href="/about">About</MinimalLink>
              </li>
              <li>
                <MinimalLink href="/resume">Resume</MinimalLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Socials */}
        <div className="col-span-1 md:col-span-4 flex flex-col items-start md:items-end">
          <nav
            className="flex flex-col items-start md:items-end gap-1"
            aria-label="Social Media"
          >
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-50 mb-3 md:mb-4 w-full text-left md:text-right">
              [ SOCIALS ]
            </span>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 items-start md:items-center list-none p-0 m-0">
              <li>
                <MinimalLink
                  href="https://linkedin.com/in/aaron-avila-b57919329"
                  isExternal
                >
                  LinkedIn
                </MinimalLink>
              </li>
              <li>
                <MinimalLink href="https://github.com/eswaldots/" isExternal>
                  Github
                </MinimalLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

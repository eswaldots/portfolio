"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

// --- Utility: Live Clock ---
// Mantenemos suppressHydrationWarning para evitar conflictos Servidor/Cliente
const TimeDisplay = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Definimos la función fuera para llamarla inmediatamente y evitar delay de 1s
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateTime(); // Ejecutar inmediatamente al montar
    const interval = setInterval(updateTime, 60000); // Actualizar cada minuto es suficiente (menos carga CPU)
    return () => clearInterval(interval);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
};

// --- Component: Flip Link (SEO Optimized) ---
const FlipLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link
      href={href}
      className="relative block overflow-hidden whitespace-nowrap group"
    >
      {/* 
         SEO TRICK: Texto visible solo para Screen Readers / Googlebot.
         Evita que lean "Work Work" duplicado por la animación.
      */}
      <span className="sr-only">{children}</span>

      {/* Elementos visuales ocultos al árbol de accesibilidad */}
      <div
        aria-hidden="true"
        className="relative transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-full"
      >
        <span className="block">{children}</span>
        <span className="block absolute top-full left-0">{children}</span>
      </div>
    </Link>
  );
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 md:py-10 mix-blend-exclusion text-white pointer-events-none"
      >
        <div className="flex justify-between items-baseline w-full max-w-[1920px] mx-auto pointer-events-auto font-sans">
          {/* 1. Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Aaron Avila - Home" // SEO: Etiqueta descriptiva para el logo
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 flex items-center justify-center"
              aria-hidden="true" // Icono decorativo ignorado por screen readers
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </motion.div>

            <span className="text-lg md:text-xl font-bold tracking-tight uppercase leading-none">
              Aaron Avila
              <span className="align-top text-[0.6em] ml-0.5">®</span>
            </span>
          </Link>

          {/* 2. Meta Info */}
          <div className="hidden md:flex gap-12 font-mono text-xs uppercase tracking-widest opacity-60">
            <span className="hidden lg:block">
              Venezuela <TimeDisplay />
            </span>
            <span>Available for work</span>
          </div>

          {/* 3. Navigation */}
          <nav
            className="flex items-center gap-8 md:gap-12"
            aria-label="Main Navigation"
          >
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest font-medium">
              <FlipLink href="/#work">Work</FlipLink>
              <FlipLink href="/about">About</FlipLink>
              <FlipLink href="/resume">Info</FlipLink>

              <span className="opacity-30" aria-hidden="true">
                /
              </span>

              <Link
                href="mailto:aaronvendedor@gmail.com"
                className="hover:underline underline-offset-4"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden font-mono text-xs uppercase tracking-widest p-2 -mr-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? "[ CLOSE ]" : "[ MENU ]"}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* --- Full Screen Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav // Cambiado de div a nav para semántica
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-6 font-sans"
            aria-label="Mobile Navigation"
          >
            {/* Usamos lista desordenada para mejor SEO */}
            <ul className="flex flex-col gap-6 items-center text-center list-none p-0 m-0">
              {["Home", "Work", "About", "Resume"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : item === "Work"
                          ? "/#work"
                          : `/${item.toLowerCase()}`
                    }
                    onClick={() => setIsOpen(false)}
                    className="text-[15vw] leading-[0.9] font-medium uppercase tracking-tighter text-foreground hover:text-muted-foreground transition-colors block"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="absolute bottom-12 left-0 w-full text-center font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Based in Venezuela — <TimeDisplay />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

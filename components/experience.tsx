"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import posthog from "posthog-js";

// --- Data ---
const projects = [
  {
    id: "01",
    title: "Daimo",
    category: "Development",
    year: "2026",
    description: "Software to repair crypto miners with AI",
    url: "https://daimoapp.netlify.app",
    image: "/daimo.png",
    placeholder:
      "https://images.unsplash.com/photo-1639322537228-ad71053db952?q=80&w=3270&auto=format&fit=crop",
    isComingSoon: false,
  },
  {
    id: "02",
    title: "Booster AI",
    category: "Development",
    year: "2026",
    description: "Software to repair crypto miners with AI",
    url: "https://miner.repair",
    image: "/hashboard.png",
    placeholder:
      "https://images.unsplash.com/photo-1639322537228-ad71053db952?q=80&w=3270&auto=format&fit=crop",
    isComingSoon: false,
  },
];

// --- Component: Floating Image Cursor (Desktop Only) ---
const FloatingPreview = ({
  activeIndex,
  mouseX,
  mouseY,
}: {
  activeIndex: number | null;
  mouseX: any;
  mouseY: any;
}) => {
  // Performance: Adjusted stiffness for smoother GPU interpolation
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const xOffset = useTransform(x, (val) => val + 20);
  const yOffset = useTransform(y, (val) => Number(val) - 100);

  // Performance: Return null early to avoid rendering heavy DOM when not needed
  // Note: For smoother exit animations, we might keep it mounted but hidden,
  // but for raw performance, unmounting is better if the list is long.
  // Here we keep it mounted if activeIndex is not null to allow swapping images smoothly.
  if (activeIndex === null) return null;

  return (
    <motion.div
      style={{ x: xOffset, y: yOffset }}
      id="work"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block w-[400px] h-[280px] overflow-hidden rounded-lg border border-border bg-background shadow-2xl will-change-transform"
    >
      <div className="relative w-full h-full">
        {projects.map((project, index) => {
          // Performance Check: Only render the image if it's the active one
          // or immediately adjacent? For now, render all to allow opacity transition
          // but we MUST optimize the sizes prop.
          const isActive = index === activeIndex;

          return (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <Image
                src={project.image || project.placeholder}
                alt={`Preview of ${project.title}`}
                fill
                // Performance: Define sizes strictly. This image is always 400px wide.
                sizes="400px"
                className="object-center object-cover"
                priority={isActive} // Only prioritize the active one
              />

              {/* Overlay details */}
              {isActive && !project.isComingSoon && (
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white font-mono text-xs uppercase flex justify-between">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              )}

              {isActive && project.isComingSoon && (
                <>
                  <div className="absolute z-30 inset-0 bg-black/50 backdrop-blur-md" />
                  <div className="z-40 absolute text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex flex-col items-center text-center gap-1">
                    <h3 className="tracking-tight font-medium text-xl">
                      WORK IN PROGRESS
                    </h3>
                    <p className="text-white/50 leading-[1.1] text-sm">
                      This work is currently in development
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

// --- Main Component ---
function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Performance: Direct MotionValue update bypasses React render cycle
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="work"
      className="w-full bg-background text-foreground py-24 md:py-32 relative z-10 font-sans"
      onMouseMove={handleMouseMove}
      aria-label="Selected Projects"
    >
      {/* Header Metadata */}
      <header className="px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border pb-6">
        <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-medium tracking-tighter uppercase text-foreground">
          Selected <br className="md:hidden" /> Works
        </h2>
        <div className="flex flex-col items-end mt-8 md:mt-0 font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-widest text-right">
          <span className="block mb-2">[ {projects.length} PROJECTS ]</span>
          <span className="hidden md:block" aria-hidden="true">
            Hover to preview
          </span>
          <span className="md:hidden" aria-hidden="true">
            Scroll to explore
          </span>
        </div>
      </header>

      {/* --- Desktop: Interactive List --- */}
      <div className="hidden md:flex flex-col" role="list">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          const isDimmed = hoveredIndex !== null && !isHovered;

          return (
            <div key={project.id} role="listitem">
              <Link
                href={project.isComingSoon ? "#" : project.url}
                target={project.isComingSoon ? "_self" : "_blank"}
                // Accessibility: Disable pointer events if coming soon
                aria-disabled={project.isComingSoon}
                onClick={(e) => {
                  if (project.isComingSoon) {
                    e.preventDefault();
                    return;
                  }
                  posthog.capture("clicked_project_link", {
                    project: project.title,
                  });
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative border-b border-border py-12 px-12 flex items-center justify-between transition-all duration-300 ${isDimmed ? "opacity-30 blur-[1px]" : "opacity-100"}`}
              >
                <div className="flex items-baseline gap-12 w-1/3">
                  <span className="font-mono text-xs text-muted-foreground">
                    ({project.id})
                  </span>
                  <h3 className="text-5xl font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-[0.76,0,0.24,1]">
                    {project.title}
                  </h3>
                </div>

                <div className="w-1/3 text-left">
                  <span className="font-mono text-xs uppercase text-muted-foreground tracking-widest">
                    {project.category}
                  </span>
                </div>

                <div className="w-1/3 flex justify-end items-center gap-4">
                  <span className="font-mono text-sm group-hover:mr-4 transition-all duration-300">
                    {project.year}
                  </span>
                  {project.isComingSoon ? (
                    <span className="text-[10px] shadow-xs px-2 py-1 rounded-full uppercase bg-secondary text-secondary-foreground">
                      Coming Soon
                    </span>
                  ) : (
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ArrowUpRight
                        className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* --- Mobile: Card Stack --- */}
      <div className="md:hidden flex flex-col gap-12 px-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }} // Performance: 'once: true' evita animar al hacer scroll hacia arriba
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <Link
              href={project.isComingSoon ? "#" : project.url}
              onClick={(e) => project.isComingSoon && e.preventDefault()}
              className="relative w-full aspect-[4/3] bg-muted rounded-xl overflow-hidden border border-border group"
              aria-label={`View details for ${project.title}`}
            >
              <Image
                src={project.image || project.placeholder}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizes
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {project.isComingSoon && (
                <div className="absolute inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center">
                  <span className="text-xs text-white px-3 py-1 rounded-full uppercase">
                    Coming Soon
                  </span>
                </div>
              )}
            </Link>

            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {project.id}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-tight max-w-[80%]">
                  {project.description}
                </p>
              </div>

              {!project.isComingSoon && (
                <Link
                  href={project.url}
                  target="_blank"
                  className="p-2 border border-border rounded-full hover:bg-foreground hover:text-background transition-colors"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>

            <div
              className="w-full h-[1px] bg-border mt-2"
              aria-hidden="true"
            ></div>
          </motion.article>
        ))}
      </div>

      {/* Floating Preview Component */}
      <FloatingPreview
        activeIndex={hoveredIndex}
        mouseX={mouseX}
        mouseY={mouseY}
      />
    </section>
  );
}

export { Experience };

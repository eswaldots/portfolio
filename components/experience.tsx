"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import posthog from "posthog-js";

// --- Data ---
const projects = [
  {
    id: "01",
    title: "Booster AI",
    category: "Development",
    year: "2026",
    description: "Software to repair crypto miners with AI",
    url: "https://miner.repair",
    image: "/booster.webp", // Ensure you have this or use placeholder
    placeholder:
      "https://images.unsplash.com/photo-1639322537228-ad71053db952?q=80&w=3270&auto=format&fit=crop", // Fallback
    isComingSoon: false,
  },
  {
    id: "02",
    title: "Avila Beauty",
    category: "Art Direction",
    year: "2025",
    description: "Changing the novelty",
    url: "#",
    image: "/fashion.webp",
    placeholder:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=3269&auto=format&fit=crop",
    isComingSoon: true,
  },
  {
    id: "03",
    title: "Weathify",
    category: "Design Engineering",
    year: "2026",
    description: "Change your wallpaper with the weather",
    url: "#",
    image: "/weather.jpg",
    placeholder:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=3270&auto=format&fit=crop",
    isComingSoon: true,
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
  // Smooth physics for the image movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Initial positioning offset so it doesn't cover the text directly
  const xOffset = useTransform(x, (val) => val + 20);
  const yOffset = useTransform(y, (val) => val - 100);

  if (activeIndex === null) return null;

  return (
    <motion.div
      style={{ x: xOffset, y: yOffset }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block w-[400px] h-[280px] overflow-hidden rounded-lg border border-border bg-background shadow-2xl"
    >
      <div className="relative w-full h-full">
        {projects.map((project, index) => (
          <Image
            key={project.id}
            src={project.image || project.placeholder}
            alt={project.title}
            fill
            className={`object-cover transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {/* Overlay details on the image */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white font-mono text-xs uppercase flex justify-between">
          <span>{projects[activeIndex].category}</span>
          <span>{projects[activeIndex].year}</span>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mouse tracking for the floating effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      className="w-full bg-background text-foreground py-24 md:py-32 relative z-10 font-sans"
      onMouseMove={handleMouseMove}
    >
      {/* Header Metadata */}
      <div className="px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border pb-6">
        <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-medium tracking-tighter uppercase text-foreground">
          Selected <br className="md:hidden" /> Works
        </h2>
        <div className="flex flex-col items-end mt-8 md:mt-0 font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-widest text-right">
          <span className="block mb-2">[ {projects.length} PROJECTS ]</span>
          <span className="hidden md:block">Hover to preview</span>
          <span className="md:hidden">Scroll to explore</span>
        </div>
      </div>

      {/* --- Desktop: Interactive List --- */}
      <div className="hidden md:flex flex-col">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={project.isComingSoon ? "#" : project.url}
            target={project.isComingSoon ? "_self" : "_blank"}
            onClick={() => {
              if (!project.isComingSoon) {
                posthog.capture("clicked_project_link", {
                  project: project.title,
                });
              }
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative border-b border-border py-12 px-12 flex items-center justify-between transition-all duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-30 blur-[1px]" : "opacity-100"}`}
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
                <span className="text-[10px] border border-border px-2 py-1 rounded-full uppercase bg-secondary text-secondary-foreground">
                  Coming Soon
                </span>
              ) : (
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* --- Mobile: Card Stack --- */}
      <div className="md:hidden flex flex-col gap-12 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <Link
              href={project.isComingSoon ? "#" : project.url}
              className="relative w-full aspect-[4/3] bg-muted rounded-xl overflow-hidden border border-border group"
            >
              <Image
                src={project.image || project.placeholder}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {project.isComingSoon && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="font-mono text-xs border border-white/30 text-white px-3 py-1 rounded-full backdrop-blur-md uppercase">
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
                >
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>

            <div className="w-full h-[1px] bg-border mt-2"></div>
          </motion.div>
        ))}
      </div>

      {/* Floating Preview Component (Pass state) */}
      <FloatingPreview
        activeIndex={hoveredIndex}
        mouseX={mouseX}
        mouseY={mouseY}
      />
    </section>
  );
}

export { Experience };

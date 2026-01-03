"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import posthog from "posthog-js";
import { MailIcon, MapPinnedIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function ResumeView() {
  return (
    <main className="w-full min-h-screen bg-secondary font-sans py-0 sm:py-48 sm:px-20">
      {/* Contenedor principal: Semánticamente es un artículo o sección principal */}
      <article className="mx-auto px-6 py-24 sm:p-22 rounded-none bg-card sm:rounded-4xl max-w-5xl shadow-sm">
        {/* --- HEADER --- */}
        <header className="flex flex-col items-start gap-8">
          <Avatar className="size-24 sm:size-28 bg-primary">
            {/* Accessibility: Aria-label para el avatar si no hay imagen */}
            <AvatarFallback
              className="size-24 sm:size-28 font-sans text-4xl sm:text-5xl font-medium text-primary-foreground bg-primary"
              aria-label="Aaron Avila Initials"
            >
              A
            </AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            {/* SEO: Único H1 de la página */}
            <h1 className="font-semibold tracking-tighter text-5xl sm:text-6xl text-foreground">
              Aaron Avila
            </h1>

            <div className="flex items-center gap-x-4 text-xl sm:text-2xl tracking-tighter font-medium text-muted-foreground">
              <Link
                className="after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-[width] duration-75 ease-in-out after:h-[2px] after:bg-foreground pb-1 cursor-pointer relative hover:text-foreground transition-colors"
                href="mailto:aaronvendedor@gmail.com"
                target="_blank"
                rel="noopener noreferrer" // Seguridad al usar target blank
                onClick={() =>
                  posthog.capture("clicked_resume_email_link", {
                    location: "resume_header",
                  })
                }
              >
                aaronvendedor@gmail.com
              </Link>
            </div>
          </div>
        </header>

        {/* --- SUMMARY --- */}
        <p className="text-xl sm:text-2xl tracking-tighter max-w-4xl my-8 sm:my-10 font-light text-foreground/90 leading-relaxed">
          A creative web developer with a passion for design, animation,
          interaction, problem-solving, and mastering the latest web
          technologies.
        </p>

        {/* --- SKILLS --- */}
        <section aria-labelledby="skills-heading">
          {/* SEO: H2 para secciones principales */}
          <h2
            id="skills-heading"
            className="uppercase tracking-widest font-bold text-lg text-foreground"
          >
            SKILLS
          </h2>
          <Separator className="my-4" />

          <div className="my-10 flex sm:flex-row flex-col sm:gap-48 gap-8 items-start w-full">
            {/* Skill Group 1 */}
            <div className="text-base">
              <h3 className="tracking-tighter font-medium my-2 text-foreground">
                Modern Frontend
              </h3>
              {/* HTML Semántico: Usamos lista para habilidades */}
              <ul className="space-y-1 list-none m-0 p-0">
                {[
                  "TypeScript",
                  "JavaScript (ES6+)",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="tracking-tighter font-light text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Group 2 */}
            <div className="text-base">
              <h3 className="tracking-tighter font-medium my-2 text-foreground">
                Backend & APIs
              </h3>
              <ul className="space-y-1 list-none m-0 p-0">
                {[
                  "Node.js",
                  "Express.js",
                  "REST APIs",
                  "Prisma ORM",
                  "PostgreSQL",
                  "Python · Django",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="tracking-tighter font-light text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Group 3 */}
            <div className="text-base">
              <h3 className="tracking-tighter font-medium my-2 text-foreground">
                Tools & Deployment
              </h3>
              <ul className="space-y-1 list-none m-0 p-0">
                {[
                  "HTML & CSS",
                  "Docker & Docker Compose",
                  "Git & GitHub",
                  "pnpm",
                  "Linux",
                  "CLI Automation",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="tracking-tighter font-light text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- WORK EXPERIENCE --- */}
        <section aria-labelledby="work-heading">
          <h2
            id="work-heading"
            className="uppercase tracking-widest font-bold text-lg text-foreground"
          >
            WORK
          </h2>
          <Separator className="my-4" />

          <div className="my-10 sm:mt-10 mt-4 space-y-10">
            {/* Job 1 */}
            <article className="flex gap-4 sm:flex-row flex-col sm:gap-44 items-start">
              <div className="min-w-[150px]">
                <h3 className="text-2xl font-semibold text-nowrap tracking-tighter text-foreground">
                  Booster AI
                </h3>
                <time className="text-lg tracking-tighter text-nowrap font-light text-muted-foreground block">
                  2024 - Present
                </time>
              </div>
              <div className="flex flex-col sm:gap-2 gap-1">
                <h4 className="text-lg font-medium tracking-tighter text-foreground">
                  Junior Fullstack Developer
                </h4>
                <p className="font-light tracking-tighter text-muted-foreground leading-relaxed">
                  Collaborating closely with design teams to develop prototypes,
                  tools, and interactive web experiences to tell the story of
                  the products and services found at miner.repair.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="uppercase tracking-widest font-bold text-lg text-foreground"
          >
            EDUCATION
          </h2>
          <Separator className="my-4" />

          <div className="my-10 sm:mt-10 mt-4 space-y-6">
            <article className="flex sm:flex-row flex-col justify-between sm:items-center tracking-tighter">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Nuestros Símbolos
                </h3>
                <p className="text-lg tracking-tighter font-light text-muted-foreground sm:block hidden">
                  High School Diploma
                </p>
              </div>
              <time className="font-light text-muted-foreground">
                2021 - Present
              </time>
            </article>
            {/* Mobile only subtitle visual helper if needed, or stick to structure above */}
            <p className="text-lg tracking-tighter font-light text-muted-foreground sm:hidden">
              High School Diploma
            </p>
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section aria-labelledby="contact-heading">
          <h2
            id="contact-heading"
            className="uppercase tracking-widest font-bold text-lg text-foreground"
          >
            CONTACT
          </h2>
          <Separator className="my-4" />

          {/* Usamos <address> para información de contacto semántica */}
          <address className="sm:mt-10 mt-4 my-10 flex flex-col gap-4 items-start w-full not-italic">
            <div className="gap-3 flex items-center">
              <MapPinnedIcon
                className="text-primary size-5 shrink-0"
                aria-hidden="true"
              />
              <span className="tracking-tighter font-light text-muted-foreground">
                Miranda, Charallave
              </span>
            </div>

            <a
              href="mailto:aaronvendedor@gmail.com"
              className="gap-3 flex items-center hover:text-primary transition-colors"
            >
              <MailIcon
                className="text-primary size-5 shrink-0"
                aria-hidden="true"
              />
              <span className="tracking-tighter font-light text-muted-foreground">
                aaronvendedor@gmail.com
              </span>
            </a>

            <a
              href="tel:+584120196456"
              className="gap-3 flex items-center hover:text-primary transition-colors"
            >
              <PhoneIcon
                className="text-primary size-5 shrink-0"
                aria-hidden="true"
              />
              <span className="tracking-tighter font-light text-muted-foreground">
                +58 412 0196456
              </span>
            </a>
          </address>
        </section>
      </article>
    </main>
  );
}

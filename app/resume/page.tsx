"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import posthog from "posthog-js";
import { MailIcon, MapPinnedIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-secondary font-sans py-0 sm:py-48 sm:px-20">
      <div className="mx-auto px-6 py-24 sm:p-22 rounded-none bg-card sm:rounded-4xl max-w-5xl">
        <div className="flex flex-col items-start gap-8">
          <Avatar className="size-24 sm:size-28 bg-primary">
            <AvatarFallback className="size-24 sm:size-28 font-sans text-4xl sm:text-5xl font-medium text-primary-foreground bg-primary">
              A
            </AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <h1 className="font-semibold tracking-tighter text-5xl sm:text-6xl">
              Aaron Avila
            </h1>

            <div className="flex items-center gap-x-4 text-xl sm:text-2xl tracking-tighter font-medium">
              <Link
                className="after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-[width] duration-75 ease-in-out after:h-[2px] after:bg-foreground pb-1 cursor-pointer relative"
                href="mailto:aaronvendedor@gmail.com"
                target="_blank"
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
        </div>

        <p className="text-xl sm:text-2xl tracking-tighter max-w-4xl my-8 sm:my-10 font-light">
          A creative web developer with a passion for design, animation,
          interaction, problem-solving, and mastering the latest web
          technologies.
        </p>

        <h1 className="uppercase tracking-widest font-bold text-lg">SKILLS</h1>

        <Separator className="my-4" />

        <div className="my-10 flex sm:flex-row flex-col sm:gap-48 gap-8 items-start w-full">
          <div className="text-base">
            <div className="tracking-tighter font-medium my-2">
              Modern Frontend
            </div>

            <div className="space-y-1">
              <p className="tracking-tighter font-light">TypeScript</p>
              <p className="tracking-tighter font-light">JavaScript (ES6+)</p>
              <p className="tracking-tighter font-light">React</p>
              <p className="tracking-tighter font-light">Next.js</p>
              <p className="tracking-tighter font-light">Tailwind CSS</p>
              <p className="tracking-tighter font-light">Framer Motion</p>
            </div>
          </div>

          <div className="text-base">
            <div className="tracking-tighter font-medium my-2">
              Backend & APIs
            </div>

            <div className="space-y-1">
              <p className="tracking-tighter font-light">Node.js</p>
              <p className="tracking-tighter font-light">Express.js</p>
              <p className="tracking-tighter font-light">REST APIs</p>
              <p className="tracking-tighter font-light">Prisma ORM</p>
              <p className="tracking-tighter font-light">PostgreSQL</p>
              <p className="tracking-tighter font-light">Python · Django</p>
            </div>
          </div>

          <div className="text-base">
            <div className="tracking-tighter font-medium my-2">
              Tools & Deployment
            </div>

            <div className="space-y-1">
              <p className="tracking-tighter font-light">HTML & CSS</p>
              <p className="tracking-tighter font-light">
                Docker & Docker Compose
              </p>
              <p className="tracking-tighter font-light">Git & GitHub</p>
              <p className="tracking-tighter font-light">pnpm</p>
              <p className="tracking-tighter font-light">Linux</p>
              <p className="tracking-tighter font-light">CLI Automation</p>
            </div>
          </div>
        </div>

        <h1 className="uppercase tracking-widest font-bold text-lg">WORK</h1>

        <Separator className="my-4" />

        <div className="my-10 sm:mt-10 mt-4">
          <div className="flex gap-4 sm:flex-row flex-col sm:gap-44 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-nowrap tracking-tighter">
                Booster AI
              </h2>
              <p className="text-lg tracking-tighter text-nowrap font-light">
                2024 - Present
              </p>
            </div>
            <div className="flex flex-col sm:gap-2 gap-1">
              <h1 className="text-lg font-medium tracking-tighter">
                Junior Fullstack Developer
              </h1>
              <p className="font-light tracking-tighter">
                Collaborating closely with design teams to develop prototypes,
                tools, and interactive web experiences to tell the story of the
                products and services found at miner.repair.
              </p>
            </div>
          </div>
        </div>

        <h1 className="uppercase tracking-widest font-bold text-lg">
          EDUCATION
        </h1>

        <Separator className="my-4" />

        <div className="my-10 sm:mt-10 mt-4">
          <div className="flex sm:flex-row flex-col justify-between sm:items-center tracking-tighter">
            <h2 className="text-2xl font-semibold">Nuestros Símbolos</h2>
            <p className="font-light">2021 - Present</p>
          </div>
          <p className="text-lg tracking-tighter font-light sm:flex hidden">
            High School Diploma
          </p>
        </div>

        <h1 className="uppercase tracking-widest font-bold text-lg">CONTACT</h1>

        <Separator className="my-4" />

        <div className="sm:mt-10 mt-4 my-10 flex flex-col gap-4 items-start w-full">
          <div className="gap-3 flex items-center">
            <MapPinnedIcon className="text-primary size-5" />
            <span className="tracking-tighter font-light">
              Miranda, Charallave
            </span>
          </div>
          <div className="gap-3 flex items-center">
            <MailIcon className="text-primary size-5" />
            <span className="tracking-tighter font-light">
              aaronvendedor@gmail.com
            </span>
          </div>
          <div className="gap-3 flex items-center">
            <PhoneIcon className="text-primary size-5" />
            <span className="tracking-tighter font-light">+58 412 0196456</span>
          </div>
        </div>
      </div>
    </div>
  );
}

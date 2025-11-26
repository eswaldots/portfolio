import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-background font-sans py-0 sm:py-36">
      <div className="mx-auto max-w-4xl p-16 sm:py-16 py-36 px-6 sm:px-16 rounded-none sm:rounded-4xl">
        <div className="space-y-4">
          <h1 className="font-semibold tracking-tighter text-5xl sm:text-6xl">Aaron Avila</h1>

          <Link className="text-xl sm:text-2xl tracking-tighter font-medium after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-[width] duration-75 ease-in-out after:h-[2px] after:bg-foreground pb-1 cursor-pointer relative" href="https://github.com/eswaldots" target="_blank">
            github.com/eswaldots
          </Link>

          <p className="text-xl sm:text-2xl tracking-tighter max-w-4xl my-8 sm:my-10 font-light">
            Un desarrollador web creativo con pasión por el diseño, la animación, la interacción, la resolución de problemas y por dominar las últimas tecnologías web.
          </p>

          <h1 className="uppercase tracking-widest font-bold text-lg">SKILLS</h1>

          <Separator className="my-4" />

          <div className="my-10 flex sm:flex-row flex-col sm:gap-0 gap-8 items-start w-full justify-between">
            <div className="text-base">
              <div className="tracking-tighter font-medium my-2">Frontend moderno</div>

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
              <div className="tracking-tighter font-medium my-2">Backend & APIs</div>

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
              <div className="tracking-tighter font-medium my-2">Herramientas & despliegue</div>

              <div className="space-y-1">
                <p className="tracking-tighter font-light">HTML & CSS</p>
                <p className="tracking-tighter font-light">Docker & Docker Compose</p>
                <p className="tracking-tighter font-light">Git & GitHub</p>
                <p className="tracking-tighter font-light">pnpm</p>
                <p className="tracking-tighter font-light">Linux</p>
                <p className="tracking-tighter font-light">Automatización con CLI</p>
              </div>
            </div>
          </div>

          <h1 className="uppercase tracking-widest font-bold text-lg">Trabajo</h1>

          <Separator className="my-4" />

          <div className="my-10">
            <div className="flex gap-41 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-nowrap tracking-tighter">Booster AI</h2>
                <p className="text-lg tracking-tighter text-nowrap font-light">2024 - Actualidad</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-medium tracking-tighter">Junior fullstack developer</h1>
                <p className="font-light tracking-tighter">Colaboro estrechamente con equipos de diseño para desarrollar prototipos, herramientas y experiencias web interactivas para contar la historia de los productos y servicios que se encuentran en miner.repair.</p>
              </div>
            </div>
          </div>

          <h1 className="uppercase tracking-widest font-bold text-lg">Educacion</h1>

          <Separator className="my-4" />

          <div className="my-10">
            <div className="flex justify-between items-center tracking-tighter">
              <h2 className="text-2xl font-semibold">Nuestros Simbolos</h2>
              <p className="font-light">2021 - Actualidad</p>
            </div>
            <p className="text-lg tracking-tighter font-light">Bachillerato</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full max-w-4xl px-6 sm:px-16 -translate-x-1/2 left-1/2">
        <Separator className="my-4" />

        <h1 className="my-4 tracking-tighter text-muted-foreground font-mono text-sm">© 2025 Aaron Avila</h1>
      </div>
    </div>
  )
}

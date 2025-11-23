import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-secondary font-sans py-0 sm:py-36">
      <div className="mx-auto max-w-4xl bg-background p-16 sm:py-16 py-36 px-6 sm:px-16 rounded-none sm:rounded-4xl">
        <div className="space-y-2">
          <h1 className="font-semibold tracking-tighter text-5xl sm:text-6xl">Aaron Avila</h1>

          <Button className="text-xl sm:text-2xl tracking-tighter font-medium -ml-4 rounded-lg" variant="ghost" asChild>
            <Link href="https://github.com/eswaldots" target="_blank">
              github.com/eswaldots
            </Link>
          </Button>

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
        </div>
      </div>
    </div>
  )
}

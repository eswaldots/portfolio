import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

function Experience() {
  return (
    <div className="w-screen h-screen font-sans px-6 sm:px-20 sm:pb-32 pb-96 py-32 space-y-16 bg-secondary rounded-b-3xl">
      <div className="w-full flex items-center">
        <h1 className="text-3xl sm:text-5xl tracking-tighter font-semibold mx-auto">
          Trabajo reciente
        </h1>
      </div>

      <div className="space-y-8">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-4xl bg-background p-8">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Booster</h1>
              <p className="tracking-tight">2024 - 2025</p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <h1 className="font-semibold tracking-tight">Fullstack Developer</h1>

              <p className="font-light tracking-tight">
                Colabore estrechamente con los equipos de diseño para desarrollar prototipos, herramientas y experiencias web interactivas con el fin de contar la historia de los productos y servicios que se encuentran en <a className="underline" href="https://miner.repair">miner.repair</a>.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="max-w-3xl mx-auto"> */}
        {/*   <div className="rounded-4xl bg-pink-200 p-8"> */}
        {/*     <div> */}
        {/*       <h1 className="text-2xl font-semibold tracking-tight">Avila Beauty</h1> */}
        {/*       <p className="tracking-tight">2024 - 2025</p> */}
        {/*     </div> */}
        {/**/}
        {/*     <Separator className="my-4 bg-pink-300" /> */}
        {/**/}
        {/*     <div className="space-y-4"> */}
        {/*       <p className="font-light tracking-tight"> */}
        {/*         Diseñé y desarrollé el sitio web del portafolio personal de la Avila Beauty. */}
        {/*       </p> */}
        {/**/}
        {/*       <Button className="bg-pink-950 hover:bg-pink-900 text-pink-50 tracking-tight font-medium rounded-xl text-base" size="lg" asChild> */}
        {/*         <Link href="https://avilabeauty.vercel.app/"> */}
        {/*           Visitar Avila Beauty */}
        {/*         </Link> */}
        {/*       </Button> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export { Experience };

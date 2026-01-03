import { Hero } from "@/components/hero";
import dynamic from "next/dynamic";

// --- PERFORMANCE: Dynamic Imports (Code Splitting) ---
// Cargamos de forma diferida los componentes que no son visibles al inicio.
// Esto reduce el "Total Blocking Time" (TBT) y acelera la carga inicial.

const About = dynamic(() =>
  import("@/components/about").then((mod) => mod.About),
);
const Experience = dynamic(() =>
  import("@/components/experience").then((mod) => mod.Experience),
);
const Footer = dynamic(() =>
  import("@/components/footer").then((mod) => mod.Footer),
);

export default function Home() {
  return (
    // Se mantiene tu configuración de estilos visuales
    <div className="z-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-transparent antialiased">
      {/* 
        LCP CRÍTICO: 
        El Hero se importa normal (no dynamic) para que pinte inmediatamente.
      */}
      <Hero />

      {/* Contenido Secundario (Carga optimizada en chunks) */}
      <About />
      <Experience />

      {/* 
        FOOTER REVEAL EFFECT:
        Optimización: Usamos 'dvh' en lugar de 'vh' para mejor soporte en móviles (Safari iOS).
        La técnica de clip-path se mantiene igual para el efecto visual.
      */}
      <div
        className="relative h-[100dvh]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 h-[100dvh] w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

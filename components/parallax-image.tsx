import { useRef, useLayoutEffect, useState, ReactNode } from "react";
import { motion, useMotionValue } from "motion/react";
import { useLenis } from "lenis/react";
// Asumo que estás usando algún contexto para acceder a la instancia de lenis,
// o pásala como prop si la tienes disponible globalmente.
// Si no tienes contexto, tendrás que pasar la instancia 'lenis' a este componente.

export function ParallaxImage({
  children,
  speed = 0.5,
  className,
}: {
  children: ReactNode;
  speed: number;
  className?: string;
}) {
  const lenis = useLenis();
  const ref = useRef(null);
  const y = useMotionValue(0);

  // Guardamos la posición inicial del elemento y el tamaño de la ventana
  const [initialTop, setInitialTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 1. MEDIR (Solo ocurre al inicio y al redimensionar)
    const updateMeasurements = () => {
      // Calculamos la posición absoluta del elemento respecto al documento
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setInitialTop(rect.top + scrollTop);
      setClientHeight(window.innerHeight);
    };

    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);

    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  useLayoutEffect(() => {
    if (!lenis) return;

    // 2. ANIMAR (Matemática simple en cada frame)
    const handleScroll = ({ scroll }: { scroll: number }) => {
      // Fórmula: (PosiciónActualScroll - PosiciónInicialElemento) * FactorVelocidad
      // Esto mueve el elemento relativo a cuánto hemos scrolleado desde que apareció

      // Optimizacion: Solo calcular si el elemento está (más o menos) en pantalla
      // para no gastar recursos en cosas que no se ven.
      const distFromTop = scroll - initialTop;

      // Un rango de seguridad (buffer) para que no desaparezca de golpe
      if (
        distFromTop + clientHeight * 2 > 0 &&
        distFromTop < clientHeight * 2
      ) {
        const movement = distFromTop * (speed - 1) * 0.1; // 0.1 es un factor para suavizar la magnitud
        y.set(movement);
      }
    };

    lenis.on("scroll", handleScroll);

    return () => {
      // En versiones nuevas de Lenis, .on devuelve la función unsubscribe,
      // si no, intenta lenis.off('scroll', handleScroll)
      // lenis.off('scroll', handleScroll);
    };
  }, [lenis, initialTop, clientHeight, speed, y]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      {/* IMPORTANTE: 'will-change: transform' promueve el elemento a su propia capa en la GPU.
         Esto es lo que más ahorra batería y CPU.
      */}
      <motion.div style={{ y, willChange: "transform" }}>{children}</motion.div>
    </div>
  );
}

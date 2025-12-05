import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "./ui/text-animate";

function Hero() {
  const [squares, setSquares] = useState<
    { colors: string[]; duration: number }[]
  >([]);

  useEffect(() => {
    const generateSquares = () => {
      // Calculate required squares to fill the screen
      const squareSize = window.innerWidth < 768 ? 96 : 192; // size-24 (96px) or size-48 (192px)
      const cols = Math.ceil(window.innerWidth / squareSize);
      const rows = Math.ceil(window.innerHeight / squareSize);
      const count = cols * rows + cols * 2; // Add extra rows to be safe

      return Array.from({ length: count }, () => {
        // Generate a sequence of colors for each square to animate through
        const colors = Array.from({ length: 4 }, () => {
          // Monochromatic gradient
          const hue = 0;
          const saturation = 0;
          // More white chances: 80% chance of being light
          const isLight = Math.random() < 0.8;
          const lightness = isLight
            ? 50 + Math.random() * 50 // 50-100%
            : 10 + Math.random() * 40; // 10-50%
          return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        });

        return {
          colors,
          duration: 2 + Math.random() * 10, // Faster: 2-5s
        };
      });
    };

    const handleResize = () => setSquares(generateSquares());
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-primary w-screen h-screen flex flex-col justify-center sm:justify-center sm:px-20 px-6 py-12 sm:pt-22 pt-28 sm:py-22 font-sans relative overflow-hidden">
      <div className="mt-auto text-center z-20">
        <div className="overflow-y-hidden">
          <TextAnimate
            by="character"
            animation="slideUpSubtle"
            once={false}
            className="text-white/50 font-sans tracking-tight font-medium text-[18.8vw] leading-none"
          >
            Aaron Avila
          </TextAnimate>
        </div>

        <div className="flex flex-row items-end w-fit gap-3 mx-auto">
          <div className="overflow-y-hidden">
            <TextAnimate
              by="character"
              animation="slideUpSubtle"
              once={false}
              className="text-white/50 font-sans tracking-tight text-4xl leading-none"
            >
              Fullstack developer / UI & UX designer
            </TextAnimate>
          </div>
        </div>
      </div>

      <div className="absolute backdrop-blur-3xl z-10 inset-0 pointer-events-none" />
      <div className="absolute bg-black/50 z-10 inset-0 pointer-events-none" />

      <div className="absolute inset-0 z-0 flex flex-wrap justify-start content-start">
        {squares.map((square, i) => (
          <motion.div
            key={i}
            className="size-24 md:size-48"
            initial={{ backgroundColor: square.colors[0] }}
            animate={{ backgroundColor: square.colors }}
            transition={{
              duration: square.duration,
              repeat: Infinity,
              repeatType: "mirror", // mirror makes it go 1-2-3-4-3-2-1
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </main>
  );
}

export { Hero };

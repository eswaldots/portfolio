import { TextAnimate } from "./ui/text-animate";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function Experience() {
  const [backgroundColor, setBackgroundColor] = useState("var(--background)");
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColor,
      }}
      className="w-screen font-sans px-6 sm:px-20 mt-16 py-12 space-y-64 relative"
    >
      <div className="w-full grid">
        <div className="overflow-y-hidden">
          <TextAnimate
            animation="slideUp"
            by="character"
            className="text-3xl sm:text-[10rem] whitespace-nowrap w-full tracking-tight text-primary"
          >
            Proyectos
          </TextAnimate>
        </div>

        {/* <motion.div */}
        {/*   className="h-px bg-primary mx-auto" */}
        {/*   initial={{ width: "0%" }} */}
        {/*   transition={{ */}
        {/*     duration: 0.5, */}
        {/*     type: "spring", */}
        {/*     damping: 30, */}
        {/*     stiffness: 100, */}
        {/*   }} */}
        {/*   whileInView={{ width: "100%" }} */}
        {/* /> */}
      </div>

      <motion.div className="flex items-center justify-between">
        <div className="space-y-6">
          <div className="overflow-y-hidden">
            <h1 className="text-3xl tracking-tight text-primary font-medium">
              Booster AI
            </h1>
          </div>

          <p className="text-lg max-w-sm">
            Software para reparar mineros de criptomonedas utilizando
            inteligencia artificial
          </p>

          <Button className="text-lg rounded-full" size="lg" asChild>
            <Link href="https://miner.repair" target="_blank">
              Visitar
            </Link>
          </Button>
        </div>

        <motion.div className="w-[50vw] h-[90vh] bg-muted-foreground"></motion.div>
      </motion.div>

      <div className="pt-16 flex items-start w-full justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
        >
          <div className="size-[30vw] bg-muted-foreground relative">
            <Image
              src={"/fashion.webp"}
              alt="Link"
              width={2000}
              height={2000}
              className="size-[30vw] object-cover object-top"
            />

            <motion.div
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center cursor-pointer"
            >
              <h1 className="z-10 text-white tracking-tight text-4xl font-medium font-sans">
                Avila Beauty
              </h1>
              <p className="text-white text-lg tracking-tight">
                Revolucionando la moda
              </p>

              <Button
                className="my-4 text-base rounded-full"
                disabled
                size="lg"
              >
                Proximamente
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="pt-96"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.7 }}
        >
          <div className="h-[40vw] w-[30vw] bg-muted-foreground relative overflow-y-hidden">
            <div className="absolute z-10 inset-0 backdrop-blur-lg" />
            <Image
              src={"/weather.jpg"}
              alt="Link"
              width={2000}
              height={2000}
              className="absolute inset-0 object-cover"
            />

            <motion.div
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center cursor-pointer"
            >
              <h1 className="z-10 text-white tracking-tight text-4xl font-medium font-sans">
                Weathify
              </h1>
              <p className="text-white text-lg tracking-tight">
                Cambia tu escritorio segun el clima
              </p>

              <Button
                className="my-4 text-base rounded-full"
                disabled
                size="lg"
              >
                Proximamente
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export { Experience };

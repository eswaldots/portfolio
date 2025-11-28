import { TextAnimate } from "./ui/text-animate";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MacbookMockUp } from "./cuicui/macbook";

function Experience() {
  const [backgroundColor, setBackgroundColor] = useState("var(--background)")
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColor
      }}
      className="w-screen font-sans px-6 sm:px-20 mt-16 py-12 space-y-24 relative">
      <div className="w-full mx-auto space-y-16 h-[300vh]">
        <div className="overflow-y-hidden">
          <TextAnimate
            animation="slideUp"
            by="character"
            className="text-3xl sm:text-[10rem] whitespace-nowrap w-full tracking-tight font-medium text-primary"
          >
            Proyectos
          </TextAnimate>
        </div>

        <Separator className="my-16" />

        <div className="gap-16 grid z-50 sticky top-0 bg-background">
          <motion.div onHoverStart={() => {
            setBackgroundColor("#4b1c1300_20.64%")
          }} className="flex gap-16 justify-between">
            <div className="flex flex-col justify-between py-48">
              <div className="overflow-y-hidden">
                <TextAnimate by="character" animation="slideUp" className="text-7xl font-medium tracking-tight font-sans">Booster AI</TextAnimate>
              </div>
              <motion.div className="gap-6 grid" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.8 }}>
                <Badge variant="secondary">AI Design</Badge>
                <p className="text-base text-muted-foreground font-sans">
                  Just outside New York City, this home reimagines Tudor style for modern family living. A painted brick façade, warm wood, and intimate scale blend with the neighborhood, while soft curves, rich textures, and custom details create a cozy retreat that feels both elegant and inviting.
                </p>

                <Button className="rounded-full w-fit text-base font-medium" size="lg">Ver proyecto</Button>
              </motion.div>
            </div>

            <div className="relative overflow-hidden bg-[linear-gradient(180deg,#4b1c1300_20.64%,#590f0066),linear-gradient(180deg,#86a7c1,#b98c85)] h-screen -mr-20 min-w-3xl flex items-center justify-center">
              <div className="my-auto">
                <MacbookMockUp src="/booster.png" />
              </div>
            </div>

          </motion.div>


        </div>
      </div>
    </motion.div>
  );
}

export { Experience };

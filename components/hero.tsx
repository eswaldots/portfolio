import { TextAnimate } from "./ui/text-animate";

function Hero() {
  return (
    <main className="bg-primary w-screen h-screen flex flex-col justify-center sm:justify-center sm:px-20 px-6 py-12 sm:pt-22 pt-28 sm:py-22 font-sans relative overflow-hidden">
      <div className="mt-auto text-center z-20">
        <div className="overflow-y-hidden">
          <TextAnimate
            by="character"
            animation="slideUpSubtle"
            once={false}
            className="text-primary-foreground font-sans tracking-tight font-medium text-[18.8vw] leading-none"
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
              className="text-primary-foreground font-sans tracking-tight text-4xl leading-none"
            >
              Fullstack developer / UI & UX designer
            </TextAnimate>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Hero };

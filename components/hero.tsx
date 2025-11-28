import { TextAnimate } from "./ui/text-animate";

function Hero() {
  return (
    <main className="bg-primary w-screen h-screen flex flex-col justify-between sm:justify-end sm:px-20 px-6 py-12 sm:pt-22 pt-28 sm:py-22 font-sans">
      <div className="space-y-2">
        <div className="overflow-y-hidden">
          <TextAnimate
            by="line"
            animation="slideUp"
            className="text-primary-foreground font-sans tracking-tight font-medium text-8xl">Aaron Avila</TextAnimate>
        </div>
        <div className="overflow-y-hidden">
          <TextAnimate
            by="line"
            animation="slideUp"
            className="text-primary-foreground font-sans tracking-tight text-xl">Meet your next
            creative developer</TextAnimate>
        </div>
      </div>

      <div className="overflow-y-hidden ml-auto">
        <TextAnimate
          by="line"
          animation="slideUp"
          className="text-muted-foreground font-sans tracking-tight text-sm mt-auto">Scroll to explore</TextAnimate>
      </div>
    </main>
  );
}

export { Hero };

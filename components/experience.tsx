import Image from "next/image";

function Experience() {
  return (
    <div className="w-screen h-screen font-sans px-20 py-12 space-y-24 pb-96">
      <div className="w-full flex items-start">
        <h1 className="text-9xl w-px tracking-tighter font-semibold uppercase">
          Trabajos
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex-1 space-y-3">
          <article className="rounded-xl bg-secondary h-120 w-full"></article>

          <div>
            <div className="flex justify-between w-full">
              <h1 className="font-medium text-xl tracking-tighter">Booster</h1>
              <span className="text-muted-foreground font-semibold">2025</span>
            </div>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <article className="rounded-xl bg-secondary h-120 w-full"></article>

          <div>
            <div className="flex justify-between w-full">
              <h1 className="font-medium text-xl tracking-tighter">Booster</h1>
              <span className="text-muted-foreground font-semibold">2025</span>
            </div>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Experience };

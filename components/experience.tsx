import Image from "next/image";

function Experience() {
  return (
    <div className="w-screen h-screen font-sans px-20 py-12 space-y-24">
      <div className="w-full flex items-start">
        <h1 className="text-9xl w-px tracking-tighter font-semibold text-muted-foreground">
          Experiencia Laboral
        </h1>
      </div>

      <div className="w-full flex items-start gap-12">
        <picture className="size-12">
          <Image src="/booster.png" alt="Booster" width={2000} height={2000} />
        </picture>

        <div>
          <h1 className="text-xl font-medium tracking-tight">Booster</h1>
          <span className="text-muted-foreground">Desarrollador principal</span>
          <p className="font-semibold">2024-2025</p>
        </div>
      </div>
    </div>
  );
}

export { Experience };

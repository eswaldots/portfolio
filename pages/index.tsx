"use client";

import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {

  return (
    <main className="bg-primary relative">
      <div className="z-20 bg-background [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Hero key={"hero"} />
        <About />
        {/* <Experience /> */}

        <Footer />
      </div>




      {/* <Projects /> */}
    </main>
  );
}

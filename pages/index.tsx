"use client";

import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {

  return (
    <main className="bg-primary relative">
      <div className="z-20 bg-background pb-[100vh]">
        <Hero key={"hero"} />
        <About />
        {/* <Experience /> */}

      </div>


      {/* <Footer /> */}


      {/* <Projects /> */}
    </main>
  );
}

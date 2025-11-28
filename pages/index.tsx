"use client";

import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {

  return (
    <div className="z-20 bg-primary [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div
        className='relative h-screen'
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className='fixed bottom-0 h-screen w-full'>
          <Hero key={"hero"} />
        </div>
      </div>

      <div className="shadow-2xl rounded-t-4xl bg-background pb-96">
        <About />
        <Experience />
      </div>

      {/* <Footer /> */}





      {/* <Projects /> */}
    </div>
  );
}

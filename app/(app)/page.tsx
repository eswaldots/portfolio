"use client";

import { Hero } from "@/components/hero";
import Terminal from "@/components/terminal";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <Fragment key={"home"}>
      <Terminal key={"terminal"} />
      <Hero key={"hero"} />
    </Fragment>
  );
}

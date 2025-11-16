"use client";

import { Hero } from "@/components/hero";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <Fragment key={"home"}>
      <Hero key={"hero"} />
    </Fragment>
  );
}

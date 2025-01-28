import React from "react";
import { FlipWords } from "./ui/flip-words";
import { div } from "framer-motion/client";
import Footer from "./Footer";

export default function About() {
  const words = [
    "React",
    "Tailwind",
    "Express",
    "Node.js",
    "Next.js",
    "Postgres",
    "MongoDB",
    "Prisma",
  ];

  return (
    <div id="about" className="mb-10">
      <div className="h-[60rem] flex justify-between items-center px-10 lg:px-20">
        <div className="text-4xl mx-auto font-normal text-neutral-400">
          I Build websites with
          <FlipWords words={words} /> <br />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

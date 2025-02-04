import React from "react";
import { FlipWords } from "./ui/flip-words";
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
      <div className="min-h-screen flex justify-between items-center px-10 lg:px-20">
        <div className="text-4xl mx-auto font-normal text-neutral-400">
          I Build websites with
          <FlipWords words={words} /> <br />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

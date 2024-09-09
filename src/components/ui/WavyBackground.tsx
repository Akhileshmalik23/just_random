"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export default function WavyBackgroundDemo() {
  return (
    <div>
      <WavyBackground />
      <div className="absolute top-[40%] w-screen z-10">
        <p className="text-2xl md:text-5xl lg:text-7xl text-zinc-200 font-bold inter-var text-center">
          Welcome to Bail Reckoner!
        </p>
        <p className="text-base md:text-lg mt-4 text-zinc-200 font-normal inter-var text-center">
          Streamlining India's bail process with digital innovation,
          transparency, and efficiency!
        </p>
      </div>
    </div>
  );
}

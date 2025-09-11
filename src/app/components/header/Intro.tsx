"use client";
import { useParallax } from "../../hooks/useParallax";
import { useTypingEffect } from "../../hooks/useTypingEffect";

export default function Intro() {
  const { transform } = useParallax({ speed: 0.5, direction: "up" });
  const texts = [
    "Hi, I'm Nicholas T Munson",
    "A Full-Stack JavaScript Developer",
    // "Problem Solver, Builder, and Leader",
    "I build digital solutions that matter",
    "Let's build something together!",
  ];
  const { displayText } = useTypingEffect({
    texts,
    typingSpeed: 150,
    deletingSpeed: 100,
    pauseTime: 2000,
  });

  return (
    <div
      className="flex flex-col items-center justify-center h-50"
      style={{ transform }}
    >
      <h1 className="text-4xl font-bold">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}

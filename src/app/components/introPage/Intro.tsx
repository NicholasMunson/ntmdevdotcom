"use client";
import { useParallax } from "../../hooks/useParallax";
import { useTypingEffect } from "../../hooks/useTypingEffect";

interface IntroProps {
  parallaxConfig: {
    speed: number;
    direction: "up" | "down";
  };
}

export default function Intro({ parallaxConfig }: IntroProps) {
  const { transform } = useParallax(parallaxConfig);
  const texts = [
    "Hi, I'm Nicholas T Munson",
    "A Full-Stack JavaScript Developer",
    // "Problem Solver, Builder, and Leader",
    // "I build digital solutions that matter",
    // "Let's build something together!",
  ];

  const { displayText } = useTypingEffect({
    texts,
    typingSpeed: 150,
    deletingSpeed: 100,
    pauseTime: 2000,
  });

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-white relative"
      style={{ transform }}
    >
      <h1 className="text-4xl font-bold">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
      <p className="text-lg text-gray-600 animate-bounce absolute bottom-8">
        Please keep scrolling to see more
      </p>
    </div>
  );
}

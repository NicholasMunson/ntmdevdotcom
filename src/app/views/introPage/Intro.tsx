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
    "Product-focused Frontend Engineer",
    // "Problem Solver, Builder, and Leader",
    // "I build digital solutions that matter",
    "Let's build something together!",
  ];

  const { displayText } = useTypingEffect({
    texts,
    typingSpeed: 150,
    deletingSpeed: 100,
    pauseTime: 2000,
  });

  return (
    <section
      id="intro"
      className="section relative overflow-hidden  items-center"
      style={{ transform }}
    >
      <div className="absolute inset-0 brand-gradient opacity-[0.08]" />
      <div className="container relative z-10 flex flex-col items-center text-center gap-6">
        <h1 className="font-extrabold text-gradient">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="max-w-2xl muted">
          I design and ship performant, accessible web experiences with React,
          TypeScript, and delightful UX details.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="px-5 py-3 rounded-lg bg-[var(--brand-500)] text-white hover:bg-[var(--brand-600)] transition-colors shadow-md"
          >
            View Projects
          </a>
          <a
            href="#technologies"
            className="px-5 py-3 rounded-lg border border-white/15 hover:bg-white/5 transition-colors"
          >
            Tech I Use
          </a>
        </div>
      </div>
    </section>
  );
}

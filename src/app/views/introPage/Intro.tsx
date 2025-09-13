"use client";
import { useParallax } from "../../hooks/useParallax";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

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

        <div className="w-full mt-6">
          <VerticalTimeline
            layout="2-columns"
            lineColor="rgba(255,255,255,0.15)"
          >
            <VerticalTimelineElement
              date="2023 — Present"
              position="right"
              contentStyle={{
                background: "var(--color-surface)",
                color: "var(--color-text)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "var(--shadow-sm)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255,255,255,0.1)",
              }}
              iconStyle={{ background: "var(--brand-500)", color: "#fff" }}
            >
              <h3 className="text-lg font-semibold">Frontend Engineer</h3>
              <h4 className="text-sm muted">Company • Product UI & DX</h4>
              <p className="text-sm mt-2 muted">
                Led React/TypeScript delivery, design systems, and performance
                improvements.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              date="2021 — 2023"
              position="left"
              contentStyle={{
                background: "var(--color-surface)",
                color: "var(--color-text)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "var(--shadow-sm)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255,255,255,0.1)",
              }}
              iconStyle={{ background: "var(--brand-400)", color: "#fff" }}
            >
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <h4 className="text-sm muted">Company • Web Platform</h4>
              <p className="text-sm mt-2 muted">
                Built features end‑to‑end, added tests, and optimized bundle
                size.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              date="2019 — 2021"
              position="right"
              contentStyle={{
                background: "var(--color-surface)",
                color: "var(--color-text)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "var(--shadow-sm)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255,255,255,0.1)",
              }}
              iconStyle={{ background: "var(--brand-300)", color: "#053a32" }}
            >
              <h3 className="text-lg font-semibold">Engineering Intern</h3>
              <h4 className="text-sm muted">Company • Frontend</h4>
              <p className="text-sm mt-2 muted">
                Assisted with component library and accessibility fixes.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useParallax } from "../../hooks/useParallax";
import Section from "../Section";

interface ProjectsProps {
  parallaxConfig: {
    speed: number;
    direction: "up" | "down";
  };
}

export default function Projects({ parallaxConfig }: ProjectsProps) {
  const { transform } = useParallax(parallaxConfig);
  return (
    <Section id="projects" overlay containerClassName="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="muted">Selected work demonstrating performance, accessibility, and polish.</p>
      </div>

      <div style={{ transform }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "UI System", desc: "Composable design system with tokens and theming.", link: "#" },
            { title: "Realtime Dashboard", desc: "WebSockets, charts, and virtualization.", link: "#" },
            { title: "E2E Testing", desc: "Playwright-driven CI with visual diffs.", link: "#" },
            { title: "Perf Audit", desc: "Lighthouse 95+ by code-splitting and memoization.", link: "#" },
            { title: "Animations", desc: "Micro-interactions with accessible motion.", link: "#" },
            { title: "Docs Site", desc: "Content-layer + MDX with search.", link: "#" },
          ].map((p) => (
            <a key={p.title} href={p.link} className="group surface rounded-xl p-5 hover:shadow-md transition-all border border-white/10">
              <div className="h-36 rounded-lg mb-4 brand-gradient opacity-70 group-hover:opacity-90 transition-opacity" />
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-sm muted">{p.desc}</p>
            </a>
          ))}
      </div>
    </Section>
  )
}
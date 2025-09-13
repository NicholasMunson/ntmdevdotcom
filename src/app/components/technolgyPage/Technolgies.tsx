"use client";
import { useParallax } from "../../hooks/useParallax";
import Section from "../Section";

interface TechnolgiesProps {
  parallaxConfig: {
    speed: number;
    direction: "up" | "down";
  };
}

export default function Technolgies({ parallaxConfig }: TechnolgiesProps) {
  const { transform } = useParallax(parallaxConfig);

  return (
    <Section
      id="technologies"
      overlay
      style={{ transform }}
      containerClassName="flex flex-col items-center gap-8"
    >
      <h2 className="text-3xl font-bold">Technologies</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
        {[
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "TailwindCSS",
          "Vite",
          "Jest",
          "React Testing Library",
          "Zustand",
          "Redux",
          "GraphQL",
          "REST",
        ].map((tech) => (
          <li
            key={tech}
            className="surface rounded-lg px-4 py-2 text-sm text-center hover:shadow-md transition-shadow"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Section>
  );
}

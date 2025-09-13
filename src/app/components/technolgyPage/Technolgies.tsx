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

      <div className="flex flex-col gap-8 w-full">
        <section>
          <h3 className="text-xl font-semibold mb-3">Frontend tooling</h3>
          <ul className="grid grid-cols-2 gap-3">
            {[
              "HTML/CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "TailwindCSS",
              "Redux",
              "Zustand",
              "React Router",
              "React Hook Form",
              "Shadcn/UI",
              "Alpine.js",
              "ERB templates (Ruby on Rails)",
              "Storybook",
            ].map((tech) => (
              <li
                key={tech}
                className="surface rounded-lg px-4 py-2 text-sm text-center hover:shadow-md transition-shadow"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Backend tooling</h3>
          <ul className="grid grid-cols-2 gap-3">
            {[
              "Node.js",
              "Next.js",
              "Prisma",
              "Express",
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "Redis",
              "Docker",
              "AWS",
              "GCP",
              "Firebase",
              "CircleCI",
            ].map((tech) => (
              <li
                key={tech}
                className="surface rounded-lg px-4 py-2 text-sm text-center hover:shadow-md transition-shadow"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Other tools and integrations</h3>
          <ul className="grid grid-cols-2 gap-3">
            {[
              "GitHub",
              "Linear",
              "Agile/Scrum",
              "Figma",
              "Notion",
              "Trello",
              "Dart/Flutter",
              "SendGrid",
              "GitHub Actions",
              "Stripe",
            ].map((tech) => (
              <li
                key={tech}
                className="surface rounded-lg px-4 py-2 text-sm text-center hover:shadow-md transition-shadow"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Section>
  );
}

"use client";
import { useParallax } from "../../hooks/useParallax";
import Section from "../_components/Section";
import ListSection from "./_components/ListSection";

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

      <div className="flex flex-col gap-8 w-full my-4">
        <ListSection
          title="Frontend tooling..."
          items={[
            "HTML/CSS",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Vue.js",
            "TailwindCSS",
            "Redux",
            "Zustand",
            "React Router",
            "React Hook Form",
            "Shadcn/UI",
            "Alpine.js",
            "ERB templates",
            "Storybook",
            "SWR",
            "Cypress",
          ]}
        />
        <ListSection
          title="Backend tooling..."
          items={[
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
            "Render",
          ]}
        />
        <ListSection
          title="Other tools and integrations..."
          items={[
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
          ]}
        />
        <ListSection
          title="Currently digging deeper into..."
          items={["RAG pipelines", "AI agents", "System design"]}
        />
      </div>
    </Section>
  );
}

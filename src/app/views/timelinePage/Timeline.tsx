"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Section from "../_components/Section";
import { useTheme } from "../../providers/ThemeProvider";

export default function Timeline() {
  return (
    <Section
      id="timeline"
      overlay
      containerClassName="w-full"
      title="Professional journey & education"
    >
      <div className="w-full mt-6">
        <VerticalTimeline
          className="timeline"
          layout="2-columns"
          lineColor="rgba(255,255,255,0.15)"
        >
          <VerticalTimelineElement
            date="Mar 2023 — Aug 2025 (2 years 3 months)"
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
            <RoleDetails
              title="Frontend Engineer"
              subtitle="SalonInteractive"
              overview="As part of a close-knit, highly collaborative team, I contributed across planning, architecture, development, testing, and deployment. Led and shipped features reliably while balancing greenfield work building new features consuming Ruby on Rails API with legacy maintenance of the Rails views and templates."
              techs={[
                "TypeScript",
                "React",
                "Next.js",
                "CSS Modules",
                "React Hook Form",
                "SWR",
                "Zustand",
                "Radix UI",
                "Ruby on Rails",
                "Alpine.js",
                "Tailwind CSS",
                "Storybook",
                "Dart",
                "Flutter",
                "App Store Connect",
                "Google Play",
              ]}
            />
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
            <RoleDetails
              title="Software Engineer"
              subtitle="Company"
              overview="Built features end‑to‑end, added tests, and optimized bundle size."
              techs={[
                "TypeScript",
                "React",
                "CSS Modules",
                "React Hook Form",
                "Radix UI",
                "Ruby on Rails",
                "Alpine.js",
                "Tailwind CSS",
              ]}
            />
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
            <RoleDetails
              title="Engineering Intern"
              subtitle="Company"
              overview="Assisted with component library and accessibility fixes."
              techs={[
                "TypeScript",
                "React",
                "CSS Modules",
                "React Hook Form",
                "Radix UI",
                "Ruby on Rails",
                "Alpine.js",
                "Tailwind CSS",
              ]}
            />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Section>
  );
}

type RoleDetailsProps = {
  title?: string;
  subtitle?: string;
  overview: string;
  techs: string[];
};

function RoleDetails({ title, subtitle, overview, techs }: RoleDetailsProps) {
  const { isDark } = useTheme();
  const pillClass = isDark
    ? "px-2 py-1 text-xs rounded-md border border-white/10 bg-white/5"
    : "px-2 py-1 text-xs rounded-md border border-black/10 bg-black/5";
  return (
    <div className="space-y-3">
      {(title || subtitle) && (
        <div>
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {subtitle && <h4 className="text-sm muted">{subtitle}</h4>}
        </div>
      )}
      <div>
        <h5 className="text-sm font-semibold">Overview</h5>
        <p className="text-sm muted mt-2">{overview}</p>
      </div>
      <div>
        <h5 className="text-sm font-semibold">Tech Used</h5>
        <div className="mt-2 flex flex-wrap gap-2">
          {techs.map((t) => (
            <span key={t} className={pillClass}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

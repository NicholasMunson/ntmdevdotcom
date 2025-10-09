"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Section from "../_components/Section";
import { useTheme } from "../../providers/ThemeProvider";

export default function Timeline() {
  const { isDark } = useTheme();
  const lineColor = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.2)";
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
          lineColor={lineColor}
          animate={true}
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
              subtitle="SalonInteractive • Remote"
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
            date="March 2022 — August 2023 (1 year 6 months)"
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
              title="Lead Software Engineer"
              subtitle="Clean Earth Rovers • Remote"
              overview="Spearheaded end-to-end development of environmental monitoring software. Built a secure Node.js/Express API with Google Cloud integrations and designed a React front-end from scratch, delivering pixel-perfect Figma implementations and real-time water data dashboards. Created 50+ reusable components to accelerate future development and ensure a consistent, scalable UI system."
              techs={[
                "Node.js",
                "Express",
                "Google Cloud Platform (GCP)",
                "React",
                "Figma",
                "JavaScript",
                "Reusable Component Libraries",
                "Data Visualization/Dashboards",
                "Secure Authentication & Login Flows",
                "REST API Development",
              ]}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Jan 2019 — Jan 2022 (3 years 1 month)"
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
              title="Software Engineer / Application Manager"
              subtitle="Intelivideo • Broomfield, Colorado / Remote"
              overview="As a software engineer, I found software solutions to issues and slowdowns in our internal application build process. Built clean User Interfaces for our Client Success Management team to add client metadata to our database. Integrated automation tools to further automate our processes for efficiency. As an Application Manager, I was responsible for configuration, testing, and deployment of all new client applications, as well as maintaining and updating 180+ Intelivideo client TV and mobile applications. Cut iOS testing and deployment time in half through process improvements."
              techs={[
                "JavaScript",
                "React",
                "iOS",
                "Mobile Development",
                "Automation",
                "Database Management",
                "Client Success",
                "Process Improvement",
                "Testing",
                "Deployment",
              ]}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="May 2018 — Jun 2018 (2 months)"
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
            iconStyle={{ background: "var(--brand-300)", color: "#053a32" }}
          >
            <RoleDetails
              title="Software Developer Internship"
              subtitle="dialect.ai • Greater Denver Area / Remote"
              overview="Used agile workflow methods to help develop the platform's landing page. The landing page was built in React and used Material UI."
              techs={[
                "React",
                "Material UI",
                "Agile",
                "JavaScript",
                "HTML",
                "CSS",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2018"
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
            iconStyle={{ background: "var(--brand-400)", color: "#fff" }}
          >
            <RoleDetails
              title="Full-Stack Web Development"
              subtitle="Galvanize Inc • Denver, Colorado"
              overview="Six month immersive web development course with exposure to the full JavaScript stack. Emphasis on agile and paired programming that reflect a real world development environment. With over 800 plus hours of industry training, this program has prepared me for the challenges ahead."
              techs={[
                "JavaScript",
                "Node.js",
                "React",
                "Vue.js",
                "PostgreSQL",
                "Agile",
                "Pair Programming",
                "HTML",
                "CSS",
                "Git",
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
    : "px-2 py-1 text-xs rounded-md border border-black/10 bg-black/5 text-center";
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

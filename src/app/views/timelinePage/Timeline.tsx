"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Section from "../_components/Section";

export default function Timeline() {
  return (
    <Section
      id="timeline"
      overlay
      containerClassName="w-full"
      title="Professional Journey"
    >
      <div className="w-full mt-6">
        <VerticalTimeline layout="2-columns" lineColor="rgba(255,255,255,0.15)">
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
              Built features end‑to‑end, added tests, and optimized bundle size.
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
    </Section>
  );
}

"use client";
import { useParallax } from "../../hooks/useParallax";
import Section from "../_components/Section";
import { useState } from "react";
import ProjectCard from "./_components/ProjectCard";
import ProjectModal from "./_components/ProjectModal";
import { Project } from "./_components/types";

interface ProjectsProps {
  parallaxConfig: {
    speed: number;
    direction: "up" | "down";
  };
}

export default function Projects({ parallaxConfig }: ProjectsProps) {
  const { transform } = useParallax(parallaxConfig);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "My Bevs",
      desc: "A Full Stack Progressive Web App for tracking beer and wine collections.",
      image: "/myBevs.png",
      websiteUrl: "https://my-bevs.web.app/",
      githubFrontend: "https://github.com/NicholasMunson/my-bevs",
      githubBackend: "https://github.com/NicholasMunson/my-bevs-node-backend",
      detailedInfo: {
        description: "A comprehensive full-stack beverage collection management system built as a Progressive Web App. The application allows users to catalog, rate, and track their beer and wine collections with a mobile-first design optimized for touch interactions. Features a RESTful API backend with full CRUD operations, database migrations, and comprehensive error handling. The PWA provides offline functionality and seamless data synchronization between frontend and backend services.",
        technologies: [
          "React 18",
          "React Router",
          "React Bootstrap",
          "CSS3",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Knex.js",
          "Morgan",
          "CORS",
          "dotenv",
          "PWA",
          "Firebase Hosting",
          "Render.com",
          "Cypress Testing"
        ],
        features: [
          "Full CRUD Operations",
          "Beer & Wine Management",
          "Rating System",
          "Search & Filter",
          "Offline Support",
          "Mobile-First Design",
          "Database Migrations",
          "Environment Configuration",
          "Error Handling",
          "CORS Integration",
          "Responsive UI",
          "PWA Installation"
        ],
        challenges: [
          "PWA Implementation & Offline Sync",
          "Mobile UX Design Optimization",
          "Database Schema Design",
          "API Error Handling",
          "Cross-Origin Resource Sharing",
          "Environment Configuration",
          "Deployment Pipeline Setup",
          "Data Validation & Security"
        ]
      }
    },
    {
      title: "Realtime Dashboard",
      desc: "WebSockets, charts, and virtualization.",
      githubFrontend: "https://github.com/yourusername/realtime-dashboard",
      detailedInfo: {
        description: "A real-time data visualization dashboard built with modern web technologies.",
        technologies: ["React", "WebSockets", "Chart.js", "Virtualization"],
        features: ["Real-time Updates", "Interactive Charts", "Data Virtualization"],
        challenges: ["WebSocket Management", "Performance Optimization", "Data Visualization"]
      }
    },
    {
      title: "E2E Testing",
      desc: "Playwright-driven CI with visual diffs.",
      githubFrontend: "https://github.com/yourusername/e2e-testing-suite",
      detailedInfo: {
        description: "Comprehensive end-to-end testing suite with visual regression testing capabilities.",
        technologies: ["Playwright", "CI/CD", "Visual Testing"],
        features: ["Automated Testing", "Visual Diffs", "CI Integration"],
        challenges: ["Test Stability", "Visual Regression Detection", "CI Performance"]
      }
    },
    {
      title: "Perf Audit",
      desc: "Lighthouse 95+ by code-splitting and memoization.",
      githubFrontend: "https://github.com/yourusername/performance-audit",
      detailedInfo: {
        description: "Performance optimization project achieving 95+ Lighthouse scores through advanced techniques.",
        technologies: ["React", "Code Splitting", "Memoization", "Lighthouse"],
        features: ["Code Splitting", "Memoization", "Bundle Optimization"],
        challenges: ["Bundle Size Reduction", "Runtime Performance", "Lighthouse Optimization"]
      }
    },
    {
      title: "Animations",
      desc: "Micro-interactions with accessible motion.",
      githubFrontend: "https://github.com/yourusername/accessible-animations",
      detailedInfo: {
        description: "Accessible animation library focusing on micro-interactions and motion design.",
        technologies: ["CSS Animations", "Framer Motion", "Accessibility"],
        features: ["Micro-interactions", "Accessible Motion", "Custom Animations"],
        challenges: ["Accessibility Compliance", "Performance", "Cross-browser Support"]
      }
    },
    {
      title: "Docs Site",
      desc: "Content-layer + MDX with search.",
      githubFrontend: "https://github.com/yourusername/docs-site",
      detailedInfo: {
        description: "Documentation site built with modern content management and search capabilities.",
        technologies: ["Next.js", "MDX", "Content Layer", "Search"],
        features: ["MDX Support", "Full-text Search", "Content Management"],
        challenges: ["Search Implementation", "Content Processing", "Performance"]
      }
    }
  ];

  return (
    <Section
      id="projects"
      overlay
      containerClassName="w-full"
      title="Projects"
      subtitle="Selected work demonstrating performance, accessibility, and polish."
    >
      <div
        style={{ transform }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onInfoClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}

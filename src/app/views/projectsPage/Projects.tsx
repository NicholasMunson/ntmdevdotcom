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
      title: "Urban Canvas",
      desc: "A collaborative group project where each team member contributed to all aspects of the full-stack application.",
      image: "/urbanCanvus.png",
      githubFrontend: "https://github.com/NicholasMunson/UrbanCanvas",
      githubBackend: "https://github.com/Pleeper228/urban-canvas-server",
      detailedInfo: {
        description: "A collaborative full-stack group project where each team member contributed to all aspects of the application including frontend, backend, database design, and deployment. This project demonstrates strong teamwork, code collaboration, and full-stack development skills across the entire technology stack.",
        technologies: [
          "JavaScript",
          "Node.js",
          "Express",
          "Database Design",
          "API Development",
          "Frontend Development",
          "Git Collaboration",
          "Group Project Management"
        ],
        features: [
          "Full-Stack Development",
          "Team Collaboration",
          "Database Integration",
          "API Design",
          "Frontend-Backend Communication",
          "Version Control",
          "Code Review Process",
          "Project Planning"
        ],
        challenges: [
          "Team Coordination",
          "Code Merge Conflicts",
          "Feature Integration",
          "Database Schema Design",
          "API Endpoint Planning",
          "Git Workflow Management",
          "Cross-Team Communication",
          "Project Timeline Management"
        ]
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

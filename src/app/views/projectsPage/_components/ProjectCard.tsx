"use client";
import { Project } from "./types";
import Image from "next/image";
import { Button } from "../../../components/ui";
import {
  WebsiteIcon,
  InfoIcon,
  GitHubIcon,
} from "../../../components/ui/icons";

interface ProjectCardProps {
  project: Project;
  onInfoClick: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onInfoClick,
}: ProjectCardProps) {
  return (
    <div className="group surface rounded-xl p-5 hover:shadow-md transition-all border border-white/10 flex flex-col">
      <div className="h-36 rounded-lg mb-4 overflow-hidden relative">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full brand-gradient opacity-70 group-hover:opacity-90 transition-opacity" />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm muted mb-4 flex-grow">{project.desc}</p>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 mt-auto">
        {/* Top row: Website (if present) or Info button */}
        {project.websiteUrl ? (
          <Button
            variant="primary"
            size="xs"
            icon={<WebsiteIcon />}
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </Button>
        ) : (
          <Button
            variant="info"
            size="xs"
            icon={<InfoIcon />}
            onClick={() => onInfoClick(project)}
          >
            Info
          </Button>
        )}

        {/* If there's a website, Info goes in the second top position */}
        {project.websiteUrl && (
          <Button
            variant="info"
            size="xs"
            icon={<InfoIcon />}
            onClick={() => onInfoClick(project)}
          >
            Info
          </Button>
        )}

        {/* Bottom row: GitHub buttons */}
        {project.githubFrontend && (
          <Button
            variant="secondary"
            size="xs"
            icon={<GitHubIcon />}
            href={project.githubFrontend}
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend
          </Button>
        )}

        {project.githubBackend && (
          <Button
            variant="secondary"
            size="xs"
            icon={<GitHubIcon />}
            href={project.githubBackend}
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend
          </Button>
        )}
      </div>
    </div>
  );
}

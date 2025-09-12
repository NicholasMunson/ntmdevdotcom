"use client";
import { useParallax } from "../../hooks/useParallax";

interface ProjectsProps {
  parallaxConfig: {
    speed: number;
    direction: "up" | "down";
  };
}

export default function Projects({ parallaxConfig }: ProjectsProps) {
  const { transform } = useParallax(parallaxConfig);
  return (
    <div style={{ transform }} className="h-screen bg-[#9be0c5] flex items-center justify-center relative z-20 w-full">
      <h1 className="text-4xl font-bold">Projects</h1>
    </div>
  )
}
"use client";
import { useParallax } from "../../hooks/useParallax";

interface TechnolgiesProps {
  parallaxConfig: {
    speed: number;
    direction: "up" | "down";
  };
}

export default function Technolgies({ parallaxConfig }: TechnolgiesProps) {
  const { transform } = useParallax(parallaxConfig);

  return (
    <div
      className="h-screen bg-gray-100 flex items-center justify-center"
      style={{ transform }}
    >
      <h2 className="text-3xl">Technolgies</h2>
    </div>
  );
}

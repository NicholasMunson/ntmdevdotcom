"use client";
import { useParallax } from "@/app/hooks/useParallax";

interface BufferProps {
  bgColor?: string;
  parallaxConfig: {
    speed: number;
    direction: "up" | "down";
  };
}
export default function Buffer({
  bgColor = "bg-gray-300",
  parallaxConfig,
}: BufferProps) {
  const { transform } = useParallax(parallaxConfig);
  return (
    <div
      className={`h-screen ${
        bgColor ? bgColor : "bg-gray-300"
      } flex items-center justify-center`}
      style={{ transform }}
    ></div>
  );
}

"use client";
import { useParallax } from "@/app/hooks/useParallax";

interface BufferProps {
  bgColor?: string;
  height?: string;
  parallaxConfig: {
    speed: number;
    direction: "up" | "down";
  };
}
export default function Buffer({
  bgColor = "bg-gray-300",
  height = "h-screen",
  parallaxConfig,
}: BufferProps) {
  const { transform } = useParallax(parallaxConfig);
  return (
    <div
      className={`${height} ${
        bgColor ? bgColor : "bg-gray-300"
      } flex items-center justify-center relative z-20 w-full`}
      style={{ transform }}
    ></div>
  );
}

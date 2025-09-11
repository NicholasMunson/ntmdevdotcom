"use client";
import { useParallax } from "../../hooks/useParallax";

export default function IntroCopy() {
  const { transform } = useParallax({ speed: 0.3, direction: "down" });

  return (
    <div
      className="flex flex-col flex-1 items-center justify-center"
      style={{ transform }}
    >
      <p className="text-xl text-gray-600">I build with...</p>
    </div>
  );
}

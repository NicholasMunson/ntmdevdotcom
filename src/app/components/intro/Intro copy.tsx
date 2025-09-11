"use client";
import { useParallax } from "../../hooks/useParallax";

export default function IntroCopy() {
  const { transform } = useParallax({ speed: 0.3, direction: "up" });

  return (
    // <div
    //   className="flex flex-1 items-center justify-center"
    //   style={{ transform }}
    // >
      <div className="h-screen bg-gray-100 flex items-center justify-center"
      style={{ transform }}>
        <h2 className="text-3xl">Section 2</h2>
      </div>
    // </div>
  );
}

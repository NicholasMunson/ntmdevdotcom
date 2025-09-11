"use client";
import { useState, useEffect } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, direction = "down" } = options;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const multiplier = direction === "up" ? -1 : 1;
  const transform = `translateY(${scrollY * speed * multiplier}px)`;

  return { transform, scrollY };
}

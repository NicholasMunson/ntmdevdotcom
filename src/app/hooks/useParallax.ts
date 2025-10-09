"use client";
import { useState, useEffect } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
  enabled?: boolean; // allow explicit override
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, direction = "down", enabled } = options;
  const [scrollY, setScrollY] = useState(0);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  // Respect explicit override, otherwise use prefers-reduced-motion to disable by default
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (enabled !== undefined) {
      setIsEnabled(enabled);
      return;
    }
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setIsEnabled(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [enabled]);

  useEffect(() => {
    if (!isEnabled) return;
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isEnabled]);

  const multiplier = direction === "up" ? -1 : 1;
  const transform = isEnabled
    ? `translateY(${scrollY * speed * multiplier}px)`
    : "none";

  return { transform, scrollY };
}

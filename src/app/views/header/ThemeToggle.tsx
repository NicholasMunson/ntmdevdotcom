"use client";

import { useTheme } from "@/app/providers/ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  const baseClasses =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const bgClasses = isDark ? "" : "bg-white/10";
  const hoverClasses = isDark ? "hover:bg-white/10" : "hover:bg-black/10";

  return (
    <button
      onClick={toggleTheme}
      className={`${baseClasses} ${bgClasses} ${hoverClasses}`}
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

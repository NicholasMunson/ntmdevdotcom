"use client";

import { useTheme } from "@/app/providers/ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-md text-sm font-medium bg-black/5 dark:bg-white/10 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

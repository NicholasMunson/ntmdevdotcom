"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const hasClass = document.documentElement.classList.contains("dark");
    const initial = savedTheme
      ? savedTheme === "dark"
      : hasClass || prefersDark;
    setIsDark(initial);
    const el = document.documentElement;
    if (initial) el.classList.add("dark");
    else el.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const next = !(isDark ?? false);
    setIsDark(next);
    const el = document.documentElement;
    if (next) {
      el.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      el.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-[60] p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
      aria-pressed={!!isDark}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

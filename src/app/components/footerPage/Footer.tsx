"use client";
import { useTheme } from "@/app/providers/ThemeProvider";
export default function Footer() {
  const { isDark } = useTheme();

  const linkClasses = isDark
    ? "hover:text-white hover:bg-white/10"
    : "hover:text-black hover:bg-black/5";
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 flex items-center justify-between">
        <p className="text-sm muted">
          © {new Date().getFullYear()} Nicholas T Munson
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            className={linkClasses}
            href="#intro"
          >
            Top
          </a>
          <a
            className={linkClasses}
            href="#technologies"
          >
            Tech
          </a>
          <a
            className={linkClasses}
            href="#projects"
          >
            Projects
          </a>
        </div>
      </div>
    </footer>
  );
}

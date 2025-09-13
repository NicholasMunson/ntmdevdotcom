import { useTheme } from "@/app/providers/ThemeProvider";

export default function Links() {
  const { isDark } = useTheme();

  const base = "px-3 py-2 rounded-md text-sm transition-colors";
  const linkClasses = isDark
    ? `${base} font-medium text-white/80 hover:text-white hover:bg-white/10`
    : `${base} font-medium text-black/80 hover:text-black hover:bg-black/5`;
  return (
    <nav className="flex items-center gap-3 md:gap-6">
      <a
        className={linkClasses}
        target="_blank"
        href="https://github.com/NicholasMunson"
      >
        Github
      </a>
      <a
        className={linkClasses}
        target="_blank"
        href="https://www.linkedin.com/in/nicholastmunson/"
      >
        LinkedIn
      </a>
      <a
        className={linkClasses}
        target="_blank"
        href="https://drive.google.com/file/d/1Avkmc58rqC0nWKP4ubNuJH77sKChPYoL/view?usp=drive_link"
      >
        Resume
      </a>
    </nav>
  );
}

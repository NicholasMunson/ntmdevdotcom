export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container py-10 flex items-center justify-between">
        <p className="text-sm muted">
          © {new Date().getFullYear()} Nicholas T Munson
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            href="#intro"
          >
            Top
          </a>
          <a
            className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            href="#technologies"
          >
            Tech
          </a>
          <a
            className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            href="#projects"
          >
            Projects
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Links() {
  return (
    <nav className="flex items-center gap-3 md:gap-6">
      <a
        className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        target="_blank"
        href="https://github.com/NicholasMunson"
      >
        Github
      </a>
      <a
        className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        target="_blank"
        href="https://www.linkedin.com/in/nicholastmunson/"
      >
        LinkedIn
      </a>
      <a
        className="px-3 py-2 rounded-md text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
        target="_blank"
        href="https://drive.google.com/file/d/1Avkmc58rqC0nWKP4ubNuJH77sKChPYoL/view?usp=drive_link"
      >
        Resume
      </a>
    </nav>
  );
}

export default function Links() {
  return (
    <div className="flex gap-4 flex-end">
      <a
        className="hover:text-[#717171] hover:scale-110 hover:animate-pulse transition-all duration-200"
        target="_blank"
        href="https://github.com/NicholasMunson"
      >
        Github
      </a>
      <a
        className="hover:text-[#717171] hover:scale-110 hover:animate-pulse transition-all duration-200"
        target="_blank"
        href="https://www.linkedin.com/in/nicholastmunson//"
      >
        LinkedIn
      </a>
      <a
        className="hover:text-[#717171] hover:scale-110 hover:animate-pulse transition-all duration-200"
        target="_blank"
        href="https://drive.google.com/file/d/1Avkmc58rqC0nWKP4ubNuJH77sKChPYoL/view?usp=drive_link"
      >
        Resume
      </a>
    </div>
  );
}

// import Image from "next/image";
import Header from "./components/header/Header";
import Technolgies from "./components/technolgyPage/Technolgies";
import Intro from "./components/introPage/Intro";
import Projects from "./components/projectsPage/Projects";
import Footer from "./components/footerPage/Footer";

// Parallax configuration - speeds are complementary to prevent gaps
const parallaxConfig = {
  intro: { speed: 0, direction: "down" as const },
  technologies: { speed: 0, direction: "up" as const },
  projects: { speed: 0, direction: "up" as const },
  buffer: { speed: 0, direction: "down" as const },
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-24 flex flex-col">
        <Intro parallaxConfig={parallaxConfig.intro} />
        <Technolgies parallaxConfig={parallaxConfig.technologies} />
        <Projects parallaxConfig={parallaxConfig.projects} />
        <Footer />
      </div>
    </>
  );
}

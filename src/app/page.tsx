// import Image from "next/image";
import Header from "./views/header/Header";
import Technolgies from "./views/technolgyPage/Technolgies";
import Intro from "./views/introPage/Intro";
import Projects from "./views/projectsPage/Projects";
import Footer from "./views/footerPage/Footer";
import Timeline from "./views/timelinePage/Timeline";

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
        <Timeline />
        <Technolgies parallaxConfig={parallaxConfig.technologies} />
        <Projects parallaxConfig={parallaxConfig.projects} />
        <Footer />
      </div>
    </>
  );
}

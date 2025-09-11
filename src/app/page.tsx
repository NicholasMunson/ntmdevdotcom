// import Image from "next/image";
import Header from "./components/header/Header";
import Technolgies from "./components/technolgyPage/Technolgies";
import Intro from "./components/introPage/Intro";
import Projects from "./components/projectsPage/Projects";
import Buffer from "./components/bufferPage/Buffer";

// Parallax configuration
const parallaxConfig = {
  header: { speed: 0.5, direction: "up" as const },
  intro: { speed: 0.2, direction: "down" as const },
  // technologies: { speed: 0.3, direction: "down" as const },
  technologies: { speed: 0.4, direction: "up" as const },
  // projects: { speed: 0.4, direction: "up" as const },
  projects: { speed: 0.6, direction: "up" as const },
  buffer1: { speed: 0.3, direction: "down" as const },
  buffer2: { speed: 0.3, direction: "down" as const },
};

export default function Home() {
  return (
    <div className="flex flex-col bg-[url('/binary.svg')] ">
      <Header parallaxConfig={parallaxConfig.header} />
      <Intro parallaxConfig={parallaxConfig.intro} />
      <Buffer parallaxConfig={parallaxConfig.buffer1} bgColor="bg-red-100" />
      <Technolgies parallaxConfig={parallaxConfig.technologies} />
      <Buffer parallaxConfig={parallaxConfig.buffer2} bgColor="bg-green-100" />
      <Projects parallaxConfig={parallaxConfig.projects} />

      {/* Add content to make page scrollable */}
      <div className="h-screen bg-gray-300 flex items-center justify-center">
        <h2 className="text-3xl">Section 4</h2>
      </div>
    </div>
  );
}

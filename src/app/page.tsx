// import Image from "next/image";
import Header from "./components/header/Header";
import Technolgies from "./components/technolgyPage/Technolgies";
import Intro from "./components/introPage/Intro";
import Projects from "./components/projectsPage/Projects";
import Buffer from "./components/bufferPage/Buffer";

// Parallax configuration
const parallaxConfig = {
  intro: { speed: 0.2, direction: "down" as const },
  // technologies: { speed: 0.3, direction: "down" as const },
  technologies: { speed: 0.2, direction: "up" as const },
  // projects: { speed: 0.4, direction: "up" as const },
  projects: { speed: 0.2, direction: "up" as const },
  buffer: { speed: 0.3, direction: "down" as const },

};

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-32 md:pt-30">
        <Intro parallaxConfig={parallaxConfig.intro} />
        <Buffer
          parallaxConfig={parallaxConfig.buffer}
          bgColor="bg-neutral-400"
        />
        <Technolgies parallaxConfig={parallaxConfig.technologies} />
        <Buffer
          parallaxConfig={parallaxConfig.buffer}
          bgColor="bg-neutral-300"
        />
        <Projects parallaxConfig={parallaxConfig.projects} />
        <Buffer
          parallaxConfig={parallaxConfig.buffer}
          bgColor="bg-neutral-200"
        />
        <Projects parallaxConfig={parallaxConfig.projects} />


        {/* Add content to make page scrollable */}
        <div className="h-screen bg-[#9be0c5] flex items-center justify-center">
          <h2 className="text-3xl">Section 4</h2>
        </div>
      </div>
    </>
  );
}

// import Image from "next/image";
import Header from "./components/header/Header";
import Technolgies from "./components/technolgyPage/Technolgies";
import Intro from "./components/introPage/Intro";
import Projects from "./components/projectsPage/Projects";
import Buffer from "./components/bufferPage/Buffer";

// Parallax configuration - speeds are complementary to prevent gaps
const parallaxConfig = {
  intro: { speed: 0.5, direction: "down" as const },
  technologies: { speed: 0.5, direction: "up" as const },
  projects: { speed: 0.6, direction: "up" as const },
  buffer: { speed: 0.4, direction: "down" as const },
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-32 md:pt-30 flex flex-col">
        <Intro parallaxConfig={parallaxConfig.intro} />
        <Buffer
          parallaxConfig={parallaxConfig.buffer}
          bgColor="bg-neutral-400"
          height="h-screen"
        />
        <Technolgies parallaxConfig={parallaxConfig.technologies} />
        {/* <Buffer
          parallaxConfig={parallaxConfig.buffer}
          bgColor="bg-neutral-300"
          height="h-[20vh]"
        /> */}
        <Projects parallaxConfig={parallaxConfig.projects} />
        <Buffer
          parallaxConfig={parallaxConfig.buffer}
          bgColor="bg-neutral-200"
          height="h-1/2"
        />
      </div>
    </>
  );
}

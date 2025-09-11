// import Image from "next/image";
import Header from "./components/header/Header";
import IntroCopy from "./components/intro/Intro copy";
import Intro from "./components/header/Intro";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-screen flex flex-col items-center justify-center">
        <Intro />
        <IntroCopy />
      </div>

      {/* Add content to make page scrollable */}
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl">Section 2</h2>
      </div>
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-3xl">Section 3</h2>
      </div>
      <div className="h-screen bg-gray-300 flex items-center justify-center">
        <h2 className="text-3xl">Section 4</h2>
      </div>
    </div>
  );
}

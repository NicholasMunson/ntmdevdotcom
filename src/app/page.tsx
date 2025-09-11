// import Image from "next/image";
import Header from "./components/header/Header";
import IntroCopy from "./components/intro/Intro copy";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <IntroCopy />

    </div>
  );
}

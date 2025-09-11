"use client";
import Logo from "./Logo";
import Links from "./Links";
import Intro from "./Intro";
import { useParallax } from "../../hooks/useParallax";

export default function Header() {
  const { transform } = useParallax({ speed: 0.5, direction: "down" });
  return (
    <header className="md:h-30 h-33 flex justify-between items-center bg-[#76a7bc] flex-col md:flex-row"
    style={{ transform }}>
      <Logo />
      {/* <div className="hidden lg:flex">
        <Intro />
      </div> */}
      <Links />
    </header>
  );
}

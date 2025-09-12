"use client";
import Logo from "./Logo";
import Links from "./Links";
import { useParallax } from "../../hooks/useParallax";

interface HeaderProps {
  parallaxConfig: {
    speed: number;
    direction: "up" | "down";
  };
}

export default function Header({ parallaxConfig }: HeaderProps) {
  const { transform } = useParallax(parallaxConfig);
  return (
    <header
      className="md:h-30 min-h-[8rem] flex justify-between items-center bg-[#76a7bc] flex-col md:flex-row py-4 md:py-0"
      style={{ transform }}
    >
      <Logo />
      <Links />
    </header>
  );
}

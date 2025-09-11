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
      className="md:h-30 h-33 flex justify-between items-center bg-[#76a7bc] flex-col md:flex-row"
      style={{ transform }}
    >
      <Logo />
      <Links />
    </header>
  );
}

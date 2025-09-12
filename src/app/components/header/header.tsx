"use client";
import Logo from "./Logo";
import Links from "./Links";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate when the displayText gets hidden behind the header
  const introHeight = isClient ? window.innerHeight : 0;
  const headerHeight = 128; // 8rem in pixels
  const triggerPoint = headerHeight + introHeight * 0.45; // Start when displayText is more hidden

  // Calculate scroll progress from trigger point
  const scrollProgress = Math.max(
    0,
    (scrollY - triggerPoint) / (introHeight - triggerPoint)
  );

  // Calculate opacity based on scroll progress
  const opacity = isClient ? Math.max(0, Math.min(1, scrollProgress * 2)) : 0; // Fade in as displayText goes behind header

  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:h-30 min-h-[8rem] flex justify-between items-center bg-[#3bc493] flex-col md:flex-row py-4 md:py-0">
      <Logo />
      <p
        className="md:text-6xl hidden md:flex font-bold "
        style={{
          opacity: opacity,
        }}
      >
        Nicholas T Munson
      </p>
      <Links />
    </header>
  );
}

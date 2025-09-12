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
  const headerHeight = 96; // 6rem in pixels
  const triggerPoint = headerHeight + introHeight * 0.45; // Start when displayText is more hidden

  // Calculate scroll progress from trigger point
  const scrollProgress = Math.max(
    0,
    (scrollY - triggerPoint) / (introHeight - triggerPoint)
  );

  // Calculate opacity based on scroll progress
  const opacity = isClient ? Math.max(0, Math.min(1, scrollProgress * 2)) : 0; // Fade in as displayText goes behind header

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center border-b border-white/10 glass">
      <div className="container flex items-center justify-between gap-6">
        <Logo />
        <p
          className="hidden md:block text-3xl font-extrabold tracking-tight text-gradient"
          style={{ opacity }}
        >
          Nicholas T Munson
        </p>
        <Links />
      </div>
    </header>
  );
}

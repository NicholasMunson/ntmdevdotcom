"use client";
import Logo from "./Logo";
import Links from "./Links";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "../../components/ui/MobileMenu";
import { Button } from "../../components/ui";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center border-b border-white/10 bg-[var(--color-surface)]">
        <div className="container grid grid-cols-3 items-center">
          <div className="justify-self-start">
            <Logo />
          </div>
          <p
            className="hidden md:block text-3xl font-extrabold tracking-tight text-gradient justify-self-center text-center col-start-2"
            style={{ opacity }}
          >
            Nicholas T Munson
          </p>
          <div className="flex items-center gap-3 justify-self-end">
            {/* Desktop navigation */}
            <div className="hidden md:flex">
              <Links />
            </div>
            <ThemeToggle />
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

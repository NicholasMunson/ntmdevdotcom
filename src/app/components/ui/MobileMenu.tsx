"use client";
import { useState } from "react";
import { Button } from "../../components/ui";
import { useTheme } from "../../providers/ThemeProvider";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { isDark } = useTheme();

  const menuItems = [
    {
      label: "GitHub",
      href: "https://github.com/NicholasMunson",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nicholastmunson/",
      external: true,
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1Avkmc58rqC0nWKP4ubNuJH77sKChPYoL/view?usp=drive_link",
      external: true,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      {/* Slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[var(--color-surface)] border-l border-white/10 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Navigation</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>

          {/* Menu items */}
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                  isDark
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-black/80 hover:text-black hover:bg-black/5"
                }`}
                onClick={onClose}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

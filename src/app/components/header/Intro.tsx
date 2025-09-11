"use client";
import { useState, useEffect } from "react";
import { useParallax } from "../../hooks/useParallax";

export default function Intro() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { transform } = useParallax({ speed: 0.5, direction: "down" });
  const texts = [
    "Hi, I'm Nicholas T Munson",
    "A Full-Stack JavaScript Developer",
    // "Problem Solver, Builder, and Leader",
    "I build digital solutions that matter",
    "Let's build something together!",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = texts[textIndex];

  useEffect(() => {
    if (!isDeleting && currentIndex < fullText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === fullText.length) {
      // Wait 2 seconds after typing completes
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next text and reset to start typing again
      setTextIndex((prev) => (prev + 1) % texts.length);
      setIsDeleting(false);
    }
  }, [currentIndex, fullText, isDeleting, textIndex, texts.length]);

  return (
    <div
      className="flex flex-col items-center justify-center h-50"
      style={{ transform }}
    >
      <h1 className="text-4xl font-bold">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}

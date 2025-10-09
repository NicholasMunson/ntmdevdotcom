"use client";
import { useState, useEffect } from "react";

interface UseTypingEffectOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function useTypingEffect({
  texts,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = texts[textIndex];

  useEffect(() => {
    if (!isDeleting && currentIndex < fullText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === fullText.length) {
      // Wait after typing completes
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, deletingSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next text and reset to start typing again
      setTextIndex((prev) => (prev + 1) % texts.length);
      setIsDeleting(false);
    }
  }, [
    currentIndex,
    fullText,
    isDeleting,
    textIndex,
    texts.length,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return { displayText, isDeleting, currentTextIndex: textIndex };
}

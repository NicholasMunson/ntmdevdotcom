import { colors, colorSchemes } from "../config/colors";

// Type for nested color objects
interface ColorValue {
  [key: string]: string | ColorValue;
}

// Utility functions for easy color usage
export const getColor = (colorPath: string) => {
  const keys = colorPath.split(".");
  let value: ColorValue = colors;

  for (const key of keys) {
    if (typeof value === "object" && value !== null && key in value) {
      value = (value as Record<string, ColorValue>)[key];
    } else {
      return null;
    }
  }

  return value;
};

// Get Tailwind class for a color
export const getColorClass = (
  colorPath: string,
  type: "bg" | "text" | "border" = "bg"
) => {
  const color = getColor(colorPath);
  if (!color) return "";

  // For custom colors, use arbitrary values
  return `${type}-[${color}]`;
};

// Predefined color schemes for easy use
export const schemes = {
  header: colorSchemes.header,
  intro: colorSchemes.intro,
  technologies: colorSchemes.technologies,
  projects: colorSchemes.projects,
  buffer: colorSchemes.buffer,
};

// Your specific palette colors as constants
export const palette = {
  // Green/Teal palette with numbered scale
  50: "#d9f1e8",
  100: "#9be0c5",
  200: "#6ed3b8",
  300: "#3bc493",
  400: "#009f6b",
  500: "#005c47",

  // Custom gray palette
  lightestGray: "#f5f5f5",
  veryLightGray: "#f0f0f0",
  mediumLightGray: "#e6e6e6",
  lightGray: "#d3d3d3",
  mediumGray: "#b0b0b0",
} as const;

// Tailwind classes for your palette
export const paletteClasses = {
  // Green/Teal palette with numbered scale
  50: "bg-[#d9f1e8]",
  100: "bg-[#9be0c5]",
  200: "bg-[#6ed3b8]",
  300: "bg-[#3bc493]",
  400: "bg-[#009f6b]",
  500: "bg-[#005c47]",

  // Custom gray palette
  lightestGray: "bg-[#f5f5f5]",
  veryLightGray: "bg-[#f0f0f0]",
  mediumLightGray: "bg-[#e6e6e6]",
  lightGray: "bg-[#d3d3d3]",
  mediumGray: "bg-[#b0b0b0]",
} as const;

// Text color classes for your palette
export const textPaletteClasses = {
  // Green/Teal palette with numbered scale
  50: "text-[#d9f1e8]",
  100: "text-[#9be0c5]",
  200: "text-[#6ed3b8]",
  300: "text-[#3bc493]",
  400: "text-[#009f6b]",
  500: "text-[#005c47]",

  // Custom gray palette
  lightestGray: "text-[#f5f5f5]",
  veryLightGray: "text-[#f0f0f0]",
  mediumLightGray: "text-[#e6e6e6]",
  lightGray: "text-[#d3d3d3]",
  mediumGray: "text-[#b0b0b0]",
} as const;

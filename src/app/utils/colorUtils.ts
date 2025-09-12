import { colors, colorSchemes } from "../config/colors";

// Utility functions for easy color usage
export const getColor = (colorPath: string) => {
  const keys = colorPath.split(".");
  let value: any = colors;

  for (const key of keys) {
    value = value[key];
    if (value === undefined) return null;
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
  // Green/Teal palette
  appleGreen: "#d9f1e8",
  lightGreen: "#9be0c5",
  mediumLightGreen: "#6ed3b8",
  mediumGreen: "#3bc493",
  darkGreen: "#009f6b",
  darkestGreen: "#005c47",

  // Custom gray palette
  lightestGray: "#f5f5f5",
  veryLightGray: "#f0f0f0",
  mediumLightGray: "#e6e6e6",
  lightGray: "#d3d3d3",
  mediumGray: "#b0b0b0",
} as const;

// Tailwind classes for your palette
export const paletteClasses = {
  // Green/Teal palette
  appleGreen: "bg-[#d9f1e8]",
  lightGreen: "bg-[#9be0c5]",
  mediumLightGreen: "bg-[#6ed3b8]",
  mediumGreen: "bg-[#3bc493]",
  darkGreen: "bg-[#009f6b]",
  darkestGreen: "bg-[#005c47]",

  // Custom gray palette
  lightestGray: "bg-[#f5f5f5]",
  veryLightGray: "bg-[#f0f0f0]",
  mediumLightGray: "bg-[#e6e6e6]",
  lightGray: "bg-[#d3d3d3]",
  mediumGray: "bg-[#b0b0b0]",
} as const;

// Text color classes for your palette
export const textPaletteClasses = {
  // Green/Teal palette
  appleGreen: "text-[#d9f1e8]",
  lightGreen: "text-[#9be0c5]",
  mediumLightGreen: "text-[#6ed3b8]",
  mediumGreen: "text-[#3bc493]",
  darkGreen: "text-[#009f6b]",
  darkestGreen: "text-[#005c47]",

  // Custom gray palette
  lightestGray: "text-[#f5f5f5]",
  veryLightGray: "text-[#f0f0f0]",
  mediumLightGray: "text-[#e6e6e6]",
  lightGray: "text-[#d3d3d3]",
  mediumGray: "text-[#b0b0b0]",
} as const;

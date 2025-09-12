// Color palette configuration for the application
export const colors = {
  // Primary brand colors - using your green/teal palette
  primary: {
    50: "#d9f1e8", // Apple Green (lightest)
    100: "#9be0c5", // Light green
    200: "#6ed3b8", // Medium light green
    300: "#3bc493", // Medium green
    400: "#009f6h", // Dark green (assuming this is #009f6b)
    500: "#005c47", // Darkest green
    600: "#004a3a",
    700: "#00382d",
    800: "#002620",
    900: "#001413",
  },

  // Secondary colors - variations of your palette
  secondary: {
    50: "#f0fdf9",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },

  // Neutral grays - using your custom gray palette
  neutral: {
    50: "#f5f5f5", // Lightest gray
    100: "#f0f0f0", // Very light gray
    200: "#e6e6e6", // Medium light gray
    300: "#d3d3d3", // Light gray
    400: "#b0b0b0", // Medium gray
    500: "#9ca3af", // Standard gray
    600: "#6b7280", // Dark gray
    700: "#4b5563", // Darker gray
    800: "#374151", // Very dark gray
    900: "#1f2937", // Darkest gray
  },

  // Your custom gray palette
  customGray: {
    50: "#f5f5f5", // Lightest
    100: "#f0f0f0", // Very light
    200: "#e6e6e6", // Medium light
    300: "#d3d3d3", // Light
    400: "#b0b0b0", // Medium
  },

  // Accent colors - using your palette variations
  accent: {
    teal: {
      50: "#d9f1e8", // Apple Green
      100: "#9be0c5", // Light green
      200: "#6ed3b8", // Medium light green
      300: "#3bc493", // Medium green
      400: "#009f6b", // Dark green (corrected hex)
      500: "#005c47", // Darkest green
    },
    mint: {
      50: "#f0fdf9",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
    },
  },

  // Background colors
  background: {
    light: "#ffffff",
    dark: "#111827",
    section: {
      intro: "#ffffff",
      technologies: "#d9f1e8", // Apple Green (lightest)
      projects: "#9be0c5", // Light green
      buffer: {
        default: "#6ed3b8", // Medium light green
        teal: "#3bc493", // Medium green
        mint: "#dcfce7", // Mint green
      },
    },
  },

  // Text colors
  text: {
    light: "#000000",
    dark: "#f9fafb",
    muted: "#6b7280", // gray-500
    secondary: "#4b5563", // gray-600
  },
} as const;

// Tailwind CSS class mappings for easy use
export const colorClasses = {
  // Primary colors
  primary: {
    50: "bg-blue-50",
    100: "bg-blue-100",
    200: "bg-blue-200",
    300: "bg-blue-300",
    400: "bg-blue-400",
    500: "bg-blue-500",
    600: "bg-blue-600",
    700: "bg-blue-700",
    800: "bg-blue-800",
    900: "bg-blue-900",
  },

  // Secondary colors (header blue)
  secondary: {
    50: "bg-sky-50",
    100: "bg-sky-100",
    200: "bg-sky-200",
    300: "bg-sky-300",
    400: "bg-sky-400",
    500: "bg-sky-500",
    600: "bg-sky-600",
    700: "bg-sky-700",
    800: "bg-sky-800",
    900: "bg-sky-900",
  },

  // Neutral grays - using your custom gray palette
  neutral: {
    50: "bg-[#f5f5f5]", // Lightest gray
    100: "bg-[#f0f0f0]", // Very light gray
    200: "bg-[#e6e6e6]", // Medium light gray
    300: "bg-[#d3d3d3]", // Light gray
    400: "bg-[#b0b0b0]", // Medium gray
    500: "bg-gray-500", // Standard gray
    600: "bg-gray-600", // Dark gray
    700: "bg-gray-700", // Darker gray
    800: "bg-gray-800", // Very dark gray
    900: "bg-gray-900", // Darkest gray
  },

  // Your custom gray palette classes
  customGray: {
    50: "bg-[#f5f5f5]", // Lightest
    100: "bg-[#f0f0f0]", // Very light
    200: "bg-[#e6e6e6]", // Medium light
    300: "bg-[#d3d3d3]", // Light
    400: "bg-[#b0b0b0]", // Medium
  },

  // Accent colors
  accent: {
    brown: {
      100: "bg-amber-100",
      200: "bg-amber-200",
      300: "bg-amber-300",
      400: "bg-amber-400",
      500: "bg-amber-500",
    },
    green: {
      50: "bg-green-50",
      100: "bg-green-100",
      200: "bg-green-200",
      300: "bg-green-300",
      400: "bg-green-400",
      500: "bg-green-500",
    },
  },
} as const;

// Text color classes
export const textColorClasses = {
  light: "text-black",
  dark: "text-gray-50",
  muted: "text-gray-500",
  secondary: "text-gray-600",
  primary: "text-blue-600",
  accent: "text-amber-600",
} as const;

// Predefined color combinations for common use cases
export const colorSchemes = {
  header: {
    background: "bg-[#3bc493]", // Medium green from your palette
    text: "text-white",
  },
  intro: {
    background: "bg-white",
    text: "text-black",
    muted: "text-gray-600",
  },
  technologies: {
    background: "bg-[#d9f1e8]", // Apple Green (lightest)
    text: "text-black",
  },
  projects: {
    background: "bg-[#9be0c5]", // Light green
    text: "text-black",
  },
  // Buffer pages - darker, more muted for visual separation
  buffer: {
    default: "bg-[#b0b0b0]", // Medium gray - neutral separator
    dark: "bg-[#d3d3d3]", // Light gray - subtle separator
    accent: "bg-[#6ed3b8]", // Medium light green - when you want color
    muted: "bg-[#e6e6e6]", // Medium light gray - very subtle
  },
} as const;

// Type definitions for better TypeScript support
export type ColorKey = keyof typeof colors;
export type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
export type AccentColor = keyof typeof colors.accent;
export type BackgroundSection = keyof typeof colors.background.section;

import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "ghost"
  | "outline";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ButtonIconPosition = "left" | "right";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPosition;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-800 hover:bg-gray-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  info: "bg-purple-600 hover:bg-purple-700 text-white",
  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
  outline:
    "border border-gray-300 hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "sm",
  icon,
  iconPosition = "left",
  href,
  target,
  rel,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const combinedClassName =
    `${baseStyles} ${variantStyle} ${sizeStyle} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {content}
    </button>
  );
}

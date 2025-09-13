import { CSSProperties, ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  overlay?: boolean;
  overlayClassName?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  children,
  className = "",
  style,
  overlay = false,
  overlayClassName = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section relative overflow-hidden py-8 ${className}`}
      style={style}
    >
      {overlay && (
        <div
          className={`absolute inset-0 brand-gradient opacity-[0.08] ${overlayClassName}`}
        />
      )}
      <div className={`container relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

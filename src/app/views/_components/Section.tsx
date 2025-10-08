import { CSSProperties, ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  overlay?: boolean;
  overlayClassName?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({
  id,
  children,
  className = "",
  style,
  overlay = false,
  overlayClassName = "",
  containerClassName = "",
  title,
  subtitle,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section relative overflow-hidden py-8 ${className} px-4 sm:px-8 md:px-12 lg:px-20`}
      style={style}
    >
      {overlay && (
        <div
          className={`absolute inset-0 brand-gradient opacity-[0.08] ${overlayClassName}`}
        />
      )}
      <div className={`container relative z-10 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {title && <h2 className="text-3xl font-bold">{title}</h2>}
            {subtitle && <p className="muted">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

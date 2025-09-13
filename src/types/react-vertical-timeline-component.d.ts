declare module "react-vertical-timeline-component" {
  import * as React from "react";

  export interface VerticalTimelineProps {
    className?: string;
    animate?: boolean;
    lineColor?: string;
    layout?: "1-column" | "1-column-left" | "1-column-right" | "2-columns";
    children?: React.ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties | { borderRight?: string };
    date?: React.ReactNode;
    icon?: React.ReactNode;
    iconStyle?: React.CSSProperties;
    position?: "left" | "right";
    visible?: boolean;
    children?: React.ReactNode;
  }

  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}

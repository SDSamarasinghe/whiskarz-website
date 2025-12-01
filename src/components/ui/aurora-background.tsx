"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full w-full items-center justify-center bg-background text-foreground",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle radial glow */}
        {showRadialGradient && (
          <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_50%_30%,hsl(var(--accent)/0.18),transparent_60%),radial-gradient(circle_at_70%_70%,hsl(var(--primary)/0.12),transparent_65%)]" />
        )}
        {/* Moving aurora stripes */}
        <div className="absolute inset-0 animate-aurora [background-image:repeating-linear-gradient(115deg,hsl(var(--primary)/0.12)_0%,hsl(var(--accent)/0.12)_10%,hsl(var(--primary)/0.12)_20%,hsl(var(--accent)/0.12)_30%,hsl(var(--primary)/0.12)_40%,hsl(var(--accent)/0.12)_50%,hsl(var(--primary)/0.12)_60%,hsl(var(--accent)/0.12)_70%,hsl(var(--primary)/0.12)_80%,hsl(var(--accent)/0.12)_90%,hsl(var(--primary)/0.12)_100%)] [background-size:300%_200%] [background-position:50%_50%] blur-xl" />
        {/* White overlay to keep section bright */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>
      {children}
    </div>
  );
};

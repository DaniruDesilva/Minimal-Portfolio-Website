import React from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "muted" | "outline";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  className,
  size = "sm",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-mono font-medium tracking-tight rounded-md transition-colors";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] leading-relaxed",
    md: "px-2.5 py-1 text-xs",
  };

  const variantStyles = {
    default:
      "bg-slate-100/90 text-slate-700 border border-slate-200/80 hover:bg-slate-200/60",
    accent:
      "bg-blue-50 text-blue-700 border border-blue-200/80 hover:bg-blue-100/60",
    success:
      "bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100/60",
    muted:
      "bg-slate-50 text-slate-500 border border-slate-200/60",
    outline:
      "bg-transparent text-slate-700 border border-slate-300 hover:border-slate-400",
  };

  return (
    <span
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

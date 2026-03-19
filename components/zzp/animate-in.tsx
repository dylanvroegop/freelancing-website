"use client";

import { useAnimate } from "@/lib/use-animate";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export function AnimateIn({ children, className = "", delay = "0ms" }: AnimateInProps) {
  const { ref, visible } = useAnimate(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}

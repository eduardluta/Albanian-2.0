"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function FadeUp({
  children,
  className = "",
  threshold = 0.2,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
  as?: "div" | "section" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  // @ts-expect-error - dynamic Tag with ref
  return <Tag ref={ref} className={`fade-up ${className}`}>{children}</Tag>;
}

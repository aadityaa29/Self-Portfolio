"use client";
import { useEffect, useRef } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = dot.current!;
    const move = (e: MouseEvent) => {
      el.animate({ transform: `translate(${e.clientX}px, ${e.clientY}px)` }, {
        duration: 300,
        fill: "forwards",
        easing: "cubic-bezier(.2,.8,.2,1)",
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={dot}
      className="pointer-events-none fixed left-0 top-0 z-[60] size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mix-blend-screen"
      aria-hidden
    />
  );
}

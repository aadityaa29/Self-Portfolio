"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 backdrop-blur-xl bg-background/60 border border-white/10 dark:border-white/10 shadow-lg rounded-full px-4 py-2 flex items-center gap-3">
      {sections.map((s) => (
        <Link
          key={s.id}
          href={s.href}
          className={cn(
            "text-sm px-2 py-1 rounded-full transition-colors",
            active === s.id ? "bg-foreground text-background" : "hover:bg-foreground/10"
          )}
        >
          {s.label}
        </Link>
      ))}
      <div className="w-px h-6 bg-foreground/20 mx-2" />
      <ThemeToggle />
    </div>
  );
}

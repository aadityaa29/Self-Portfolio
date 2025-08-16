"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const current = theme === "system" ? systemTheme : theme;
  return (
    <Button
      aria-label="Toggle theme"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      {current === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

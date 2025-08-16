"use client";
import { useEffect, useRef } from "react";

// Lightweight particles / waves canvas background
export function HeroBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize() {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(DPR, DPR);
    }

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    function loop() {
      t += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grad = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
      grad.addColorStop(0, "#0ea5e933");
      grad.addColorStop(1, "#9333ea33");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 -z-10" aria-hidden />;
}

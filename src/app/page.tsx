"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroBackground } from "@/components/hero-background";
import { Cursor } from "@/components/cursor";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <div className="relative min-h-dvh">
      <Cursor />
      <Navbar />
      <HeroBackground />

      <Section id="home" className="pt-36">
        <div className="grid lg:grid-cols-[1.2fr_.8fr] items-center gap-10">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-black tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Aditya Pachouri
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Full‑stack developer crafting futuristic, animated, and accessible web experiences.
            </motion.p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <motion.div
            className="relative aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 to-fuchsia-600/20 backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image src="/next.svg" alt="avatar" fill className="object-contain p-16 dark:invert" />
          </motion.div>
        </div>
      </Section>

      <Section id="about">
        <h2 className="text-2xl font-bold mb-6">About</h2>
        <p className="text-muted-foreground max-w-3xl">
          B.Tech CSE student at JIIT. Open source contributor, frontend intern, and hackathon team lead. Passionate
          about React/Next, TypeScript, design systems, and performance.
        </p>
      </Section>

      <Section id="projects">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <Link href="/projects" className="text-sm underline">See all</Link>
        </div>
        <p className="text-muted-foreground">Highlighting a few selections. Explore the full list for more.</p>
      </Section>

      <Section id="contact">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className="text-muted-foreground">Email: adityapachouri01@gmail.com</p>
      </Section>

      <Footer />
    </div>
  );
}

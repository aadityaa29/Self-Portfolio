export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "maatrimitra",
    title: "MaatriMitra – AI Maternal Care",
    description:
      "An AI-based maternal care platform with Hindi/English multimodal UX for rural users; reminders, tracking, low-bandwidth optimized.",
    tags: ["Next.js", "Supabase", "AI", "i18n"],
    image: "/window.svg",
    demo: "#",
  },
  {
    slug: "blog-platform",
    title: "Coffee and Code – Blog Platform",
    description:
      "Multi-author blog with roles, real-time updates, analytics, and improved content efficiency.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    image: "/file.svg",
    github: "#",
  },
  {
    slug: "ai-travel",
    title: "AI Travel Planner",
    description:
      "Personalized routes using Maps APIs and Gemini integrations; budget tracker and suggestions.",
    tags: ["React", "Node.js", "AI"],
    image: "/globe.svg",
    demo: "#",
  },
];

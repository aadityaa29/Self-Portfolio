import { projects } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { use } from "react";

export const revalidate = 60; // ISR

function getProjects(q?: string, tag?: string) {
  const data = projects;
  const filtered = data.filter((p) =>
    (!q || p.title.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase())) &&
    (!tag || p.tags.includes(tag))
  );
  return filtered;
}

async function searchProjects(searchParams: Promise<{ q?: string; tag?: string }>) {
  const { q, tag } = await searchParams;
  return getProjects(q, tag);
}

export default function ProjectsPage({ searchParams }: { searchParams: Promise<{ q?: string; tag?: string }> }) {
  const list = use(searchProjects(searchParams));
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <form className="flex flex-wrap gap-3 mb-6" action="/projects" method="get">
        <Input name="q" placeholder="Search projects..." className="max-w-sm" defaultValue={(use(searchParams)).q}
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Link key={t} href={{ pathname: "/projects", query: { tag: t } }} className="px-3 py-1 rounded-full border border-foreground/20 text-sm hover:bg-foreground/10">
              {t}
            </Link>
          ))}
        </div>
      </form>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-2xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md p-4 hover:-translate-y-1 transition-transform">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-foreground/10">
              <Image src={p.image} alt="" fill className="object-contain p-6 group-hover:scale-105 transition-transform" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-foreground/10">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

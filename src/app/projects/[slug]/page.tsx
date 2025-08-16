import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export const revalidate = 60;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return {
    title: p?.title ?? "Project",
    description: p?.description,
    openGraph: {
      images: [`/api/og/${slug}`],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="relative aspect-video rounded-xl border border-foreground/10 overflow-hidden">
          <Image src={p.image} alt="" fill className="object-contain p-10" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{p.title}</h1>
          <p className="mt-3 text-muted-foreground">{p.description}</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {p.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-foreground/10">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

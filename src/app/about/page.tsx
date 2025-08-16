export const metadata = { title: "About – Aditya Pachouri" };

export default function AboutPage() {
  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js/Express", level: 80 },
    { name: "Databases (Mongo/MySQL)", level: 75 },
  ];
  const timeline = [
    { when: "Oct 2024 – Present", what: "Open Source Contributor @ GirlScript Summer of Code" },
    { when: "May 2025 – Jul 2025", what: "Frontend Intern @ Cura Healthcare" },
    { when: "Feb 2024 – Mar 2024", what: "Team Lead & Full‑Stack Dev (Hackathon)" },
  ];
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        I’m Aditya Pachouri, a full‑stack developer passionate about building delightful, high‑performance
        web experiences with modern stacks, animations, and thoughtful UX.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Skills</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-6">
        {skills.map((s) => (
          <div key={s.name} className="p-4 rounded-xl border border-foreground/10 bg-white/5 dark:bg-black/20">
            <div className="flex items-center justify-between mb-2"><span>{s.name}</span><span className="text-sm text-muted-foreground">{s.level}%</span></div>
            <div className="h-2 rounded-full bg-foreground/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sky-500 to-fuchsia-600" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-semibold">Experience</h2>
      <ul className="mt-4 space-y-3">
        {timeline.map((t) => (
          <li key={t.what} className="p-4 rounded-xl border border-foreground/10 bg-white/5 dark:bg-black/20">
            <div className="text-sm text-muted-foreground">{t.when}</div>
            <div className="font-medium">{t.what}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

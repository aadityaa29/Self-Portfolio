import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-10 border-t border-foreground/10 mt-20">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Aditya Pachouri. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/aadityaa29" target="_blank" className="hover:underline">GitHub</Link>
          <Link href="https://linkedin.com/in/adityapachourii" target="_blank" className="hover:underline">LinkedIn</Link>
          <Link href="mailto:adityapachouri01@gmail.com" className="hover:underline">Email</Link>
        </div>
      </div>
    </footer>
  );
}

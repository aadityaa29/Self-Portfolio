import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center text-center p-8">
      <div>
        <h1 className="text-4xl font-bold">404 – Lost in the void</h1>
        <p className="mt-3 text-muted-foreground">The page you seek doesn&apos;t exist.</p>
        <Link href="/" className="inline-block mt-6 rounded-md px-4 py-2 bg-foreground text-background">Return Home</Link>
      </div>
    </div>
  );
}

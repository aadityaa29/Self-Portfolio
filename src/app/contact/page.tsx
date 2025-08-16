import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Contact – Aditya Pachouri" };

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form
        className="mt-6 max-w-xl space-y-4"
        action="mailto:adityapachouri01@gmail.com"
        method="post"
        encType="text/plain"
      >
        <Input name="name" placeholder="Your name" required />
        <Input name="email" type="email" placeholder="Your email" required />
        <Textarea name="message" placeholder="Your message" rows={6} required />
        <Button type="submit" className="w-full">Send</Button>
      </form>

      <div className="mt-10 text-sm text-muted-foreground">
        Or reach out on
        {" "}
        <a className="underline" href="https://github.com/aadityaa29" target="_blank">GitHub</a>
        {" • "}
        <a className="underline" href="https://linkedin.com/in/adityapachourii" target="_blank">LinkedIn</a>.
      </div>
    </div>
  );
}

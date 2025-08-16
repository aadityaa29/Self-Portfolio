import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("container mx-auto px-6 py-24", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

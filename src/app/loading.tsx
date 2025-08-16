import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-dvh grid place-items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
        className="size-16 rounded-2xl bg-gradient-to-br from-sky-500 to-fuchsia-600 shadow-2xl"
      />
    </div>
  );
}

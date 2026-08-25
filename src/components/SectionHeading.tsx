import { motion } from "framer-motion";

export function SectionHeading({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <p className="kicker">{index}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-xl text-sm text-ink-soft">{subtitle}</p>}
    </motion.div>
  );
}

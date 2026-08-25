import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { DeveloperCard } from "./DeveloperCard";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 [background-size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-ink-soft">
            Computer Science Engineer • Full-Stack Developer
          </span>
          <h1 className="mt-5 max-w-lg font-display text-4xl font-semibold leading-[1.15] text-ink md:text-5xl">
            Building software that solves real problems.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Software Developer focused on full-stack development, AI-powered applications, problem solving, and scalable software systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-base hover:bg-accent/90"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-ink hover:border-accent-line hover:text-accent"
            >
              Let's Connect
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink"
            >
              <FileText className="h-4 w-4" /> View Resume
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center md:justify-end">
          <DeveloperCard />
        </div>
      </div>
    </section>
  );
}

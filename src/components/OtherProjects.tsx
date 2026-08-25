import { motion } from "framer-motion";
import { otherProjects } from "@/data/content";

export function OtherProjects() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="glow-card card p-6 transition-transform duration-200 hover:-translate-y-1"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
              }}
            >
              <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{project.description}</p>
              {project.features && (
                <ul className="mt-3 space-y-1">
                  {project.features.map((f) => (
                    <li key={f} className="text-xs text-ink-faint">— {f}</li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md border border-line bg-base px-2 py-1 font-mono text-[11px] text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

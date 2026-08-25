import { motion } from "framer-motion";
import { skillGroups } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02 / Skills" title="Skills" subtitle="Technologies and practices I actually use — no arbitrary proficiency percentages." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
              className="card p-5"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-accent">{group.category}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line bg-base px-2 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {skill}
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

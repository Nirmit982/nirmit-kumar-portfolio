import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { focusAreas } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01 / About" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="space-y-4 text-sm leading-relaxed text-white md:text-base"
          >
            <p>
              ISoftware Developer with strong foundations in Data Structures and Algorithms and Full-Stack De-
              velopment, skilled in building responsive, scalable, and user-focused web applications. Proficient in
              developing end-to-end solutions, designing RESTful APIs, working with databases, and writing clean,
              efficient, and maintainable code. Strong problem-solving and analytical skills with a passion for learning
              new technologies and building real-world software solutions.
            </p>
            <p>
              My work spans building complete web applications — frontend, backend, and database — as
              well as exploring AI-powered applications and cloud infrastructure. I care about writing
              clean, maintainable code and steadily improving it rather than shipping something and
              walking away.
            </p>
            <p>
              I'm continuously learning new technologies and looking for opportunities to apply that
              curiosity to real-world software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card p-6"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">Currently focused on</p>
            <ul className="mt-4 space-y-3">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2.5 text-sm text-ink">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

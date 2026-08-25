import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section className="border-t border-line bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="06 / Certifications" title="Certifications" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card p-5"
            >
              <Award className="h-4 w-4 text-accent" />
              <p className="mt-3 text-sm font-medium text-ink">{cert.title}</p>
              <p className="mt-1 text-xs text-ink-faint">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

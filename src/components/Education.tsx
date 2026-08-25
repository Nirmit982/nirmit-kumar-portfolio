import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="07 / Education" title="Education" />
        <div className="card flex items-start gap-4 p-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{education.degree}</p>
            <p className="mt-0.5 text-sm text-ink-soft">{education.institution}</p>
            <p className="mt-0.5 font-mono text-xs text-ink-faint">{education.timeline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

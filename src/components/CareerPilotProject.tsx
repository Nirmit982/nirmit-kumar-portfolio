import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { careerPilot } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function CareerPilotProject() {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03 / Projects" title="CareerPilot" subtitle={careerPilot.subtitle} />

        <div className="card overflow-hidden p-6 md:p-10">
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            {careerPilot.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careerPilot.featureCards.map((card) => (
              <div key={card.title} className="rounded-lg border border-line bg-base p-4">
                <p className="text-sm font-semibold text-ink">{card.title}</p>
                <ul className="mt-2.5 space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="text-xs text-ink-faint">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {careerPilot.technology.map((t) => (
              <span key={t} className="rounded-md border border-line bg-base px-2 py-1 font-mono text-[11px] text-ink-soft">
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => setShowArchitecture((s) => !s)}
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-ink hover:border-accent-line hover:text-accent"
            aria-expanded={showArchitecture}
          >
            <LayoutGrid className="h-4 w-4" /> {showArchitecture ? "Hide Architecture" : "View Architecture"}
          </button>

          <AnimatePresence>
            {showArchitecture && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-8 flex justify-center border-t border-line pt-8">
                  <ArchitectureDiagram />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journeyStages } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function EngineeringJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-line bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="How I Build"
          title="Engineering Journey"
          subtitle="Not just languages and frameworks — a repeatable process for turning a problem into working software."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Stage selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {journeyStages.map((stage, i) => (
              <button
                key={stage.index}
                onClick={() => setActive(i)}
                className={cn(
                  "flex shrink-0 items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors lg:shrink",
                  active === i
                    ? "border-accent-line bg-accent-soft"
                    : "border-line bg-surface hover:border-accent-line/60"
                )}
                aria-pressed={active === i}
              >
                <span className={cn("font-mono text-xs", active === i ? "text-accent" : "text-ink-faint")}>
                  {stage.index}
                </span>
                <span className={cn("text-sm font-medium", active === i ? "text-ink" : "text-ink-soft")}>
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="card relative min-h-[180px] overflow-hidden p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="kicker">{journeyStages[active].index}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {journeyStages[active].title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                  {journeyStages[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

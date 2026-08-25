import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { careerPilot } from "@/data/content";

export function ArchitectureDiagram() {
  return (
    <div className="flex flex-col items-center gap-1">
      {careerPilot.architecture.map((layer, i) => (
        <div key={layer} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="w-56 rounded-lg border border-line bg-base px-4 py-2.5 text-center font-mono text-xs text-ink-soft"
          >
            {layer}
          </motion.div>
          {i < careerPilot.architecture.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 + 0.15 }}
              className="py-1 text-accent"
            >
              <ArrowDown className="h-4 w-4 animate-pulse" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

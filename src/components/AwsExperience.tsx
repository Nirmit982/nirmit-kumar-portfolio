import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { awsExperience } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

const flowLayers = ["User", "Application", "EC2", "S3"];

export function AwsExperience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05 / Cloud" title="AWS Hands-on Experience" subtitle="Hands-on experience and labs — not professional AWS employment." />

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="card p-6">
            <div className="flex flex-wrap gap-1.5">
              {awsExperience.map((item) => (
                <span key={item} className="rounded-md border border-line bg-base px-2.5 py-1 font-mono text-[11px] text-ink-soft">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            {flowLayers.map((layer, i) => (
              <div key={layer} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="w-48 rounded-lg border border-line bg-surface px-4 py-2.5 text-center font-mono text-xs text-ink-soft"
                >
                  {layer}
                </motion.div>
                {i < flowLayers.length - 1 && (
                  <div className="py-1 text-accent"><ArrowDown className="h-4 w-4" /></div>
                )}
              </div>
            ))}
            <p className="mt-3 max-w-[220px] text-center text-[11px] text-ink-faint">
              IAM and VPC support access control and networking across every layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

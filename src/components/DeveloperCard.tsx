import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const rows = [
  { label: "Frontend", value: "React / TypeScript" },
  { label: "Backend", value: "Node.js / REST APIs" },
  { label: "Database", value: "PostgreSQL" },
  { label: "Problem Solving", value: "C++ / DSA" },
  { label: "Cloud", value: "AWS" },
  { label: "AI", value: "AI-powered apps" },
];

const fullText = "> whoami: nirmit_kumar";

export function DeveloperCard() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="card w-full max-w-sm overflow-hidden"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-[11px] text-ink-faint">nirmit_kumar.sh</span>
      </div>
      <div className="p-5">
        <p className="font-mono text-xs text-accent">
          {typed}
          <span className="animate-blink">_</span>
        </p>
        <div className="my-3 border-t border-line" />
        <dl className="space-y-2.5">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between gap-4 text-xs">
              <dt className="font-mono text-ink-faint">{r.label}</dt>
              <dd className="font-mono text-ink-soft">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
}

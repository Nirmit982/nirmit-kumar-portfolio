import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { profile } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

interface GithubStats {
  publicRepos: number;
  followers: number;
}

const flow = ["Think", "Solve", "Debug", "Improve"];

export function ProblemSolving() {
  const [stats, setStats] = useState<GithubStats | null>(null);

  useEffect(() => {
    let cancelled = false;
    // Public GitHub API, no auth required. Only real, live numbers are
    // shown — if this fails or is rate-limited, we fall back to plain
    // links rather than guessing at a figure.
    fetch("https://api.github.com/users/Nirmit982")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (!cancelled) {
          setStats({ publicRepos: data.public_repos, followers: data.followers });
        }
      })
      .catch(() => {
        if (!cancelled) setStats(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="coding" className="border-t border-line bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04 / Problem Solving"
          title="Problem Solving"
          subtitle="Practicing Data Structures and Algorithms and building real projects, side by side."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="card p-6">
            <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-ink-soft">
              {flow.map((step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className={i === 0 ? "text-accent" : ""}>{step}</span>
                  {i < flow.length - 1 && <span className="text-ink-faint">→</span>}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              I work through problems on LeetCode to sharpen data structures and algorithms, and use
              GitHub to build and version real projects. Together they're where day-to-day practice
              turns into shipped software.
            </p>

            {stats && (
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-line bg-base p-3 text-center">
                  <p className="font-mono text-xl font-semibold text-ink">{stats.publicRepos}</p>
                  <p className="mt-0.5 text-[11px] text-ink-faint">Public repositories</p>
                </div>
                <div className="rounded-lg border border-line bg-base p-3 text-center">
                  <p className="font-mono text-xl font-semibold text-ink">{stats.followers}</p>
                  <p className="mt-0.5 text-[11px] text-ink-faint">GitHub followers</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="card flex items-center justify-between p-5 hover:border-accent-line"
            >
              <div>
                <p className="text-sm font-semibold text-ink">View LeetCode</p>
                <p className="text-xs text-ink-faint">leetcode.com/u/nirmit115</p>
              </div>
              <ExternalLink className="h-4 w-4 text-ink-faint" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="card flex items-center justify-between p-5 hover:border-accent-line"
            >
              <div>
                <p className="text-sm font-semibold text-ink">View GitHub</p>
                <p className="text-xs text-ink-faint">github.com/Nirmit982</p>
              </div>
              <Github className="h-4 w-4 text-ink-faint" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

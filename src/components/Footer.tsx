import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-xs text-ink-faint">Building, learning, and solving.</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-soft hover:text-ink">
            <Github className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-soft hover:text-ink">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="font-mono text-xs text-ink-soft hover:text-ink">
            {"{ }"}
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-soft hover:text-ink">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-ink-faint">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}

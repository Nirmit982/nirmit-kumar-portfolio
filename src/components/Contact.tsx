import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { profile } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend is wired up to receive this form, so submitting opens a
    // pre-filled email instead of pretending to send something it can't.
    const subject = encodeURIComponent(`Portfolio contact from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="08 / Contact" title="Have an idea or opportunity?" subtitle="Let's build something useful." />

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="space-y-3"
          >
            <a href={`mailto:${profile.email}`} className="card flex items-center gap-3 p-4 hover:border-accent-line">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm text-ink">{profile.email}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="card flex items-center justify-between gap-3 p-4 hover:border-accent-line">
              <span className="flex items-center gap-3 text-sm text-ink"><Linkedin className="h-4 w-4 text-accent" /> LinkedIn</span>
              <ExternalLink className="h-3.5 w-3.5 text-ink-faint" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="card flex items-center justify-between gap-3 p-4 hover:border-accent-line">
              <span className="flex items-center gap-3 text-sm text-ink"><Github className="h-4 w-4 text-accent" /> GitHub</span>
              <ExternalLink className="h-3.5 w-3.5 text-ink-faint" />
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" className="card flex items-center justify-between gap-3 p-4 hover:border-accent-line">
              <span className="flex items-center gap-3 text-sm text-ink"><span className="font-mono text-accent">{"{ }"}</span> LeetCode</span>
              <ExternalLink className="h-3.5 w-3.5 text-ink-faint" />
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card space-y-4 p-6"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-soft">Name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-line bg-base px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent-line focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-soft">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-line bg-base px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent-line focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-soft">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full rounded-lg border border-line bg-base px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent-line focus:outline-none"
                placeholder="What are you looking to build?"
              />
            </div>
            <button type="submit" className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-base hover:bg-accent/90">
              Send via Email
            </button>
            <p className="text-[11px] text-ink-faint">
              This form has no backend yet — submitting opens a pre-filled email instead.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

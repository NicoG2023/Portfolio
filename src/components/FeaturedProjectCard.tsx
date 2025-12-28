import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { Link } from "react-router-dom";

function linkLabel(label: "github" | "demo" | "doc") {
  if (label === "github") return "GitHub";
  if (label === "demo") return "Live";
  return "Docs";
}

export function FeaturedProjectCard({
  project,
  lang,
}: {
  project: Project;
  lang: "es" | "en";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-soft"
    >
      {/* Background accent (sutil, usando tokens) */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-muted">
              {project.year ?? ""} {project.year ? "•" : ""} Featured
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-text">
              <Link
                to={`/projects/${project.id}`}
                className="hover:underline underline-offset-4 decoration-border hover:decoration-text"
              >
                {project.title[lang]}
              </Link>
            </h3>
          </div>
          <span className="rounded-full border border-border bg-bg px-2 py-1 text-[10px] font-mono text-muted">
            {project.category}
          </span>
        </div>

        <p className="mt-3 text-sm text-muted">
          {project.description[lang]}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 8).map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-text"
            >
              {s}
            </span>
          ))}
        </div>

        {project.links?.length ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-text underline decoration-border underline-offset-4 hover:decoration-text"
              >
                {linkLabel(l.label)}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

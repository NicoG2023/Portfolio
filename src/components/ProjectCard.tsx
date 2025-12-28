import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { Link } from "react-router-dom";

function linkLabel(label: "github" | "demo" | "doc") {
  if (label === "github") return "GitHub";
  if (label === "demo") return "Live";
  return "Docs";
}

export function ProjectCard({
  project,
  lang,
}: {
  project: Project;
  lang: "es" | "en";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-2xl border border-border bg-surface p-6 shadow-soft"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-text">
            <Link
              to={`/projects/${project.id}`}
              className="hover:underline underline-offset-4 decoration-border hover:decoration-text"
            >
              {project.title[lang]}
            </Link>
          </h3>

          {project.year && (
            <p className="mt-1 text-xs text-muted">{project.year}</p>
          )}
        </div>

        {project.featured && (
          <span className="rounded-full border border-border bg-bg px-2 py-1 text-[10px] font-mono text-muted">
            featured
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-muted">{project.description[lang]}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
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
    </motion.article>
  );
}

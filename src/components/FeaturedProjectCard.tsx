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
  const clickable = project.detailEnabled !== false && !project.comingSoon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-border p-6 shadow-soft glass"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-muted">
              {project.year ?? ""} {project.year ? "•" : ""} Featured
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold tracking-tight text-text">
                {clickable ? (
                  <Link
                    to={`/projects/${project.id}`}
                    className="hover:underline underline-offset-4 decoration-border hover:decoration-text"
                  >
                    {project.title[lang]}
                  </Link>
                ) : (
                  <span className="cursor-default">{project.title[lang]}</span>
                )}
              </h3>

              {!clickable && (
                <span className="inline-flex items-center rounded-full border border-border bg-bg/25 px-2 py-1 text-[10px] font-mono text-muted">
                  {lang === "es" ? "En desarrollo" : "In progress"}
                </span>
              )}
            </div>
          </div>

          <span className="rounded-full border border-border bg-bg/25 px-2 py-1 text-[10px] font-mono text-muted">
            {project.category}
          </span>
        </div>

        <p className="mt-3 text-sm text-muted">{project.description[lang]}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 8).map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-bg/25 px-3 py-1 text-xs text-text"
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

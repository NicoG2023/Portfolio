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

  const cover =
    project.media?.cover ??
    (project.media?.images?.length ? project.media.images[0] : undefined);

  const maxChips = 6;
  const chips = project.stack.slice(0, maxChips);
  const extra = project.stack.length - chips.length;

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
        {/* COVER */}
        {cover && (
          <div className="mb-5 overflow-hidden rounded-xl border border-border bg-bg/20">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={cover.src}
                alt={cover.alt[lang]}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(var(--bg)/0.0) 0%, rgb(var(--bg)/0.35) 55%, rgb(var(--bg)/0.78) 100%)",
                }}
              />
            </div>
          </div>
        )}

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

        {/* DESCRIPTION (clamp) */}
        <p className="mt-3 text-sm text-muted line-clamp-2">
          {project.description[lang]}
        </p>

        {/* STACK (limit) */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-bg/25 px-3 py-1 text-xs text-text"
            >
              {s}
            </span>
          ))}

          {extra > 0 && (
            <span className="rounded-full border border-border bg-bg/25 px-3 py-1 text-xs text-muted">
              +{extra}
            </span>
          )}
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

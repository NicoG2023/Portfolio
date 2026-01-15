import { useMemo, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { projects } from "../data/projects";
import { Header } from "../components/Header";
import { ProjectVideo } from "../components/ProjectVideo";
import { ProjectMetrics } from "../components/ProjectMetrics";
import { useScrollSpy } from "../hooks/useScrollSpy";

function linkLabel(label: "github" | "demo" | "doc") {
  if (label === "github") return "GitHub";
  if (label === "demo") return "Live";
  return "Docs";
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const lang = i18n.language.startsWith("es") ? "es" : "en";

  const mainRef = useRef<HTMLElement | null>(null);

  const project = useMemo(() => projects.find((p) => p.id === id), [id]);

  // Reading progress (barata; spring suave). En reduce motion, sin spring.
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start 0.1", "end 0.9"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 90 : 120,
    damping: reduceMotion ? 30 : 25,
    mass: 0.2,
  });

  if (!project) {
    return (
      <div className="min-h-screen text-text bg-bg">
        <Header />
        <main className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-muted">{t("project.notFound")}</p>
          <Link
            to="/"
            className="mt-4 inline-block text-sm font-medium text-text underline decoration-border underline-offset-4 hover:decoration-text"
          >
            {t("project.backHome")}
          </Link>
        </main>
      </div>
    );
  }

  const title = project.title[lang];
  const desc = project.description[lang];
  const video = project.media?.video;
  const images = project.media?.images ?? [];

  const sectionIds = useMemo(() => (project.sections ?? []).map((s) => s.id), [project.sections]);
  const activeSectionId = useScrollSpy(sectionIds);

  const activeSectionTitle = useMemo(() => {
    if (!project.sections?.length) return "";
    return project.sections.find((s) => s.id === activeSectionId)?.title[lang] ?? "";
  }, [project.sections, activeSectionId, lang]);

  return (
    <div className="min-h-screen text-text bg-bg">
      <Header />

      {/* Reading progress bar (ligera) */}
      <div className="sticky top-0 z-[60] h-1 w-full bg-transparent">
        <motion.div
          style={{ scaleX: progress, transformOrigin: "0% 50%" }}
          className="h-1 w-full bg-primary/70"
        />
      </div>

      <main ref={mainRef} className="mx-auto max-w-5xl px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-sm text-muted hover:text-text transition-colors">
            ← {t("project.back")}
          </Link>
          <span className="rounded-full border border-border bg-bg/25 px-3 py-1 text-xs text-text">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl"
        >
          {title}
        </motion.h1>

        {/* Meta */}
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted">
          {project.year ? <span>{project.year}</span> : null}
          {project.duration ? <span>• {project.duration[lang]}</span> : null}
          {project.role ? <span>• {project.role[lang]}</span> : null}
        </div>

        <p className="mt-6 max-w-3xl text-muted">{desc}</p>

        {/* Scroll spy chip (sin backdrop-blur; usa glass) */}
        {project.sections?.length ? (
          <div className="sticky top-[80px] z-40 mt-6">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs glass">
              <span className="font-mono text-[10px] text-muted">section</span>
              <span className="h-3 w-px bg-border" />
              <span className="text-text font-medium">{activeSectionTitle}</span>
            </div>
          </div>
        ) : null}

        {/* Links (usa glass para consistencia y mejor performance que blur) */}
        {project.links?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-2 text-sm font-medium text-text transition-colors glass hover:bg-bg/50"
              >
                {linkLabel(l.label)}
              </a>
            ))}
          </div>
        ) : null}

        {/* Metrics */}
        {project.metrics?.length ? (
          <div className="mt-10">
            <h2 className="text-sm font-semibold">{t("project.metrics")}</h2>
            <div className="mt-3">
              <ProjectMetrics metrics={project.metrics} lang={lang} />
            </div>
          </div>
        ) : null}

        {/* Media */}
        {(video || images.length > 0) && (
          <div className="mt-10 grid gap-6">
            {video && <ProjectVideo video={video} lang={lang} />}

            {images.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {images.map((img) => (
                  <figure key={img.src} className="overflow-hidden rounded-2xl border border-border glass">
                    <img
                      src={img.src}
                      alt={img.alt[lang]}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">
                      {img.alt[lang]}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Sections (glass en vez de bg-surface; menos “bloque sólido” y sin blur) */}
        {project.sections?.length ? (
          <div className="mt-12 grid gap-6">
            {project.sections.map((s) => (
              <section key={s.id} id={s.id} className="rounded-2xl p-6 glass">
                <h2 className="text-base font-semibold">{s.title[lang]}</h2>
                <p className="mt-2 text-sm text-muted">{s.body[lang]}</p>

                {s.bullets?.[lang]?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                    {s.bullets[lang].map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        ) : null}

        {/* Stack */}
        <div className="mt-12">
          <h2 className="text-sm font-semibold">{t("project.stack")}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-bg/25 px-3 py-1 text-xs text-text"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

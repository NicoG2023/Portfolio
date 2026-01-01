import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { FeaturedProjectCard } from "../components/FeaturedProjectCard";

type Filter = "all" | "software" | "data" | "consulting";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectsSection() {
  const { t, i18n } = useTranslation();
  const reduceMotion = useReducedMotion();

  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("projects.filters.all") },
    { key: "software", label: t("projects.filters.software") },
    { key: "data", label: t("projects.filters.data") },
    { key: "consulting", label: t("projects.filters.consulting") },
  ];

  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const filtered = useMemo(() => {
    const base = filter === "all" ? projects : projects.filter((p) => p.category === filter);
    return base.filter((p) => !p.featured);
  }, [filter]);

  return (
    <section id="projects" className="relative bg-transparent overflow-visible">
      {/* ✅ fade superior (SIEMPRE detrás) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[-140px] h-80 blur-2xl opacity-90 -z-10"
        style={{
          background:
            "linear-gradient(to top, transparent 0%, rgb(var(--bg)) 60%, rgb(var(--bg)) 100%)",
        }}
      />

      {/* ✅ fade inferior (derrite Projects → Contact; SIEMPRE detrás) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-140px] h-80 blur-2xl opacity-90 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgb(var(--bg)) 60%, rgb(var(--bg)) 100%)",
        }}
      />

      {/* ✅ Wash local MUY sutil (detrás) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] -z-10">
        {/* LIGHT */}
        <div className="absolute inset-0 dark:hidden">
          <div
            className="absolute left-1/2 top-[-220px] h-[520px] w-[980px] -translate-x-1/2 rounded-full blur-3xl opacity-35"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, rgb(var(--accent) / 0.22), transparent 70%)",
            }}
          />
          <div
            className="absolute left-[-220px] top-[60px] h-[480px] w-[480px] rounded-full blur-3xl opacity-18"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgb(var(--crimson) / 0.10), transparent 72%)",
              mixBlendMode: "multiply",
            }}
          />
        </div>

        {/* DARK */}
        <div className="absolute inset-0 hidden dark:block">
          <div
            className="absolute left-1/2 top-[-220px] h-[520px] w-[980px] -translate-x-1/2 rounded-full blur-3xl opacity-22"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.24), transparent 68%)",
            }}
          />
          <div
            className="absolute left-[-240px] top-[70px] h-[520px] w-[520px] rounded-full blur-3xl opacity-16"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgb(var(--crimson) / 0.10), transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* ✅ contenido SIEMPRE encima */}
      <div className="mx-auto max-w-5xl px-6 py-20 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <motion.div variants={item}>
              <h2 className="text-2xl font-semibold tracking-tight">
                <span className="relative inline-block">
                  {t("projects.title")}
                  <span
                    className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-[72%] rounded-full opacity-70"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgb(var(--accent)/0.9), transparent)",
                    }}
                  />
                </span>
              </h2>
              <p className="mt-3 max-w-2xl text-muted">{t("projects.subtitle")}</p>
            </motion.div>

            {/* Filters */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              {filters.map((f) => {
                const active = f.key === filter;

                return (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={[
                      "group relative rounded-full px-3 py-1 text-xs font-medium border transition-colors",
                      "border-border",
                      "backdrop-blur-sm",
                      active
                        ? "bg-primary text-bg"
                        : "bg-surface/70 text-text hover:bg-bg/50",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "pointer-events-none absolute -inset-[1px] -z-10 rounded-full blur-sm transition-opacity duration-300",
                        active ? "opacity-70" : "opacity-0 group-hover:opacity-60",
                      ].join(" ")}
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgb(var(--accent)/0.40), transparent 68%)",
                      }}
                    />
                    {f.label}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Featured */}
          {featured.length > 0 && (
            <motion.div variants={item} className="mt-10 grid gap-6 md:grid-cols-2">
              {featured.slice(0, 2).map((p) => (
                <FeaturedProjectCard key={p.id} project={p} lang={lang} />
              ))}
            </motion.div>
          )}

          {/* Rest */}
          <motion.div variants={item} className="mt-8 grid gap-6 md:grid-cols-2">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={p} lang={lang} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

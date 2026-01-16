import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { FeaturedProjectCard } from "../components/FeaturedProjectCard";

type Filter = "all" | "backend" | "fullstack";

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
    { key: "backend", label: t("projects.filters.backend") },
    { key: "fullstack", label: t("projects.filters.fullstack") },
  ];

  const featured = projects.filter((p) => p.featured);

  const filtered = useMemo(() => {
    const base = filter === "all" ? projects : projects.filter((p) => p.category === filter);
    const rest = base.filter((p) => !p.featured);
    rest.sort((a, b) => (b.year ?? "").localeCompare(a.year ?? ""));
    return rest;
  }, [filter]);

  return (
    <section id="projects" className="relative bg-transparent overflow-visible cv-auto">

      <div className="mx-auto max-w-5xl px-6 py-20 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
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
                      active ? "bg-primary text-bg shadow-soft" : "glass text-text hover:opacity-95",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
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

          {featured.length > 0 && (
            <motion.div variants={item} className="mt-10 grid gap-6 md:grid-cols-2">
              {featured.slice(0, 2).map((p) => (
                <FeaturedProjectCard key={p.id} project={p} lang={lang} />
              ))}
            </motion.div>
          )}

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

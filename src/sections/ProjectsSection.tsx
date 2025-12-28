import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { FeaturedProjectCard } from "../components/FeaturedProjectCard";

type Filter = "all" | "software" | "data" | "consulting";

export default function ProjectsSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const [filter, setFilter] = useState<Filter>("all");

  const featured = useMemo(
    () => projects.filter((p) => p.featured),
    []
  );

  const filtered = useMemo(() => {
    const base = filter === "all" ? projects : projects.filter((p) => p.category === filter);
    // Para evitar repetición: si está featured, lo sacamos del grid
    return base.filter((p) => !p.featured);
  }, [filter]);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("projects.filters.all") },
    { key: "software", label: t("projects.filters.software") },
    { key: "data", label: t("projects.filters.data") },
    { key: "consulting", label: t("projects.filters.consulting") },
  ];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("projects.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = f.key === filter;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={[
                  "rounded-full px-3 py-1 text-xs font-medium border transition-colors",
                  active
                    ? "border-border bg-primary text-bg"
                    : "border-border bg-surface text-text hover:bg-bg",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.slice(0, 2).map((p) => (
            <FeaturedProjectCard key={p.id} project={p} lang={lang} />
          ))}
        </div>
      )}

      {/* Rest */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} lang={lang} />
        ))}
      </div>
    </section>
  );
}

import type { ProjectMetric } from "../data/projects";

export function ProjectMetrics({
  metrics,
  lang,
}: {
  metrics: ProjectMetric[];
  lang: "es" | "en";
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {metrics.map((m, idx) => (
        <div key={idx} className="rounded-2xl border border-border bg-surface p-5">
          <div className="text-xs text-muted">{m.label[lang]}</div>
          <div className="mt-1 text-sm font-semibold text-text">{m.value[lang]}</div>
        </div>
      ))}
    </div>
  );
}

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import {
  Server,
  Database,
  ShieldCheck,
  Activity,
  Cloud,
  Layout,
  Boxes,
  KeyRound,
  Container,
  BarChart3,
  Flame,
} from "lucide-react";

const sectionIn: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

type StackChip = {
  key: string;
  icon: React.ElementType;
  color: string; // color “de marca” suave
};

export default function TechStackSection() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const groups = useMemo(() => {
    const C = {
      java: "rgb(251 146 60)",
      quarkus: "rgb(59 130 246)",
      spring: "rgb(34 197 94)",
      postgres: "rgb(59 130 246)",
      mysql: "rgb(245 158 11)",
      keycloak: "rgb(168 85 247)",
      auth: "rgb(234 179 8)",
      prometheus: "rgb(249 115 22)",
      grafana: "rgb(245 158 11)",
      docker: "rgb(59 130 246)",
      aws: "rgb(245 158 11)",
      gcp: "rgb(59 130 246)",
      react: "rgb(34 211 238)",
      ts: "rgb(59 130 246)",
    } as const;

    const backend: StackChip[] = [
      { key: "java", icon: Server, color: C.java },
      { key: "quarkus", icon: Boxes, color: C.quarkus },
      { key: "spring", icon: Flame, color: C.spring },
    ];

    const data: StackChip[] = [
      { key: "postgres", icon: Database, color: C.postgres },
      { key: "mysql", icon: Database, color: C.mysql },
    ];

    const security: StackChip[] = [
      { key: "keycloak", icon: KeyRound, color: C.keycloak },
      { key: "auth", icon: ShieldCheck, color: C.auth },
    ];

    const obs: StackChip[] = [
      { key: "prometheus", icon: Activity, color: C.prometheus },
      { key: "grafana", icon: BarChart3, color: C.grafana },
    ];

    const infra: StackChip[] = [
      { key: "docker", icon: Container, color: C.docker },
      { key: "aws", icon: Cloud, color: C.aws },
      { key: "gcp", icon: Cloud, color: C.gcp },
    ];

    const frontend: StackChip[] = [
      { key: "react", icon: Layout, color: C.react },
      { key: "ts", icon: Layout, color: C.ts },
    ];

    return [
      { titleKey: "stack.groups.backend", chips: backend },
      { titleKey: "stack.groups.data", chips: data },
      { titleKey: "stack.groups.security", chips: security },
      { titleKey: "stack.groups.obs", chips: obs },
      { titleKey: "stack.groups.infra", chips: infra },
      { titleKey: "stack.groups.frontend", chips: frontend },
    ];
  }, []);

  return (
    <section id="stack" className="relative bg-transparent cv-auto">
      <div className="mx-auto max-w-5xl px-6 pb-10 md:pb-12">
        <motion.div
          variants={sectionIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                {t("stack.title")}
              </h2>

              {/* ✅ Línea dorada debajo */}
              <span
                className="mt-2 block h-[2px] w-16 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(var(--accent)/0.0), rgb(var(--accent)/0.85), rgb(var(--accent)/0.0))",
                }}
              />

              <p className="mt-2 max-w-2xl text-sm text-muted">
                {t("stack.subtitle")}
              </p>
            </div>
          </div>

          {/* Contenedor único */}
          <div className={["mt-6 rounded-2xl p-5 md:p-6 shadow-soft", "glass"].join(" ")}>
            {/* ✅ 3 columnas (desktop) -> 3x2 con 6 grupos */}
            <div className="grid gap-4 md:grid-cols-3">
              {groups.map((g) => (
                <div key={g.titleKey} className="rounded-xl p-4 glass">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">{t(g.titleKey)}</h3>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.chips.map(({ key, icon: Icon, color }) => (
                      <motion.span
                        key={key}
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                y: -2,
                                scale: 1.02,
                              }
                        }
                        whileTap={{ scale: 0.98 }}
                        className={[
                          "group relative inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs",
                          "glass text-text",
                          "transition-shadow",
                        ].join(" ")}
                        style={{
                          border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
                        }}
                      >
                        <motion.span
                          whileHover={reduceMotion ? undefined : { rotate: -6 }}
                          className="flex h-6 w-6 items-center justify-center rounded-full"
                          style={{
                            background: `color-mix(in srgb, ${color} 18%, transparent)`,
                            boxShadow: `0 0 0 1px color-mix(in srgb, ${color} 25%, transparent)`,
                          }}
                        >
                          <Icon className="h-3.5 w-3.5" style={{ color }} />
                        </motion.span>

                        <span>{t(`stack.items.${key}`)}</span>

                        {/* Glow al hover */}
                        <span
                          className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{
                            inset: -1,
                            borderRadius: 9999,
                            boxShadow: `0 0 18px color-mix(in srgb, ${color} 35%, transparent)`,
                          }}
                        />
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

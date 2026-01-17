import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles, ShieldCheck, Gauge, Blocks, ArrowRight } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const highlights = useMemo(
    () => [
      { icon: Blocks, label: t("hero.highlights.arch") },
      { icon: ShieldCheck, label: t("hero.highlights.security") },
      { icon: Gauge, label: t("hero.highlights.obs") },
    ],
    [t]
  );

  return (
    <section className="relative overflow-visible bg-transparent cv-auto">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 md:grid-cols-12"
        >
          {/* LEFT */}
          <div className="md:col-span-7">
            {/* Badge: más “comercial” y con mejor contraste */}
            <motion.div variants={item} className="inline-flex items-center gap-2">
              <span
                className={[
                  "relative inline-flex items-center gap-2 rounded-full",
                  "px-3 py-1 text-xs font-medium text-text",
                  "glass",
                ].join(" ")}
              >
                <span
                  className="absolute -inset-[1px] -z-10 rounded-full opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 30%, rgb(var(--accent)/0.55), transparent 70%)",
                  }}
                />
                <Sparkles className="h-3.5 w-3.5 text-[rgb(var(--accent))]" />
                {t("hero.badge")}
              </span>

              {/* Micro-proof (opcional): sube conversión sin meter mucho texto */}
              <span className="hidden sm:inline-flex text-xs text-muted">
                {t("hero.microProof")}
              </span>
            </motion.div>

            {/* Headline: acento en palabras clave */}
            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl"
            >
              <span className="block">
                {t("hero.headlineA")}
                <span
                  className="sig-gold mx-2 inline-block rounded-lg px-2 py-0.5 align-middle text-[0.9em] font-semibold"
                  style={{
                    background: "rgb(var(--accent)/0.12)",
                    color: "rgb(var(--accent))",
                    border: "1px solid rgb(var(--accent)/0.25)",
                  }}
                >
                  {t("hero.headlineAccent")}
                </span>
              </span>

              <span className="mt-3 block text-muted">{t("hero.headlineB")}</span>

              {/* Línea decorativa (más sutil y elegante) */}
              <span
                className="mt-4 block h-[2px] w-[72%] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(var(--accent)/0.0), rgb(var(--accent)/0.85), rgb(var(--accent)/0.0))",
                }}
              />
            </motion.h1>

            {/* Subtitle: más corta y vendible */}
            <motion.p variants={item} className="mt-4 max-w-xl text-muted">
              {t("hero.subtitle")}
            </motion.p>

            {/* Highlights: reemplazan chips largos (menos densidad) */}
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {highlights.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs",
                    "glass text-text",
                  ].join(" ")}
                >
                  <Icon className="h-3.5 w-3.5 text-[rgb(var(--accent))]" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTAs: primario más “premium”, secundario más limpio */}
            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className={[
                  "group relative inline-flex items-center gap-2 rounded-xl",
                  "px-5 py-2.5 text-sm font-medium",
                  "text-bg shadow-soft focus:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)]",
                  "focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
                ].join(" ")}
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--accent)/0.95), rgb(var(--accent)/0.65))",
                }}
              >
                <span
                  className="pointer-events-none absolute -inset-[1px] -z-10 rounded-xl opacity-0 blur-md transition-opacity group-hover:opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgb(var(--accent)/0.65), transparent 66%)",
                  }}
                />
                {t("hero.ctaPrimary")}
                <ArrowRight className="h-4 w-4 opacity-90 transition-transform group-hover:translate-x-0.5" />
              </motion.a>

              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className={[
                  "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium",
                  "text-text transition-colors",
                  "glass hover:opacity-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)]",
                  "focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
                ].join(" ")}
              >
                {t("hero.ctaSecondary")}
              </motion.a>
            </motion.div>

            {/* Scroll */}
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="mt-10 inline-flex items-center gap-3 text-sm text-muted"
            >
              <span>{t("hero.scroll")}</span>
              <span className={["flex h-9 w-9 items-center justify-center rounded-full", "glass"].join(" ")}>
                <ArrowDown className="h-4 w-4 text-[rgb(var(--accent))]" />
              </span>
            </motion.a>
          </div>

          {/* RIGHT (Card): menos texto, más “ventas” */}
          <div className="md:col-span-5">
            <motion.div
              variants={item}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.25 }}
              className={["relative overflow-hidden rounded-2xl p-6 shadow-soft", "glass"].join(" ")}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(var(--accent)/0.20), transparent)",
                }}
              />

              <div className="relative flex items-center justify-between">
                <h2 className="text-sm font-semibold">{t("hero.cardTitle")}</h2>
                <span className={["rounded-full px-2 py-1 font-mono text-[10px] text-muted", "glass"].join(" ")}>
                  {t("hero.cardTag")}
                </span>
              </div>

              {/* Reemplaza párrafo largo por bullets cortos */}
              <div className="mt-4 grid gap-2 text-sm text-muted">
                <div className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ background: "rgb(var(--accent)/0.9)" }} />
                  <span>{t("hero.cardBullet1")}</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ background: "rgb(var(--accent)/0.7)" }} />
                  <span>{t("hero.cardBullet2")}</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ background: "rgb(var(--accent)/0.5)" }} />
                  <span>{t("hero.cardBullet3")}</span>
                </div>
              </div>

              {/* Métricas: que suenen a valor (aunque sean “soft metrics”) */}
              <div className="mt-6 grid gap-3">
                <div className={["rounded-xl p-4", "glass"].join(" ")}>
                  <div className="text-xs text-muted">{t("hero.cardMetric1Label")}</div>
                  <div className="mt-1 font-medium">{t("hero.cardMetric1Value")}</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-muted">
                <span className="font-mono">/ {t("nav.projects")} • {t("nav.contact")}</span>
                <a
                  href="#projects"
                  className="text-sm font-medium underline underline-offset-4"
                  style={{ textDecorationColor: "rgb(var(--accent)/0.55)" }}
                >
                  {t("hero.ctaPrimary")}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

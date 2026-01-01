import { useTranslation } from "react-i18next";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

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

  return (
    <section className="relative overflow-visible bg-transparent">
      {/* ✅ fade hacia la siguiente sección (sin costura) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-80px] h-64 blur-2xl opacity-95"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgb(var(--bg)) 60%, rgb(var(--bg)) 100%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 md:grid-cols-12"
        >
          {/* LEFT */}
          <div className="md:col-span-7">
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2">
              <span
                className={[
                  "relative inline-flex items-center gap-2 rounded-full",
                  "border border-border px-3 py-1 text-xs font-medium text-text",
                  // ✅ translúcido + blur para dejar pasar el background
                  "bg-surface/70 backdrop-blur-sm",
                ].join(" ")}
              >
                <span
                  className="absolute -inset-[1px] -z-10 rounded-full opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgb(var(--accent)/0.45), transparent 72%)",
                  }}
                />
                <Sparkles className="h-3.5 w-3.5 text-[rgb(var(--accent))]" />
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl"
            >
              <span className="relative inline-block">
                {t("hero.headlineA")}
                <span
                  className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-[72%] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgb(var(--accent)/0.9), transparent)",
                  }}
                />
              </span>
              <span className="mt-3 block text-muted">{t("hero.headlineB")}</span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 max-w-xl text-muted">
              {t("hero.subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="group relative rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-bg shadow-soft"
              >
                <span
                  className="pointer-events-none absolute -inset-[1px] -z-10 rounded-xl opacity-0 blur-md transition-opacity group-hover:opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgb(var(--accent)/0.55), transparent 66%)",
                  }}
                />
                {t("hero.ctaPrimary")}
              </motion.a>

              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className={[
                  "rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors",
                  // ✅ translúcido para no crear “bloques” sólidos
                  "bg-surface/70 backdrop-blur-sm hover:bg-bg/60",
                ].join(" ")}
              >
                {t("hero.ctaSecondary")}
              </motion.a>
            </motion.div>

            {/* Chips */}
            <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
              {["one", "two", "three", "four"].map((k) => (
                <span
                  key={k}
                  className={[
                    "relative rounded-full border border-border px-3 py-1 text-xs text-text",
                    // ✅ translúcido + blur
                    "bg-surface/65 backdrop-blur-sm",
                  ].join(" ")}
                >
                  {t(`hero.chips.${k}`)}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT CARD */}
          <div className="md:col-span-5">
            <motion.div
              variants={item}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.25 }}
              className={[
                "relative overflow-hidden rounded-2xl border border-border p-6 shadow-soft",
                // ✅ translúcido + blur para que el fondo siga continuo
                "bg-surface/75 backdrop-blur-md",
              ].join(" ")}
            >
              {/* subtle rim light */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(var(--accent)/0.18), transparent)",
                }}
              />

              <div className="relative flex items-center justify-between">
                <h2 className="text-sm font-semibold">{t("hero.cardTitle")}</h2>
                <span className="rounded-full border border-border bg-bg/30 px-2 py-1 font-mono text-[10px] text-muted backdrop-blur-sm">
                  v1.0
                </span>
              </div>

              <p className="mt-3 text-sm text-muted">{t("hero.cardBody")}</p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-border bg-bg/20 p-4 backdrop-blur-sm">
                  <div className="text-xs text-muted">{t("hero.cardMetric1Label")}</div>
                  <div className="mt-1 font-medium">{t("hero.cardMetric1Value")}</div>
                </div>
                <div className="rounded-xl border border-border bg-bg/20 p-4 backdrop-blur-sm">
                  <div className="text-xs text-muted">{t("hero.cardMetric2Label")}</div>
                  <div className="mt-1 font-medium">{t("hero.cardMetric2Value")}</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-muted">
                <span className="font-mono">
                  / {t("nav.projects")} • {t("nav.contact")}
                </span>
                <a
                  href="#projects"
                  className="text-sm font-medium underline underline-offset-4"
                  style={{ textDecorationColor: "rgb(var(--accent)/0.5)" }}
                >
                  {t("hero.ctaPrimary")}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="mt-10 inline-flex items-center gap-3 text-sm text-muted"
        >
          <span>{t("hero.scroll")}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/65 backdrop-blur-sm">
            <ArrowDown className="h-4 w-4 text-[rgb(var(--accent))]" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}

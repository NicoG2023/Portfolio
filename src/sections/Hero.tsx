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
    <section className="relative">
      {/* Mystical background (light vs dark tuned) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* ================= LIGHT MODE ================= */}
        <div className="absolute inset-0 dark:hidden">
          {/* Spotlight principal (oro) */}
          <div
            className="absolute left-1/2 top-[-260px] h-[560px] w-[980px] -translate-x-1/2 rounded-full blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, rgb(var(--accent) / 0.38), transparent 70%)",
            }}
          />

          {/* Secondary glow (crimson MUY sutil, local) */}
          <div
            className="absolute left-[6%] top-[10%] h-[520px] w-[520px] rounded-full blur-3xl opacity-35"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--crimson) / 0.12), transparent 68%)",
              mixBlendMode: "multiply",
            }}
          />

          {/* Vignette local suave (solo para hero, no para toda la app) */}
          <div
            className="absolute inset-0 opacity-75"
            style={{
              background: [
                "radial-gradient(circle at 50% 0%, rgb(var(--accent) / 0.08), transparent 55%)",
                "radial-gradient(circle at 50% 50%, transparent 58%, rgb(var(--ink) / 0.08) 100%)",
              ].join(","),
            }}
          />

          {/* Frame MUY discreto (para el “Dangerous” sin recargar) */}
          <div
            className="absolute inset-0 opacity-45"
            style={{
              background: [
                "linear-gradient(to right, rgb(var(--accent)/0.10), transparent 20%, transparent 80%, rgb(var(--accent)/0.10))",
                "linear-gradient(to bottom, rgb(var(--accent)/0.08), transparent 22%, transparent 78%, rgb(var(--accent)/0.08))",
              ].join(","),
            }}
          />
        </div>
        {/* ================= DARK MODE ================= */}
        <div className="absolute inset-0 hidden dark:block">
          {/* gold spotlight */}
          <div
            className="absolute left-1/2 top-[-240px] h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.45), transparent 65%)",
            }}
          />

          {/* ✅ crimson haze dark (misterio “Dangerous”, sutil) */}
          <div
            className="absolute left-[-260px] top-[120px] h-[640px] w-[640px] rounded-full blur-3xl opacity-35"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgb(var(--crimson) / 0.12), transparent 66%)",
            }}
          />

          {/* side aura */}
          <div
            className="absolute right-[-180px] top-[90px] h-[520px] w-[520px] rounded-full blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--secondary) / 0.22), transparent 60%)",
            }}
          />

          {/* vignette (más cinematográfico) */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background: [
                "radial-gradient(circle at 50% 10%, transparent 0%, rgb(var(--bg)) 62%)",
                "radial-gradient(circle at 50% 55%, transparent 40%, rgb(0 0 0 / 0.45) 100%)",
              ].join(","),
            }}
          />

          {/* 🖼️ DANGEROUS FRAME (dark, más discreto) */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: [
                "linear-gradient(to right, rgb(var(--accent)/0.10), transparent 18%, transparent 82%, rgb(var(--accent)/0.10))",
                "linear-gradient(to bottom, rgb(var(--accent)/0.08), transparent 22%, transparent 78%, rgb(var(--accent)/0.08))",
                "radial-gradient(circle at 0% 0%, rgb(var(--accent)/0.14), transparent 48%)",
                "radial-gradient(circle at 100% 0%, rgb(var(--accent)/0.10), transparent 48%)",
                "radial-gradient(circle at 0% 100%, rgb(var(--accent)/0.08), transparent 48%)",
                "radial-gradient(circle at 100% 100%, rgb(var(--accent)/0.10), transparent 48%)",
              ].join(","),
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 md:grid-cols-12"
        >
          {/* Left */}
          <div className="md:col-span-7">
            {/* Badge with gold ring */}
            <motion.div variants={item} className="inline-flex items-center gap-2">
              <span className="relative inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text">
                <span
                  className="absolute -inset-[1px] -z-10 rounded-full opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgb(var(--accent)/0.50), transparent 72%)",
                  }}
                />
                <Sparkles className="h-3.5 w-3.5" style={{ color: "rgb(var(--accent))" }} />
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Headline with gold hairline underline */}
            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl"
            >
              <span className="relative inline-block">
                {t("hero.headlineA")}
                <span
                  className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-[72%] rounded-full opacity-70"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(var(--accent)/0.0), rgb(var(--accent)/0.92), rgb(var(--accent)/0.0))",
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
                className="group relative rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-bg shadow-soft hover:opacity-95"
              >
                {/* gold glow on hover */}
                <span
                  className="pointer-events-none absolute -inset-[1px] -z-10 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgb(var(--accent)/0.60), transparent 66%)",
                  }}
                />
                {t("hero.ctaPrimary")}
              </motion.a>

              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group relative rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text transition-colors hover:bg-bg"
              >
                <span
                  className="pointer-events-none absolute -inset-[1px] rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: "0 0 0 1px rgb(var(--accent)/0.38) inset",
                  }}
                />
                {t("hero.ctaSecondary")}
              </motion.a>
            </motion.div>

            {/* Chips (with subtle gold hover) */}
            <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
              {["one", "two", "three", "four"].map((k) => (
                <span
                  key={k}
                  className="group relative rounded-full border border-border bg-surface px-3 py-1 text-xs text-text"
                >
                  <span
                    className="pointer-events-none absolute -inset-[1px] -z-10 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-80"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgb(var(--accent)/0.45), transparent 68%)",
                    }}
                  />
                  {t(`hero.chips.${k}`)}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right card (enchanted rim light) */}
          <div className="md:col-span-5">
            <motion.div
              variants={item}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-soft"
              style={{
                boxShadow:
                  "0 1px 0 rgb(255 255 255 / 0.35) inset, 0 0 0 1px rgb(var(--accent)/0.10) inset",
              }}
            >
              {/* rim light */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-24 w-full opacity-60"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(var(--accent)/0.24), transparent)",
                }}
              />

              {/* tiny sparkles (very subtle) */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full blur-2xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgb(var(--accent)/0.40), transparent 72%)",
                }}
              />

              <div className="relative flex items-center justify-between">
                <h2 className="text-sm font-semibold">{t("hero.cardTitle")}</h2>
                <span className="rounded-full px-2 py-1 font-mono text-[10px] text-muted border border-border">
                  v1.0
                </span>
              </div>

              <p className="relative mt-3 text-sm text-muted">{t("hero.cardBody")}</p>

              <div className="relative mt-6 grid gap-3">
                <div
                  className="rounded-xl border border-border p-4"
                  style={{
                    boxShadow: "0 0 0 1px rgb(var(--accent)/0.06) inset",
                  }}
                >
                  <div className="text-xs text-muted">{t("hero.cardMetric1Label")}</div>
                  <div className="mt-1 font-medium">{t("hero.cardMetric1Value")}</div>
                </div>
                <div
                  className="rounded-xl border border-border p-4"
                  style={{
                    boxShadow: "0 0 0 1px rgb(var(--accent)/0.06) inset",
                  }}
                >
                  <div className="text-xs text-muted">{t("hero.cardMetric2Label")}</div>
                  <div className="mt-1 font-medium">{t("hero.cardMetric2Value")}</div>
                </div>
              </div>

              <div className="relative mt-6 flex items-center justify-between">
                <div className="text-xs text-muted">
                  <span className="font-mono">/</span> {t("nav.projects")} • {t("nav.contact")}
                </div>

                <motion.a
                  whileHover={reduceMotion ? undefined : { y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects"
                  className="text-sm font-medium text-text underline underline-offset-4"
                  style={{
                    textDecorationColor: "rgb(var(--accent)/0.48)",
                  }}
                >
                  {t("hero.ctaPrimary")}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint (mystic ring) */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 inline-flex items-center gap-3 text-sm text-muted"
        >
          <span>{t("hero.scroll")}</span>

          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface">
            {/* pulse ring */}
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: "0 0 0 1px rgb(var(--accent)/0.38) inset" }}
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.35, 0.15, 0.35], scale: [1, 1.06, 1] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 2.2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }
              }
            />

            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 1.2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }
              }
              className="inline-flex"
            >
              <ArrowDown className="h-4 w-4" style={{ color: "rgb(var(--accent))" }} />
            </motion.span>
          </span>
        </motion.a>
      </div>
    </section>
  );
}

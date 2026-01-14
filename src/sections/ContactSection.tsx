import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

type CopyState = "idle" | "copied";

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const reduceMotion = useReducedMotion();

  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const email = "nicoguehe@gmail.com";

  const [copyState, setCopyState] = useState<CopyState>("idle");

  const subject = lang === "es" ? "Contacto desde tu portafolio" : "Contact from your portfolio";

  // ✅ opcional: un body corto para guiar a quien te escribe
  const body =
    lang === "es"
      ? "Hola Nicolás,\n\nVi tu portafolio y quiero hablar sobre...\n\nContexto / links:\n- \n\nGracias,"
      : "Hi Nicolás,\n\nI saw your portfolio and I'd like to discuss...\n\nContext / links:\n- \n\nThanks,";

  const mailto = useMemo(() => {
    const params = new URLSearchParams({ subject, body });
    return `mailto:${email}?${params.toString()}`;
  }, [email, subject, body]);

  async function onCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1200);
    } catch {
      // fallback: prompt (simple y universal)
      window.prompt(t("contact.copyFallback"), email);
    }
  }

  return (
    <section id="contact" className="relative bg-transparent overflow-visible">
      {/* ✅ fade superior con overlap (SIEMPRE detrás) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[-140px] h-80 blur-2xl opacity-90 -z-10"
        style={{
          background:
            "linear-gradient(to top, transparent 0%, rgb(var(--bg)) 60%, rgb(var(--bg)) 100%)",
        }}
      />

      {/* wash local MUY sutil (detrás) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] -z-10">
        {/* LIGHT */}
        <div className="absolute inset-0 dark:hidden">
          <div
            className="absolute left-[58%] top-[-220px] h-[520px] w-[980px] rounded-full blur-3xl opacity-28"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, rgb(var(--accent) / 0.18), transparent 72%)",
            }}
          />
          <div
            className="absolute left-[-240px] top-[60px] h-[520px] w-[520px] rounded-full blur-3xl opacity-14"
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
            className="absolute left-[58%] top-[-220px] h-[520px] w-[980px] rounded-full blur-3xl opacity-18"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.18), transparent 72%)",
            }}
          />
          <div
            className="absolute left-[-260px] top-[70px] h-[560px] w-[560px] rounded-full blur-3xl opacity-12"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgb(var(--crimson) / 0.10), transparent 72%)",
            }}
          />
        </div>
      </div>

      {/* contenido SIEMPRE encima */}
      <div className="mx-auto max-w-5xl px-6 py-20 relative z-10">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl font-semibold tracking-tight"
            >
              {t("contact.title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.45, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 max-w-xl text-muted"
            >
              {t("contact.subtitle")}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={mailto}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-bg shadow-soft hover:opacity-95"
                aria-label={lang === "es" ? "Enviar correo" : "Send email"}
              >
                {t("contact.ctaEmail")}
              </motion.a>

              <motion.button
                type="button"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCopyEmail}
                className={[
                  "rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors",
                  "bg-surface/70 backdrop-blur-sm hover:bg-bg/50",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
                ].join(" ")}
                aria-label={lang === "es" ? "Copiar email" : "Copy email"}
              >
                {copyState === "copied" ? t("contact.copied") : t("contact.copy")}
                {/* ✅ feedback accesible */}
                <span className="sr-only" aria-live="polite">
                  {copyState === "copied" ? (lang === "es" ? "Email copiado" : "Email copied") : ""}
                </span>
              </motion.button>
            </motion.div>

            {/* Quick notes */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={["mt-8 rounded-2xl border border-border p-6", "bg-surface/75 backdrop-blur-md"].join(" ")}
            >
              <div className="text-sm font-semibold">{t("contact.quickTitle")}</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• {t("contact.quick1")}</li>
                <li>• {t("contact.quick2")}</li>
                <li>• {t("contact.quick3")}</li>
              </ul>

              <div className="mt-5 rounded-xl border border-border bg-bg/25 px-4 py-3 backdrop-blur-sm">
                <div className="text-xs text-muted">{t("contact.emailLabel")}</div>
                <div className="mt-1 font-mono text-sm text-text select-all">{email}</div>
              </div>
            </motion.div>
          </div>

          {/* Right card */}
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={["rounded-2xl border border-border p-6 shadow-soft", "bg-surface/75 backdrop-blur-md"].join(" ")}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{t("contact.linksTitle")}</h3>
                <span className="rounded-full border border-border bg-bg/25 px-2 py-1 font-mono text-[10px] text-muted backdrop-blur-sm">
                  /contact
                </span>
              </div>

              <p className="mt-3 text-sm text-muted">{t("contact.linksBody")}</p>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://www.linkedin.com/in/nicol%C3%A1s-guevara-herr%C3%A1n-a959a82ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-border bg-bg/25 px-4 py-3 text-sm text-text backdrop-blur-sm transition-colors hover:bg-surface/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]"
                >
                  <div className="font-medium">{t("contact.linkedin")}</div>
                  <div className="mt-1 text-xs text-muted">{t("contact.linkedinHint")}</div>
                </a>

                <a
                  href="https://github.com/NicoG2023"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-border bg-bg/25 px-4 py-3 text-sm text-text backdrop-blur-sm transition-colors hover:bg-surface/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]"
                >
                  <div className="font-medium">{t("contact.github")}</div>
                  <div className="mt-1 text-xs text-muted">{t("contact.githubHint")}</div>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-border bg-bg/25 px-4 py-3 text-sm text-text backdrop-blur-sm transition-colors hover:bg-surface/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]"
                >
                  <div className="font-medium">{t("contact.resume")}</div>
                  <div className="mt-1 text-xs text-muted">{t("contact.resumeHint")}</div>
                </a>
              </div>

              <div className="mt-6 text-xs text-muted">{t("contact.footerNote")}</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* fade inferior final */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-160px] h-96 blur-3xl opacity-90 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgb(var(--bg)) 60%, rgb(var(--bg)) 100%)",
        }}
      />
    </section>
  );
}

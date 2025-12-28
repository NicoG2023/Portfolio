import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

type CopyState = "idle" | "copied";

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";

  // Cambia esto por tu correo real
  const email = "nicoguehe@gmail.com";

  const [copyState, setCopyState] = useState<CopyState>("idle");

  const subject = useMemo(() => {
    return lang === "es"
      ? "Contacto desde tu portafolio"
      : "Contact from your portfolio";
  }, [lang]);

  const mailto = useMemo(() => {
    const params = new URLSearchParams({
      subject,
    });
    return `mailto:${email}?${params.toString()}`;
  }, [email, subject]);

  async function onCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1200);
    } catch {
      // fallback: si el navegador bloquea clipboard
      window.prompt(t("contact.copyFallback"), email);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
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
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={mailto}
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-bg shadow-soft hover:opacity-95"
            >
              {t("contact.ctaEmail")}
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCopyEmail}
              className="rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text hover:bg-bg transition-colors"
            >
              {copyState === "copied" ? t("contact.copied") : t("contact.copy")}
            </motion.button>
          </motion.div>

          {/* Quick notes */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 rounded-2xl border border-border bg-surface p-6"
          >
            <div className="text-sm font-semibold">{t("contact.quickTitle")}</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• {t("contact.quick1")}</li>
              <li>• {t("contact.quick2")}</li>
              <li>• {t("contact.quick3")}</li>
            </ul>

            <div className="mt-5 rounded-xl border border-border bg-bg px-4 py-3">
              <div className="text-xs text-muted">{t("contact.emailLabel")}</div>
              <div className="mt-1 font-mono text-sm text-text">{email}</div>
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
            className="rounded-2xl border border-border bg-surface p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{t("contact.linksTitle")}</h3>
              <span className="rounded-full border border-border bg-bg px-2 py-1 font-mono text-[10px] text-muted">
                /contact
              </span>
            </div>

            <p className="mt-3 text-sm text-muted">{t("contact.linksBody")}</p>

            <div className="mt-6 grid gap-3">
              <a
                href="https://www.linkedin.com/in/nicol%C3%A1s-guevara-herr%C3%A1n-a959a82ab/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text hover:bg-surface transition-colors"
              >
                <div className="font-medium">{t("contact.linkedin")}</div>
                <div className="mt-1 text-xs text-muted">{t("contact.linkedinHint")}</div>
              </a>

              <a
                href="https://github.com/NicoG2023"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text hover:bg-surface transition-colors"
              >
                <div className="font-medium">{t("contact.github")}</div>
                <div className="mt-1 text-xs text-muted">{t("contact.githubHint")}</div>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text hover:bg-surface transition-colors"
              >
                <div className="font-medium">{t("contact.resume")}</div>
                <div className="mt-1 text-xs text-muted">{t("contact.resumeHint")}</div>
              </a>
            </div>

            <div className="mt-6 text-xs text-muted">
              {t("contact.footerNote")}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

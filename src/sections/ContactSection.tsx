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

  const subject =
    lang === "es" ? "Contacto desde tu portafolio" : "Contact from your portfolio";

  const body =
    lang === "es"
      ? [
          "Hola Nicolás,",
          "",
          "Vi tu portafolio y quiero hablar sobre:",
          "",
          "Contexto / links:",
          "- ",
          "",
          "Gracias,",
        ].join("\r\n")
      : [
          "Hi Nicolás,",
          "",
          "I saw your portfolio and I'd like to discuss:",
          "",
          "Context / links:",
          "- ",
          "",
          "Thanks,",
        ].join("\r\n");

  const gmailComposeHref = useMemo(() => {
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: email,
      su: subject,
      body,
    });
    return `https://mail.google.com/mail/?${params.toString()}`;
  }, [email, subject, body]);

  const mailtoHref = useMemo(() => {
    const subjectEncoded = encodeURIComponent(subject);
    const bodyEncoded = encodeURIComponent(body);
    return `mailto:${email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  }, [email, subject, body]);

  const resumeHref = lang === "es" ? "/resume-es.pdf" : "/resume-en.pdf";
  const resumeLabel = lang === "es" ? "CV (Español)" : "Resume (English)";
  const resumeHint = "PDF";

  async function onCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1200);
    } catch {
      window.prompt(t("contact.copyFallback"), email);
    }
  }

  return (
    <section id="contact" className="relative bg-transparent overflow-visible cv-auto">

      <div className="mx-auto max-w-5xl px-6 py-20 relative z-10">
        <div className="grid gap-10 md:grid-cols-12">
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
                href={gmailComposeHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-bg shadow-soft hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]"
                aria-label={lang === "es" ? "Enviar correo en Gmail" : "Send email in Gmail"}
              >
                {lang === "es" ? "Enviar (Gmail)" : "Send (Gmail)"}
              </motion.a>

              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={mailtoHref}
                className={[
                  "rounded-xl px-5 py-2.5 text-sm font-medium text-text transition-colors",
                  "border border-border",
                  "glass hover:opacity-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
                ].join(" ")}
                aria-label={lang === "es" ? "Abrir en cliente de correo" : "Open in mail app"}
              >
                {lang === "es" ? "Abrir en correo" : "Open mail app"}
              </motion.a>

              <motion.button
                type="button"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCopyEmail}
                className={[
                  "rounded-xl px-5 py-2.5 text-sm font-medium text-text transition-colors",
                  "border border-border",
                  "glass hover:opacity-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
                ].join(" ")}
                aria-label={lang === "es" ? "Copiar email" : "Copy email"}
              >
                {copyState === "copied" ? t("contact.copied") : t("contact.copy")}
                <span className="sr-only" aria-live="polite">
                  {copyState === "copied"
                    ? lang === "es"
                      ? "Email copiado"
                      : "Email copied"
                    : ""}
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={["mt-8 rounded-2xl p-6", "glass"].join(" ")}
            >
              <div className="text-sm font-semibold">{t("contact.quickTitle")}</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• {t("contact.quick1")}</li>
                <li>• {t("contact.quick2")}</li>
                <li>• {t("contact.quick3")}</li>
              </ul>

              <div className={["mt-5 rounded-xl px-4 py-3", "glass"].join(" ")}>
                <div className="text-xs text-muted">{t("contact.emailLabel")}</div>
                <div className="mt-1 font-mono text-sm text-text select-all">{email}</div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={["rounded-2xl p-6 shadow-soft", "glass"].join(" ")}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{t("contact.linksTitle")}</h3>
                <span className={["rounded-full px-2 py-1 font-mono text-[10px] text-muted", "glass"].join(" ")}>
                  /contact
                </span>
              </div>

              <p className="mt-3 text-sm text-muted">{t("contact.linksBody")}</p>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://www.linkedin.com/in/nicol%C3%A1s-guevara-herr%C3%A1n-a959a82ab/"
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "rounded-xl px-4 py-3 text-sm text-text transition-colors",
                    "glass hover:opacity-95",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
                  ].join(" ")}
                >
                  <div className="font-medium">{t("contact.linkedin")}</div>
                  <div className="mt-1 text-xs text-muted">{t("contact.linkedinHint")}</div>
                </a>

                <a
                  href="https://github.com/NicoG2023"
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "rounded-xl px-4 py-3 text-sm text-text transition-colors",
                    "glass hover:opacity-95",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
                  ].join(" ")}
                >
                  <div className="font-medium">{t("contact.github")}</div>
                  <div className="mt-1 text-xs text-muted">{t("contact.githubHint")}</div>
                </a>

                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "rounded-xl px-4 py-3 text-sm text-text transition-colors",
                    "glass hover:opacity-95",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]",
                  ].join(" ")}
                  aria-label={resumeLabel}
                >
                  <div className="font-medium">{resumeLabel}</div>
                  <div className="mt-1 text-xs text-muted">{resumeHint}</div>
                </a>
              </div>

              <div className="mt-6 text-xs text-muted">{t("contact.footerNote")}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

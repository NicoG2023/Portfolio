import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useScrolled } from "../hooks/useScrolled";

export function Header() {
  const { t } = useTranslation();
  const scrolled = useScrolled(10);

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        animate={{
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.08)" : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={[
          "border-b border-border",
          "glass",
          "bg-bg/92",
        ].join(" ")}
        style={{
          backgroundColor: scrolled ? "rgb(var(--surface) / 0.78)" : "rgb(var(--surface) / 0.70)",
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight text-text">
            {t("site.brand")}
          </a>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 md:flex">
              <a
                href="#projects"
                className="rounded-xl px-3 py-2 text-sm text-muted hover:bg-surface hover:text-text transition-colors"
              >
                {t("nav.projects")}
              </a>
              <a
                href="#contact"
                className="rounded-xl px-3 py-2 text-sm text-muted hover:bg-surface hover:text-text transition-colors"
              >
                {t("nav.contact")}
              </a>
            </nav>

            <div className="ml-1 flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

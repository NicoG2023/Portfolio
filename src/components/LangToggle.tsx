import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function LangToggle() {
  const { i18n } = useTranslation();
  const isES = i18n.language.startsWith("es");

  const toggleLang = () => {
    i18n.changeLanguage(isES ? "en" : "es");
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      onClick={toggleLang}
      aria-label="Change language"
      className="inline-flex items-center gap-1 rounded-xl border border-border bg-surface px-3 py-2 text-sm font-medium text-text hover:bg-bg transition-colors"
    >
      <span className={isES ? "opacity-100" : "opacity-50"}>ES</span>
      <span className="opacity-40">/</span>
      <span className={!isES ? "opacity-100" : "opacity-50"}>EN</span>
    </motion.button>
  );
}

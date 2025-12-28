import { useState } from "react";
import { motion } from "framer-motion";
import { toggleTheme } from "../lib/theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const onToggle = () => {
    const next = toggleTheme();
    setIsDark(next);
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      onClick={onToggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm font-medium text-text hover:bg-bg transition-colors"
    >
      <span className="font-mono text-xs">{isDark ? "DARK" : "LIGHT"}</span>
    </motion.button>
  );
}

import { useEffect, useMemo, useState } from "react";

type Options = {
  rootMargin?: string;
  threshold?: number | number[];
};

export function useScrollSpy(ids: string[], options?: Options) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  const opts = useMemo(
    () => ({
      rootMargin: options?.rootMargin ?? "-20% 0px -65% 0px",
      threshold: options?.threshold ?? 0,
    }),
    [options?.rootMargin, options?.threshold]
  );

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      // Entradas visibles -> escoger la que esté más arriba (más cercana al top)
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));

      if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
    }, opts);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, opts]);

  return activeId;
}

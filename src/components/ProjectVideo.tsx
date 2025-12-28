import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "../data/projects";

type ProjectVideoType = NonNullable<NonNullable<Project["media"]>["video"]>;

function getYouTubeId(url: string) {
  const m = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return m ? m[1] : null;
}

function getVimeoId(url: string) {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? m[1] : null;
}

export function ProjectVideo({
  video,
  lang,
}: {
  video: ProjectVideoType;
  lang: "es" | "en";
}) {
  const title = video.title[lang];

  const embed = useMemo(() => {
    if (video.kind === "youtube") {
      const id = getYouTubeId(video.src);
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (video.kind === "vimeo") {
      const id = getVimeoId(video.src);
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
    return null;
  }, [video]);

  // Lazy-load gate
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" } // empieza a cargar un poquito antes
    );

    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad]);

  // mp4 ya es "lazy" por naturaleza (no hay iframe pesado)
  if (video.kind === "mp4") {
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <video controls preload="metadata" className="w-full">
          <source src={video.src} type="video/mp4" />
        </video>
        <div className="border-t border-border px-4 py-3 text-sm text-muted">{title}</div>
      </div>
    );
  }

  if (!embed) return null;

  return (
    <div ref={wrapRef} className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="aspect-video w-full">
        {shouldLoad ? (
          <iframe
            className="h-full w-full"
            src={embed}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setShouldLoad(true)}
            className="flex h-full w-full items-center justify-center bg-bg text-text"
            aria-label={lang === "es" ? "Cargar video" : "Load video"}
          >
            <span className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium">
              {lang === "es" ? "Cargar demo" : "Load demo"}
            </span>
          </button>
        )}
      </div>

      <div className="border-t border-border px-4 py-3 text-sm text-muted">{title}</div>
    </div>
  );
}

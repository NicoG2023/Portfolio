import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "../data/projects";

type ProjectVideoType = NonNullable<NonNullable<Project["media"]>["video"]>;

function getYouTubeId(url: string) {
  try {
    const u = new URL(url);

    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id && id.length === 11 ? id : null;
    }

    // youtube.com/watch?v=<id>
    const v = u.searchParams.get("v");
    if (v && v.length === 11) return v;

    // youtube.com/shorts/<id>  |  youtube.com/embed/<id>
    const parts = u.pathname.split("/").filter(Boolean);
    const idx = parts.findIndex((p) => p === "shorts" || p === "embed");
    if (idx >= 0 && parts[idx + 1]?.length === 11) return parts[idx + 1];

    // fallback: cualquier segmento de 11 chars
    const m = url.match(/([0-9A-Za-z_-]{11})/);
    return m ? m[1] : null;
  } catch {
    const m = url.match(/([0-9A-Za-z_-]{11})/);
    return m ? m[1] : null;
  }
}

function getVimeoId(url: string) {
  // soporta vimeo.com/123, player.vimeo.com/video/123
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
}

// Thumbnails (mejor UX sin cargar iframe)
function youtubeThumb(id: string) {
  // maxresdefault a veces 404; hqdefault casi siempre existe
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function vimeoThumb(_id: string) {
  // Vimeo thumbnail requiere API o oEmbed. Aquí no inventamos.
  return null;
}

export function ProjectVideo({
  video,
  lang,
}: {
  video: ProjectVideoType;
  lang: "es" | "en";
}) {
  const title = video.title[lang];

  const meta = useMemo(() => {
    if (video.kind === "youtube") {
      const id = getYouTubeId(video.src);
      if (!id) return { embed: null, thumb: null };

      // Params: modest branding, no related from other channels, etc.
      const params = new URLSearchParams({
        rel: "0",
        modestbranding: "1",
        playsinline: "1",
      });

      return {
        embed: `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`,
        thumb: youtubeThumb(id),
      };
    }

    if (video.kind === "vimeo") {
      const id = getVimeoId(video.src);
      if (!id) return { embed: null, thumb: null };

      const params = new URLSearchParams({
        dnt: "1",
        title: "0",
        byline: "0",
        portrait: "0",
      });

      return {
        embed: `https://player.vimeo.com/video/${id}?${params.toString()}`,
        thumb: vimeoThumb(id), // null por defecto
      };
    }

    return { embed: null, thumb: null };
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
          // Nota: NO cargamos automáticamente el iframe.
          // Solo marcamos “visible”, y seguimos usando click para cargar si quieres.
          // Si prefieres auto-cargar al entrar, cambia a setShouldLoad(true) aquí.
        }
      },
      { rootMargin: "200px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad]);

  // MP4 (ideal si quieres máximo performance)
  if (video.kind === "mp4") {
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <video
          controls
          preload="metadata"
          playsInline
          className="w-full"
          // opcional si quieres limitar descargas:
          // controlsList="nodownload noplaybackrate"
        >
          <source src={video.src} type="video/mp4" />
        </video>
        <div className="border-t border-border px-4 py-3 text-sm text-muted">{title}</div>
      </div>
    );
  }

  if (!meta.embed) return null;

  return (
    <div ref={wrapRef} className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="aspect-video w-full">
        {shouldLoad ? (
          <iframe
            className="h-full w-full"
            src={meta.embed}
            title={title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setShouldLoad(true)}
            className="relative flex h-full w-full items-center justify-center bg-bg text-text"
            aria-label={lang === "es" ? "Cargar video" : "Load video"}
          >
            {/* Thumbnail si existe */}
            {meta.thumb ? (
              <>
                <img
                  src={meta.thumb}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                  loading="lazy"
                />
                {/* overlay suave para legibilidad */}
                <div className="absolute inset-0 bg-black/35" />
              </>
            ) : (
              <div className="absolute inset-0 bg-bg" />
            )}

            <span className="relative rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium">
              {lang === "es" ? "Ver demo" : "Watch demo"}
            </span>
          </button>
        )}
      </div>

      <div className="border-t border-border px-4 py-3 text-sm text-muted">{title}</div>
    </div>
  );
}

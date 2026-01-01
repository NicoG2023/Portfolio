export function GlobalBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 isolate">
      {/* ✅ Capa base fija: textura/vignette (no se “acaba” en ninguna sección) */}
      <div className="fixed inset-0">
        {/* LIGHT */}
        <div className="absolute inset-0 dark:hidden">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background: [
                // dots sutiles
                "radial-gradient(rgb(var(--accent) / 0.10) 0.9px, transparent 0.9px)",
                "radial-gradient(rgb(var(--accent) / 0.06) 0.8px, transparent 0.8px)",
                // vignette suave
                "radial-gradient(circle at 50% 0%, rgb(var(--accent) / 0.06), transparent 60%)",
                "radial-gradient(circle at 50% 60%, transparent 40%, rgb(var(--ink) / 0.06) 100%)",
              ].join(","),
              backgroundSize: "28px 28px, 44px 44px, auto, auto",
              backgroundPosition: "0 0, 12px 10px, 0 0, 0 0",
            }}
          />
        </div>

        {/* DARK */}
        <div className="absolute inset-0 hidden dark:block">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background: [
                "radial-gradient(rgb(var(--accent) / 0.09) 0.9px, transparent 0.9px)",
                "radial-gradient(rgb(var(--accent) / 0.05) 0.8px, transparent 0.8px)",
                "radial-gradient(circle at 50% 12%, transparent 0%, rgb(var(--bg)) 65%)",
                "radial-gradient(circle at 50% 60%, transparent 38%, rgb(0 0 0 / 0.55) 100%)",
              ].join(","),
              backgroundSize: "30px 30px, 48px 48px, auto, auto",
              backgroundPosition: "0 0, 14px 12px, 0 0, 0 0",
            }}
          />
        </div>
      </div>

      {/* ✅ Capa de blobs “larga”: manchas a lo largo del scroll */}
      <div className="absolute inset-x-0 top-0 min-h-[270vh] overflow-visible">
        {/* LIGHT blobs */}
        <div className="absolute inset-0 dark:hidden">
          {/* tramo 1 */}
          <div
            className="absolute left-1/2 top-[-18vh] h-[70vh] w-[1100px] -translate-x-1/2 rounded-full blur-3xl opacity-55 bg-blob-float-center bg-delay-1"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, rgb(var(--accent) / 0.30), transparent 70%)",
            }}
          />
          <div
            className="absolute left-[-22vw] top-[18vh] h-[70vh] w-[70vh] rounded-full blur-3xl opacity-28 bg-blob-drift bg-delay-2"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgb(var(--crimson) / 0.14), transparent 68%)",
            }}
          />

          {/* tramo 2 (cuando llegas a Projects) */}
          <div
            className="absolute left-[58%] top-[105vh] h-[78vh] w-[78vh] rounded-full blur-3xl opacity-22 bg-blob-float bg-delay-3"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.18), transparent 70%)",
            }}
          />
          <div
            className="absolute left-[6%] top-[125vh] h-[62vh] w-[62vh] rounded-full blur-3xl opacity-18 bg-blob-drift bg-delay-1"
            style={{
              background:
                "radial-gradient(circle at 45% 45%, rgb(var(--crimson) / 0.10), transparent 70%)",
              mixBlendMode: "multiply",
            }}
          />

          {/* tramo 3 (más abajo) */}
          <div
            className="absolute left-1/2 top-[215vh] h-[75vh] w-[1200px] -translate-x-1/2 rounded-full blur-3xl opacity-20 bg-blob-float-center bg-delay-2"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.16), transparent 70%)",
            }}
          />
        </div>

        {/* DARK blobs */}
        <div className="absolute inset-0 hidden dark:block">
          {/* tramo 1 */}
          <div
            className="absolute left-1/2 top-[-18vh] h-[68vh] w-[980px] -translate-x-1/2 rounded-full blur-3xl opacity-50 bg-blob-float-center bg-delay-1"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.35), transparent 65%)",
            }}
          />
          <div
            className="absolute left-[-22vw] top-[18vh] h-[76vh] w-[76vh] rounded-full blur-3xl opacity-22 bg-blob-drift bg-delay-2"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgb(var(--crimson) / 0.12), transparent 66%)",
            }}
          />

          {/* tramo 2 */}
          <div
            className="absolute left-[60%] top-[105vh] h-[82vh] w-[82vh] rounded-full blur-3xl opacity-18 bg-blob-float bg-delay-3"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.22), transparent 70%)",
            }}
          />
          <div
            className="absolute left-[8%] top-[135vh] h-[64vh] w-[64vh] rounded-full blur-3xl opacity-16 bg-blob-drift bg-delay-1"
            style={{
              background:
                "radial-gradient(circle at 45% 45%, rgb(var(--crimson) / 0.10), transparent 70%)",
            }}
          />

          {/* tramo 3 */}
          <div
            className="absolute left-1/2 top-[215vh] h-[74vh] w-[1100px] -translate-x-1/2 rounded-full blur-3xl opacity-16 bg-blob-float-center bg-delay-2"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.18), transparent 70%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

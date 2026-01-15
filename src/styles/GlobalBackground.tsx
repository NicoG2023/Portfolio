const isChromium =
  typeof navigator !== "undefined" &&
  /Chrome|Chromium|Brave/i.test(navigator.userAgent) &&
  !/Firefox/i.test(navigator.userAgent);

export function GlobalBackground() {
  const blurClass = isChromium ? "blur-xl" : "blur-2xl";

  const animCenter = isChromium ? "" : "bg-blob-float-center";
  const animFloat = isChromium ? "" : "bg-blob-float";
  const animDrift = isChromium ? "" : "bg-blob-drift";

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 isolate">
      {/* ✅ UNA sola capa fixed que incluye: textura + vignette (sin PageFades separado) */}
      <div className="fixed inset-0">
        {/* LIGHT */}
        <div className="absolute inset-0 dark:hidden">
          {/* textura base */}
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background: [
                "radial-gradient(rgb(var(--accent) / 0.10) 0.9px, transparent 0.9px)",
                "radial-gradient(rgb(var(--accent) / 0.06) 0.8px, transparent 0.8px)",
                "radial-gradient(circle at 50% 0%, rgb(var(--accent) / 0.06), transparent 60%)",
                "radial-gradient(circle at 50% 60%, transparent 40%, rgb(var(--ink) / 0.06) 100%)",
              ].join(","),
              backgroundSize: "28px 28px, 44px 44px, auto, auto",
              backgroundPosition: "0 0, 12px 10px, 0 0, 0 0",
            }}
          />
          {/* vignette suave (sin “stops” que dejan líneas) */}
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background: [
                "radial-gradient(1200px 520px at 50% -10%, rgb(var(--bg) / 0.95), transparent 70%)",
                "radial-gradient(1200px 520px at 50% 110%, rgb(var(--bg) / 0.95), transparent 70%)",
              ].join(","),
            }}
          />
        </div>

        {/* DARK */}
        <div className="absolute inset-0 hidden dark:block">
          {/* textura base */}
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
          {/* vignette suave */}
          <div
            className="absolute inset-0 opacity-85"
            style={{
              background: [
                "radial-gradient(1200px 520px at 50% -10%, rgb(var(--bg) / 0.92), transparent 70%)",
                "radial-gradient(1200px 520px at 50% 110%, rgb(var(--bg) / 0.92), transparent 70%)",
              ].join(","),
            }}
          />
        </div>
      </div>

      {/* ✅ Blobs: siguen el alto real (absolute inset-0) PERO sin translateZ/willChange */}
      <div className="absolute inset-0 overflow-hidden">
        {/* LIGHT blobs */}
        <div className="absolute inset-0 dark:hidden">
          <div
            className={[
              "absolute left-1/2 top-[-240px] h-[560px] w-[1100px] -translate-x-1/2 rounded-full",
              blurClass,
              isChromium ? "opacity-28" : "opacity-45",
              animCenter,
            ].join(" ")}
            style={{
              background:
                "radial-gradient(circle at 50% 55%, rgb(var(--accent) / 0.30), transparent 70%)",
            }}
          />

          <div
            className={[
              "absolute left-[-260px] top-[160px] h-[620px] w-[620px] rounded-full",
              blurClass,
              isChromium ? "opacity-14" : "opacity-24",
              animDrift,
            ].join(" ")}
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgb(var(--crimson) / 0.14), transparent 68%)",
            }}
          />

          <div
            className={[
              "absolute left-[60%] top-[38%] h-[720px] w-[720px] rounded-full",
              blurClass,
              isChromium ? "opacity-12" : "opacity-20",
              animFloat,
            ].join(" ")}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.18), transparent 70%)",
            }}
          />

          {!isChromium && (
            <div
              className={[
                "absolute left-[6%] top-[46%] h-[620px] w-[620px] rounded-full",
                "blur-2xl opacity-16",
                "bg-blob-drift",
              ].join(" ")}
              style={{
                background:
                  "radial-gradient(circle at 45% 45%, rgb(var(--crimson) / 0.10), transparent 70%)",
                mixBlendMode: "multiply",
              }}
            />
          )}

          <div
            className={[
              "absolute left-1/2 bottom-[-260px] h-[620px] w-[1200px] -translate-x-1/2 rounded-full",
              blurClass,
              isChromium ? "opacity-10" : "opacity-16",
              animCenter,
            ].join(" ")}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.16), transparent 72%)",
            }}
          />
        </div>

        {/* DARK blobs */}
        <div className="absolute inset-0 hidden dark:block">
          <div
            className={[
              "absolute left-1/2 top-[-240px] h-[540px] w-[980px] -translate-x-1/2 rounded-full",
              blurClass,
              isChromium ? "opacity-26" : "opacity-42",
              animCenter,
            ].join(" ")}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.32), transparent 66%)",
            }}
          />

          <div
            className={[
              "absolute left-[-280px] top-[160px] h-[660px] w-[660px] rounded-full",
              blurClass,
              isChromium ? "opacity-12" : "opacity-20",
              animDrift,
            ].join(" ")}
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgb(var(--crimson) / 0.12), transparent 66%)",
            }}
          />

          <div
            className={[
              "absolute left-[62%] top-[38%] h-[760px] w-[760px] rounded-full",
              blurClass,
              isChromium ? "opacity-10" : "opacity-16",
              animFloat,
            ].join(" ")}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.20), transparent 70%)",
            }}
          />

          {!isChromium && (
            <div
              className="absolute left-[8%] top-[48%] h-[640px] w-[640px] rounded-full blur-2xl opacity-14 bg-blob-drift"
              style={{
                background:
                  "radial-gradient(circle at 45% 45%, rgb(var(--crimson) / 0.10), transparent 70%)",
              }}
            />
          )}

          <div
            className={[
              "absolute left-1/2 bottom-[-260px] h-[600px] w-[1100px] -translate-x-1/2 rounded-full",
              blurClass,
              isChromium ? "opacity-8" : "opacity-14",
              animCenter,
            ].join(" ")}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgb(var(--accent) / 0.16), transparent 72%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

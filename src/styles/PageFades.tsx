export function PageFades() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-5]">
      <div
        className="absolute inset-0 opacity-90 dark:opacity-85"
        style={{
          background:
            "linear-gradient(to bottom, rgb(var(--bg)) 0%, transparent 16%, transparent 84%, rgb(var(--bg)) 100%)",
        }}
      />
    </div>
  );
}

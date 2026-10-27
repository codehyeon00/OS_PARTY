import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-card-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold">
          <span
            aria-hidden
            className="inline-block h-3 w-3 rounded-full bg-primary"
          />
          OS Party
        </Link>
        <span className="rounded-full border border-card-border px-3 py-1 text-xs text-muted">
          개발 준비 중
        </span>
      </div>
    </header>
  );
}

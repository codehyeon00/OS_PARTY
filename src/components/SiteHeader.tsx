import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav";
import { SoonButton } from "@/components/ui";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-card-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold">
          <span
            aria-hidden
            className="inline-block h-3 w-3 rounded-full bg-primary"
          />
          OS Party
        </Link>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-card hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SoonButton variant="ghost" className="!px-4 !py-1.5">
          로그인
        </SoonButton>
      </div>
    </header>
  );
}

import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav";
import { SoonButton } from "@/components/ui";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-2xl transition-transform duration-150 ease-out-quint active:scale-95"
        >
          <span
            aria-hidden
            className="inline-block h-3.5 w-3.5 rounded-full bg-primary"
          />
          OS Party
        </Link>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative px-3 py-2 text-base text-muted transition-colors duration-150 hover:text-foreground focus-visible:text-foreground after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out-quint hover:after:scale-x-100 focus-visible:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SoonButton variant="ghost" className="!px-4 !py-1.5 !text-sm">
          로그인
        </SoonButton>
      </div>
    </header>
  );
}

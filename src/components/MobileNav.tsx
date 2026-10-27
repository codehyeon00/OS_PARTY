import { NAV_ITEMS } from "@/lib/nav";
import NavIcon from "@/components/NavIcon";

/** 모바일에서만 화면 아래에 고정되는 내비게이션 (md 이상에서는 숨김). */
export default function MobileNav() {
  return (
    <nav
      aria-label="모바일 메뉴"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-card-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] text-muted active:text-primary"
            >
              <NavIcon name={item.icon} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

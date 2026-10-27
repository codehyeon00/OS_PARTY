import { NAV_ITEMS } from "@/lib/nav";
import NavIcon from "@/components/NavIcon";

/** 모바일에서만 화면 아래에 고정되는 내비게이션 (md 이상에서는 숨김). */
export default function MobileNav() {
  return (
    <nav
      aria-label="모바일 메뉴"
      className="fixed inset-x-0 bottom-0 z-30 bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="group flex flex-col items-center gap-1 py-3 text-xs text-muted transition-colors duration-150 active:text-primary"
            >
              <span className="transition-transform duration-100 ease-out group-active:scale-90">
                <NavIcon name={item.icon} />
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

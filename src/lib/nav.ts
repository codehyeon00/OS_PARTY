// 상단 메뉴와 모바일 하단 내비게이션이 함께 쓰는 메뉴 목록.
// 아직 별도 페이지가 없어서, 홈 화면 안의 각 영역(#id)으로 이동합니다.
export const NAV_ITEMS = [
  { href: "#parties", label: "파티", icon: "party" },
  { href: "#tiers", label: "티어", icon: "tier" },
  { href: "#balance", label: "밸런싱", icon: "balance" },
  { href: "#friends", label: "친구", icon: "friends" },
  { href: "#matches", label: "기록", icon: "history" },
] as const;

export type NavIcon = (typeof NAV_ITEMS)[number]["icon"];

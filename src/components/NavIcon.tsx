import type { NavIcon as NavIconName } from "@/lib/nav";

const PATHS: Record<NavIconName, string> = {
  party: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  tier: "M7 4h10v4a5 5 0 0 1-10 0V4Zm5 9v4m-4 3h8",
  balance: "M12 4v16M5 8h14M5 8l-2 6h4L5 8Zm14 0-2 6h4l-2-6Z",
  friends: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 8a6 6 0 0 1 12 0m1-8a3 3 0 1 0 0-6m3 14a6 6 0 0 0-4-5.6",
  history: "M4 12a8 8 0 1 0 3-6.2M4 4v4h4m4 0v5l3 2",
};

export default function NavIcon({ name }: { name: NavIconName }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

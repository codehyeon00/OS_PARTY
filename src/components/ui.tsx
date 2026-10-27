import type { ReactNode } from "react";

/** 홈 화면의 기본 카드. 색·둥근 모서리는 globals.css 의 토큰을 사용합니다. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-card border border-card-border bg-card p-5 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

/** 미리보기용 가짜 데이터가 표시되는 곳에 붙이는 "예시" 표시. */
export function PreviewTag() {
  return (
    <span
      title="화면 미리보기용 예시 데이터입니다. 실제 정보가 아닙니다."
      className="rounded-full border border-dashed border-secondary/60 px-2 py-0.5 text-[11px] font-medium text-secondary"
    >
      예시 데이터
    </span>
  );
}

/** 각 영역의 제목줄. 예시 데이터를 쓰는 영역은 preview 를 켭니다. */
export function SectionHeader({
  id,
  title,
  desc,
  preview = false,
}: {
  id: string;
  title: string;
  desc?: string;
  preview?: boolean;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
      <h2 id={id} className="text-xl font-bold">
        {title}
      </h2>
      {preview && <PreviewTag />}
      {desc && <p className="w-full text-sm text-muted">{desc}</p>}
    </div>
  );
}

/**
 * 아직 구현되지 않은 기능의 버튼. 눌러도 아무 일도 일어나지 않으며
 * 화면에도 "준비 중"이라고 표시합니다.
 */
export function SoonButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const look =
    variant === "primary"
      ? "bg-primary text-background"
      : "border border-card-border text-foreground";
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className={`inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold opacity-60 ${look} ${className}`}
    >
      {children}
      <span className="rounded-full bg-black/25 px-2 py-0.5 text-[11px] font-medium text-foreground">
        준비 중
      </span>
    </button>
  );
}

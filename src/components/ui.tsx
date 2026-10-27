import type { ReactNode } from "react";

/** 미리보기용 가짜 데이터가 표시되는 곳에 붙이는 "예시" 표시. 주변 글자색을 따라갑니다. */
export function PreviewTag() {
  return (
    <span
      title="화면 미리보기용 예시 데이터입니다. 실제 정보가 아닙니다."
      className="rounded-full border border-current/40 px-2.5 py-0.5 text-xs font-medium opacity-70"
    >
      예시
    </span>
  );
}

/** 각 영역의 큰 제목줄. 예시 데이터를 쓰는 영역은 preview 를 켭니다. */
export function SectionHeader({
  id,
  title,
  note,
  preview = false,
}: {
  id: string;
  title: string;
  note?: string;
  preview?: boolean;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
      <h2 id={id} className="font-display text-3xl font-normal sm:text-4xl">
        {title}
      </h2>
      {preview && <PreviewTag />}
      {note && <p className="w-full text-base opacity-70">{note}</p>}
    </div>
  );
}

/**
 * 아직 구현되지 않은 기능의 버튼. 눌러도 아무 일도 일어나지 않으며
 * 화면에도 "준비 중"이라고 표시합니다.
 * - primary: 어두운 배경 위의 주황 버튼 / dark: 주황 패널 위의 차콜 버튼 / ghost: 테두리 버튼
 */
export function SoonButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "dark" | "ghost";
  className?: string;
}) {
  const look = {
    primary: "bg-primary text-background",
    dark: "bg-background text-foreground",
    ghost: "border border-current/30",
  }[variant];
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className={`inline-flex cursor-not-allowed items-center justify-center gap-2.5 rounded-full px-6 py-3 text-base font-bold ${look} ${className}`}
    >
      {children}
      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-background">
        준비 중
      </span>
    </button>
  );
}

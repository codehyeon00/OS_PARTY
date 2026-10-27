import { SectionHeader } from "@/components/ui";
import { PREVIEW_TIERS, TIER_BG_CLASS, TIER_LABEL } from "@/data/preview";

/** 아이보리 띠 위에 티어 색을 그대로 채운 블록으로 티어를 구분합니다. */
export default function TierCards() {
  return (
    <section
      aria-labelledby="tiers"
      className="bg-foreground py-16 text-background sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          id="tiers"
          title="게임별 티어"
          note="게임마다 내 실력이 어디쯤인지 색으로 한눈에 봐요."
          preview
        />
        <ul className="grid gap-4 sm:grid-cols-3">
          {PREVIEW_TIERS.map((t) => (
            <li
              key={t.id}
              className={`rounded-3xl p-6 text-background ${TIER_BG_CLASS[t.tier]}`}
            >
              <p className="text-base font-medium">{t.game}</p>
              <p className="mt-6 font-display text-4xl font-normal">
                {TIER_LABEL[t.tier]} {t.division}
              </p>
              <div
                role="progressbar"
                aria-label={`${t.game} 다음 티어까지 진행도`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={t.progress}
                className="mt-5 h-2 overflow-hidden rounded-full bg-background/20"
              >
                <div
                  className="grow-x h-full rounded-full bg-background"
                  style={{ width: `${t.progress}%` }}
                />
              </div>
              <p className="mt-2 flex justify-between text-sm font-medium">
                <span>다음 티어까지 {t.progress}%</span>
                <span>승률 {t.winRate}%</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

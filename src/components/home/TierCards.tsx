import { Card, SectionHeader } from "@/components/ui";
import {
  PREVIEW_TIERS,
  TIER_BAR_CLASS,
  TIER_LABEL,
  TIER_TEXT_CLASS,
} from "@/data/preview";

export default function TierCards() {
  return (
    <section aria-labelledby="tiers">
      <SectionHeader
        id="tiers"
        title="게임별 티어"
        desc="게임마다 내 티어를 한눈에 확인해요."
        preview
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {PREVIEW_TIERS.map((t) => (
          <Card key={t.id}>
            <p className="text-xs text-muted">{t.game}</p>
            <p className={`mt-2 text-2xl font-extrabold ${TIER_TEXT_CLASS[t.tier]}`}>
              {TIER_LABEL[t.tier]} {t.division}
            </p>
            <div className="mt-4">
              <div className="mb-1.5 flex justify-between text-xs text-muted">
                <span>다음 티어까지</span>
                <span>{t.progress}%</span>
              </div>
              <div
                role="progressbar"
                aria-label={`${t.game} 다음 티어까지 진행도`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={t.progress}
                className="h-2 overflow-hidden rounded-full bg-surface"
              >
                <div
                  className={`h-full rounded-full ${TIER_BAR_CLASS[t.tier]}`}
                  style={{ width: `${t.progress}%` }}
                />
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">
              승률 <span className="font-bold text-foreground">{t.winRate}%</span>
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

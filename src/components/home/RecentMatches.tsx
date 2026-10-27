import { Card, SectionHeader } from "@/components/ui";
import { PREVIEW_MATCHES } from "@/data/preview";

export default function RecentMatches() {
  return (
    <section aria-labelledby="matches">
      <SectionHeader id="matches" title="최근 경기 기록" preview />
      <Card className="!p-3 sm:!p-4">
        <ul className="divide-y divide-card-border">
          {PREVIEW_MATCHES.map((m) => {
            const win = m.result === "win";
            return (
              <li key={m.id} className="flex items-center gap-3 px-2 py-3">
                <span
                  className={`w-10 shrink-0 rounded-lg py-1 text-center text-xs font-bold ${
                    win ? "bg-primary/20 text-secondary" : "bg-surface text-muted"
                  }`}
                >
                  {win ? "승" : "패"}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{m.game}</p>
                  <p className="text-xs text-muted">{m.when}</p>
                </div>
                <span className="text-sm text-muted">{m.score}</span>
              </li>
            );
          })}
        </ul>
      </Card>
    </section>
  );
}

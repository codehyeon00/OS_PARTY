import { SectionHeader } from "@/components/ui";
import { PREVIEW_MATCHES } from "@/data/preview";

export default function RecentMatches() {
  return (
    <section aria-labelledby="matches">
      <SectionHeader id="matches" title="최근 경기" preview />
      <ul className="divide-y divide-foreground/10">
        {PREVIEW_MATCHES.map((m) => {
          const win = m.result === "win";
          return (
            <li key={m.id} className="flex items-center gap-4 py-4">
              <span
                className={`w-12 shrink-0 rounded-full py-1 text-center text-base font-bold ${
                  win ? "bg-secondary text-background" : "bg-surface text-muted"
                }`}
              >
                {win ? "승" : "패"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-lg font-medium">{m.game}</p>
                <p className="text-base text-muted">{m.when}</p>
              </div>
              <span className="text-lg">{m.score}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

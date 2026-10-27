import { SectionHeader, SoonButton } from "@/components/ui";
import {
  PREVIEW_BALANCE,
  TIER_BG_CLASS,
  TIER_LABEL,
  type PreviewTeamMember,
} from "@/data/preview";

function Team({ name, members }: { name: string; members: PreviewTeamMember[] }) {
  return (
    <div>
      <p className="font-display text-2xl font-normal text-secondary">{name}</p>
      <ul className="mt-3 space-y-3">
        {members.map((m) => (
          <li key={m.name} className="flex items-center gap-2.5">
            <span
              aria-hidden
              className={`h-3.5 w-3.5 shrink-0 rounded-sm ${TIER_BG_CLASS[m.tier]}`}
            />
            <span className="text-base leading-tight">
              {m.name}
              <span className="block text-sm text-muted">{TIER_LABEL[m.tier]}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TeamBalance() {
  const { teamA, teamB, balanceScore } = PREVIEW_BALANCE;

  return (
    <section aria-labelledby="balance" className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div>
        <SectionHeader id="balance" title="팀 밸런싱" preview />
        <p className="max-w-md text-xl leading-relaxed">
          파티원의 티어를 보고 두 팀의 실력이 비슷해지게 나눠 주는 기능이에요.
          아직 만드는 중이고, 오른쪽은 완성됐을 때의 모습을 보여주는 예시예요.
        </p>
        <div className="mt-8">
          <SoonButton>팀 밸런싱 시작</SoonButton>
        </div>
      </div>

      <div className="rounded-3xl bg-card p-6 sm:p-8">
        <div className="grid grid-cols-2 gap-6">
          <Team name="A팀" members={teamA} />
          <Team name="B팀" members={teamB} />
        </div>
        <div className="mt-8">
          <div className="mb-2 flex justify-between text-base">
            <span>예상 균형도</span>
            <span className="font-bold text-secondary">{balanceScore}점</span>
          </div>
          <div
            role="progressbar"
            aria-label="예상 균형도"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={balanceScore}
            className="h-3 overflow-hidden rounded-full bg-foreground/15"
          >
            <div
              className="grow-x h-full rounded-full bg-secondary"
              style={{ width: `${balanceScore}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

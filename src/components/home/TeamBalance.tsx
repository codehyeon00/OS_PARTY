import { Card, SectionHeader, SoonButton } from "@/components/ui";
import {
  PREVIEW_BALANCE,
  TIER_LABEL,
  TIER_TEXT_CLASS,
  type PreviewTeamMember,
} from "@/data/preview";

function Team({ name, members }: { name: string; members: PreviewTeamMember[] }) {
  return (
    <div className="rounded-2xl bg-surface p-4">
      <p className="text-sm font-bold text-secondary">{name}</p>
      <ul className="mt-2 space-y-1.5">
        {members.map((m) => (
          <li key={m.name} className="flex items-center justify-between text-sm">
            <span>{m.name}</span>
            <span className={`text-xs font-medium ${TIER_TEXT_CLASS[m.tier]}`}>
              {TIER_LABEL[m.tier]}
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
    <section aria-labelledby="balance">
      <SectionHeader id="balance" title="팀 밸런싱" preview />
      <Card className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold leading-snug">
              실력 차이를 줄여
              <br />
              공정한 팀을 나눠 드려요
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              파티원의 티어를 바탕으로 두 팀의 전력이 비슷해지도록 자동으로
              나누는 기능을 준비하고 있어요. 오른쪽 화면은 완성 후의 모습을
              보여주는 예시입니다.
            </p>
          </div>
          <div>
            <SoonButton>팀 밸런싱 시작</SoonButton>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-3">
            <Team name="A팀" members={teamA} />
            <Team name="B팀" members={teamB} />
          </div>
          <div className="mt-4">
            <div className="mb-1.5 flex justify-between text-xs text-muted">
              <span>예상 균형도</span>
              <span>{balanceScore}점</span>
            </div>
            <div
              role="progressbar"
              aria-label="예상 균형도"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={balanceScore}
              className="h-2 overflow-hidden rounded-full bg-surface"
            >
              <div
                className="h-full rounded-full bg-secondary"
                style={{ width: `${balanceScore}%` }}
              />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

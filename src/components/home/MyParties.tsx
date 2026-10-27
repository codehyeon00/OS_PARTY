import { Card, SectionHeader, SoonButton } from "@/components/ui";
import { PREVIEW_PARTIES } from "@/data/preview";

export default function MyParties() {
  return (
    <section aria-labelledby="parties">
      <SectionHeader id="parties" title="내 파티" preview />
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="flex flex-col justify-between gap-6 border-primary/40 bg-gradient-to-br from-card to-surface sm:col-span-2">
          <div>
            <p className="text-sm font-medium text-secondary">NEW PARTY</p>
            <h3 className="mt-1 text-2xl font-extrabold">새 파티 만들기</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              게임과 시간, 인원을 정하면 친구들에게 초대를 보낼 수 있어요.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <SoonButton>파티 만들기</SoonButton>
            <SoonButton variant="ghost">초대 코드로 참가</SoonButton>
          </div>
        </Card>

        {PREVIEW_PARTIES.map((party) => (
          <Card key={party.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-secondary">{party.game}</p>
                <h3 className="mt-1 font-bold">{party.title}</h3>
              </div>
              <span className="shrink-0 rounded-full bg-surface px-3 py-1 text-xs text-muted">
                {party.time}
              </span>
            </div>
            <div className="mt-4">
              <div className="mb-1.5 flex justify-between text-xs text-muted">
                <span>모집 현황</span>
                <span>
                  {party.members} / {party.capacity}명
                </span>
              </div>
              <div
                role="progressbar"
                aria-label="모집 현황"
                aria-valuemin={0}
                aria-valuemax={party.capacity}
                aria-valuenow={party.members}
                className="h-2 overflow-hidden rounded-full bg-surface"
              >
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${(party.members / party.capacity) * 100}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

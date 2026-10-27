import { SectionHeader } from "@/components/ui";
import { PREVIEW_PARTIES } from "@/data/preview";

/** 모집 인원을 점으로 보여줍니다 (채워진 점 = 참가한 인원). */
function Seats({ members, capacity }: { members: number; capacity: number }) {
  return (
    <div
      role="img"
      aria-label={`${capacity}명 중 ${members}명 참가`}
      className="flex items-center gap-1.5"
    >
      {Array.from({ length: capacity }, (_, i) => (
        <span
          key={i}
          aria-hidden
          className={`h-3.5 w-3.5 rounded-full ${i < members ? "bg-primary" : "bg-foreground/20"}`}
        />
      ))}
    </div>
  );
}

export default function MyParties() {
  return (
    <section aria-labelledby="parties">
      <SectionHeader id="parties" title="내 파티" preview />
      <ul className="divide-y divide-foreground/10">
        {PREVIEW_PARTIES.map((party) => (
          <li
            key={party.id}
            className="grid items-center gap-x-6 gap-y-2 py-5 sm:grid-cols-[9rem_1fr_auto]"
          >
            <p className="font-display text-2xl font-normal text-secondary">
              {party.time}
            </p>
            <div>
              <p className="text-xl font-bold">{party.title}</p>
              <p className="text-base text-muted">{party.game}</p>
            </div>
            <Seats members={party.members} capacity={party.capacity} />
          </li>
        ))}
      </ul>
    </section>
  );
}

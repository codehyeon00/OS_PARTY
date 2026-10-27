// 홈 화면. 아직 실제 기능은 없고, 디자인 시스템을 보여주는 뼈대입니다.
const upcoming = [
  {
    title: "파티 만들기",
    desc: "게임, 인원, 시간을 정해 나만의 파티를 열어요.",
  },
  {
    title: "파티 찾기",
    desc: "원하는 게임의 파티를 골라 바로 참가해요.",
  },
  {
    title: "실시간 소통",
    desc: "파티원과 실시간으로 이야기하고 일정을 맞춰요.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <section className="max-w-2xl">
        <p className="mb-4 text-sm font-medium text-secondary">GAME PARTY PLATFORM</p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          함께할 때 더 즐거운
          <br />
          <span className="text-primary">OS Party</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          게임 파티를 만들고, 찾고, 관리하는 공간. 지금은 기본 뼈대만 준비된
          상태이며, 아래 기능들은 앞으로 하나씩 만들어 갈 예정입니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            disabled
            className="rounded-full bg-primary px-6 py-3 font-bold text-background opacity-60"
          >
            파티 만들기 (준비 중)
          </button>
          <button
            type="button"
            disabled
            className="rounded-full border border-card-border px-6 py-3 font-bold text-foreground opacity-60"
          >
            파티 둘러보기 (준비 중)
          </button>
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
        {upcoming.map((item) => (
          <article
            key={item.title}
            className="rounded-card border border-card-border bg-card p-6"
          >
            <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-secondary">
              예정
            </span>
            <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

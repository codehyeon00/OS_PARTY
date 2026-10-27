import MyParties from "@/components/home/MyParties";
import TierCards from "@/components/home/TierCards";
import TeamBalance from "@/components/home/TeamBalance";
import FriendList from "@/components/home/FriendList";
import RecentMatches from "@/components/home/RecentMatches";

// 홈 화면. 모든 수치와 이름은 src/data/preview.ts 의 예시 데이터입니다.
// 모바일에서는 위에서 아래로 한 줄로, PC(lg)에서는 왼쪽 넓은 열 + 오른쪽 사이드 열로 보입니다.
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
      <div
        role="note"
        className="mb-8 rounded-2xl border border-dashed border-secondary/50 bg-card px-4 py-3 text-sm text-muted"
      >
        <span className="font-bold text-secondary">미리보기 화면</span> · 로그인과
        데이터베이스는 아직 연결되지 않았습니다. 화면의 이름·수치·기록은 모두
        디자인 확인용 예시이며, 준비 중 표시가 있는 버튼은 아직 동작하지 않습니다.
      </div>

      <h1 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
        오늘도 <span className="text-primary">파티</span> 한판 어때요?
      </h1>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <MyParties />
          <TierCards />
          <TeamBalance />
        </div>
        <div className="space-y-10">
          <FriendList />
          <RecentMatches />
        </div>
      </div>
    </div>
  );
}

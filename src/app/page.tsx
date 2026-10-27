import Hero from "@/components/home/Hero";
import MyParties from "@/components/home/MyParties";
import TierCards from "@/components/home/TierCards";
import TeamBalance from "@/components/home/TeamBalance";
import FriendList from "@/components/home/FriendList";
import RecentMatches from "@/components/home/RecentMatches";

// 홈 화면. 모든 수치와 이름은 src/data/preview.ts 의 예시 데이터입니다.
// 색 면이 번갈아 나옵니다: 주황 패널(Hero) → 차콜(파티) → 아이보리 띠(티어) → 차콜(밸런싱, 친구, 기록)
export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-4 sm:pt-6">
        <p
          role="note"
          className="mb-4 text-sm text-muted"
        >
          미리보기 화면이에요. 로그인과 데이터베이스는 아직 없고, 보이는 이름과
          기록은 모두 예시예요. 준비 중이라고 적힌 버튼은 아직 눌러도 동작하지
          않아요.
        </p>
        <Hero />
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-16 sm:pt-24">
        <MyParties />
      </div>

      <div className="mt-16 sm:mt-24">
        <TierCards />
      </div>

      <div className="mx-auto max-w-6xl space-y-20 px-5 py-16 sm:space-y-28 sm:py-24">
        <TeamBalance />
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <FriendList />
          <RecentMatches />
        </div>
      </div>
    </>
  );
}

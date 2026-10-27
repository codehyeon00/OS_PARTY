/*
  ⚠️ 미리보기용 예시 데이터 (PREVIEW ONLY)

  이 파일의 모든 값은 화면 디자인을 보여주기 위해 직접 지어낸 가짜 데이터입니다.
  실제 사용자, 실제 게임 계정, 실제 경기 결과가 아닙니다.
  Supabase 등 실제 데이터를 연결하면 이 파일을 지우고 실제 조회 코드로 바꿉니다.
  (화면에는 "예시" 표시가 함께 나옵니다 — src/components/ui.tsx 의 PreviewTag)
*/

export type PreviewParty = {
  id: string;
  game: string;
  title: string;
  time: string;
  members: number;
  capacity: number;
};

export const PREVIEW_PARTIES: PreviewParty[] = [
  { id: "p1", game: "배틀 아레나", title: "금요일 밤 랭크 파티", time: "오늘 21:00", members: 4, capacity: 5 },
  { id: "p2", game: "던전 크롤", title: "신규 던전 도전", time: "내일 20:30", members: 2, capacity: 4 },
  { id: "p3", game: "레이싱 리그", title: "주말 친선전", time: "토 15:00", members: 6, capacity: 8 },
];

export type FriendStatus = "online" | "playing" | "offline";

export type PreviewFriend = {
  id: string;
  name: string;
  status: FriendStatus;
  detail: string;
};

export const FRIEND_STATUS_LABEL: Record<FriendStatus, string> = {
  online: "온라인",
  playing: "게임 중",
  offline: "오프라인",
};

export const PREVIEW_FRIENDS: PreviewFriend[] = [
  { id: "f1", name: "샘플유저 가온", status: "playing", detail: "배틀 아레나" },
  { id: "f2", name: "샘플유저 나래", status: "online", detail: "대기 중" },
  { id: "f3", name: "샘플유저 다솜", status: "online", detail: "대기 중" },
  { id: "f4", name: "샘플유저 라온", status: "offline", detail: "2시간 전" },
  { id: "f5", name: "샘플유저 마루", status: "offline", detail: "어제" },
];

export type Tier = "bronze" | "silver" | "gold" | "platinum" | "diamond";

export const TIER_LABEL: Record<Tier, string> = {
  bronze: "브론즈",
  silver: "실버",
  gold: "골드",
  platinum: "플래티넘",
  diamond: "다이아",
};

// Tailwind 는 클래스 이름을 통째로 적어 두어야 인식하므로 전체 이름으로 적습니다.
export const TIER_TEXT_CLASS: Record<Tier, string> = {
  bronze: "text-tier-bronze",
  silver: "text-tier-silver",
  gold: "text-tier-gold",
  platinum: "text-tier-platinum",
  diamond: "text-tier-diamond",
};

export const TIER_BAR_CLASS: Record<Tier, string> = {
  bronze: "bg-tier-bronze",
  silver: "bg-tier-silver",
  gold: "bg-tier-gold",
  platinum: "bg-tier-platinum",
  diamond: "bg-tier-diamond",
};

export type PreviewTierCard = {
  id: string;
  game: string;
  tier: Tier;
  division: number;
  progress: number; // 0~100, 다음 티어까지 진행도
  winRate: number;
};

export const PREVIEW_TIERS: PreviewTierCard[] = [
  { id: "t1", game: "배틀 아레나", tier: "platinum", division: 2, progress: 68, winRate: 54 },
  { id: "t2", game: "던전 크롤", tier: "gold", division: 1, progress: 35, winRate: 49 },
  { id: "t3", game: "레이싱 리그", tier: "diamond", division: 4, progress: 12, winRate: 58 },
];

export type PreviewTeamMember = { name: string; tier: Tier };

export const PREVIEW_BALANCE = {
  teamA: [
    { name: "샘플 가", tier: "diamond" },
    { name: "샘플 나", tier: "gold" },
    { name: "샘플 다", tier: "silver" },
  ] satisfies PreviewTeamMember[],
  teamB: [
    { name: "샘플 라", tier: "platinum" },
    { name: "샘플 마", tier: "platinum" },
    { name: "샘플 바", tier: "silver" },
  ] satisfies PreviewTeamMember[],
  // 두 팀 전력 차이를 보여주는 샘플 값 (0~100, 100에 가까울수록 균형)
  balanceScore: 92,
};

export type PreviewMatch = {
  id: string;
  game: string;
  result: "win" | "lose";
  score: string;
  when: string;
};

export const PREVIEW_MATCHES: PreviewMatch[] = [
  { id: "m1", game: "배틀 아레나", result: "win", score: "13 : 9", when: "어제 22:10" },
  { id: "m2", game: "배틀 아레나", result: "lose", score: "7 : 13", when: "어제 21:20" },
  { id: "m3", game: "레이싱 리그", result: "win", score: "1위 / 8명", when: "월 19:40" },
  { id: "m4", game: "던전 크롤", result: "win", score: "클리어", when: "일 16:05" },
];

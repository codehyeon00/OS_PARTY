import { Card, SectionHeader, SoonButton } from "@/components/ui";
import {
  FRIEND_STATUS_LABEL,
  PREVIEW_FRIENDS,
  type FriendStatus,
} from "@/data/preview";

const DOT_CLASS: Record<FriendStatus, string> = {
  online: "bg-online",
  playing: "bg-primary",
  offline: "bg-muted/50",
};

export default function FriendList() {
  const onlineCount = PREVIEW_FRIENDS.filter((f) => f.status !== "offline").length;

  return (
    <section aria-labelledby="friends">
      <SectionHeader
        id="friends"
        title="친구"
        desc={`접속 중 ${onlineCount}명 / 전체 ${PREVIEW_FRIENDS.length}명`}
        preview
      />
      <Card className="!p-3 sm:!p-4">
        <ul className="divide-y divide-card-border">
          {PREVIEW_FRIENDS.map((friend) => (
            <li key={friend.id} className="flex items-center gap-3 px-2 py-3">
              <div className="relative">
                <span
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-sm font-bold text-secondary"
                >
                  {friend.name.slice(-2, -1)}
                </span>
                <span
                  aria-hidden
                  className={`absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full border-2 border-card ${DOT_CLASS[friend.status]}`}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{friend.name}</p>
                <p className="truncate text-xs text-muted">
                  {FRIEND_STATUS_LABEL[friend.status]} · {friend.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="px-2 pt-3">
          <SoonButton variant="ghost" className="w-full">
            친구 추가
          </SoonButton>
        </div>
      </Card>
    </section>
  );
}

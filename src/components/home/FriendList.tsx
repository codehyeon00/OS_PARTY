import { SectionHeader, SoonButton } from "@/components/ui";
import {
  FRIEND_STATUS_LABEL,
  PREVIEW_FRIENDS,
  type FriendStatus,
} from "@/data/preview";

const DOT_CLASS: Record<FriendStatus, string> = {
  online: "bg-online",
  playing: "bg-primary",
  offline: "bg-muted/60",
};

export default function FriendList() {
  const onlineCount = PREVIEW_FRIENDS.filter((f) => f.status !== "offline").length;

  return (
    <section aria-labelledby="friends">
      <SectionHeader
        id="friends"
        title="친구"
        note={`지금 ${onlineCount}명이 접속 중이에요`}
        preview
      />
      <ul className="space-y-1">
        {PREVIEW_FRIENDS.map((friend) => (
          <li key={friend.id} className="flex items-center gap-4 py-2">
            <div className="relative shrink-0">
              <span
                aria-hidden
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-surface font-display text-xl ${
                  friend.status === "offline" ? "text-muted" : "text-secondary"
                }`}
              >
                {friend.initial}
              </span>
              <span
                aria-hidden
                className={`absolute -right-0.5 -bottom-0.5 h-4 w-4 rounded-full border-[3px] border-background ${DOT_CLASS[friend.status]}`}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg font-medium">{friend.name}</p>
              <p className="truncate text-base text-muted">
                {FRIEND_STATUS_LABEL[friend.status]}, {friend.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <SoonButton variant="ghost">친구 추가</SoonButton>
      </div>
    </section>
  );
}

"use client";

import { useState, type CSSProperties } from "react";
import { SoonButton } from "@/components/ui";
import {
  PREVIEW_GAMES,
  PREVIEW_TIERS,
  TIER_BG_CLASS,
  TIER_LABEL,
} from "@/data/preview";

// 등장 순서를 정하는 값(--i). 첫 화면에서 한 번만 순서대로 나타납니다.
const order = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * 첫 화면. 게임을 고르는 동작은 실제로 화면에서 바뀌지만,
 * 파티를 만드는 기능은 아직 없어서 버튼은 "준비 중"으로 막아 두었습니다.
 */
export default function Hero() {
  const [selectedId, setSelectedId] = useState(PREVIEW_GAMES[0].id);
  const selected = PREVIEW_GAMES.find((g) => g.id === selectedId)!;

  return (
    <section
      aria-labelledby="hero-title"
      className="grid gap-10 rounded-[2rem] bg-primary p-6 text-background sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-14"
    >
      <div className="lg:col-span-5">
        <h1
          id="hero-title"
          className="rise font-display text-5xl font-normal leading-[1.1] sm:text-6xl"
          style={order(0)}
        >
          어떤 게임으로
          <br />
          모일까요?
        </h1>
        <p className="rise mt-5 max-w-sm text-lg leading-relaxed" style={order(1)}>
          게임을 고르고 파티를 만들면 친구를 초대하게 될 거예요. 지금은
          화면만 미리 볼 수 있어요.
        </p>
        <div className="rise mt-8" style={order(2)}>
          <SoonButton variant="dark" className="w-full sm:w-auto">
            {selected.name} 파티 만들기
          </SoonButton>
        </div>
      </div>

      <div className="lg:col-span-7">
        <p id="game-picker" className="rise mb-3 text-base font-bold" style={order(1)}>
          게임 선택
        </p>
        <div
          role="group"
          aria-labelledby="game-picker"
          className="grid grid-cols-2 gap-3 sm:gap-4"
        >
          {PREVIEW_GAMES.map((game, i) => {
            const active = game.id === selectedId;
            const tier = PREVIEW_TIERS.find((t) => t.game === game.name);
            return (
              <button
                key={game.id}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedId(game.id)}
                style={order(i + 2)}
                className={`rise flex min-h-32 flex-col justify-between rounded-3xl p-4 text-left transition-[transform,background-color,color] duration-200 ease-out-quint active:scale-[0.97] sm:min-h-40 sm:p-5 [@media(hover:hover)]:hover:-translate-y-0.5 ${
                  active
                    ? "bg-background text-foreground"
                    : "bg-background/10 text-background hover:bg-background/20"
                }`}
              >
                <span>
                  <span className="block font-display text-xl font-normal leading-tight sm:text-2xl">
                    {game.name}
                  </span>
                  <span
                    className={`mt-1 block text-sm ${active ? "text-muted" : "opacity-80"}`}
                  >
                    {game.mode}
                  </span>
                </span>
                {tier && (
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <span
                      aria-hidden
                      className={`h-3 w-3 rounded-sm ${TIER_BG_CLASS[tier.tier]}`}
                    />
                    {TIER_LABEL[tier.tier]}
                  </span>
                )}
              </button>
            );
          })}
          <button
            type="button"
            disabled
            aria-disabled="true"
            style={order(5)}
            className="rise flex min-h-32 cursor-not-allowed flex-col justify-between rounded-3xl border-2 border-dashed border-background/40 p-4 text-left sm:min-h-40 sm:p-5"
          >
            <span className="font-display text-xl font-normal leading-tight sm:text-2xl">
              게임 더 보기
            </span>
            <span className="w-fit rounded-full bg-background px-2.5 py-0.5 text-xs font-bold text-foreground">
              준비 중
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

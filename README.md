# OS Party

게임 파티를 만들고, 찾고, 관리하는 웹사이트입니다.

> **현재 상태: 프로젝트 뼈대 단계.** 화면 디자인의 기본 틀만 있고, 로그인·데이터베이스·파티 기능은 아직 구현되지 않았습니다.

## 기술 스택

| 용도 | 기술 |
| --- | --- |
| 프레임워크 | Next.js (App Router) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v4 |
| 백엔드 (예정) | Supabase — 로그인, 데이터베이스, 실시간 기능 |
| 배포 (예정) | Vercel |

## 사전 준비

- [Node.js](https://nodejs.org/) 20.9 이상 (22 버전으로 개발 중)
- npm (Node.js 설치 시 함께 설치됨)
- Git

설치 확인: `node -v`, `npm -v`

## 설치와 실행

```bash
# 1. 저장소 내려받기
git clone https://github.com/codehyeon00/OS_PARTY.git
cd OS_PARTY

# 2. 필요한 패키지 설치
npm install

# 3. 환경변수 파일 만들기 (지금 단계에서는 값을 채우지 않아도 실행됩니다)
cp .env.example .env.local

# 4. 개발 서버 실행
npm run dev
```

브라우저에서 <http://localhost:3000> 을 열면 화면이 보입니다. 서버를 끄려면 터미널에서 `Ctrl + C` 를 누르세요.

## 자주 쓰는 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 (코드를 고치면 화면이 자동 갱신) |
| `npm run build` | 배포용으로 빌드 (오류가 없는지 확인할 때도 사용) |
| `npm run start` | 빌드한 결과물 실행 (`build` 먼저 필요) |
| `npm run lint` | 코드 스타일/오류 검사 |
| `npx tsc --noEmit` | TypeScript 타입 검사 |

## 폴더 구조

```
src/
  app/
    layout.tsx     # 모든 페이지 공통 틀 (폰트, 헤더, 푸터)
    page.tsx       # 홈 화면 ("/" 주소)
    globals.css    # 디자인 토큰(색상) 정의
  components/      # 재사용하는 화면 조각
public/            # 이미지 등 정적 파일
.env.example       # 필요한 환경변수 이름 목록 (값 없음)
```

## 디자인 시스템

색상은 `src/app/globals.css` 의 `:root` 에서 한 번에 관리합니다.

| 이름 | 값 | Tailwind 클래스 예시 |
| --- | --- | --- |
| 배경 | `#11100F` | `bg-background` |
| 카드 | `#201B17` | `bg-card` |
| 강조색 | `#FF7628` | `bg-primary`, `text-primary` |
| 보조 강조색 | `#FFAA55` | `text-secondary` |
| 기본 글자 | `#F6F0E4` | `text-foreground` |
| 보조 글자 | `#A39A8E` | `text-muted` |

카드는 `rounded-card border border-card-border bg-card` 조합으로 만듭니다.

## 환경변수와 보안

- 실제 키는 **`.env.local`** 에만 적습니다. 이 파일은 `.gitignore` 로 보호되어 GitHub 에 올라가지 않습니다.
- `.env.example` 에는 **이름만** 적고 실제 값은 절대 넣지 않습니다.
- `NEXT_PUBLIC_` 으로 시작하는 변수는 브라우저에 공개됩니다. 비밀 키(`SUPABASE_SERVICE_ROLE_KEY` 등)에는 절대 붙이지 마세요.
- 실수로 키를 GitHub 에 올렸다면, 지우는 것만으로는 부족하고 **키를 새로 발급(폐기)** 해야 합니다.

## 앞으로 할 일

- [ ] Supabase 프로젝트 연결
- [ ] 로그인 / 회원가입
- [ ] 파티 만들기 · 목록 · 참가
- [ ] 실시간 기능
- [ ] Vercel 배포

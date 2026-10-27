# 설치된 스킬의 출처

이 폴더의 스킬은 원본 파일을 수정 없이 그대로 복사한 것입니다. (스킬 설치용 외부 도구는 사용하지 않음)
설치 전에 모든 파일을 읽고, 스크립트·실행 파일·외부 통신·숨은 문자가 없는지 검사했습니다.

| 폴더 | 출처 | 커밋 | 라이선스 |
| --- | --- | --- | --- |
| `frontend-design/` | https://github.com/anthropics/skills (`skills/frontend-design`, Anthropic 공식) | `dbd4588f9e1033efb41dad4bef2f7947c8993d44` | Apache-2.0 (`LICENSE.txt`) |
| `animate/` | https://github.com/delphi-ai/animate-skill (커뮤니티, Emil Kowalski 강의 기반) | `71bc617e7000e69b679549f13ea132e696420d6c` | 저장소에 라이선스 파일 없음 — 공개 저장소를 그대로 복사했으므로 외부 공개 배포 전에 재확인 필요 |

업데이트하려면 위 저장소의 최신 파일을 다시 확인(검토)한 뒤 교체하세요.

## 원본과 다른 점

- `animate/examples/` (예제 `.tsx` 8개)는 **설치하지 않았습니다.** 프로젝트의 ESLint가 `.claude/` 안의 `.tsx`까지 검사하는데,
  예제가 아직 설치되지 않은 `framer-motion` 등을 가정하고 있어 `npm run lint` 오류가 나기 때문입니다.
  `animate/SKILL.md` 안의 "examples/ 를 읽으라"는 안내는 따라서 동작하지 않습니다(나머지 내용은 정상).
  필요해지면 ESLint 설정에 `.claude/**` 무시 규칙을 추가한 뒤 원본 저장소에서 예제를 복사하세요.
- 그 외 파일은 원본과 바이트 단위로 동일합니다.

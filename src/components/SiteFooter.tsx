export default function SiteFooter() {
  return (
    // 모바일에서는 하단 내비게이션에 가려지지 않도록 아래 여백을 넉넉히 둡니다.
    <footer className="border-t border-card-border pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted">
        © {new Date().getFullYear()} OS Party
      </div>
    </footer>
  );
}

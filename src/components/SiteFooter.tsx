export default function SiteFooter() {
  return (
    <footer className="border-t border-card-border">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted">
        © {new Date().getFullYear()} OS Party
      </div>
    </footer>
  );
}
